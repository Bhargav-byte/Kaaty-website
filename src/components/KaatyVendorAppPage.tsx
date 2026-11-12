import { Container, Button } from './Primitives'
import { Icon } from './Icon'
import { PremiumVendorAppUi, type VendorAppScreen } from './VendorAppUiMockups'

export function KaatyVendorAppPage() {
  // Showcase gallery items
  const galleryScreens: Array<{
    id: VendorAppScreen
    label: string
    title: string
    desc: string
  }> = [
    {
      id: 'billing',
      label: 'Mobile POS Billing',
      title: 'Fast Order Entry',
      desc: 'Tap items, choose UPI or cash, and confirm orders in under three seconds.',
    },
    {
      id: 'orders',
      label: 'Stall KDS Tickets',
      title: 'Live Kitchen Queue',
      desc: 'Token-based order queue with 1-tap ready status and pickup handover.',
    },
    {
      id: 'menu',
      label: 'Menu Management',
      title: 'Direct Price Control',
      desc: 'Update dish prices, add daily specials, and organize categories on the fly.',
    },
    {
      id: 'stock',
      label: 'Stock Availability',
      title: '1-Tap 86 Switch',
      desc: 'Instantly mark sold-out items out-of-stock to avoid order confusion.',
    },
    {
      id: 'analytics',
      label: 'Daily Sales',
      title: 'Clear Business Insights',
      desc: 'Track daily revenue, total order volume, and cash vs UPI collections.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-rose-100 selection:text-rose-900">
      {/* =========================================================================
          01. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-white to-white">
        {/* Subtle Ambient Red Glow */}
        <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#DC354B]/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Positioning & CTAs */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DC354B]/30 shadow-xs">
                <span className="w-5 h-5 rounded-md bg-[#DC354B] flex items-center justify-center text-white">
                  <Icon name="store" size={12} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC354B]">
                  Kaaty Vendor App
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.08]">
                Your entire stall. <br />
                <span className="text-[#DC354B]">Right in your pocket.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-navy-600 max-w-2xl leading-relaxed font-normal">
                Run your food stall with a simple mobile POS. Manage orders, update your menu,
                control stock and track your daily sales — without needing a full POS setup.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  as="a"
                  href="/demo"
                  variant="primary"
                  size="lg"
                  className="bg-[#FA5A1E] hover:bg-[#e04e17] text-white shadow-lg shadow-orange-500/25 px-8 font-bold"
                >
                  Book a Free Demo
                </Button>
                <Button
                  as="a"
                  href="#billing"
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-navy hover:bg-gray-50 font-bold"
                >
                  Explore Features
                </Button>
              </div>

              {/* Trust Pillars */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#DC354B] font-bold text-sm sm:text-base">
                    <Icon name="smartphone" size={16} />
                    <span>Smartphone POS</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Zero bulky hardware needed</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#DC354B] font-bold text-sm sm:text-base">
                    <Icon name="printer" size={16} />
                    <span>Thermal Printing</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Bluetooth ESC/POS sync</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#DC354B] font-bold text-sm sm:text-base">
                    <Icon name="qr-code" size={16} />
                    <span>UPI QR & Cash</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Speed billing in seconds</p>
                </div>
              </div>
            </div>

            {/* Right Column: Red-Themed Smartphone Visual */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-center items-center py-4 px-2 sm:px-6">
              <div className="relative w-full max-w-[380px] mx-auto flex items-center justify-center">
                {/* Floating Vendor Live Badge */}
                <div className="hidden sm:block absolute -left-14 lg:-left-16 bottom-36 w-40 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-[0_12px_28px_rgba(220,53,75,0.15)] z-30 pointer-events-none sm:pointer-events-auto">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#DC354B] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#DC354B]">Stall Ready</span>
                  </div>
                  <div className="text-xs font-black text-navy">MGIT Fresh Juice</div>
                  <div className="text-[9px] text-gray-500 mt-0.5 leading-tight">
                    Token #104 • 84 orders today
                  </div>
                </div>

                {/* Primary Interactive Smartphone Mockup */}
                <div className="relative z-10 filter drop-shadow-[0_20px_45px_rgba(220,53,75,0.18)]">
                  <PremiumVendorAppUi initialScreen="billing" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          02. SIMPLE MOBILE BILLING SECTION (Interactive Live POS Demo)
          ========================================================================= */}
      <section
        id="billing"
        className="scroll-mt-24 py-20 lg:py-32 bg-gray-50 border-t border-gray-100"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Mobile POS Billing
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Take orders. Get paid. Keep moving.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Street food stalls, campus juice counters, and small vendors do not have room for
              bulky cash registers or desktop computers. Kaaty Vendor App turns any smartphone into
              a fast, reliable order and billing machine.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Step Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  step: '01',
                  title: 'Tap to Add Items in Seconds',
                  icon: 'touch-pad',
                  desc: 'Large visual cards with photo thumbnails, prices, and fast category filters let staff punch in customer orders instantly.',
                  points: [
                    'Organized into Juices, Shakes, Snacks, and Chai',
                    'Single tap adds items; intuitive + and - for fast quantity adjustments',
                    'Veg and non-veg visual badges for instant identification',
                  ],
                },
                {
                  step: '02',
                  title: 'Flexible Payment Selection (UPI QR & Cash)',
                  icon: 'credit-card',
                  desc: 'Switch between dynamic UPI QR codes and cash collection with one tap right on the billing screen.',
                  points: [
                    'Shows exact order total with item count breakdown',
                    'Instant switch between UPI and Cash with zero lag',
                    'Transparent customer pricing without hidden charges',
                  ],
                },
                {
                  step: '03',
                  title: '1-Tap Order Confirmation & Token Generation',
                  icon: 'check-circle-2',
                  desc: 'Each confirmed order generates a sequential token number for orderly customer pickup at your stall counter.',
                  points: [
                    'Prints receipts via wireless Bluetooth thermal printers',
                    'Automatically streams ticket to the in-app KDS order queue',
                    'Instant reset button gets you ready for the next customer in seconds',
                  ],
                },
              ].map((feat) => (
                <div
                  key={feat.step}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-[#DC354B]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#DC354B] flex items-center justify-center shrink-0 border border-rose-100 shadow-xs">
                      <Icon name={feat.icon} size={22} strokeWidth={2} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-display text-base sm:text-lg font-bold text-navy">
                          {feat.title}
                        </h3>
                        <span className="text-xs font-black text-[#DC354B] bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                          {feat.step}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-3">
                        {feat.desc}
                      </p>

                      <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                        {feat.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center gap-2 text-xs font-medium text-navy-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DC354B]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Live Interactive POS Mockup */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center py-4">
              <div className="text-center mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                  ✨ Interactive Simulator — Tap items below!
                </span>
              </div>
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(220,53,75,0.18)]">
                <PremiumVendorAppUi initialScreen="billing" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          03. MENU MANAGEMENT SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Phone in Menu Mode */}
            <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(220,53,75,0.15)]">
                <PremiumVendorAppUi initialScreen="menu" />
              </div>
            </div>

            {/* Right: Copy & Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Menu Management
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl leading-tight">
                Your menu, always within reach.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed font-normal">
                Need to adjust the price of Badam Milk or add a seasonal fruit juice special? Modify
                your stall menu directly from your phone in seconds. No desktop required.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#DC354B] flex items-center justify-center mb-3">
                    <Icon name="tag" size={18} />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-1">Instant Price Edits</h4>
                  <p className="text-xs text-navy-500">
                    Change item rates on the fly without restarting or reloading terminals.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Icon name="layers" size={18} />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-1">Clean Categories</h4>
                  <p className="text-xs text-navy-500">
                    Group dishes into Juices, Shakes, Snacks, and Chai for fast counter punching.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Icon name="plus-circle" size={18} />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-1">Add Daily Specials</h4>
                  <p className="text-xs text-navy-500">
                    Introduce limited batch items or seasonal combos right from your pocket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          04. STOCK MANAGEMENT SECTION (1-Tap 86 Control)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Stock & Availability
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl leading-tight">
                Know what is available. <br />
                Never lose track.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed font-normal">
                When fresh lemons run out or the last sandwich bread loaf is sold, the last thing a
                stall vendor needs is arguing over unfulfillable orders. Kaaty Vendor App lets you
                86 any depleted item with a single tap.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-[#DC354B] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="x-circle" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">1-Tap 86 Depletion</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      Toggle any item to "86'd (Sold Out)". The button greys out instantly,
                      preventing accidental billing during peak rush.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check-circle" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Instant Re-Stocking</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      As soon as fresh ingredients arrive from the kitchen, one tap marks the dish
                      In Stock and restores it to your billing grid.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="package" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Batch Counter Visibility</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      Monitor pre-made batch quantities (e.g. 15 Badam milks remaining) so stall
                      staff know when to re-prep in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Phone in Stock Mode */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(220,53,75,0.15)]">
                <PremiumVendorAppUi initialScreen="stock" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          05. SALES & ANALYTICS SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Daily Stall Insights
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Your daily business, clearly presented.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              No complicated corporate spreadsheets. Just honest, clear metrics that tell you
              exactly how much money you made, how many orders you took, and what sold best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-[#DC354B] flex items-center justify-center mb-4">
                  <Icon name="trending-up" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Today's Revenue
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Real-time gross stall sales total with live comparison against yesterday's intake.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-bold text-[#DC354B]">
                Live Counter Rollup
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="shopping-bag" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">Total Orders</h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Exact completed ticket volume and average customer spend per stall transaction.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-bold text-blue-600">
                Ticket Velocity
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="wallet" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  UPI vs Cash Split
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  See how much money was collected via smartphone QR codes versus physical cash
                  drawer.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-bold text-emerald-600">
                Payment Breakdown
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Icon name="clock" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Peak Rush Windows
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Hourly bar charts highlighting 10 AM breakfast breaks and 1 PM lunch crowd spikes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-bold text-purple-600">
                Rush Hour Mapping
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup in Analytics Mode */}
          <div className="flex justify-center items-center">
            <div className="relative filter drop-shadow-[0_20px_45px_rgba(220,53,75,0.15)]">
              <PremiumVendorAppUi initialScreen="analytics" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          06. BUILT FOR SMALL FOOD BUSINESSES (Use Cases)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Stall Categories
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Made for the people who run the stall.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Designed for dynamic, fast-moving Indian food vendors where counters are tight and
              customers are eager.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Case 1 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#DC354B] flex items-center justify-center mb-4">
                  <Icon name="utensils" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Street Food Stalls
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Pani puri, chaat, momo, and kathi roll stalls taking orders on handheld
                  smartphones without worrying about rain or messy counter wiring.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-[#DC354B]">
                ✓ Handheld mobile speed
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="graduation-cap" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  College Canteen Stalls
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Independent juice counters, Maggi stalls, and bakery counters operating inside
                  college campuses with rapid student peak rushes.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-blue-600">
                ✓ Campus token sync
              </div>
            </div>

            {/* Case 3 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="coffee" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Juice & Beverage Stalls
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Fresh fruit juice bars, thickshake counters, and tender coconut stalls adjusting
                  seasonal flavors and managing quick 1-tap orders.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-emerald-600">
                ✓ Fast modifier & 86 toggles
              </div>
            </div>

            {/* Case 4 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Icon name="store" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Small Cafés & QSRs
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Compact coffee kiosks and takeaway burger bars that need receipt printing and
                  daily UPI ledgering without a full-blown PC.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-purple-600">
                ✓ Bluetooth receipt printing
              </div>
            </div>

            {/* Case 5 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Icon name="flame" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Snack & Tea Counters
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Cutting chai stalls, samosa points, and evening snack carts processing dozens of
                  fast ₹20–₹50 cash & UPI micro-transactions per hour.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-amber-700">
                ✓ Micro-order velocity
              </div>
            </div>

            {/* Case 6 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                  <Icon name="building-2" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Food Court Vendors
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Sub-vendors running standalone food court counters with vendor-scoped orders,
                  independent inventory, and central mall sync.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-cyan-700">
                ✓ Multi-vendor separation
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          07. CONNECTED KAATY ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Ecosystem Integration
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Small stall. Big connected ecosystem.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              While Kaaty Vendor App runs lightweight on a vendor's smartphone, it is fully plugged
              into the Kaaty food-tech network whenever you expand or connect with campus food
              courts.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Center: Vendor App Operating Hub */}
            <div className="lg:col-span-12">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-navy to-slate-950 text-white shadow-xl border border-slate-800 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#DC354B]/20 text-[#DC354B] font-bold text-xs mb-2 border border-[#DC354B]/30">
                  Lightweight Stall OS
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                  Kaaty Vendor App
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mt-1">
                  The handheld stall interface taking customer orders, handling payments, and
                  synchronizing telemetry with the wider campus and food court ecosystem.
                </p>
              </div>
            </div>

            {/* Surrounding Connected Products */}
            <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-3">
                  <Icon name="layout-dashboard" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty Business App</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Stall daily sales and bank settlements stream automatically into owner dashboards.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <Icon name="chef-hat" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty KDS</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Complex orders can dispatch to separate back-kitchen displays when needed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Icon name="smartphone" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Customer Mobile App</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Student mobile pre-orders arrive directly into the vendor's incoming ticket queue.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Icon name="qr-code" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty QR Ordering</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Table and counter QR menus stay synced with your real-time 86 stock status.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Icon name="tv" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty Token Board</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Ready order tokens broadcast to overhead TV displays for clear customer pickups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-[#DC354B] flex items-center justify-center mb-3">
                  <Icon name="monitor" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty Counter POS</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Main canteen registers run heavy POS while satellite stalls run Vendor App.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          08. ACTUAL APP SCREEN GALLERY (5 Coordinated Mockups)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#DC354B] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Interface Gallery
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Everything your stall needs. Nothing it doesn't.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Explore the five essential operational modules of Kaaty Vendor App, built with its
              authentic red identity and simple, glanceable interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryScreens.map((screen) => (
              <div
                key={screen.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-rose-50 text-[#DC354B] font-bold text-xs border border-rose-200/60 shadow-xs">
                      {screen.label}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active Sync
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy mb-2">{screen.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                    {screen.desc}
                  </p>
                </div>

                {/* Compact Smartphone Mockup */}
                <div className="relative mx-auto my-2 filter drop-shadow-[0_15px_30px_rgba(220,53,75,0.12)]">
                  <PremiumVendorAppUi
                    compact={true}
                    interactive={false}
                    initialScreen={screen.id}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          09. FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-navy to-black text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#DC354B]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-rose-400 font-semibold text-xs sm:text-sm mb-6 border border-white/10">
              Get Started with Kaaty
            </span>

            <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Ready to simplify your stall operations?
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Start managing your orders, menu and stock with Kaaty Vendor App.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                as="a"
                href="/demo"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-[#FA5A1E] hover:bg-[#e04e17] text-white px-9 py-4 font-bold shadow-lg shadow-orange-500/30"
              >
                Book a Free Demo →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
