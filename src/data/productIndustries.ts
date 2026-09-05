export type ProductIndustryRef = {
  industrySlug: string
  industryName: string
  icon: string
  useCase: string
}

export const PRODUCT_INDUSTRIES: Record<string, ProductIndustryRef[]> = {
  pos: [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase: 'Interactive table layout, split checks, and course-by-course station KOT routing.',
    },
    {
      industrySlug: 'cafes',
      industryName: 'Cafes & QSRs',
      icon: 'coffee',
      useCase:
        'Fast-touch counter billing with one-tap beverage modifiers and dynamic UPI checkout.',
    },
    {
      industrySlug: 'bakeries',
      industryName: 'Bakeries',
      icon: 'croissant',
      useCase:
        'Weight-based item calculations (grams/kg) and custom celebration cake advance booking.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Sub-second wallet checkout and verified anti-fraud UPI for high-speed break rushes.',
    },
    {
      industrySlug: 'hotels',
      industryName: 'Hotels & Resorts',
      icon: 'bed-double',
      useCase: 'Multi-outlet venue billing, banquet package orders, and room folio charge posting.',
    },
    {
      industrySlug: 'ice-cream-parlours',
      industryName: 'Ice Cream Parlours',
      icon: 'ice-cream-cone',
      useCase: 'Rapid scoop and topping calculation with live out-of-stock flavor tub toggles.',
    },
  ],

  kds: [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase: 'Directs items to bar, hot line, or pantry with sequential course firing alerts.',
    },
    {
      industrySlug: 'cloud-kitchens',
      industryName: 'Cloud Kitchens',
      icon: 'cloud',
      useCase:
        'Consolidates multi-brand orders on one screen with station prep timers and dispatch tracking.',
    },
    {
      industrySlug: 'cafes',
      industryName: 'Cafes & QSRs',
      icon: 'coffee',
      useCase:
        'Dedicated barista screen showing exact cup sizes, dairy choices, and sweetness levels.',
    },
    {
      industrySlug: 'hotels',
      industryName: 'Hotels & Resorts',
      icon: 'bed-double',
      useCase: 'Coordinates in-room dining tray departure times alongside dining room covers.',
    },
  ],

  'qr-ordering': [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase:
        'Table-side scan allows seated patrons to explore digital menus and re-order drinks.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Students pre-order lunch from lecture halls to collect hot food without waiting in line.',
    },
    {
      industrySlug: 'cafes',
      industryName: 'Cafes & QSRs',
      icon: 'coffee',
      useCase:
        'Sidewalk and counter QR scan bypasses the cash register line during peak morning rushes.',
    },
    {
      industrySlug: 'hotels',
      industryName: 'Hotels & Resorts',
      icon: 'bed-double',
      useCase:
        'Bedside in-room QR menu with pre-tagged room numbers for frictionless guest ordering.',
    },
  ],

  kiosk: [
    {
      industrySlug: 'ice-cream-parlours',
      industryName: 'Ice Cream Parlours',
      icon: 'ice-cream-cone',
      useCase:
        'Visual sundae and cone builder prompts upsells and reduces counter queue wait times.',
    },
    {
      industrySlug: 'food-courts',
      industryName: 'Food Courts',
      icon: 'store',
      useCase:
        'Central ordering kiosk letting patrons browse and buy from multiple stalls in one payment.',
    },
    {
      industrySlug: 'cafes',
      industryName: 'Cafes & QSRs',
      icon: 'coffee',
      useCase: 'Self-ordering terminal for express coffee and grab-and-go pastry pickup.',
    },
  ],

  'token-board': [
    {
      industrySlug: 'food-courts',
      industryName: 'Food Courts',
      icon: 'store',
      useCase:
        'High-visibility TV board calling order tokens across all independent stall vendors.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Directs students to numbered pickup counters to clear crowded dining hall corridors.',
    },
    {
      industrySlug: 'cafes',
      industryName: 'Cafes & QSRs',
      icon: 'coffee',
      useCase: 'Calls beverage tokens clearly so guests step back from the espresso pickup bar.',
    },
    {
      industrySlug: 'cloud-kitchens',
      industryName: 'Cloud Kitchens',
      icon: 'cloud',
      useCase: 'Rider-facing dispatch screen indicating packaged delivery bags ready for pickup.',
    },
  ],

  'vendor-management': [
    {
      industrySlug: 'food-courts',
      industryName: 'Food Courts',
      icon: 'store',
      useCase:
        'Dedicated stall POS logins, master revenue audits, and automated rent/commission settlements.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase: 'Consolidated institutional oversight over meal, snack, and juice stall operators.',
    },
  ],

  business: [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase:
        'Table turnaround speed, hourly cover velocity, and dish-level gross profit margin analysis.',
    },
    {
      industrySlug: 'cloud-kitchens',
      industryName: 'Cloud Kitchens',
      icon: 'cloud',
      useCase:
        'Cross-brand sales benchmarks, order prep duration, and delivery packaging tracking.',
    },
    {
      industrySlug: 'bakeries',
      industryName: 'Bakeries',
      icon: 'croissant',
      useCase:
        'Hourly sales patterns that inform fresh daily batch production and minimize end-of-day waste.',
    },
    {
      industrySlug: 'hotels',
      industryName: 'Hotels & Resorts',
      icon: 'bed-double',
      useCase:
        'Comprehensive property dining revenue reconciliation across all restaurants, bars, and banquets.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Real-time sales volume, peak-rush order trends, and item-wise revenue across canteen counters.',
    },
  ],

  analytics: [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase:
        'Table turnaround speed, hourly cover velocity, and dish-level gross profit margin analysis.',
    },
    {
      industrySlug: 'cloud-kitchens',
      industryName: 'Cloud Kitchens',
      icon: 'cloud',
      useCase:
        'Cross-brand sales benchmarks, order prep duration, and delivery packaging tracking.',
    },
    {
      industrySlug: 'bakeries',
      industryName: 'Bakeries',
      icon: 'croissant',
      useCase:
        'Hourly sales patterns that inform fresh daily batch production and minimize end-of-day waste.',
    },
    {
      industrySlug: 'hotels',
      industryName: 'Hotels & Resorts',
      icon: 'bed-double',
      useCase:
        'Comprehensive property dining revenue reconciliation across all restaurants, bars, and banquets.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Real-time sales volume, peak-rush order trends, and item-wise revenue across canteen counters.',
    },
  ],

  'mobile-app': [
    {
      industrySlug: 'restaurants',
      industryName: 'Restaurants',
      icon: 'utensils-crossed',
      useCase:
        'Captain ordering app allowing waiters to punch table orders directly from their smartphone.',
    },
    {
      industrySlug: 'college-canteens',
      industryName: 'College Canteens',
      icon: 'graduation-cap',
      useCase:
        'Student campus app with digital ID wallet balance, instant top-ups, and pre-ordering.',
    },
  ],
}

