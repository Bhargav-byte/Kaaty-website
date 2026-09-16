import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { KdsInteractiveBoard, KdsWorkflowTimeline } from './KdsUiMockups'

export function KaatyKdsPage() {
  return (
    <div className="bg-white font-sans">
      {/* 1. HERO */}
      <section className="relative bg-navy-50 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="max-w-2xl relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-kaaty-500/10 px-3.5 py-1.5 text-[13px] font-bold text-kaaty-700">
                <Icon name="layout-dashboard" size={16} /> Kaaty KDS
              </div>
              <h1 className="font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-[56px] lg:text-[64px]">
                Every order. <br />
                <span className="text-kaaty-500">Clear for the kitchen.</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-600 sm:text-[20px] lg:max-w-[500px]">
                Turn incoming orders into an organized kitchen queue. Kaaty KDS gives your team a
                live view of prep status, tokens, and elapsed time—so everyone knows exactly what to
                prepare next.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button as="a" href="/demo?source=kds_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#tour" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0 lg:pl-12">
              {/* Device composition over generated premium photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-navy-200 group">
                <img
                  src="/images/kds-hero.jpg"
                  alt="Premium commercial kitchen environment during rush hour"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/40"></div>

                {/* Floating Tablet mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-navy-900 p-2 sm:p-3 rounded-2xl sm:rounded-[24px] shadow-2xl border border-navy-700/50 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/kaaty-kds.png"
                    alt="Kaaty KDS Interface"
                    className="w-full h-auto rounded-lg sm:rounded-xl opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE KITCHEN RUSH PROBLEM */}
      <section id="tour" className="py-24 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/images/kds-rush.jpg"
                alt="Busy lunch rush inside a high-volume Indian QSR kitchen"
                className="w-full h-auto rounded-2xl shadow-xl border border-navy-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-navy-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="font-bold text-navy-900">12:30 PM Peak Rush</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <SectionHead
                align="left"
                title="Orders are piling up. Who is making what?"
                sub="Without a clear kitchen display, staff must constantly figure out what is pending, what is preparing, and which token belongs to which order."
              />
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <Icon name="x" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900">The Chaos Problem</h4>
                    <p className="text-navy-600 mt-1">
                      Printed paper tickets get lost, get wet, or stack up invisibly. Staff lose
                      track of which order has been waiting the longest.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900">The Kaaty Solution</h4>
                    <p className="text-navy-600 mt-1">
                      Kaaty KDS instantly transforms every incoming order into a visible, organized,
                      and trackable kitchen queue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. INTERACTIVE MOCKUP - THE KITCHEN SEES WHAT MATTERS */}
      <section className="py-24 bg-navy-900 text-white">
        <Container>
          <SectionHead
            align="center"
            title="One screen. Every order you need."
            sub="Experience the actual Kaaty KDS interface. See live timers ticking, filter by categories, and mark orders as Ready to see them instantly update."
            light
          />
          <div className="mt-16">
            <KdsInteractiveBoard />
          </div>
        </Container>
      </section>

      {/* 4. WORKFLOW - FROM ORDER TO READY */}
      <section className="py-24 bg-navy-50 overflow-hidden">
        <Container>
          <SectionHead
            align="center"
            title="From incoming order to ready for pickup."
            sub="Kaaty connects the counter and the kitchen automatically. The exact moment an order is punched, the kitchen sees it."
          />
          <div className="mt-16">
            <KdsWorkflowTimeline />
          </div>
        </Container>
      </section>

      {/* 5. CAPABILITY CARDS */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Timer Visibility */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 hover:border-navy-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-kaaty-500 mb-6">
                <Icon name="timer" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Know how long every order has waited
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Every pending order card features a live elapsed timer. If an order sits too long,
                it immediately attracts the kitchen's attention, preventing severe delays.
              </p>
            </div>

            {/* Category Filters */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 hover:border-navy-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-kaaty-500 mb-6">
                <Icon name="filter" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Keep the kitchen completely organized
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Running a multi-station kitchen? Staff can instantly filter the KDS screen to only
                show Beverages, Mains, or specific categories, ignoring everything else.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 hover:border-navy-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-kaaty-500 mb-6">
                <Icon name="link" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Zero missed orders or confusion
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Because KDS is directly tied to the Kaaty POS and QR ordering system, every paid or
                placed order appears with absolute certainty. No manual calling required.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. READY MEANS READY */}
      <section className="py-24 bg-navy-900 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <SectionHead
                align="left"
                title="When the order is ready, the whole business knows."
                sub="The kitchen’s job ends the moment they tap 'Ready'. The status instantly updates on the POS and customer-facing Token Board, triggering a smooth pickup."
                light
              />
              <ul className="mt-8 space-y-4 text-navy-200">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle" size={18} className="text-emerald-400" />
                  Updates Token Status on the POS sidebar
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle" size={18} className="text-emerald-400" />
                  Flashes 'Ready' on the customer Token Board
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle" size={18} className="text-emerald-400" />
                  Logs exact preparation time in Analytics
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/kds-ready.jpg"
                alt="Premium burger and fries order ready for pickup on stainless steel counter"
                className="w-full h-auto rounded-2xl shadow-2xl border border-navy-700"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. REAL WORLD BUSINESS SCENARIOS */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHead
            align="center"
            title="Built for businesses that can't afford delays."
            sub="From small cafes to massive college canteens, Kaaty KDS scales to fit your operation's volume."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-navy-50 rounded-xl overflow-hidden border border-navy-100 group hover:shadow-lg transition-all">
              <img
                src="/images/food/biryani.jpg"
                alt="College Canteen"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="font-bold text-navy-900 text-lg">College Canteens</h4>
                <p className="text-sm text-navy-600 mt-2">
                  Handle high-volume, 30-minute lunch rushes where massive batch orders require
                  structured token-driven pickups.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-xl overflow-hidden border border-navy-100 group hover:shadow-lg transition-all">
              <img
                src="/images/food/burger.jpg"
                alt="QSR"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="font-bold text-navy-900 text-lg">QSRs</h4>
                <p className="text-sm text-navy-600 mt-2">
                  Keep fast-food throughput flowing steadily by monitoring live prep timers and
                  eliminating paper tickets.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-xl overflow-hidden border border-navy-100 group hover:shadow-lg transition-all">
              <img
                src="/images/food/latte.jpg"
                alt="Cafe"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="font-bold text-navy-900 text-lg">Cafés</h4>
                <p className="text-sm text-navy-600 mt-2">
                  Separate beverage and hot-food stations effortlessly using category filtering
                  directly on the KDS.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-xl overflow-hidden border border-navy-100 group hover:shadow-lg transition-all">
              <img
                src="/images/food/pizza.jpg"
                alt="Food Courts"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="font-bold text-navy-900 text-lg">Food Courts</h4>
                <p className="text-sm text-navy-600 mt-2">
                  Route orders from multiple counters and self-serve kiosks straight into one
                  centralized, organized kitchen queue.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. ECOSYSTEM & CTA */}
      <section className="py-24 bg-navy-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHead
              align="center"
              title="Keep every order moving."
              sub="Stop relying on shouts, paper tickets, and guesswork. Connect your counter to your kitchen and experience exactly what operational clarity feels like."
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="/demo?source=kds_footer" variant="primary" size="lg">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
