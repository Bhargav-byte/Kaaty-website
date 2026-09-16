import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import {
  PremiumPosGridUi,
  PremiumKdsUi,
  PremiumStockUi,
  PremiumAnalyticsUi,
  PremiumSettingsUi,
  TimelineUi,
} from './PosUiMockups'

export function KaatyPosPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO - WHAT IS KAATY POS? */}
      <section className="relative bg-navy-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-kaaty-500/10 px-3.5 py-1.5 text-[13px] font-bold text-kaaty-700">
                <Icon name="monitor" size={16} /> Kaaty POS
              </div>
              <h1 className="font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-[56px] lg:text-[64px]">
                The complete operating system for <br />
                <span className="text-kaaty-500">modern food businesses.</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-600 sm:text-[20px] lg:max-w-[500px]">
                Lightning-fast visual billing, real-time kitchen synchronization, live stock
                control, and comprehensive business analytics—all in one seamless platform.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button as="a" href="/demo?source=pos_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#tour" variant="outline" size="lg">
                  See the Product Tour
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                <img
                  src="/kaaty-pos.png"
                  alt="Kaaty POS visual order entry screen on a premium display"
                  className="w-full h-auto max-w-full object-contain drop-shadow-2xl lg:translate-x-4"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE REAL PROBLEM */}
      <section id="tour" className="py-24 bg-white">
        <Container>
          <SectionHead
            align="center"
            title="Running a busy food operation gets chaotic fast."
            sub="Most POS systems just print receipts. We built Kaaty to solve the actual operational friction you face during the 12:30 PM lunch rush."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-4">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
              <Icon name="clock" size={24} className="mb-4 text-red-500" />
              <h3 className="text-[16px] font-bold text-navy-900">Slow Order Entry</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                Long, text-heavy menus slow down cashiers and create massive counter queues.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
              <Icon name="file-warning" size={24} className="mb-4 text-amber-500" />
              <h3 className="text-[16px] font-bold text-navy-900">Kitchen Bottlenecks</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                Paper KOTs get lost, and counter staff constantly shout for order updates.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
              <Icon name="package-minus" size={24} className="mb-4 text-orange-500" />
              <h3 className="text-[16px] font-bold text-navy-900">Stock Confusion</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                Staff don't know an item is sold out until after they've taken the customer's
                payment.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
              <Icon name="pie-chart" size={24} className="mb-4 text-navy-500" />
              <h3 className="text-[16px] font-bold text-navy-900">Blind Reporting</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                Owners have to wait until closing time to calculate actual margins and channel
                breakdowns.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ORDER MANAGEMENT */}
      <section className="py-24 bg-navy-900 overflow-hidden relative">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-400 uppercase tracking-wider">
              Order Management
            </div>
            <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
              Visual order entry built for speed.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-300">
              <strong className="text-white">The Problem:</strong> A text-heavy menu slows down the
              counter during peak hours.
              <br />
              <strong className="text-white">How Kaaty Works:</strong> We replaced complex
              navigation with a premium, image-first visual grid. Search, select, and adjust
              quantities in one tap.
            </p>
          </div>

          <div className="mb-12">
            <PremiumPosGridUi />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="search" size={18} className="text-kaaty-400" /> Lightning Fast Search
              </h4>
              <p className="text-navy-300 text-[14px] leading-relaxed">
                Instantly filter hundreds of menu items by category or keyword so you never keep a
                customer waiting.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="list-ordered" size={18} className="text-kaaty-400" /> Token Management
              </h4>
              <p className="text-navy-300 text-[14px] leading-relaxed">
                Every order is assigned a token number. Track its real-time status (Preparing vs.
                Ready) directly on the left sidebar.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="wallet" size={18} className="text-kaaty-400" /> Connected Payments
              </h4>
              <p className="text-navy-300 text-[14px] leading-relaxed">
                Process cash or UPI seamlessly. "Mark as Parcel" toggles let you handle takeaway and
                dine-in simultaneously.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. RUSH HOUR STORY */}
      <section className="py-24 bg-white border-b border-navy-100">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-600 uppercase tracking-wider">
                Workflow Automation
              </div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
                Built for the 12:30 PM lunch rush.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-600">
                Kaaty doesn't just process transactions; it coordinates your entire operational
                flow. From the moment an order is punched to the moment it's handed over, everyone
                stays perfectly in sync.
              </p>
            </div>
            <div className="flex justify-center bg-navy-50 p-8 rounded-3xl border border-navy-100 shadow-inner">
              <TimelineUi />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. KITCHEN OPERATIONS */}
      <section className="py-24 bg-navy-50">
        <Container>
          <div className="mb-12 max-w-2xl text-center mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-600 uppercase tracking-wider">
              Kitchen Operations
            </div>
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              Eliminate lost kitchen tickets.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600 text-left">
              <strong className="text-navy-900">The Problem:</strong> Kitchen staff get overwhelmed
              by paper KOTs and unclear priorities.
              <br />
              <strong className="text-navy-900">How Kaaty Works:</strong> Orders route directly from
              the POS to a digital Kitchen Display. Chefs tap "Ready", and the POS alerts the
              cashier instantly.
            </p>
          </div>

          <div className="mb-12">
            <PremiumKdsUi />
          </div>

          <div className="text-center">
            <p className="text-[16px] font-bold text-navy-900">
              The Result:{' '}
              <span className="font-normal text-navy-600">
                Zero shouting. Zero lost tickets. Perfectly coordinated kitchen prep.
              </span>
            </p>
          </div>
        </Container>
      </section>

      {/* 6. STOCK OPERATIONS */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-600 uppercase tracking-wider">
              Stock Operations
            </div>
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              Never sell what you don't have.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              <strong className="text-navy-900">The Problem:</strong> Staff sell an item that the
              kitchen has already run out of.
              <br />
              <strong className="text-navy-900">How Kaaty Works:</strong> As items are billed, the
              live inventory engine deducts stock. Once empty, "Out of Stock" badges immediately
              appear on the POS menu.
            </p>
          </div>

          <div className="mb-12">
            <PremiumStockUi />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-navy-900 font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="package-check" size={18} className="text-emerald-500" /> Automatic
                Deductions
              </h4>
              <p className="text-navy-600 text-[14px] leading-relaxed">
                Every time you tap 'Place Order', Kaaty automatically reduces the available count
                for those specific items.
              </p>
            </div>
            <div>
              <h4 className="text-navy-900 font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="alert-triangle" size={18} className="text-red-500" /> Real-time Alerts
              </h4>
              <p className="text-navy-600 text-[14px] leading-relaxed">
                Items grey out automatically on the POS grid, preventing cashiers from adding
                unavailable items to a cart.
              </p>
            </div>
            <div>
              <h4 className="text-navy-900 font-bold text-[16px] mb-2 flex items-center gap-2">
                <Icon name="arrow-up-circle" size={18} className="text-blue-500" /> Stock In / Out
              </h4>
              <p className="text-navy-600 text-[14px] leading-relaxed">
                Easily add new batches of stock from the settings panel or mark everything out of
                stock at the end of the day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. BUSINESS CONTROL & CONFIGURATION */}
      <section className="py-24 bg-navy-900 text-white">
        <Container>
          <div className="mb-12 max-w-2xl mx-auto text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-400 uppercase tracking-wider">
              Business Control
            </div>
            <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
              Know your margins instantly.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-300 text-left">
              <strong className="text-white">The Problem:</strong> Owners rely on end-of-month
              accounting to understand if they are profitable.
              <br />
              <strong className="text-white">How Kaaty Works:</strong> The integrated analytics
              dashboard tracks gross revenue, cost of goods, net profit, and payment mixes in real
              time.
            </p>
          </div>

          <div className="mb-12">
            <PremiumAnalyticsUi />
          </div>

          <div className="mt-16 pt-16 border-t border-navy-800">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="font-display text-[28px] sm:text-[32px] font-bold text-white mb-4">
                Complete Configuration
              </h3>
              <p className="text-navy-300 text-[16px] sm:text-[18px] leading-relaxed">
                Kaaty adapts to your workflow, not the other way around. Access powerful POS
                settings directly from the profile menu.
              </p>
            </div>

            <div className="mb-12">
              <PremiumSettingsUi />
            </div>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-navy-800/50 p-5 rounded-xl border border-navy-700">
                <Icon name="check" size={20} className="text-kaaty-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-navy-200">
                  <strong className="text-white block mb-1">Stock In / Out</strong>
                  Automate inventory tracking with instant stock adjustments right from the counter.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-navy-800/50 p-5 rounded-xl border border-navy-700">
                <Icon name="check" size={20} className="text-kaaty-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-navy-200">
                  <strong className="text-white block mb-1">Token Settings</strong>
                  Configure auto-timing, token generation logic, and KDS lifecycles for the kitchen.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-navy-800/50 p-5 rounded-xl border border-navy-700">
                <Icon name="check" size={20} className="text-kaaty-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-navy-200">
                  <strong className="text-white block mb-1">Print & KDS Routing</strong>
                  Map specific food categories to dedicated chef screens or thermal printers
                  instantly.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-navy-800/50 p-5 rounded-xl border border-navy-700">
                <Icon name="check" size={20} className="text-kaaty-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-navy-200">
                  <strong className="text-white block mb-1">Parcel & Delivered Logs</strong>
                  Set custom packaging rules and access complete historical logs of delivered
                  orders.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. WHO KAATY POS IS FOR (SEO TARGETING) */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHead
            align="center"
            title="The preferred POS for fast-paced food businesses."
            sub="Whether you're running a busy college canteen or a premium cafe, Kaaty POS handles your specific workflow."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon name="coffee" size={28} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[18px]">Café POS</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Perfect for visual menus, fast coffee billing, and managing takeaway pastries with
                live stock.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon name="graduation-cap" size={28} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[18px]">College Canteen POS</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Built to handle massive bursts of students at lunchtime using rapid token generation
                and KDS routing.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon name="store" size={28} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[18px]">Food Court POS</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Unify multiple counters into one central ecosystem with consolidated analytics and
                reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon name="utensils-crossed" size={28} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[18px]">Quick Service POS</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Designed for QSRs that need sub-second item punching and frictionless UPI payment
                tracking.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. ORDERING ECOSYSTEM */}
      <section className="py-24 bg-navy-50 overflow-hidden relative border-t border-navy-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              One connected ecosystem.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              Kaaty POS acts as the central ledger. All your operational and customer-facing
              channels talk to each other in real time.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Node */}
            <div className="flex justify-center mb-12 relative z-10">
              <div className="bg-navy-900 rounded-2xl p-4 shadow-xl border border-navy-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-kaaty-500 flex items-center justify-center text-white">
                  <Icon name="monitor" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px]">Kaaty POS</h4>
                  <p className="text-navy-300 text-[12px]">Central Ledger</p>
                </div>
              </div>
            </div>

            {/* SVG Connecting Lines */}
            <div className="hidden md:block absolute top-[44px] left-1/2 -translate-x-1/2 w-[60%] h-[60px] z-0">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50% 0 V20 H0 V60"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-navy-200"
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                />
                <path
                  d="M50% 0 V60"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-navy-200"
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                />
                <path
                  d="M50% 0 V20 H100% V60"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-navy-200"
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                />
              </svg>
            </div>

            <div className="grid gap-6 md:grid-cols-3 relative z-10">
              <a
                href="/products/kds"
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center hover:shadow-md transition-shadow hover:ring-kaaty-200"
              >
                <div className="w-12 h-12 rounded-xl bg-kaaty-500/10 text-kaaty-600 flex items-center justify-center mb-4">
                  <Icon name="chef-hat" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900 mb-2">Kitchen Display</h3>
                <p className="text-[13px] text-navy-600">
                  Routes POS tokens directly to chef screens.
                </p>
              </a>
              <a
                href="/products/mobile-app"
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center hover:shadow-md transition-shadow hover:ring-blue-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="smartphone" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900 mb-2">Mobile App</h3>
                <p className="text-[13px] text-navy-600">
                  Customer app orders appear instantly in POS.
                </p>
              </a>
              <a
                href="/products/business"
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center hover:shadow-md transition-shadow hover:ring-emerald-200"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="layout-dashboard" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900 mb-2">Business App</h3>
                <p className="text-[13px] text-navy-600">
                  Live POS metrics broadcasted to owners' phones.
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-navy-900 px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-kaaty-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[36px] font-extrabold leading-tight text-white sm:text-[48px]">
                Ready to clear the rush?
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-200">
                Stop struggling with disconnected billing software. See exactly how Kaaty POS tracks
                orders, connects your kitchen, and organizes your counter during the busiest hours.
              </p>
              <div className="mt-10 flex justify-center">
                <Button as="a" href="/demo?source=pos_footer" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