export const INDUSTRY_VALUE_PROPS: Record<string, string> = {
  restaurants:
    'Run faster during peak hours with connected billing, kitchen KOT routing, and table management.',
  cafes:
    'Fast counter ordering with beverage modifiers, barista display screens, and pickup token alerts.',
  'cloud-kitchens':
    'Operate virtual brands on one screen with station prep lines and organized rider dispatch.',
  'food-courts':
    'Unified kiosk ordering, multi-vendor settlement ledger, and common TV token pickup boards.',
  'college-canteens':
    'Clear 15-minute lecture breaks with student ID wallets, queue-free ordering, and anti-fraud UPI.',
  hotels:
    'Connect fine dining, banquets, and in-room QR dining with guest room folio charge posting.',
  bakeries: 'Dual piece and weight-scale billing with custom celebration cake advance booking.',
  'ice-cream-parlours':
    'Quick scoop calculations, sundae topping modifiers, and self-order kiosks for evening rushes.',
}

export const MATRIX_COLUMNS = [
  { key: 'pos', label: 'POS Billing' },
  { key: 'kds', label: 'KDS System' },
  { key: 'qr', label: 'QR Ordering' },
  { key: 'kiosk', label: 'Kiosks' },
  { key: 'token', label: 'Token Board' },
  { key: 'vendor', label: 'Multi-Vendor' },
  { key: 'wallet', label: 'Campus Wallets' },
  { key: 'analytics', label: 'Analytics' },
] as const

export const INDUSTRY_CAPABILITIES_MAP: Record<string, string[]> = {
  restaurants: ['POS Billing', 'KDS System', 'QR Ordering', 'Analytics'],
  cafes: ['POS Billing', 'KDS System', 'QR Ordering', 'Token Board'],
  'cloud-kitchens': ['POS Billing', 'KDS System', 'Token Board', 'Analytics'],
  'food-courts': ['POS Billing', 'Kiosks', 'Token Board', 'Multi-Vendor'],
  'college-canteens': ['POS Billing', 'QR Ordering', 'Token Board', 'Campus Wallets'],
  hotels: ['POS Billing', 'KDS System', 'QR Ordering', 'Analytics'],
  bakeries: ['POS Billing', 'KDS System', 'Analytics'],
  'ice-cream-parlours': ['POS Billing', 'Kiosks', 'Token Board', 'Analytics'],
}
