import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { TokenWorkflowUi, PaymentExperienceUi, TimelineUi } from './PosUiMockups'

export function KaatyPosPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative bg-navy-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-kaaty-500/10 px-3.5 py-1.5 text-[13px] font-bold text-kaaty-700">
                <Icon name="monitor" size={16} /> Kaaty POS
              </div>
              <h1 className="font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-[56px] lg:text-[64px]">
                The central hub for <br />
                <span className="text-kaaty-500">food operations.</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-600 sm:text-[20px] lg:max-w-[500px]">
                Lightning-fast visual order entry, live stock tracking, and instant kitchen
                synchronization. Built to clear the rush and keep your counter organized.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button as="a" href="/demo?source=pos_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#features" variant="outline" size="lg">
                  Explore How It Works
                </Button>
              </div>
            </div>
            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                <img
                  src="/kaaty-pos.png"
                  alt="Kaaty POS interface on laptop device"
                  className="w-full h-auto max-w-full object-contain drop-shadow-2xl lg:translate-x-4"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE REAL PROBLEM */}
      <section id="features" className="py-24 bg-white">
        <Container>
          <SectionHead
            align="center"
            title="Running a food business gets complicated fast."
            sub="Without the right systems, busy periods create operational friction that slows you down."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
                <Icon name="clock" size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900">Long Queues</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                Cashiers spend too much time typing in orders or navigating text-heavy billing
                screens.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Icon name="file-warning" size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900">Kitchen Bottlenecks</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                Orders need to move from the counter to the kitchen without manual tickets getting
                lost.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Icon name="package-minus" size={24} />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900">Stock Confusion</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                Staff don't know an item is sold out until after the customer has already paid for
                it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 & 4. FAST ORDER ENTRY */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative px-4 sm:px-0">
              <div className="rounded-2xl border border-navy-700 bg-navy-800 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <img
                  src="/screenshots/pos-counter.png"
                  alt="Kaaty POS visual order entry screen"
                  className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-400 uppercase tracking-wider">
                Visual Menu
              </div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
                Fast order entry for high-volume counters.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-300">
                Cashiers need to create orders quickly without navigating complicated screens. Kaaty
                provides a heavily visual, grid-based menu that makes finding and punching items
                instant.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>Category filters and rapid search for thousands of items.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>1-tap quantity adjustments and instant cart totals.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>Dedicated "Mark as parcel" toggles for takeaway orders.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ORDER / TOKEN WORKFLOW & 6. PAYMENT */}
      <section className="py-24 bg-navy-50">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* TOKEN WORKFLOW */}
            <div className="flex flex-col">
              <h3 className="font-display text-[28px] font-bold text-navy-900 mb-4">
                Keep the counter organized.
              </h3>
              <p className="text-[16px] leading-relaxed text-navy-600 mb-10">
                Stop shouting names across the room. Every order generates a unique token that
                tracks its real-time status from 'Preparing' to 'Ready'.
              </p>
              <div className="flex-1 flex items-center justify-center bg-navy-100/50 rounded-3xl p-8 border border-navy-200/50">
                <TokenWorkflowUi />
              </div>
            </div>

            {/* PAYMENT EXPERIENCE */}
            <div className="flex flex-col">
              <h3 className="font-display text-[28px] font-bold text-navy-900 mb-4">
                Track every rupee collected.
              </h3>
              <p className="text-[16px] leading-relaxed text-navy-600 mb-10">
                Process cash or UPI payments confidently. Kaaty tracks your payment mix directly in
                the POS, keeping your end-of-day reconciliation accurate.
              </p>
              <div className="flex-1 flex items-center justify-center bg-navy-100/50 rounded-3xl p-8 border border-navy-200/50">
                <PaymentExperienceUi />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. POS -> KDS WORKFLOW */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              Eliminate lost kitchen tickets.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              Orders punched at the counter instantly appear on the Kitchen Display System. When
              chefs mark an item ready, the counter staff sees it immediately on the POS.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-3xl bg-navy-50 border border-navy-100 p-4 sm:p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4 text-center">
                  <span className="font-bold text-navy-900 bg-white px-4 py-2 rounded-full border border-navy-200 shadow-sm text-[13px]">
                    1. Counter POS
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-200 shadow-md">
                  <img
                    src="/screenshots/pos-counter.png"
                    alt="POS Counter"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2 z-10">
                <div className="bg-kaaty-500 text-white rounded-full p-3 shadow-lg">
                  <Icon name="arrow-right" size={24} />
                </div>
              </div>

              <div>
                <div className="mb-4 text-center">
                  <span className="font-bold text-navy-900 bg-white px-4 py-2 rounded-full border border-navy-200 shadow-sm text-[13px]">
                    2. Kitchen Display
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-200 shadow-md">
                  <img
                    src="/screenshots/pos-kds.png"
                    alt="Kitchen Display System"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. STOCK / AVAILABILITY & 11. ANALYTICS */}
      <section className="py-24 bg-navy-900 text-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
                Never sell what you don't have.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-300">
                Kaaty POS runs on a live inventory engine. As items are sold, availability drops.
                Staff instantly see "Out of Stock" badges right on the menu, preventing frustrated
                customers.
              </p>

              <div className="mt-10 rounded-2xl border border-navy-700 bg-navy-800 shadow-2xl overflow-hidden p-2">
                <img
                  src="/screenshots/pos-stock.png"
                  alt="Live stock management"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
                Know your numbers instantly.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-300">
                Stop waiting until closing time to see how you're doing. View gross revenue, profit
                margins, and payment mixes across all ordering channels in real time.
              </p>

              <div className="mt-10 rounded-2xl border border-navy-700 bg-navy-800 shadow-2xl overflow-hidden p-2">
                <img
                  src="/screenshots/pos-analytics.png"
                  alt="Real-time analytics dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. RUSH HOUR STORY */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
                Built for the 12:30 PM lunch rush.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-600">
                Kaaty doesn't just process transactions; it coordinates your entire operational
                flow. From the moment an order is punched to the moment it's handed over, everyone
                stays in sync.
              </p>
            </div>
            <div className="flex justify-center bg-navy-50 p-8 rounded-3xl border border-navy-100">
              <TimelineUi />
            </div>
          </div>
        </Container>
      </section>

      {/* 10. ORDERING ECOSYSTEM */}
      <section className="py-24 bg-navy-50 overflow-hidden relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              One connected ecosystem.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              Kaaty POS acts as the central hub for all your operational and customer-facing
              channels.
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
              <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center">
                <div className="w-12 h-12 rounded-xl bg-kaaty-500/10 text-kaaty-600 flex items-center justify-center mb-4">
                  <Icon name="chef-hat" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900">Kitchen Display</h3>
              </div>
              <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="smartphone" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900">Mobile App</h3>
              </div>
              <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 text-center items-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="layout-dashboard" size={24} />
                </div>
                <h3 className="text-[16px] font-bold text-navy-900">Analytics</h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. WHO KAATY POS IS FOR */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHead
            align="center"
            title="Adaptable to quick-service operations."
            sub="Built specifically for businesses where counter speed and kitchen flow are the highest priorities."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <Icon name="coffee" size={24} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[16px]">Cafes & QSRs</h4>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <Icon name="store" size={24} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[16px]">Food Courts</h4>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <Icon name="cake-slice" size={24} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[16px]">Bakeries</h4>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <Icon name="cloud" size={24} className="mb-4 text-kaaty-500" />
              <h4 className="font-bold text-navy-900 text-[16px]">Cloud Kitchens</h4>
            </div>
          </div>
        </Container>
      </section>

      {/* 13. WHY KAATY POS */}
      <section className="py-24 bg-navy-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
              Why switch to Kaaty?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-navy-800/50 rounded-2xl p-8 border border-navy-700">
              <h3 className="font-bold text-[18px] text-navy-300 mb-6 flex items-center gap-2">
                <Icon name="x-circle" size={20} className="text-red-400" /> Traditional Workflow
              </h3>
              <ul className="space-y-4 text-navy-200">
                <li className="flex gap-3">
                  <span className="text-navy-400">•</span> Manual order handling
                </li>
                <li className="flex gap-3">
                  <span className="text-navy-400">•</span> Paper tickets to the kitchen
                </li>
                <li className="flex gap-3">
                  <span className="text-navy-400">•</span> Guessing stock availability
                </li>
                <li className="flex gap-3">
                  <span className="text-navy-400">•</span> Blind spots in reporting
                </li>
              </ul>
            </div>
            <div className="bg-kaaty-500/10 rounded-2xl p-8 border border-kaaty-500/30">
              <h3 className="font-bold text-[18px] text-white mb-6 flex items-center gap-2">
                <Icon name="check-circle-2" size={20} className="text-kaaty-500" /> Kaaty Workflow
              </h3>
              <ul className="space-y-4 text-white">
                <li className="flex gap-3">
                  <span className="text-kaaty-400">•</span> Connected order flow
                </li>
                <li className="flex gap-3">
                  <span className="text-kaaty-400">•</span> Instant POS → KDS sync
                </li>
                <li className="flex gap-3">
                  <span className="text-kaaty-400">•</span> Live stock management
                </li>
                <li className="flex gap-3">
                  <span className="text-kaaty-400">•</span> Real-time analytics dashboard
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 14. RELATED PRODUCTS */}
      <section className="bg-navy-50 py-24">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-[28px] font-bold text-navy-900 sm:text-[32px]">
                Explore the Kaaty Ecosystem
              </h2>
              <p className="mt-3 text-[16px] text-navy-600">
                Add modules that seamlessly connect with your POS.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
              <div className="mb-4 aspect-[4/3] w-full rounded-xl bg-navy-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/kaaty-kds.png"
                  alt="Kaaty KDS Interface"
                  className="w-[85%] h-auto object-contain drop-shadow-xl"
                />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900 flex items-center gap-2">
                <Icon name="chef-hat" size={18} className="text-navy-400" />
                Kaaty KDS
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">
                Visual kitchen display that routes every item from the POS to the right prep
                station.
              </p>
              <div className="mt-6 pt-6 border-t border-navy-100">
                <a
                  href="/products/kds"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-kaaty-600 hover:text-kaaty-700"
                >
                  Explore Product <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
              <div className="mb-4 aspect-[4/3] w-full rounded-xl bg-navy-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/kaaty-mobile.png"
                  alt="Kaaty Mobile App"
                  className="w-[45%] h-auto object-contain drop-shadow-xl"
                />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900 flex items-center gap-2">
                <Icon name="smartphone" size={18} className="text-navy-400" />
                Mobile App
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">
                Let guests order and pay directly from a branded native app to skip the line
                entirely.
              </p>
              <div className="mt-6 pt-6 border-t border-navy-100">
                <a
                  href="/products/mobile-app"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-kaaty-600 hover:text-kaaty-700"
                >
                  Explore Product <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
              <div className="mb-4 aspect-[4/3] w-full rounded-xl bg-navy-50 flex flex-col items-center justify-center p-4">
                <img
                  src="/screenshots/pos-analytics.png"
                  alt="Analytics Interface"
                  className="w-full h-full object-cover rounded-lg border border-navy-100 shadow-sm opacity-90"
                />
              </div>
              <h3 className="text-[18px] font-bold text-navy-900 flex items-center gap-2">
                <Icon name="layout-dashboard" size={18} className="text-navy-400" />
                Business App
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">
                Live sales, margins, and settlements directly into the Kaaty Business App.
              </p>
              <div className="mt-6 pt-6 border-t border-navy-100">
                <a
                  href="/products/business"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-kaaty-600 hover:text-kaaty-700"
                >
                  Explore Product <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-navy-900 px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-kaaty-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[36px] font-extrabold leading-tight text-white sm:text-[48px]">
                Ready to run with less friction?
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-200">
                See exactly how Kaaty POS tracks orders, connects your kitchen, and organizes your
                counter during the rush.
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
