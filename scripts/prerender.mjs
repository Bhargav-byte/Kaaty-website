import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.')
  process.exit(1)
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')

// Import route metadata and JSON-LD generator
const { ROUTE_METADATA, generateJsonLd } = await import('../src/lib/seo.ts')

// Static content snippets for key routes so search bots receive meaningful HTML
const ROUTE_CONTENT = {
  '/': {
    heading: 'The Complete Operating System For Modern Food Businesses',
    subheading:
      'Kaaty unifies POS billing, kitchen operations (KDS), QR ordering, kiosks, and business analytics into a single platform built for speed.',
    cta: 'Book a Free Demo',
  },
  '/pricing': {
    heading: 'Transparent Pricing for Outlets, Campuses & Food Courts',
    subheading:
      'Choose from Core, Growth, and Scale plans. Zero hidden fees, free hardware consultation, and dedicated onboarding.',
    cta: 'Get Started',
  },
  '/demo': {
    heading: 'See Kaaty in Action for Your Food Business',
    subheading:
      'A live, no-commitment walkthrough tailored to how you operate. Request a demo and our specialist team will reach out.',
    cta: 'Submit Demo Request',
  },
  '/about': {
    heading: 'Built in Campus Canteens to Modernize Food Operations',
    subheading:
      'Founded to solve high-volume peak rush queues, Kaaty has evolved into a horizontal F&B operating platform.',
    cta: 'Learn Our Story',
  },
  '/resources': {
    heading: 'Resources, Guides & Food-Tech Playbooks',
    subheading:
      'Discover real-world canteen case studies, peak-hour queue reduction strategies, and F&B operational playbooks.',
    cta: 'Read Journey',
  },
  '/solutions': {
    heading: 'Industry Solutions — Purpose-Built for Every Food Business Model',
    subheading:
      'From multi-station dining rooms to high-rush espresso bars, multi-brand cloud kitchens, and institutional dining halls — explore how Kaaty unifies operations.',
    cta: 'Explore All Solutions',
  },
  '/solutions/college-canteens': {
    heading: 'Kaaty for College Canteens — Campus Smart Food OS',
    subheading:
      'Conquer the 15-minute lecture break rush with zero queue chaos. Eliminate fake screenshot scams, enable cashless student wallets, and manage multi-stall dining.',
    cta: 'Book Canteen Demo',
  },
  '/solutions/restaurants': {
    heading: 'Kaaty for Restaurants — POS, Kitchen & Table Management',
    subheading:
      'Streamline dining operations with interactive table layouts, steward ordering, split bills, and multi-station KOT routing.',
    cta: 'Book Restaurant Demo',
  },
  '/solutions/cafes': {
    heading: 'Kaaty for Cafes & QSRs — Quick Service POS & Modifiers',
    subheading:
      'Fast counter ordering with beverage customization, barista display screens, and order pickup token alerts.',
    cta: 'Book Cafe Demo',
  },
  '/solutions/food-courts': {
    heading: 'Kaaty for Food Courts — Multi-Vendor Unified Command',
    subheading:
      'Run multi-brand food courts with independent stall terminals, centralized kiosks, automated tenant revenue settlements, and common token boards.',
    cta: 'Book Food Court Demo',
  },
  '/solutions/cloud-kitchens': {
    heading: 'Kaaty for Cloud Kitchens — Multi-Brand Kitchen Operations',
    subheading:
      'Operate multiple virtual brands from a single kitchen console. Station-based prep lines, packaging verification, and organized rider dispatch.',
    cta: 'Book Cloud Kitchen Demo',
  },
  '/solutions/hotels': {
    heading: 'Kaaty for Hotels — In-Room Dining & Multi-Outlet Operations',
    subheading:
      'Manage fine dining, pool bars, all-day cafes, banquets, and in-room QR dining with guest room charge postings from one platform.',
    cta: 'Book Hotel Demo',
  },
  '/solutions/bakeries': {
    heading: 'Kaaty for Bakeries — Piece & Weight Billing, Cake Advance Orders',
    subheading:
      'Hybrid counter billing by piece or weight, digital advance cake booking calendar, and fresh daily batch production tracking.',
    cta: 'Book Bakery Demo',
  },
  '/solutions/ice-cream-parlours': {
    heading: 'Kaaty for Ice Cream Parlours — Speedy Scoop POS & Kiosks',
    subheading:
      'Visual scoop and topping modifier builder, live tub stockout toggles, and self-service dessert kiosks for peak evening rushes.',
    cta: 'Book Parlour Demo',
  },
  '/products/pos': {
    heading: 'Kaaty POS — Lightning-Fast Billing Engine for Peak Hours',
    subheading:
      'Three-tap order entry, offline continuity, and split-second thermal printing designed for 500+ orders per hour.',
    cta: 'Explore POS',
  },
  '/products/kds': {
    heading: 'Kaaty KDS — Visual Kitchen Display System',
    subheading:
      'Zero paper lost, color-coded prep timers, station routing, and live bump bars to keep kitchen stations aligned.',
    cta: 'Explore KDS',
  },
  '/integrations/razorpay': {
    heading: 'Razorpay Integration — Seamless Payments for Kaaty',
    subheading:
      'Accept credit cards, debit cards, net banking, and UPI payments seamlessly at counter and mobile checkout.',
    cta: 'Connect Razorpay',
  },
}

let generatedCount = 0

for (const [route, meta] of Object.entries(ROUTE_METADATA)) {
  if (route === '/') continue // already dist/index.html

  let html = templateHtml

  // 1. Update Title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)

  // 2. Update Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`,
  )

  // 3. Update Canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/,
    `<link rel="canonical" href="${meta.canonical}" />`,
  )

  // 4. Update Open Graph tags
  const ogTitle = meta.ogTitle || meta.title
  const ogDesc = meta.ogDescription || meta.description
  const ogImg = meta.ogImage || 'https://www.kaaty.co.in/logo.jpg'

  html = html.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:title" content="${ogTitle}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:url" content="${meta.canonical}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:description" content="${ogDesc}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:image" content="${ogImg}" />`,
  )

  // 5. Update Twitter Card tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:title" content="${ogTitle}" />`,
  )
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:description" content="${ogDesc}" />`,
  )
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImg}" />`,
  )

  // 6. Inject JSON-LD Schema
  const schemas = generateJsonLd(route)
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(schemas)}</script>`
  html = html.replace('</head>', `  ${jsonLdTag}\n</head>`)

  // 7. Inject crawlable semantic fallback markup inside #root
  const content = ROUTE_CONTENT[route]
  if (content) {
    const prerenderMarkup = `
      <div class="prerender-shell" style="padding: 100px 24px; max-width: 1000px; margin: 0 auto; font-family: sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem;">${content.heading}</h1>
        <p style="font-size: 1.2rem; color: #475569; line-height: 1.6; margin-bottom: 2rem;">${content.subheading}</p>
        <a href="/demo" style="display: inline-block; background: #ff6b00; color: #fff; padding: 12px 24px; border-radius: 12px; font-weight: 700; text-decoration: none;">${content.cta}</a>
      </div>`
    html = html.replace('<div id="root"></div>', `<div id="root">${prerenderMarkup}</div>`)
  }

  // Determine output path e.g. /solutions -> dist/solutions/index.html
  const relativeSubPath = route.startsWith('/') ? route.slice(1) : route
  const targetDir = path.join(distDir, relativeSubPath)
  fs.mkdirSync(targetDir, { recursive: true })
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8')
  generatedCount++
}

console.log(`Prerender complete: Generated ${generatedCount} static crawlable HTML pages.`)
