export type PageMetadata = {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

const BASE_URL = 'https://www.kaaty.co.in'
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.jpg`

export const ROUTE_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'Kaaty — One Platform. Every Food Business.',
    description:
      'Kaaty is the all-in-one food-tech platform for POS billing, kitchen operations, QR ordering, kiosks, and analytics. Built for restaurants, cloud kitchens, and food courts.',
    canonical: `${BASE_URL}/`,
    ogTitle: 'Kaaty — One Platform. Every Food Business.',
    ogDescription:
      'The all-in-one food-tech platform for POS billing, kitchen operations, QR ordering, kiosks, and analytics.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/pricing': {
    title: 'Kaaty Pricing — Transparent Plans for Every Food Business',
    description:
      'Compare Kaaty Core, Growth, and Scale plans. Transparent POS billing, KDS, QR menu, and multi-outlet pricing with zero hidden fees.',
    canonical: `${BASE_URL}/pricing`,
    ogTitle: 'Kaaty Pricing — Plans for Every Food Business',
    ogDescription:
      'Transparent pricing for single outlets, high-volume campuses, and enterprise food courts.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/demo': {
    title: 'Book a Free Demo — Kaaty Food-Tech Platform',
    description:
      'Experience Kaaty in action. Request a customized live walkthrough tailored to your college canteen, food court, or restaurant.',
    canonical: `${BASE_URL}/demo`,
    ogTitle: 'See Kaaty in Action — Book a Free Demo',
    ogDescription: 'A live, no-commitment walkthrough tailored to how your food business operates.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/about': {
    title: 'About Kaaty — Operating System for Modern Food Businesses',
    description:
      'Founded to eliminate campus canteen queues and billing chaos, Kaaty now powers high-volume food outlets across India.',
    canonical: `${BASE_URL}/about`,
    ogTitle: 'About Kaaty — The Food-Tech Operating System',
    ogDescription:
      'The story behind Kaaty: built in campus kitchens to streamline fast-paced food operations.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/resources': {
    title: 'Resources & Case Studies — Kaaty Food-Tech',
    description:
      'Guides, deployment playbooks, and campus canteen case studies from food businesses powered by Kaaty.',
    canonical: `${BASE_URL}/resources`,
    ogTitle: 'Resources & Insights — Kaaty',
    ogDescription:
      'Explore real deployment playbooks and customer journeys from operators using Kaaty.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  // Products
  '/products/pos': {
    title: 'Kaaty POS — Lightning-Fast Billing Engine for Peak Hours',
    description:
      'Three-tap order entry, offline continuity, and split-second thermal printing designed for 500+ orders per hour.',
    canonical: `${BASE_URL}/products/pos`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/kds': {
    title: 'Kaaty KDS — Visual Kitchen Display System',
    description:
      'Zero paper lost, color-coded prep timers, station routing, and live bump bars to reduce kitchen order ticket delays.',
    canonical: `${BASE_URL}/products/kds`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/mobile-app': {
    title: 'Kaaty Mobile App — Branded Ordering & Queue Busting',
    description:
      'Allow customers and students to browse menus, order ahead, and receive live pickup notifications from their phone.',
    canonical: `${BASE_URL}/products/mobile-app`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/business': {
    title: 'Kaaty Business App — Real-Time Owner Command Centre',
    description:
      'Live revenue tracking, hourly volume heatmaps, inventory stockout alerts, and multi-outlet performance from your phone.',
    canonical: `${BASE_URL}/products/business`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/vendor': {
    title: 'Kaaty Vendor App — Mobile Billing for Stalls & Counters',
    description:
      'Turn any Android smartphone into a handheld POS terminal with built-in camera barcode and QR scanning.',
    canonical: `${BASE_URL}/products/vendor`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/token-board': {
    title: 'Kaaty Token Board — Visual Order Status Screen',
    description:
      'Full-screen smart TV display showing preparing vs ready orders to keep pickup counters calm and orderly.',
    canonical: `${BASE_URL}/products/token-board`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/qr-ordering': {
    title: 'Kaaty QR Ordering — Dine-In & Self-Service Mobile Menus',
    description:
      'Instant camera scan with no app install required. Boost ticket sizes with photo menus, item modifiers, and instant UPI checkout.',
    canonical: `${BASE_URL}/products/qr-ordering`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/products/kiosk': {
    title: 'Kaaty Kiosk — Self-Ordering Terminals for High-Traffic Outlets',
    description:
      'Cut queue lengths in half with interactive touchscreen ordering kiosks and integrated EDC card & UPI payments.',
    canonical: `${BASE_URL}/products/kiosk`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  // Solutions
  '/solutions/college-canteens': {
    title: 'Kaaty for College Canteens — Campus Food-Tech & Student Wallets',
    description:
      'Built specifically for campus food operations: manage peak rush between classes, multi-stall campus food courts, and prepaid student IDs.',
    canonical: `${BASE_URL}/solutions/college-canteens`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/restaurants': {
    title: 'Kaaty for Restaurants — Dine-in, Takeaway & Delivery in One Screen',
    description:
      'Streamline floor operations with visual table layouts, steward ordering, split bills, and kitchen coordination.',
    canonical: `${BASE_URL}/solutions/restaurants`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/cafes': {
    title: 'Kaaty for Cafes — Quick Service POS & Beverage Modifiers',
    description:
      'Fast counter ordering with milk preferences, beverage temperatures, and customer loyalty tracking.',
    canonical: `${BASE_URL}/solutions/cafes`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/food-courts': {
    title: 'Kaaty for Food Courts — Multi-Vendor Unified Command',
    description:
      'Run multi-brand food courts with centralized kiosks, automated tenant revenue settlements, and common token boards.',
    canonical: `${BASE_URL}/solutions/food-courts`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/cloud-kitchens': {
    title: 'Kaaty for Cloud Kitchens — Multi-Brand Kitchen Aggregation',
    description:
      'Consolidate Swiggy, Zomato, and direct web orders into a unified KDS with automated stock synchronization.',
    canonical: `${BASE_URL}/solutions/cloud-kitchens`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/hotels': {
    title: 'Kaaty for Hotels — In-Room Dining & Banquet Food Operations',
    description:
      'Room-service QR ordering, banquet KOT routing, and multi-kitchen management for hospitality venues.',
    canonical: `${BASE_URL}/solutions/hotels`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/bakeries': {
    title: 'Kaaty for Bakeries — Recipe Costing, Batch Orders & Expiry Tracking',
    description:
      'Specialized bakery retail POS with weight-scale integrations, custom cake advance bookings, and raw ingredient tracking.',
    canonical: `${BASE_URL}/solutions/bakeries`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/solutions/ice-cream-parlours': {
    title: 'Kaaty for Ice Cream Parlours — Speedy Scoop POS & Weight Scales',
    description:
      'Single-tap flavor selection, combo cup modifiers, and automated weight scale integration for quick-service parlours.',
    canonical: `${BASE_URL}/solutions/ice-cream-parlours`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  // Integrations
  '/integrations/easebuzz': {
    title: 'Easebuzz Integration — Payment Gateway for Kaaty',
    description:
      'Automated split payouts, instant refund processing, and dynamic UPI QR billing powered by Easebuzz.',
    canonical: `${BASE_URL}/integrations/easebuzz`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/razorpay': {
    title: 'Razorpay Integration — Kaaty Food-Tech Payments',
    description:
      'Accept credit cards, debit cards, net banking, and UPI payments seamlessly at counter and mobile checkout.',
    canonical: `${BASE_URL}/integrations/razorpay`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/phonepe': {
    title: 'PhonePe Integration — Dynamic QR Soundbox & Payments for Kaaty',
    description:
      'Dynamic on-screen UPI QR codes with real-time soundbox audio payment confirmation directly at the billing desk.',
    canonical: `${BASE_URL}/integrations/phonepe`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/pine-labs': {
    title: 'Pine Labs Integration — EDC Smart POS Hardware for Kaaty',
    description:
      'Sync billing totals directly to Pine Labs Plutus card machines with zero manual amount typing.',
    canonical: `${BASE_URL}/integrations/pine-labs`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/thermal-printer': {
    title: 'Thermal Printer Integration — Kaaty ESC/POS Receipt Printing',
    description:
      'Support for 2-inch and 3-inch USB, Ethernet, and Bluetooth thermal printers for split-second receipt and KOT generation.',
    canonical: `${BASE_URL}/integrations/thermal-printer`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/swiggy': {
    title: 'Swiggy Integration — Two-Way Menu & Order Sync for Kaaty',
    description:
      'Receive Swiggy orders directly in your Kaaty KDS with automated stock marking and rider arrival alerts.',
    canonical: `${BASE_URL}/integrations/swiggy`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/zomato': {
    title: 'Zomato Integration — Direct KDS Order Sync for Kaaty',
    description:
      'Auto-accept Zomato online orders into kitchen tickets without juggling multiple tablets.',
    canonical: `${BASE_URL}/integrations/zomato`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/integrations/ondc': {
    title: 'ONDC Integration — Open Network for Digital Commerce on Kaaty',
    description:
      'List your outlet catalog across buyer apps on the Open Network for Digital Commerce with zero middleman commissions.',
    canonical: `${BASE_URL}/integrations/ondc`,
    ogImage: DEFAULT_OG_IMAGE,
  },
}

export function updatePageMetadata(path: string): void {
  // Normalize path
  const cleanPath = path.split('?')[0].replace(/\/$/, '') || '/'
  const meta = ROUTE_METADATA[cleanPath] || {
    title: 'Kaaty — One Platform. Every Food Business.',
    description:
      'Kaaty is the all-in-one food-tech platform for POS billing, kitchen operations, QR ordering, kiosks, and analytics.',
    canonical: `${BASE_URL}${cleanPath}`,
    ogImage: DEFAULT_OG_IMAGE,
  }

  // Document title
  document.title = meta.title

  // Meta description
  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', meta.description)

  // Canonical link
  let canonicalTag = document.querySelector('link[rel="canonical"]')
  if (!canonicalTag) {
    canonicalTag = document.createElement('link')
    canonicalTag.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalTag)
  }
  canonicalTag.setAttribute('href', meta.canonical)

  // Open Graph
  const ogTitle = meta.ogTitle || meta.title
  const ogDesc = meta.ogDescription || meta.description
  const ogImg = meta.ogImage || DEFAULT_OG_IMAGE

  setMetaProperty('og:title', ogTitle)
  setMetaProperty('og:description', ogDesc)
  setMetaProperty('og:url', meta.canonical)
  setMetaProperty('og:image', ogImg)

  // Twitter
  setMetaName('twitter:title', ogTitle)
  setMetaName('twitter:description', ogDesc)
  setMetaName('twitter:image', ogImg)
}

function setMetaProperty(prop: string, content: string) {
  let tag = document.querySelector(`meta[property="${prop}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', prop)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}
