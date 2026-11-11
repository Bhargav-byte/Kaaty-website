import { httpRouter } from 'convex/server'
import { httpAction } from './_generated/server'
import { internal } from './_generated/api'

const http = httpRouter()

/**
 * CORS: Allowed browser origins for preflight.
 *
 * IMPORTANT: Origin is NOT used for POST authentication.
 * Origin is a browser hint only — it can be spoofed by non-browser clients.
 * Authentication for POST is exclusively via X-Kaaty-Worker-Secret.
 */
const CORS_ALLOWED_ORIGINS = [
  'https://kaaty.co.in',
  'https://www.kaaty.co.in',
  'https://kaaty.online',
  'https://www.kaaty.online',
  'http://localhost:5173',
  'http://localhost:3000',
]

function getCorsHeaders(request: Request) {
  const origin = request.headers.get('Origin') || ''
  const isAllowed = CORS_ALLOWED_ORIGINS.includes(origin)
  return {
    // If origin is in the allowed list, echo it back; otherwise send the primary domain.
    // This does NOT grant any write access — it only tells the browser whether to
    // expose the response. POST requests are still gated by X-Kaaty-Worker-Secret.
    'Access-Control-Allow-Origin': isAllowed ? origin : CORS_ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Kaaty-Worker-Secret',
    'Access-Control-Max-Age': '86400',
  }
}

/**
 * CORS Preflight: /api/submit-demo-request OPTIONS
 * Needed so browsers can preflight the POST from the Cloudflare Worker domain.
 * OPTIONS does NOT grant any data access.
 */
http.route({
  path: '/api/submit-demo-request',
  method: 'OPTIONS',
  handler: httpAction(async (_, request) => {
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(request),
    })
  }),
})

/**
 * CORS Preflight: /api/save-partial-demo OPTIONS
 */
http.route({
  path: '/api/save-partial-demo',
  method: 'OPTIONS',
  handler: httpAction(async (_, request) => {
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(request),
    })
  }),
})

/**
 * POST /api/submit-demo-request
 *
 * MANDATORY GATEWAY: Cloudflare Worker only.
 *
 * Authentication: X-Kaaty-Worker-Secret MUST match process.env.WORKER_SHARED_SECRET.
 * Origin/Referer are NOT considered for authentication — only the secret header counts.
 *
 * Flow:
 *   Browser → Cloudflare Worker (Turnstile + rate limit) → here → internalMutation
 */
http.route({
  path: '/api/submit-demo-request',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    const corsHeaders = getCorsHeaders(request)

    // FAIL-CLOSED: Secret is mandatory. Missing secret = 401, no exceptions.
    // Origin header is deliberately NOT checked for authorization.
    const expectedSecret = process.env.WORKER_SHARED_SECRET
    const incomingSecret = request.headers.get('X-Kaaty-Worker-Secret')

    if (!expectedSecret) {
      // Deployment misconfiguration — fail closed
      return new Response(
        JSON.stringify({ error: 'Server misconfiguration: WORKER_SHARED_SECRET is not set' }),
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    if (!incomingSecret || incomingSecret !== expectedSecret) {
      // No secret / wrong secret — always 401, regardless of Origin
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Missing or invalid worker secret' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    try {
      const body = await request.json()
      const id = await ctx.runMutation(internal.demoRequests.submitDemoRequest, {
        id: body.id,
        name: body.name,
        business: body.business,
        phone: body.phone,
        email: body.email,
        type: body.type,
        message: body.message,
        source: body.source || 'Cloudflare Worker Ingress',
      })

      return new Response(JSON.stringify({ success: true, id }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid request'
      return new Response(JSON.stringify({ error: msg }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  }),
})

/**
 * POST /api/save-partial-demo
 *
 * Same security model as submit-demo-request.
 * X-Kaaty-Worker-Secret is mandatory. Origin is not used for auth.
 */
http.route({
  path: '/api/save-partial-demo',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    const corsHeaders = getCorsHeaders(request)

    const expectedSecret = process.env.WORKER_SHARED_SECRET
    const incomingSecret = request.headers.get('X-Kaaty-Worker-Secret')

    if (!expectedSecret) {
      return new Response(
        JSON.stringify({ error: 'Server misconfiguration: WORKER_SHARED_SECRET is not set' }),
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    if (!incomingSecret || incomingSecret !== expectedSecret) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Missing or invalid worker secret' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    try {
      const body = await request.json()
      const id = await ctx.runMutation(internal.demoRequests.savePartial, {
        id: body.id,
        name: body.name,
        business: body.business,
        phone: body.phone,
        email: body.email,
        type: body.type,
        message: body.message,
        source: body.source,
      })

      return new Response(JSON.stringify({ success: true, id }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid request'
      return new Response(JSON.stringify({ error: msg }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  }),
})

export default http

