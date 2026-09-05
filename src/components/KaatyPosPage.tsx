import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { ExpressBillingUi, UpiConfirmationUi, TableLayoutUi } from './PosUiMockups'

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
                Billing built for <br />
                <span className="text-kaaty-500">peak-hour speed.</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-600 sm:text-[20px] lg:max-w-[500px]">
                Run frictionless checkouts, split tabs, and capture every cash and UPI sale
                instantly. Built to clear the rush, online or fully offline.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button as="a" href="/demo?source=pos_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#features" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>
            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                <img
                  src="/kaaty-pos.png"
                  alt="Kaaty POS interface on laptop device"
                  className="w-full h-auto max-w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CORE VALUE / SPEED & RELIABILITY */}
      <section id="features" className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="order-2 lg:order-1 relative px-4 sm:px-0">
              <ExpressBillingUi />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
                Sub-second billing when the queue won't stop.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-600">
                Clunky interfaces cause lines. Kaaty POS is tuned for speed, putting favourites,
                combos, and nested modifiers one tap away. Auto-print itemised KOTs and token slips
                the second an order fires.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name="wifi-off" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-navy-900">
                      Offline-first Reliability
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-navy-600">
                      Keep punching orders and printing KOTs even if the internet drops. Unbroken
                      logs sync automatically when connection restores.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name="package" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-navy-900">Live Inventory Sync</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-navy-600">
                      Auto-deduct ingredients per recipe the moment an item sells. See low-stock
                      alerts right on the billing screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ANTI-FRAUD / PAYMENTS */}
      <section className="bg-navy-900 py-24 text-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-kaaty-400">
                <Icon name="shield-check" size={16} /> Secure Payments
              </div>
              <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
                End fake-screenshot scams for good.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-300">
                Stop losing revenue to fraudulent UPI screenshots at the counter. Kaaty POS verifies
                UPI payments directly against the live bank ledger—nothing is marked paid until the
                money actually lands.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>Real-time UPI ledger confirmation on screen.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>Seamless integration with Pine Labs and Bluetooth printers.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-navy-200">
                  <Icon name="check-circle-2" size={20} className="text-kaaty-500 shrink-0" />
                  <span>Supports USB/Bluetooth barcode scanners for retail items.</span>
                </li>
              </ul>
            </div>
            <div className="relative px-4 sm:px-0">
              <UpiConfirmationUi />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TABLE & COURSE MANAGEMENT */}
      <section className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="order-2 lg:order-1 relative px-4 sm:px-0">
              <TableLayoutUi />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
                Flawless fine-dining and table management.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-navy-600">
                For restaurants and cafes that need more than a quick-service counter. Manage your
                entire floor plan, route specific courses to the kitchen, and handle complex bills
                effortlessly.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
                  <Icon name="users" size={24} className="mb-3 text-kaaty-600" />
                  <h4 className="text-[15px] font-bold text-navy-900">Table Control</h4>
                  <p className="mt-1.5 text-[14px] text-navy-600">
                    Merge tables for large parties, move active orders, or split checks across
                    multiple guests.
                  </p>
                </div>
                <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
                  <Icon name="chef-hat" size={24} className="mb-3 text-kaaty-600" />
                  <h4 className="text-[15px] font-bold text-navy-900">Course Firing</h4>
                  <p className="mt-1.5 text-[14px] text-navy-600">
                    Fire starters and mains in sequence. Transfer KOTs without ever re-punching an
                    order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ECOSYSTEM CONNECTION */}
      <section className="bg-navy-50 py-24 overflow-hidden relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="font-display text-[32px] font-bold leading-tight text-navy-900 sm:text-[40px]">
              The core of your operations.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              Kaaty POS isn't an isolated tool. It's the central nervous system that feeds your
              kitchen, your mobile channels, and your owner dashboard in real time.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
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

            {/* SVG Connecting Lines (Hidden on Mobile) */}
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
              {/* Connection 1 */}
              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-kaaty-500/10 text-kaaty-600">
                  <Icon name="chef-hat" size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-navy-900">Routes to KDS</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">
                  Every fired KOT is automatically routed to the correct prep station on the Kaaty
                  Kitchen Display System.
                </p>
              </div>
              {/* Connection 2 */}
              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Icon name="qr-code" size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-navy-900">Unified Order Queue</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">
                  Orders from QR tables, Mobile Apps, and Self Kiosks bypass the counter but are
                  recorded securely in the central POS ledger.
                </p>
              </div>
              {/* Connection 3 */}
              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Icon name="layout-dashboard" size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-navy-900">Syncs to Owner</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">
                  Live sales velocity, ingredient depletion, and multi-outlet revenue stream
                  directly into the Kaaty Business App.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INDUSTRY ADAPTABILITY */}
      <section className="py-24">
        <Container>
          <SectionHead
            align="center"
            title="Adaptable to any food business."
            sub="From high-volume campus food courts to fine-dining restaurants, Kaaty POS handles your specific workflow."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <Icon name="coffee" size={24} className="mb-4 text-navy-700" />
              <h4 className="font-bold text-navy-900 text-[16px]">Cafes & QSR</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Fast bar billing, nested modifier pricing, and recipe-level inventory.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <Icon name="utensils-crossed" size={24} className="mb-4 text-navy-700" />
              <h4 className="font-bold text-navy-900 text-[16px]">Restaurants</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Table management, sequential course firing, and split check handling.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <Icon name="cake-slice" size={24} className="mb-4 text-navy-700" />
              <h4 className="font-bold text-navy-900 text-[16px]">Bakeries</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Scale/weight billing, advance custom cake bookings, and barcode scanners.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <Icon name="hotel" size={24} className="mb-4 text-navy-700" />
              <h4 className="font-bold text-navy-900 text-[16px]">Hotels & Campuses</h4>
              <p className="mt-2 text-[14px] text-navy-600">
                Room folio charge posting and closed-loop student wallet integration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. RELATED PRODUCTS */}
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
            {/* Product Card 1 */}
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
            {/* Product Card 2 */}
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
            {/* Product Card 3 */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 hover:shadow-md transition-shadow">
              <div className="mb-4 aspect-[4/3] w-full rounded-xl bg-navy-50 flex flex-col items-center justify-center text-navy-300">
                <Icon name="layout-dashboard" size={40} className="mb-2 opacity-50" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  Owner Dashboard
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-navy-900 flex items-center gap-2">
                <Icon name="layout-dashboard" size={18} className="text-navy-400" />
                Business App
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">
                The owner command centre. Live sales, margins, and settlements in your pocket.
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

      {/* 8. FINAL CTA */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-navy-900 px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-kaaty-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[36px] font-extrabold leading-tight text-white sm:text-[48px]">
                Ready to clear the rush?
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-200">
                Join modern food businesses upgrading their operations with Kaaty POS. No generic
                demos—see it working for your specific workflow.
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
