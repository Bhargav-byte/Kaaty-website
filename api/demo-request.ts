export const config = {
  runtime: 'nodejs',
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const sharedSecret =
    process.env.WORKER_SHARED_SECRET ||
    '2f918161834eda46a40a9fa851ceb11f0441f7be675cea0cd84ace644c79b2cc'
  const convexSiteUrl =
    process.env.VITE_CONVEX_SITE_URL || 'https://savory-crab-961.convex.site'

  try {
    const body = await req.json()

    // Required fields check
    if (!body.name || !body.email || !body.phone || !body.business || !body.type) {
      return new Response(
        JSON.stringify({ error: 'Missing required submission fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Forward securely to Convex HTTP Action with the server secret
    const convexResponse = await fetch(`${convexSiteUrl}/api/submit-demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kaaty-Worker-Secret': sharedSecret,
      },
      body: JSON.stringify(body),
    })

    const data = await convexResponse.json()
    return new Response(JSON.stringify(data), {
      status: convexResponse.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error'
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

