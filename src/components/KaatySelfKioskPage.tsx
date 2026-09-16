import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { KioskInteractiveInterface } from './KioskUiMockups'

export function KaatySelfKioskPage() {
  return (
    <div className="bg-white font-sans">
      {/* 1. HERO */}
      <section className="relative bg-navy-50 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="max-w-2xl relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-kaaty-500/10 px-3.5 py-1.5 text-[13px] font-bold text-kaaty-700">
                <Icon name="scan-line" size={16} /> Kaaty Self Kiosk
              </div>
              <h1 className="font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-[56px] lg:text-[64px]">
                Let customers order <br />
                <span className="text-kaaty-500">without the wait.</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-navy-600 sm:text-[20px] lg:max-w-[500px]">
                Give every customer a faster way to order. Kaaty Self Kiosk lets guests browse
                visual menus, customize items, and pay independently—sending orders straight to your
                kitchen.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button as="a" href="/demo?source=kiosk_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#tour" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-12 lg:mt-0 lg:pl-12">
              {/* Device composition over generated premium photo */}
              <div className="relative aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-navy-200 group">
                <img
                  src="/images/kiosk-hero.jpg"
                  alt="Customer using Kaaty Self Kiosk in a busy food court"
                  className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/40 transition-colors duration-500"></div>

                {/* Floating Kiosk UI mockup */}
                <div className="absolute top-1/2 left-1/4 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[50%] lg:w-[45%] aspect-[9/16] bg-white rounded-2xl shadow-[0_30px_40px_rgba(0,0,0,0.4)] border-4 border-navy-900 overflow-hidden rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col">
                  {/* Fake UI Header */}
                  <div className="bg-white px-3 py-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                        K
                      </div>
                      <div className="font-bold text-navy text-xs">Kaaty Cafe</div>
                    </div>
                  </div>
                  {/* Fake UI Content */}
                  <div className="flex-1 bg-gray-50 p-3 flex flex-col gap-3 overflow-hidden">
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-navy text-white text-[10px] rounded-full">
                        Burgers
                      </div>
                      <div className="px-3 py-1 bg-white border border-gray-200 text-navy-500 text-[10px] rounded-full">
                        Drinks
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg p-2 shadow-sm border border-gray-100"
                        >
                          <div className="aspect-square bg-gray-200 rounded-md mb-2 overflow-hidden">
                            <img
                              src={`/images/food/${i === 1 ? 'burger' : i === 2 ? 'fries' : i === 3 ? 'pizza' : 'dosa'}.jpg`}
                              className="w-full h-full object-cover"
                              alt="Food"
                            />
                          </div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 w-1/2 bg-orange-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Fake UI Footer */}
                  <div className="bg-white p-3 border-t border-gray-100">
                    <div className="w-full bg-orange-500 rounded-lg py-2 flex justify-center text-white text-xs font-bold">
                      View Cart (2)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE PROBLEM -> SOLUTION */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mb-6">
              The queue starts before the kitchen does.
            </h2>
            <p className="text-lg text-navy-600 mb-12">
              Waiting in line to order frustrates customers and bottlenecks your counter staff. Move
              the ordering process directly to the guest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="users" size={24} />
              </div>
              <h3 className="font-bold text-navy mb-2">Long Queues</h3>
              <p className="text-sm text-navy-500">
                Customers wait just to speak to a cashier, leading to walk-aways during rush hour.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <Icon name="arrow-right" size={32} className="text-gray-300" />
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                <Icon name="scan-line" size={24} />
              </div>
              <h3 className="font-bold text-navy mb-2">Self-Service Kiosk</h3>
              <p className="text-sm text-navy-600">
                Guests browse, select, and pay on their own terminal. Zero counter wait.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. HOW IT WORKS (INTERACTIVE MOCKUP) */}
      <section id="tour" className="py-20 lg:py-32 bg-navy-50 border-y border-navy-100">
        <Container>
          <SectionHead
            eyebrow="The Workflow"
            title="A seamless journey from menu to meal."
            sub="See exactly what your customer experiences when they use a Kaaty Self Kiosk."
            align="center"
          />
          <div className="mt-16">
            <KioskInteractiveInterface />
          </div>
        </Container>
      </section>

      {/* 4. ECOSYSTEM / WORKFLOW */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent rounded-3xl -z-10 transform -rotate-3 scale-105"></div>

              <div className="space-y-4">
                {/* Kiosk Step */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="scan-line" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">1. Order Placed on Kiosk</h4>
                    <p className="text-sm text-navy-500 mt-1">
                      Customer pays and receives Token #42.
                    </p>
                  </div>
                </div>

                <div className="ml-9 w-0.5 h-6 bg-gray-200"></div>

                {/* KDS Step */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="chef-hat" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">2. Appears on Kitchen Display (KDS)</h4>
                    <p className="text-sm text-navy-500 mt-1">
                      Kitchen immediately sees the items. No physical ticket needed.
                    </p>
                  </div>
                </div>

                <div className="ml-9 w-0.5 h-6 bg-gray-200"></div>

                {/* Ready Step */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check-circle-2" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">3. Order Ready</h4>
                    <p className="text-sm text-navy-500 mt-1">
                      Token #42 is marked ready. Customer picks up their food.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl mb-6">
                Not just an isolated screen. <br />
                <span className="text-kaaty-500">Connected to your kitchen.</span>
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                The Kaaty Self Kiosk isn't a standalone tablet. It feeds directly into the Kaaty POS
                and KDS ecosystem. The moment a customer taps 'Pay', the order is in your kitchen
                queue.
              </p>
              <ul className="space-y-3">
                {[
                  'Orders instantly sync to Kaaty KDS',
                  'Inventory is automatically updated in Kaaty POS',
                  'Unified sales reporting in the Business App',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Icon name="check" size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. BUSINESS TYPES */}
      <section className="py-20 lg:py-32 bg-navy-900 text-white">
        <Container>
          <SectionHead
            light
            eyebrow="Environments"
            title="Built for high-volume service."
            sub="Wherever you have queues, the Kaaty Self Kiosk speeds up your throughput."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Canteen */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-canteen.jpg"
                  alt="Self Kiosk in College Canteen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="graduation-cap" size={20} className="text-kaaty-500" />
                  College Canteens
                </h3>
                <p className="text-navy-300 text-sm">
                  Handle massive 30-minute lunch rushes by letting students order and pay across
                  multiple terminals simultaneously.
                </p>
              </div>
            </div>

            {/* QSR */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-qsr.jpg"
                  alt="Self Kiosk in QSR"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="store" size={20} className="text-kaaty-500" />
                  Quick Service (QSR)
                </h3>
                <p className="text-navy-300 text-sm">
                  Keep the counter focused on handoffs while customers build their own burger and
                  fries combos on the kiosk.
                </p>
              </div>
            </div>

            {/* Food Court */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-foodcourt.jpg"
                  alt="Self Kiosk in Mall Food Court"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="building-2" size={20} className="text-kaaty-500" />
                  Food Courts
                </h3>
                <p className="text-navy-300 text-sm">
                  Stand out in a busy food court with a bright, interactive menu that captures foot
                  traffic before they reach the counter.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 bg-white text-center">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
            Ready to bust the queue?
          </h2>
          <p className="text-navy-600 mb-8 max-w-2xl mx-auto">
            Deploy Kaaty Self Kiosks in your venue and watch your average ticket size and customer
            satisfaction grow.
          </p>
          <Button as="a" href="/demo?source=kiosk_bottom" variant="primary" size="lg">
            Get a Demo
          </Button>
        </Container>
      </section>
    </div>
  )
}
