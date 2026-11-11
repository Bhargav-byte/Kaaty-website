export default async function handler(req: any, res?: any) {
  // If invoked with Node.js (req, res)
  if (res && typeof res.status === 'function') {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const sharedSecret =
      process.env.WORKER_SHARED_SECRET ||
      '2f918161834eda46a40a9fa851ceb11f0441f7be675cea0cd84ace644c79b2cc'
    const convexSiteUrl =
      process.env.VITE_CONVEX_SITE_URL || 'https://savory-crab-961.convex.site'

    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

      if (!body || !body.name || !body.email || !body.phone || !body.business || !body.type) {
        return res.status(400).json({ error: 'Missing required submission fields' })
      }

      const convexResponse = await fetch(`${convexSiteUrl}/api/submit-demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kaaty-Worker-Secret': sharedSecret,
        },
        body: JSON.stringify(body),
      })

      const data = await convexResponse.json()
      return res.status(convexResponse.status).json(data)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Server error'
      return res.status(500).json({ error: msg })
    }
  }

  // If invoked with Web Standard Request (Edge runtime)
  const request = req as Request
  if (request.method !== 'POST') {
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
    const body = await request.json()
    if (!body || !body.name || !body.email || !body.phone || !body.business || !body.type) {
      return new Response(
        JSON.stringify({ error: 'Missing required submission fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

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

