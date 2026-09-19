/**
 * Cloudflare Worker: Protected Ingress for Sensitive Public Endpoints
 * 
 * Flow:
 * Browser
 *    ↓
 * Cloudflare Worker (Turnstile + Rate limit + Origin check)
 *    ↓
 * Convex HTTP Action (https://<deployment>.convex.site/api/submit-demo-request)
 *    ↓
 * submitDemoRequest mutation
 *    ↓
 * confirmation email (via internalAction)
 */

export interface Env {
  TURNSTILE_SECRET_KEY?: string
  CONVEX_SITE_URL: string // e.g. https://savory-crab-961.convex.site
  WORKER_SHARED_SECRET?: string
}

const ALLOWED_ORIGINS = [
  'https://kaaty.co.in',
  'https://www.kaaty.co.in',
  'https://kaaty.online',
  'https://www.kaaty.online',
  'http://localhost:5173',
]

// In-memory rate limiting map for edge instances (sliding window)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= limit) {
    return false
  }

  entry.count += 1
  return true
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') || ''
    const isAllowedOrigin = ALLOWED_ORIGINS.includes(origin)

    // Handle CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Turnstile-Token',
          'Access-Control-Max-Age': '86400',
        },
      })
    }

    const url = new URL(request.url)

    // Route: Protected Demo Request Ingress
    if (url.pathname === '/api/demo-request' && request.method === 'POST') {
      const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1'

      // 1. Edge Rate Limiting
      if (!checkRateLimit(clientIp, 5, 60000)) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please wait a minute before trying again.' }),
          {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
            },
          }
        )
      }

      try {
        const body = (await request.json()) as {
          turnstileToken?: string
          clientToken?: string
          id?: string
          name: string
          business: string
          phone: string
          email: string
          type: string
          message?: string
          source?: string
        }

        // 2. FAIL-CLOSED Turnstile Verification: Mandatory in production
        if (!env.TURNSTILE_SECRET_KEY) {
          return new Response(
            JSON.stringify({ error: 'Server misconfiguration: Turnstile security is mandatory' }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
              },
            }
          )
        }

        if (!body.turnstileToken) {
          return new Response(
            JSON.stringify({ error: 'Bot verification failed: Turnstile token is required' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
              },
            }
          )
        }

        const turnstileVerify = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              secret: env.TURNSTILE_SECRET_KEY,
              response: body.turnstileToken,
              remoteip: clientIp,
            }),
          }
        )

        const turnstileOutcome = (await turnstileVerify.json()) as { success: boolean }
        if (!turnstileOutcome.success) {
          return new Response(
            JSON.stringify({ error: 'Bot verification failed. Please refresh and try again.' }),
            {
              status: 403,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
              },
            }
          )
        }

        // FAIL-CLOSED: Worker shared secret is mandatory to communicate with Convex
        if (!env.WORKER_SHARED_SECRET) {
          return new Response(
            JSON.stringify({ error: 'Server misconfiguration: Worker shared secret is mandatory' }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
              },
            }
          )
        }

        // 3. Strict Input Validation at the Edge
        if (!body.name || !body.email || !body.phone || !body.business) {
          return new Response(
            JSON.stringify({ error: 'Missing required submission fields' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
              },
            }
          )
        }

        // 4. Forward securely to Convex HTTP Action endpoint on .convex.site
        const convexHttpEndpoint = `${env.CONVEX_SITE_URL}/api/submit-demo-request`
        const convexResponse = await fetch(convexHttpEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(env.WORKER_SHARED_SECRET
              ? { 'X-Kaaty-Worker-Secret': env.WORKER_SHARED_SECRET }
              : {}),
          },
          body: JSON.stringify(body),
        })

        const convexData = await convexResponse.json()
        return new Response(JSON.stringify(convexData), {
          status: convexResponse.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
          },
        })
      } catch (err) {
        console.error('[Worker Error]', err)
        return new Response(JSON.stringify({ error: 'Invalid request payload' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
          },
        })
      }
    }

    // Route: Protected Partial Demo Form Ingress
    if (url.pathname === '/api/demo-partial' && request.method === 'POST') {
      const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1'

      // Edge Rate Limiting: 10 auto-saves per minute per IP
      if (!checkRateLimit(clientIp, 10, 60000)) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please slow down.' }),
          {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
            },
          }
        )
      }

      if (!env.WORKER_SHARED_SECRET) {
        return new Response(
          JSON.stringify({ error: 'Server misconfiguration: Worker secret is mandatory' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
      }

      try {
        const body = await request.json()
        const convexHttpEndpoint = `${env.CONVEX_SITE_URL}/api/save-partial-demo`
        const convexResponse = await fetch(convexHttpEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Kaaty-Worker-Secret': env.WORKER_SHARED_SECRET,
          },
          body: JSON.stringify(body),
        })

        const convexData = await convexResponse.json()
        return new Response(JSON.stringify(convexData), {
          status: convexResponse.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
          },
        })
      } catch (err) {
        console.error('[Worker Partial Error]', err)
        return new Response(JSON.stringify({ error: 'Failed to process partial submission' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0],
          },
        })
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  },
}
