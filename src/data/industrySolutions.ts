export type IndustryProductRef = {
  slug: string
  name: string
  icon: string
  why: string
}

export type IndustryPainPoint = {
  title: string
  desc: string
}

export type IndustrySolutionFeature = {
  title: string
  desc: string
  points: string[]
}

export type IndustryWorkflowStep = {
  step: number
  title: string
  desc: string
}

export type IndustryBenefit = {
  label: string
  desc: string
}

export type IndustryFAQ = {
  q: string
  a: string
}

export type IndustrySolution = {
  slug: string
  name: string
  tagline: string
  badge: string
  icon: string
  heroHeadline: string
  heroSub: string
  painPoints: IndustryPainPoint[]
  solutions: IndustrySolutionFeature[]
  recommendedProducts: IndustryProductRef[]
  workflow: IndustryWorkflowStep[]
  benefits: IndustryBenefit[]
  faqs: IndustryFAQ[]
  demoContext: string
}

export const INDUSTRY_SOLUTIONS: Record<string, IndustrySolution> = {
  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants',
    tagline: 'Table layouts, course pacing & kitchen synchronisation',
    badge: 'Dine-In & Casual Dining',
    icon: 'utensils-crossed',
    heroHeadline: 'High-speed dining operations from seating to settlement',
    heroSub:
      'Manage live floor plans, fire multi-station kitchen order tickets (KOTs), and split guest bills seamlessly with zero delay during peak dinner rush.',
    painPoints: [
      {
        title: 'Floor-to-kitchen miscommunication',
        desc: 'Handwritten slips or confusing verbal orders lead to wrong food preparation, delayed courses, and unhappy dining guests.',
      },
      {
        title: 'Slow checkout & bill split friction',
        desc: 'Tables waiting 10+ minutes for separate checks or payment collection stalls table turnover on busy weekend shifts.',
      },
      {
        title: 'Scattered station routing',
        desc: 'Beverages, appetizers, and mains must reach bar, pantry, and tandoor stations in coordinated sequence without captain confusion.',
      },
    ],
    solutions: [
      {
        title: 'Floor plan & table management',
        desc: 'Interactive table grid reflecting real-time occupancy, open checks, and captain assignments.',
        points: [
          'Visual floor map with status colors (vacant, seated, billed).',
          'Merge, move, or split tables and orders with two taps.',
          'Record covers and track table turnaround speed.',
        ],
      },
      {
        title: 'Station-wise KOT routing',
        desc: 'Orders punch instantly to separate kitchen display stations and thermal printers.',
        points: [
          'Sequential course firing (starters first, mains on call).',
          'Item modifiers and dietary tags highlighted on screen.',
          'Split KOTs across bar, kitchen, and dessert prep stations.',
        ],
      },
      {
        title: 'Flexible guest billing & payment',
        desc: 'Print itemized checks, split bills equally or by item, and accept all payment types at table.',
        points: [
          'Cash, card, and dynamic QR UPI collection.',
          'Item-level discount controls with manager authorization.',
          'Digital receipt generation via SMS or instant print.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Three-tap order punching with full table map and course pacing control.',
      },
      {
        slug: 'kds',
        name: 'Kitchen Display (KDS)',
        icon: 'tv',
        why: 'Color-coded station routing ensures hot food leaves the pass on time.',
      },
      {
        slug: 'qr-ordering',
        name: 'QR Dine-In',
        icon: 'qr-code',
        why: 'Let guests view rich digital menus and re-order drinks directly from their table.',
      },
      {
        slug: 'business',
        name: 'F&B Analytics',
        icon: 'trending-up',
        why: 'Understand hourly table velocity, top-margin dishes, and peak cover distribution.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Guest seating & order capture',
        desc: 'Captain assigns table on POS or guest scans table QR to browse the visual menu.',
      },
      {
        step: 2,
        title: 'Instant KOT distribution',
        desc: 'Order splits automatically across bar, hot kitchen, and pantry display screens.',
      },
      {
        step: 3,
        title: 'Course firing & kitchen prep',
        desc: 'Kitchen bumps orders as prepared; captain receives notification for service.',
      },
      {
        step: 4,
        title: 'Flexible table checkout',
        desc: 'Print split checks or dynamic UPI QR for instantaneous table-side settlement.',
      },
    ],
    benefits: [
      {
        label: 'Faster Table Turnover',
        desc: 'Immediate KOT dispatch and table-side checkout clear bills without counter bottlenecks.',
      },
      {
        label: 'Zero Punching Errors',
        desc: 'Clear modifier selections and direct digital KOTs eliminate illegible handwriting mistakes.',
      },
      {
        label: 'Coordinated Kitchen Pacing',
        desc: 'KDS timing alerts prevent starters and main courses from colliding at the pass.',
      },
      {
        label: 'Offline Resilience',
        desc: 'Continue billing tables and routing local print KOTs even if the internet drops.',
      },
    ],
    faqs: [
      {
        q: 'Can Kaaty handle table splitting and combining?',
        a: 'Yes. The POS table layout allows captains to merge two tables for large parties, move an existing order to a different table, or split an active check across multiple guests.',
      },
      {
        q: 'Does the KDS support multi-station kitchens?',
        a: 'Yes. You can configure multiple KDS screens and routing rules so drinks route exclusively to the bar while food items route to hot or cold kitchen stations.',
      },
      {
        q: 'Can we apply custom service charges and taxes?',
        a: 'Yes. Configurable GST (CGST/SGST) tiers and optional service charges can be enabled per outlet or dining area.',
      },
      {
        q: 'Does it work if internet connectivity is intermittent?',
        a: 'Yes. Kaaty POS runs local station storage to keep punching orders and printing thermal KOTs offline, syncing data when the connection restores.',
      },
    ],
    demoContext: 'Restaurant',
  },

  cafes: {
    slug: 'cafes',
    name: 'Cafes & QSRs',
    tagline: 'Rapid counter ordering, drink modifiers & customer loyalty',
    badge: 'Quick Service & Coffee',
    icon: 'coffee',
    heroHeadline: 'Keep counter queues moving with split-second beverage billing',
    heroSub:
      'Engineered for high-tempo counter service. Tap through milk substitutes, temperature options, and pastry add-ons in seconds while syncing orders with the barista station.',
    painPoints: [
      {
        title: 'Morning counter rush bottlenecks',
        desc: 'Clunky POS interfaces with nested menus cause long customer queues when people just want their morning coffee.',
      },
      {
        title: 'Modifier confusion for baristas',
        desc: 'Special instructions like oat milk, extra shot, or half-sugar get missed when shouted or scribbled on cups.',
      },
      {
        title: 'Customer churn to nearby outlets',
        desc: 'Without quick repeat order recognition, regulars experience friction and seek faster alternatives.',
      },
    ],
    solutions: [
      {
        title: 'Fast-tap barista POS',
        desc: 'High-contrast grid layout optimized for quick beverage selection and instant customization.',
        points: [
          'One-tap modifier trays (milk type, syrup, temperature, cup size).',
          'Quick-cash and dynamic UPI QR generated on customer-facing display.',
          'Speed-punch shortcuts for top 10 daily morning items.',
        ],
      },
      {
        title: 'Barista display system',
        desc: 'Dedicated screen for the brew station showing exact cup specs and chronological order queue.',
        points: [
          'Visual badges for dairy-free and sugar-free modifiers.',
          'Elapsed order timers to maintain target prep times.',
          'Bump bar or touchscreen order completion.',
        ],
      },
      {
        title: 'Order pickup token alerts',
        desc: 'Clear audio chime or digital screen token call so guests collect beverages without crowding the bar.',
        points: [
          'Customer receives pickup token on printed slip or SMS.',
          'Optional TV token display board shows order readiness.',
          'Frees barista counter space from waiting crowds.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Fast-touch counter layout built for rapid beverage and combo punching.',
      },
      {
        slug: 'kds',
        name: 'Barista KDS',
        icon: 'tv',
        why: 'Clear modifier visibility ensures custom drink orders are brewed accurately.',
      },
      {
        slug: 'token-board',
        name: 'Token Display Board',
        icon: 'bell',
        why: 'Calls order numbers to keep the pick-up counter organized and calm.',
      },
      {
        slug: 'qr-ordering',
        name: 'QR Counter Scan',
        icon: 'qr-code',
        why: 'Lets guests skip line bottlenecks by ordering from their table or sidewalk.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Counter order or QR scan',
        desc: 'Guest places order at billing counter or scans pickup QR code.',
      },
      {
        step: 2,
        title: 'Instant drink customization',
        desc: 'Barista screen receives exact modifiers: milk base, shot count, sweetness level.',
      },
      {
        step: 3,
        title: 'Beverage preparation & token call',
        desc: 'Drink is prepared, marked ready, and order number appears on the display board.',
      },
      {
        step: 4,
        title: 'Handover & guest departure',
        desc: 'Guest presents token slip and collects drink with zero queue frustration.',
      },
    ],
    benefits: [
      {
        label: 'Under 15-Second Counter Punch',
        desc: 'Pre-configured modifier groups allow cashiers to complete orders in just a few taps.',
      },
      {
        label: 'Accurate Custom Drinks',
        desc: 'Clear visual badges on barista screen prevent milk cross-contamination and wrong recipes.',
      },
      {
        label: 'Organized Counter Space',
        desc: 'Token calling moves waiting patrons away from the register and pickup zones.',
      },
      {
        label: 'Instant UPI Reconciliation',
        desc: 'Integrated QR screen verifies bank settlement before printing receipt.',
      },
    ],
    faqs: [
      {
        q: 'Can we configure multiple modifier tiers like milk type and syrup?',
        a: 'Yes. Kaaty POS supports nested modifier groups with price overrides (e.g. Almond Milk +₹40, Extra Espresso Shot +₹30) attached directly to base beverages.',
      },
      {
        q: 'Can the barista screen be mounted on a compact tablet?',
        a: 'Yes. The KDS runs seamlessly on Android tablets, iPad, or standard touchscreen monitors right beside the espresso machine.',
      },
      {
        q: 'Does it support combo meals like Coffee + Croissant?',
        a: 'Yes. You can define bundled combos with item selections that automatically adjust pricing and route items to appropriate prep stations.',
      },
      {
        q: 'Can guests order while seated?',
        a: 'Yes. You can place QR standees on tables allowing seated guests to browse the digital menu and pay via UPI directly from their phone.',
      },
    ],
    demoContext: 'Cafe / QSR',
  },

  'cloud-kitchens': {
    slug: 'cloud-kitchens',
    name: 'Cloud Kitchens',
    tagline: 'Multi-brand management, station dispatch & packaging control',
    badge: 'Delivery & Virtual Brands',
    icon: 'cloud',
    heroHeadline: 'Operate multiple virtual brands from a single kitchen screen',
    heroSub:
      'Eliminate the chaotic multi-tablet shuffle. Consolidate orders across your virtual brands into unified prep stations, track cooking stages, and coordinate rider handovers.',
    painPoints: [
      {
        title: 'Tablet clutter and missed orders',
        desc: 'Managing separate hardware tablets for each brand and ordering channel causes missed alerts and order cancellations.',
      },
      {
        title: 'Disorganized kitchen prep lines',
        desc: 'Cooks struggle to know which dishes belong to which brand or delivery bag during rush hours.',
      },
      {
        title: 'Rider dispatch bottlenecks',
        desc: 'Delivery partners crowding kitchen doorways without knowing if their package is ready leads to cold food complaints.',
      },
    ],
    solutions: [
      {
        title: 'Consolidated multi-brand order inbox',
        desc: 'View and manage all your virtual brands from one central kitchen operating console.',
        points: [
          'Brand-wise color coding and logo indicators on every incoming ticket.',
          'Single unified order queue eliminating multiple ringing devices.',
          'Universal menu control with instant 86/out-of-stock toggling across brands.',
        ],
      },
      {
        title: 'Station-based kitchen display',
        desc: 'Direct items to specialized prep lines (Grill, Fryer, Assembly, Packing) regardless of which brand was ordered.',
        points: [
          'Consolidated batch prep (e.g., all burger patties display together on the grill KDS).',
          'Elapsed preparation timers alert head chef to lagging tickets.',
          'Packaging checklist ensures correct condiments, cutlery, and drinks are packed.',
        ],
      },
      {
        title: 'Dispatch & rider handover console',
        desc: 'Track order readiness from cooking to packing to rider pickup.',
        points: [
          'External rider-facing pickup board showing ready package numbers.',
          'Barcode / token verification at handover to prevent wrong bag dispatch.',
          'Timestamp logging from order acceptance to kitchen departure.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'kds',
        name: 'Multi-Station KDS',
        icon: 'tv',
        why: 'Consolidates multi-brand prep into organized station workflows.',
      },
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Central billing and order recording for direct takeaway and brand management.',
      },
      {
        slug: 'token-board',
        name: 'Dispatch Board',
        icon: 'bell',
        why: 'Displays ready delivery tokens so delivery riders collect food without kitchen disruption.',
      },
      {
        slug: 'business',
        name: 'Brand Analytics',
        icon: 'trending-up',
        why: 'Compare performance, item velocities, and prep times across all virtual brands.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Order arrives in unified console',
        desc: 'Order appears instantly with clear brand tag and packaging instructions.',
      },
      {
        step: 2,
        title: 'Station prep routing',
        desc: 'Items route to grill, curry, or fry stations with precise timers.',
      },
      {
        step: 3,
        title: 'Assembly & packing verification',
        desc: 'Packer checks items against digital ticket and seals thermal brand packaging.',
      },
      {
        step: 4,
        title: 'Rider pickup call',
        desc: 'Token lights up on dispatch screen; rider confirms token and takes delivery bag.',
      },
    ],
    benefits: [
      {
        label: 'One Screen For All Brands',
        desc: 'Run 3 to 10+ virtual brands from a single kitchen terminal without hardware clutter.',
      },
      {
        label: 'Fewer Packaging Errors',
        desc: 'Digital packing checklists ensure dips, beverages, and cutlery match the order exactly.',
      },
      {
        label: 'Streamlined Rider Handover',
        desc: 'Riders wait outside until their token shows ready, keeping the prep area secure.',
      },
      {
        label: 'Clear Brand Margin Insights',
        desc: 'See which brands generate highest gross margin and fastest turnaround.',
      },
    ],
    faqs: [
      {
        q: 'Can we run different menus and pricing for each brand?',
        a: 'Yes. Each virtual brand has an independent menu structure, pricing tiers, and packaging requirements while sharing physical kitchen stations.',
      },
      {
        q: 'How does item stockout work across brands sharing ingredients?',
        a: 'Marking a shared item or raw ingredient 86/out-of-stock immediately updates all dishes containing that ingredient across all your virtual brands.',
      },
      {
        q: 'Can the dispatch screen be mounted at the pickup window?',
        a: 'Yes. You can position an HDMI TV screen or tablet at the rider entrance to show ready orders and reduce shouting at the pass.',
      },
      {
        q: 'Can we record direct phone/takeaway orders alongside delivery?',
        a: 'Yes. Staff can manually punch direct customer orders with custom delivery or pickup instructions into the same central kitchen queue.',
      },
    ],
    demoContext: 'Cloud Kitchen',
  },

  'food-courts': {
    slug: 'food-courts',
    name: 'Food Courts',
    tagline: 'Multi-vendor operations, unified tokens & automated revenue share',
    badge: 'Multi-Tenant Commercial Hubs',
    icon: 'store',
    heroHeadline: 'Centralized oversight for dozens of independent food stalls',
    heroSub:
      'Unify independent food court tenants under one robust operating system. Provide each stall with their own lightweight POS while mall management tracks consolidated revenue and automated settlements.',
    painPoints: [
      {
        title: 'Unreported stall sales & revenue loss',
        desc: 'When tenants use disparate independent billing software, food court operators cannot audit gross sales for accurate revenue share calculation.',
      },
      {
        title: 'Confusing, noisy counter token shouting',
        desc: 'Multiple stalls yelling numbers across a shared dining hall creates chaotic, unpleasant customer experiences.',
      },
      {
        title: 'Disputed month-end vendor settlements',
        desc: 'Manually reconciling card machines, UPI receipts, rent deductions, and utility splits between 15+ vendors takes days.',
      },
    ],
    solutions: [
      {
        title: 'Multi-tenant vendor architecture',
        desc: 'Dedicated tenant logins with centralized administrative oversight.',
        points: [
          'Each stall operates its own fast POS with independent menu and staff access.',
          'Food court admin accesses live aggregated sales across all vendors in real time.',
          'Role-based permissions protect individual vendor data while providing master audits.',
        ],
      },
      {
        title: 'Unified food court token board',
        desc: 'Central high-visibility TV displays showing orders ready across all stalls.',
        points: [
          'Single unified token display with stall identifiers (e.g., Stall #3: Token 402).',
          'Customers monitor order readiness from any seat in the dining common area.',
          'Reduces crowded lines in front of individual vendor kiosks.',
        ],
      },
      {
        title: 'Automated settlement reporting',
        desc: 'Transparent daily and monthly financial reconciliation.',
        points: [
          'Automated deduction of management commission, fixed rent, and shared utility charges.',
          'Dispute-free settlement reports exportable for accounting and banking.',
          'Reconciles centralized payment gateway collections against vendor payouts.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'vendor-management',
        name: 'Vendor Management Hub',
        icon: 'store',
        why: 'Central oversight, revenue sharing calculations, and vendor settlement tracking.',
      },
      {
        slug: 'pos',
        name: 'Stall POS',
        icon: 'monitor',
        why: 'Lightweight, rapid billing terminal for high-volume food court stalls.',
      },
      {
        slug: 'token-board',
        name: 'Central Token Board',
        icon: 'bell',
        why: 'Hall-wide digital display tracking orders across all food court vendors.',
      },
      {
        slug: 'kiosk',
        name: 'Self-Ordering Kiosks',
        icon: 'smartphone',
        why: 'Common kiosks allowing guests to order items from multiple stalls in one checkout.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Guest orders at stall or central kiosk',
        desc: 'Customer selects meal from vendor counter or central self-service ordering kiosk.',
      },
      {
        step: 2,
        title: 'Token generated & payment routed',
        desc: 'Unified token number generated; revenue recorded into master ledger.',
      },
      {
        step: 3,
        title: 'Stall kitchen prep & ready bump',
        desc: 'Stall cooks prepare meal; vendor marks order ready on their counter terminal.',
      },
      {
        step: 4,
        title: 'Central screen call & collection',
        desc: 'Main food court TV board announces ready order with stall number for pickup.',
      },
    ],
    benefits: [
      {
        label: '100% Sales Audit Visibility',
        desc: 'Management sees every rupee billed across every vendor without relying on manual tenant declarations.',
      },
      {
        label: 'Pleasant, Calm Common Dining',
        desc: 'Eliminates shouting numbers with organized multi-vendor digital TV displays.',
      },
      {
        label: 'Frictionless Vendor Settlements',
        desc: 'Daily automated revenue share calculations eliminate end-of-month tenant disputes.',
      },
      {
        label: 'Rapid New Tenant Onboarding',
        desc: 'Deploy a new stall POS in under 30 minutes with cloud menu provisioning.',
      },
    ],
    faqs: [
      {
        q: 'Can individual stalls manage their own pricing and menu changes?',
        a: 'Yes. Stall managers have individual credentials to update daily specials, adjust prices, or toggle out-of-stock items without affecting neighboring vendors.',
      },
      {
        q: 'Can the food court operate a centralized cash/billing counter?',
        a: 'Yes. Kaaty supports both models: decentralized billing at each individual stall, or a centralized food court cash desk where customers buy tokens redeemable at stalls.',
      },
      {
        q: 'How are card and UPI payments split among vendors?',
        a: 'Payments collected via the central gateway are logged in the master financial ledger with automated vendor attribution, commission deduction, and settlement summaries.',
      },
      {
        q: 'Can self-service kiosks display menus from all food court stalls?',
        a: 'Yes. Common area kiosks can allow patrons to browse all stalls, order dishes across multiple vendors, and receive separate pickup tokens in a single digital payment.',
      },
    ],
    demoContext: 'Food Court',
  },

  'college-canteens': {
    slug: 'college-canteens',
    name: 'College Canteens',
    tagline: 'High-rush break ordering, anti-fraud UPI & student campus wallets',
    badge: 'Campus Dining & Institutions',
    icon: 'graduation-cap',
    heroHeadline: 'Conquer the 15-minute lecture break rush with zero queue chaos',
    heroSub:
      'Built for extreme peak-volume campus dining. Eliminate fake payment screenshot scams, empower students with tap-and-go campus wallets, and clear thousands of orders during class intervals.',
    painPoints: [
      {
        title: 'Extreme 15-minute interval spikes',
        desc: 'Thousands of students flood the canteen simultaneously when classes disperse, overwhelming counter staff and causing missed meals.',
      },
      {
        title: 'Fake UPI payment screenshot fraud',
        desc: 'Cashiers during heavy rushes cannot check bank SMS for every ₹40 transaction, leading to widespread screenshot scams and daily revenue loss.',
      },
      {
        title: 'Cash handling and change delays',
        desc: 'Counting coins and handling small physical cash notes slows down counter lines and creates reconciliation discrepancies.',
      },
    ],
    solutions: [
      {
        title: 'Automated anti-fraud UPI verification',
        desc: 'Real-time transaction reference matching before the kitchen ticket prints.',
        points: [
          'Dynamic QR codes generated uniquely for each order amount.',
          'Instant bank webhook confirmation confirms funds landed in the account.',
          'Zero reliance on cashiers inspecting student phone screens.',
        ],
      },
      {
        title: 'Closed-loop student & staff wallets',
        desc: 'Prepaid student accounts for sub-second tap-and-go checkout.',
        points: [
          'Parents or students load wallet balances online via secure gateway.',
          'Instant counter checkout using student ID number or barcode tap.',
          'Daily spending limits and transaction history for campus compliance.',
        ],
      },
      {
        title: 'Campus pre-ordering & token pickup',
        desc: 'Students order ahead from lecture halls to collect lunch without queueing.',
        points: [
          'Pre-order pickup slots prevent counter overcrowding.',
          'High-speed thermal token printers for express counter pickup lanes.',
          'Batch meal prep indicators for kitchen staff before break bells ring.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty Campus POS',
        icon: 'monitor',
        why: 'Offline-ready counter billing engine built for rapid checkout during peak interval rushes.',
      },
      {
        slug: 'qr-ordering',
        name: 'Campus Mobile QR',
        icon: 'qr-code',
        why: 'Allows students to pre-order lunch from classrooms or hostel rooms.',
      },
      {
        slug: 'token-board',
        name: 'Express Token Board',
        icon: 'bell',
        why: 'Directs students to numbered pickup counters to keep canteen hallways clear.',
      },
      {
        slug: 'business',
        name: 'Canteen Analytics',
        icon: 'trending-up',
        why: 'Track real-time sales volume, peak-rush order trends, and item-wise revenue across canteen counters.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Student pre-orders or arrives at counter',
        desc: 'Student pre-orders on mobile or taps their campus wallet at the express billing register.',
      },
      {
        step: 2,
        title: 'Instant verified transaction',
        desc: 'Bank confirmation or wallet deduction confirms payment; thermal token prints instantly.',
      },
      {
        step: 3,
        title: 'High-volume batch preparation',
        desc: 'Kitchen display aggregates popular items (e.g. 50 Thalis, 30 Dosas) for rapid plating.',
      },
      {
        step: 4,
        title: 'Token call & express pickup',
        desc: 'Token number flashes on pickup screen; student collects hot meal within 2 minutes of the break.',
      },
    ],
    benefits: [
      {
        label: 'Zero Screenshot Fraud',
        desc: 'Every single UPI transaction is digitally verified before food preparation begins.',
      },
      {
        label: 'Massive Queue Reduction',
        desc: 'Sub-second wallet taps and pre-ordering clear hundreds of students in minutes.',
      },
      {
        label: 'Real-Time Rush Visibility',
        desc: 'Hourly sales volume and item-level reporting give kitchen staff clear visibility into daily peak demand.',
      },
      {
        label: 'Full Offline Reliability',
        desc: 'Even during campus internet dropouts, offline local billing keeps lines moving.',
      },
    ],
    faqs: [
      {
        q: 'How does Kaaty prevent fake UPI screenshot scams?',
        a: 'Kaaty displays a dynamic order QR code that automatically confirms receipt directly with your payment provider via webhook before issuing the food token, so staff never have to manually inspect phone screens.',
      },
      {
        q: 'Can students use their existing college ID cards?',
        a: 'Yes. Kaaty supports barcode/QR scanning of standard student ID cards or lookup by student registration number linked to their prepaid wallet.',
      },
      {
        q: 'Can faculty and staff have separate discounts or accounts?',
        a: 'Yes. You can establish specific faculty user groups with custom pricing, post-paid monthly billing, or subsidized institution allowances.',
      },
      {
        q: 'Does it work if campus Wi-Fi goes down during the lunch rush?',
        a: 'Yes. The counter billing terminal runs locally and continues issuing thermal tokens offline, queuing transactions until connectivity is restored.',
      },
    ],
    demoContext: 'College Canteen',
  },

  hotels: {
    slug: 'hotels',
    name: 'Hotels & Resorts',
    tagline: 'Multi-outlet dining, banquet covers & guest room charge posting',
    badge: 'Hospitality & Resorts',
    icon: 'bed-double',
    heroHeadline: 'Hospitality-grade F&B operations across all property dining venues',
    heroSub:
      'Manage fine-dining restaurants, poolside bars, all-day coffee shops, banquets, and in-room dining from one consolidated F&B management console with guest room folio posting.',
    painPoints: [
      {
        title: 'Fragmented dining venues across property',
        desc: 'Running separate systems for the bar, coffee shop, and room service creates isolated reporting and inventory blindspots.',
      },
      {
        title: 'In-room dining delays & cold delivery',
        desc: 'Room service orders get delayed between reception phones, kitchen prep, and room service staff, frustrating in-house guests.',
      },
      {
        title: 'Lost room-charge postings at checkout',
        desc: 'Unrecorded room dining slips cause billing discrepancies and awkward delays when guests check out at the front desk.',
      },
    ],
    solutions: [
      {
        title: 'Multi-outlet consolidated dining',
        desc: 'Manage all property food outlets under a unified hotel hierarchy.',
        points: [
          'Centralized management for restaurant, lounge bar, pool cafe, and banquets.',
          'Shared ingredient inventory with outlet-level requisition tracking.',
          'Consolidated daily F&B revenue reports for general managers and financial controllers.',
        ],
      },
      {
        title: 'In-room dining & room folio posting',
        desc: 'Record F&B room service orders with verified room charge postings.',
        points: [
          'In-room QR digital menus allowing guests to order directly from bed.',
          'Dedicated in-room dining KDS station with floor delivery dispatch.',
          'Post orders directly to guest room numbers for consolidated checkout billing.',
        ],
      },
      {
        title: 'Banquet & bulk event management',
        desc: 'Coordinate pre-set event menus and large cover distributions.',
        points: [
          'Pre-configured banquet event orders (BEO) with fixed guest counts.',
          'Bulk food production schedules synced with the main hotel kitchen.',
          'Comprehensive beverage and banquet consumption tracking.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Flexible multi-outlet terminal supporting table layout, bar billing, and room charges.',
      },
      {
        slug: 'kds',
        name: 'Kitchen Display (KDS)',
        icon: 'tv',
        why: 'Coordinates room service delivery times and banquet prep with restaurant covers.',
      },
      {
        slug: 'qr-ordering',
        name: 'In-Room QR Menus',
        icon: 'qr-code',
        why: 'Allows hotel guests to order breakfast and midnight snacks directly from their mobile device.',
      },
      {
        slug: 'business',
        name: 'Property F&B Analytics',
        icon: 'trending-up',
        why: 'Tracks outlet-by-outlet revenue, room service average ticket size, and beverage margins.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Guest orders at venue or in-room',
        desc: 'Guest orders at pool bar, restaurant table, or scans in-room bedside QR menu.',
      },
      {
        step: 2,
        title: 'Room verification & kitchen routing',
        desc: 'Order verifies room number or table; items route to main kitchen or bar.',
      },
      {
        step: 3,
        title: 'Preparation & tray dispatch',
        desc: 'Kitchen display tracks prep time; tray is flagged ready for room runner delivery.',
      },
      {
        step: 4,
        title: 'Folio charge or instant settlement',
        desc: 'Charge is posted to guest room folio or paid immediately via card/UPI.',
      },
    ],
    benefits: [
      {
        label: 'Unified Property F&B Ledger',
        desc: 'General managers view complete dining performance across all venues in real time.',
      },
      {
        label: 'Eliminated Checkout Folio Disputes',
        desc: 'Digitally logged room orders provide clear itemized records for front-desk settlement.',
      },
      {
        label: 'Faster Room Service Delivery',
        desc: 'Digital in-room ordering cuts phone hold times and speeds tray dispatch to guest floors.',
      },
      {
        label: 'Cross-Outlet Staff Efficiency',
        desc: 'Service staff use the same intuitive POS whether assigned to the pool bar or the breakfast buffet.',
      },
    ],
    faqs: [
      {
        q: 'Can one system handle both our restaurant and poolside bar?',
        a: 'Yes. Kaaty supports multi-outlet configurations under one property account, with separate menu items, tax rules, and KOT printers for each outlet.',
      },
      {
        q: 'How does room service billing work?',
        a: 'Staff select the In-Room Dining module, enter the guest room number, and can either post the amount to the guest room charge balance or settle via mobile card terminal/UPI upon delivery.',
      },
      {
        q: 'Can banquet events have specialized pre-set packages?',
        a: 'Yes. You can configure fixed per-cover packages or custom event menus with advance billing and staged payment tracking.',
      },
      {
        q: 'Does it support in-room QR code menus?',
        a: 'Yes. Each guest room can feature a unique QR standee that loads the in-room dining menu with room number pre-populated for effortless order placement.',
      },
    ],
    demoContext: 'Hotel',
  },

  bakeries: {
    slug: 'bakeries',
    name: 'Bakeries & Confectioneries',
    tagline: 'Weight & piece billing, batch production & custom cake pre-orders',
    badge: 'Artisan & Retail Bakeries',
    icon: 'croissant',
    heroHeadline: 'Crafted for weight-based counter billing and custom cake orders',
    heroSub:
      'Manage high-velocity bakery counters with seamless piece and weight billing, track fresh batch production schedules, and organize custom celebration cake advance orders.',
    painPoints: [
      {
        title: 'Mixed unit billing complexity',
        desc: 'Bakeries sell items by piece (pastries, puffs), by weight (cookies, dry fruit sweets), and in custom gift boxes, slowing down registers.',
      },
      {
        title: 'Daily unsold bakery batch waste',
        desc: 'Short shelf-life fresh breads and pastries lead to heavy evening food waste without batch sales trend forecasting.',
      },
      {
        title: 'Custom celebration cake order chaos',
        desc: 'Losing custom cake notes, advance pickup dates, or flavor requests scribbled in physical order books leads to birthday ruined disasters.',
      },
    ],
    solutions: [
      {
        title: 'Hybrid piece, weight & box billing',
        desc: 'Sell by piece, exact grams/kilograms, or combo gift packs on one screen.',
        points: [
          'Quick entry for weight-based items with automatic price calculation.',
          'Barcode scanning for packaged dry goods, breads, and confectionery jars.',
          'Quick-select visual touch tiles for fast-moving counter pastries and hot puffs.',
        ],
      },
      {
        title: 'Advance cake booking management',
        desc: 'Organized digital calendar for custom celebration cake orders.',
        points: [
          'Record guest name, custom photo references, flavor, weight, and delivery timestamp.',
          'Collect advance deposit with outstanding balance tracking upon collection.',
          'Automated kitchen alerts so decorators prepare custom cakes on time.',
        ],
      },
      {
        title: 'Fresh batch & production tracking',
        desc: 'Sync baking schedules with historical morning and evening demand.',
        points: [
          'Record morning and afternoon baking batch yields.',
          'Track unsold end-of-day items for precise yield optimization.',
          'Real-time low-stock visibility prevents selling out of signature items too early.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Handles mixed piece and weight calculation with rapid thermal receipt printing.',
      },
      {
        slug: 'kds',
        name: 'Bakery Production KDS',
        icon: 'tv',
        why: 'Informs pastry chefs and decorators of advance custom cake schedules.',
      },
      {
        slug: 'business',
        name: 'Batch Analytics',
        icon: 'trending-up',
        why: 'Identifies peak sales windows to optimize fresh daily bake quantities.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Counter selection or cake advance booking',
        desc: 'Cashier taps items by piece or enters weight; or books advance custom birthday cake.',
      },
      {
        step: 2,
        title: 'Instant calculation & receipt printing',
        desc: 'System calculates exact weight price, prints thermal receipt with custom greeting notes.',
      },
      {
        step: 3,
        title: 'Kitchen baking & decorating schedule',
        desc: 'Production team views daily cake bookings arranged chronologically by pickup time.',
      },
      {
        step: 4,
        title: 'Pickup & final payment collection',
        desc: 'Customer arrives with token slip, inspects custom cake, and settles remaining balance.',
      },
    ],
    benefits: [
      {
        label: 'Fast Mixed Counter Checkout',
        desc: 'Cashiers seamlessly punch 200g of biscuits, 3 croissants, and a packaged sourdough loaf in one bill.',
      },
      {
        label: 'Zero Custom Cake Mix-ups',
        desc: 'Itemized digital cake tickets ensure flavor, eggless requests, and writing text match guest instructions.',
      },
      {
        label: 'Reduced Daily Batch Waste',
        desc: 'Understand hourly sales velocity to bake the right quantities across morning and afternoon shifts.',
      },
      {
        label: 'Clear Advance Deposit Tracking',
        desc: 'Audit all advance customer booking deposits with transparent balance reconciliation.',
      },
    ],
    faqs: [
      {
        q: 'Can Kaaty calculate prices for items sold by weight like cookies?',
        a: 'Yes. You can mark items as sold by weight (grams/kg). Staff enter the measured weight on POS, and Kaaty calculates the exact price dynamically.',
      },
      {
        q: 'How does custom cake pre-ordering work?',
        a: 'Staff use the Advance Booking module to record guest details, pickup date/time, flavor, weight, custom message, and deposit paid, printing a booking receipt for the guest.',
      },
      {
        q: 'Can we sell packaged retail items using barcode scanners?',
        a: 'Yes. Kaaty POS supports standard USB/Bluetooth barcode scanners for packaged retail goods like packaged snacks, syrups, and packaged breads.',
      },
      {
        q: 'Can we mark special dietary tags like 100% Eggless or Gluten-Free?',
        a: 'Yes. Visual badges clearly indicate dietary classifications on the billing screen, receipts, and digital menus.',
      },
    ],
    demoContext: 'Bakery',
  },

  'ice-cream-parlours': {
    slug: 'ice-cream-parlours',
    name: 'Ice Cream Parlours',
    tagline: 'High-volume scoops, topping modifiers & self-service dessert kiosks',
    badge: 'Dessert Parlours & Gelaterias',
    icon: 'ice-cream-cone',
    heroHeadline: 'Speed through evening dessert rushes with zero scoop slowdown',
    heroSub:
      'Engineered for fast-paced dessert and gelato parlours. Configure endless scoop, waffle cone, and syrup combinations in a single tap, or let guests build custom sundaes on self-ordering kiosks.',
    painPoints: [
      {
        title: 'Weekend evening queue explosions',
        desc: 'Massive rushes after dinner hours create counter congestion where customers debate flavors while line length turns away walk-ins.',
      },
      {
        title: 'Complex scoop & topping modifier combinations',
        desc: 'Multiple scoop flavors, cone options, nuts, syrups, and sprinkles confuse cashiers and slow transaction velocity.',
      },
      {
        title: 'Fast inventory melting & seasonal stock management',
        desc: 'Flavors sell out unevenly; cashiers must immediately know which tubs are empty without shouting into the freezer room.',
      },
    ],
    solutions: [
      {
        title: 'Visual scoop & modifier builder',
        desc: 'High-speed touch grid designed for scoops, cones, and toppings.',
        points: [
          'Choose base (Cup, Waffle Cone, Tub) followed by single, double, or triple scoops.',
          'Add-on modifiers (fudge, sprinkles, brownie chunks) calculate price additions instantly.',
          'Speed-punch shortcuts for signature sundae recipes.',
        ],
      },
      {
        title: 'Self-ordering parlour kiosks',
        desc: 'Interactive touchscreen kiosks where guests explore flavors and build sundaes.',
        points: [
          'Rich visual photography of scoops, sundaes, and seasonal specials.',
          'Automated upsell prompts (e.g. "Add a chocolate dipped waffle cone for ₹30").',
          'Prints pickup token for express pickup at the scoop counter.',
        ],
      },
      {
        title: 'Live flavor tub stockout control',
        desc: 'Toggle sold-out flavors in one tap across all registers and kiosks.',
        points: [
          'Instant 86/stockout toggle grays out empty tub flavors immediately.',
          'Prevents billing a flavor that the scooper just ran out of.',
          'Tracks daily scoop consumption to plan freezer restocking.',
        ],
      },
    ],
    recommendedProducts: [
      {
        slug: 'pos',
        name: 'Kaaty POS',
        icon: 'monitor',
        why: 'Fast-touch counter layout built for multi-scoop and topping additions.',
      },
      {
        slug: 'kiosk',
        name: 'Parlour Kiosk',
        icon: 'smartphone',
        why: 'Let customers visually build sundaes and pay without counter wait times.',
      },
      {
        slug: 'token-board',
        name: 'Token Display Board',
        icon: 'bell',
        why: 'Organizes pickup so scoopers call orders cleanly without crowding the glass counter.',
      },
      {
        slug: 'business',
        name: 'Flavor Velocity Analytics',
        icon: 'trending-up',
        why: 'Identify your top 5 best-selling flavors and plan seasonal batch restocking.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Counter order or kiosk selection',
        desc: 'Guest browses flavors at the register or builds a custom sundae on the touch kiosk.',
      },
      {
        step: 2,
        title: 'Tap modifiers & instant payment',
        desc: 'Cones, scoops, and extra toppings calculate with dynamic UPI QR checkout.',
      },
      {
        step: 3,
        title: 'Scoop counter order slip',
        desc: 'Order prints at the ice cream cabinet; staff scoop exact flavor combinations.',
      },
      {
        step: 4,
        title: 'Handover & satisfied smiles',
        desc: 'Guest presents token number and collects fresh scoops in under 60 seconds.',
      },
    ],
    benefits: [
      {
        label: 'Sub-20 Second Transaction Time',
        desc: 'Cashiers punch scoops and toppings in just two taps, keeping post-dinner lines moving.',
      },
      {
        label: 'Higher Average Ticket Size',
        desc: 'Visual kiosk ordering encourages guests to add premium waffle cones and extra toppings.',
      },
      {
        label: 'Zero Disappointed Customers',
        desc: 'One-tap tub stockout ensures cashiers never sell a flavor that has run dry in the freezer.',
      },
      {
        label: 'Peak Rush Crowd Control',
        desc: 'Customers step back to wait for their token rather than leaning over the ice cream display.',
      },
    ],
    faqs: [
      {
        q: 'Can we set different pricing for single vs double scoops across cone types?',
        a: 'Yes. Kaaty POS lets you link scoop count and vessel choice (cup, sugar cone, waffle cone, jar) so base prices adjust automatically with toppings added on top.',
      },
      {
        q: 'Can the self-ordering kiosk run on a standard tablet?',
        a: 'Yes. Kaaty Kiosk can run on standard Android tablets mounted on counter stands or freestanding kiosk hardware.',
      },
      {
        q: 'How do staff handle flavor sample requests without messing up billing?',
        a: 'Staff can quickly complete customer transactions while keeping sample spoons untracked, or log promo samples under manager authorized comps.',
      },
      {
        q: 'Can we introduce seasonal flavors that expire on a certain date?',
        a: 'Yes. You can schedule limited-time seasonal flavors (e.g. Alphonso Mango Special) and deactivate them across all registers in one click when the season ends.',
      },
    ],
    demoContext: 'Ice Cream Parlour',
  },
}
