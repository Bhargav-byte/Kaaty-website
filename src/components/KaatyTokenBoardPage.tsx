import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { PremiumTokenBoardUi } from './TokenBoardUiMockups'

export function KaatyTokenBoardPage() {
  return (
    <div className="pt-24 min-h-screen font-sans">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6 border border-orange-200 shadow-sm">
                <Icon name="tv" size={16} />
                Kaaty Token Board
              </div>
              <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                Know when your order is ready.
              </h1>
              <p className="text-lg text-navy-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Kaaty Token Board gives customers a clear, real-time view of orders being prepared
                and orders ready for pickup—right where they can see it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button as="a" href="/demo?source=token_board_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#tour" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative z-10 w-full max-w-[600px] mx-auto lg:max-w-none">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl bg-navy-900 border border-gray-200 group">
                <img
                  src="/images/kiosk-canteen.jpg"
                  alt="Token Board in Canteen"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                {/* Floating Token Board UI overlay to simulate real screen */}
                <div className="absolute top-1/4 left-[10%] right-[10%] shadow-2xl rounded border border-gray-700 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                  <div className="pointer-events-none scale-[0.6] origin-top">
                    <PremiumTokenBoardUi />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mb-6">
              Your customers shouldn't have to ask if their order is ready.
            </h2>
            <p className="text-lg text-navy-600 mb-12">
              During busy service, customers need a simple way to know when to collect their food. A
              clear token display keeps pickup information visible without adding more work for your
              counter team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Without */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-navy text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm">
                  <Icon name="users" size={20} className="text-gray-400" />
                </div>
                Without a Token Board
              </h3>
              <ul className="space-y-5 text-navy-600 relative before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-gray-300">
                <li className="flex gap-4 relative items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />{' '}
                  Customer waits
                </li>
                <li className="flex gap-4 relative items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />{' '}
                  Customer checks counter
                </li>
                <li className="flex gap-4 relative items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />{' '}
                  Customer asks staff
                </li>
                <li className="flex gap-4 relative items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />{' '}
                  Staff checks order
                </li>
                <li className="flex gap-4 relative items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-red-400 shrink-0 relative z-10" />{' '}
                  Pickup confusion
                </li>
              </ul>
            </div>

            {/* With */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 bg-white rounded-full border border-gray-100 flex items-center justify-center text-gray-400 shadow-md hidden md:flex z-20">
                <Icon name="arrow-right" size={24} />
              </div>
              <h3 className="font-bold text-kaaty-700 text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-md shadow-orange-500/30">
                  <Icon name="tv" size={20} className="text-white" />
                </div>
                With Kaaty Token Board
              </h3>
              <ul className="space-y-5 text-navy relative before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-orange-200">
                <li className="flex gap-4 relative items-center font-medium">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-orange-500 shrink-0 relative z-10" />{' '}
                  Order placed
                </li>
                <li className="flex gap-4 relative items-center font-medium">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-orange-500 shrink-0 relative z-10" />{' '}
                  Token displayed
                </li>
                <li className="flex gap-4 relative items-center font-medium">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-orange-500 shrink-0 relative z-10" />{' '}
                  Order prepared
                </li>
                <li className="flex gap-4 relative items-center font-medium">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-orange-500 shrink-0 relative z-10" />{' '}
                  Token moves to Ready
                </li>
                <li className="flex gap-4 relative items-center font-medium">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-[3px] border-green-500 shrink-0 relative z-10" />{' '}
                  Customer picks up smoothly
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="tour" className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHead
            eyebrow="The Workflow"
            title="From order to pickup, everyone knows the status."
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-gray-100"></div>
              <div className="w-12 h-12 rounded-full bg-navy text-white font-bold flex items-center justify-center mb-6 relative z-10 shadow-md">
                01
              </div>
              <h4 className="font-bold text-navy text-lg mb-2">Order Placed</h4>
              <p className="text-navy-600 text-sm">
                A token is generated for the customer's order at the POS or Kiosk.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-gray-100"></div>
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mb-6 relative z-10 shadow-md shadow-blue-500/20">
                02
              </div>
              <h4 className="font-bold text-navy text-lg mb-2">Preparing</h4>
              <p className="text-navy-600 text-sm">
                The token appears under PREPARING while the order is being made in the kitchen.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-gray-100"></div>
              <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold flex items-center justify-center mb-6 relative z-10 shadow-md shadow-green-500/20">
                03
              </div>
              <h4 className="font-bold text-navy text-lg mb-2">Ready</h4>
              <p className="text-navy-600 text-sm">
                The token moves to READY TO PICKUP when the kitchen marks the order ready.
              </p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center mb-6 relative z-10 shadow-md shadow-orange-500/20">
                04
              </div>
              <h4 className="font-bold text-navy text-lg mb-2">Pickup</h4>
              <p className="text-navy-600 text-sm">
                The customer sees their token in green and confidently collects their order.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PRODUCT DEMO */}
      <section className="py-20 lg:py-32 bg-navy-50 border-y border-navy-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Simple enough to understand at a glance.
            </h2>
            <p className="text-lg text-navy-600 mt-6">
              Designed for large screens and busy pickup areas, the board keeps the two things
              customers need most visible: what's being prepared and what's ready.
            </p>
          </div>

          <PremiumTokenBoardUi />

          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h4 className="font-bold text-navy mb-2">Clear Status</h4>
              <p className="text-sm text-navy-600">
                Customers immediately see whether their token is being prepared (blue) or is ready
                (green).
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h4 className="font-bold text-navy mb-2">Large Display</h4>
              <p className="text-sm text-navy-600">
                Large token numbers are designed to remain highly readable from anywhere in the
                pickup area.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h4 className="font-bold text-navy mb-2">Simple Workflow</h4>
              <p className="text-sm text-navy-600">
                Two clear states keep the customer experience incredibly easy to understand.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ECOSYSTEM */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent rounded-3xl -z-10 transform -rotate-3 scale-105"></div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="monitor" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Kaaty POS / Kiosk</h4>
                </div>
                <div className="ml-9 w-0.5 h-6 bg-orange-200"></div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="file-text" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Order & Token Generated</h4>
                </div>
                <div className="ml-9 w-0.5 h-6 bg-orange-200"></div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="chef-hat" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Kaaty KDS (Kitchen)</h4>
                </div>
                <div className="ml-9 w-0.5 h-6 bg-orange-200"></div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check-circle-2" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Order Marked Ready</h4>
                </div>
                <div className="ml-9 w-0.5 h-6 bg-orange-200"></div>
                <div className="bg-white p-5 rounded-2xl shadow-md border border-orange-100 flex items-center gap-4 relative z-10 ring-2 ring-orange-500/20">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0">
                    <Icon name="tv" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Kaaty Token Board Updates</h4>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl mb-6">
                From order to pickup, <br />
                <span className="text-kaaty-500">connected to Kaaty.</span>
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                The Token Board receives status changes instantly from the Kaaty KDS. When the
                kitchen finishes an order, the status updates automatically in the pickup area. No
                manual refreshing required.
              </p>
              <Button as="a" href="/products/kds" variant="outline">
                Explore Kaaty KDS
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. ENVIRONMENTS */}
      <section className="py-20 lg:py-32 bg-navy-900 text-white">
        <Container>
          <SectionHead
            light
            eyebrow="Environments"
            title="Built for busy pickup environments."
            sub="Keep customer flow organized wherever you serve."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Canteen */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-canteen.jpg"
                  alt="Token Board in College Canteen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="graduation-cap" size={20} className="text-kaaty-500" />
                  College Canteens
                </h3>
                <p className="text-navy-300 text-sm">
                  Students can check token status from the pickup area instead of repeatedly
                  approaching the counter.
                </p>
              </div>
            </div>

            {/* QSR */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-qsr.jpg"
                  alt="Token Board in QSR"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="store" size={20} className="text-kaaty-500" />
                  Quick Service (QSR)
                </h3>
                <p className="text-navy-300 text-sm">
                  Keep customer pickup moving during busy service periods without manual yelling.
                </p>
              </div>
            </div>

            {/* Food Court */}
            <div className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kiosk-foodcourt.jpg"
                  alt="Token Board in Food Court"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Icon name="building-2" size={20} className="text-kaaty-500" />
                  Food Courts
                </h3>
                <p className="text-navy-300 text-sm">
                  Give customers a clear visual status while they wait near the pickup area.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-white text-center">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
            Make every pickup easier to follow.
          </h2>
          <p className="text-navy-600 mb-8 max-w-2xl mx-auto">
            Give customers a clear view of their order status with Kaaty Token Board.
          </p>
          <Button as="a" href="/demo?source=token_board_bottom" variant="primary" size="lg">
            Book a Free Demo &rarr;
          </Button>
        </Container>
      </section>
    </div>
  )
}
