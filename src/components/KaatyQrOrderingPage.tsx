import { useState } from 'react'
import { Container, Button } from './Primitives'
import { Icon } from './Icon'
import { PremiumQrOrderingUi, type QrScreenState } from './QrOrderingUiMockups'

export function KaatyQrOrderingPage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<QrScreenState>('scan')

  const workflowSteps: Array<{
    id: QrScreenState
    stepNum: string
    title: string
    desc: string
    icon: string
  }> = [
    {
      id: 'scan',
      stepNum: '01',
      title: 'Scan Table QR',
      desc: 'Guests point their smartphone camera at the durable table stand. No app download or account creation needed.',
      icon: 'qr-code',
    },
    {
      id: 'menu',
      stepNum: '02',
      title: 'Explore Digital Menu',
      desc: 'The restaurant menu loads instantly in their mobile browser, pre-linked to their exact table number with photos and clear prices.',
      icon: 'book-open',
    },
    {
      id: 'cart',
      stepNum: '03',
      title: 'Order & Pay',
      desc: 'Guests select dishes, add special kitchen instructions, and complete payment via instant UPI QR or choose counter pay.',
      icon: 'shopping-bag',
    },
    {
      id: 'confirmation',
      stepNum: '04',
      title: 'Kitchen Prepares',
      desc: 'The order immediately routes to the kitchen KDS and counter POS with table number and token number for fast service.',
      icon: 'chef-hat',
    },
  ]

  const showcaseScreens: Array<{
    id: QrScreenState
    label: string
    title: string
    desc: string
    features: string[]
  }> = [
    {
      id: 'scan',
      label: 'QR Entry',
      title: 'Camera Scan & Table Recognition',
      desc: 'Instant camera recognition with zero barrier to entry. Guests scan the table QR code and the mobile ordering page opens directly in their browser.',
      features: [
        'Zero app download required — opens natively in mobile browsers',
        'Automatic table identification (e.g. Table 04)',
        'Durable table tent stand with custom restaurant branding',
        'Instant menu session creation for dining parties',
      ],
    },
    {
      id: 'menu',
      label: 'Digital Menu',
      title: 'Visual Menu with Category Filters',
      desc: 'Clean digital menu layout optimized for quick mobile browsing with category tabs, high-resolution food photos, and transparent pricing.',
      features: [
        'Structured category navigation (Breakfast, Lunch, Snacks, Drinks)',
        'Item photos, descriptions, and dietary veg / non-veg indicators',
        'Real-time out-of-stock sync prevents ordering unavailable items',
        'Instant search bar for fast dish discovery',
      ],
    },
    {
      id: 'item',
      label: 'Item Detail',
      title: 'Customization & Special Instructions',
      desc: 'Customers can view detailed dish ingredients, adjust portion quantities, and add specific preparation notes for the kitchen staff.',
      features: [
        'Dedicated kitchen notes field (e.g. less spicy, extra lemon)',
        'One-tap quantity increment and decrement controls',
        'Automatic subtotal calculation before adding to cart',
        'Seamless return to menu browsing',
      ],
    },
    {
      id: 'cart',
      label: 'Mobile Cart',
      title: 'Transparent Table Order Breakdown',
      desc: 'Full visibility into current selected items, quantities, restaurant taxes, and order total before finalizing checkout.',
      features: [
        'Itemized list with quantity adjustment and removal',
        'Transparent GST calculation with zero hidden fees',
        'Linked table number prominently displayed',
        '1-tap navigation to add more items from the menu',
      ],
    },
    {
      id: 'checkout',
      label: 'Payment',
      title: 'Flexible & Secure Table Checkout',
      desc: 'Supports verified payment methods tailored to Indian dining habits, including Instant UPI QR and flexible Pay-at-Counter options.',
      features: [
        'Instant UPI Intent / QR (GPay, PhonePe, Paytm, BHIM)',
        'Optional Pay-at-Counter support for cash and card settlement',
        'Direct order locking upon payment authorization',
        'Fast 1-tap checkout with no tedious registration forms',
      ],
    },
    {
      id: 'confirmation',
      label: 'Confirmation',
      title: 'Order Token & Real-Time Kitchen Sync',
      desc: 'Clear visual order confirmation displaying the auto-generated token number, table identifier, and live kitchen progress stage.',
      features: [
        'High-visibility order token number for easy staff identification',
        'Direct status synchronization with the kitchen KDS display',
        'Sequential timeline: Order Received → Preparing → Ready',
        'Option to easily order additional items for the same table',
      ],
    },
  ]

  return (
    <div className="pt-24 min-h-screen font-sans bg-white text-navy selection:bg-orange-100 selection:text-[#FA5A1E]">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />

        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FA5A1E] font-semibold text-xs sm:text-sm mb-6 border border-orange-200 shadow-sm">
                <Icon name="qr-code" size={16} />
                <span>Kaaty QR Ordering</span>
              </div>

              <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.08]">
                Scan. Order. <br />
                <span className="text-[#FA5A1E]">Enjoy.</span>
              </h1>

              <p className="text-lg sm:text-xl text-navy-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Let guests order from their table with a simple scan — fewer steps between choosing
                a meal and placing an order. No separate app installation required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button as="a" href="/demo?source=qr_ordering_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#workflow" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>

              {/* Verified Trust Metrics / Key Points */}
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Table-Aware</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Auto table ID</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Zero Install</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Mobile browser</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Direct Sync</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">To POS & KDS</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Table & Phone Visual */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-center items-center py-4 px-2 sm:px-6">
              <div className="relative w-full max-w-[380px] mx-auto flex items-center justify-center">
                {/* Secondary Table QR Stand Preview Card (Restaurant Atmosphere) */}
                <div className="hidden sm:block absolute -left-8 -bottom-4 w-40 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-xl z-20">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-4 h-4 rounded bg-[#FA5A1E] text-white flex items-center justify-center text-[9px] font-black">
                      K
                    </span>
                    <span className="text-[10px] font-extrabold text-navy">TABLE 04</span>
                  </div>
                  <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-lg p-1 mx-auto flex items-center justify-center">
                    <Icon name="qr-code" size={48} className="text-navy" />
                  </div>
                  <div className="text-[9px] font-bold text-center text-gray-500 mt-1.5 leading-tight">
                    Scan to Order
                  </div>
                </div>

                {/* Primary Interactive Smartphone Mockup */}
                <div className="relative z-10 filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
                  <PremiumQrOrderingUi initialScreen="scan" tableNumber="04" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. PROBLEM SECTION (Traditional Dine-In vs Kaaty QR Ordering)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mb-6">
              Why make guests wait just to place an order?
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              During peak dining hours, paper menus and back-and-forth waiter visits create delays.
              Moving menu discovery and order placement to the guest's smartphone makes dining
              effortless while freeing your staff to focus on warm hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Traditional Dine-In Friction */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
                    <Icon name="users" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Traditional Dine-In</h3>
                    <p className="text-xs text-gray-400">Manual staff-dependent ordering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">
                        Waiting for staff attention
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Guests sit at their table and wait for busy servers just to request a menu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Outdated paper menus</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Printed menus cannot show real-time item availability or vivid food
                        photography.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Order miscommunication</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Handwritten notes or manual POS punch errors lead to mistaken items and
                        kitchen waste.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Slow bill settlement</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Guests wait again to flag staff for physical bills and payment terminals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-400">
                Result: Slower table turnaround and frustrated diner experience
              </div>
            </div>

            {/* Kaaty QR Ordering Solution */}
            <div className="bg-gradient-to-br from-orange-50/50 to-white p-8 rounded-3xl border-2 border-[#FA5A1E]/30 shadow-md flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FA5A1E] text-white text-xs font-bold shadow-xs">
                Kaaty QR Flow
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center">
                    <Icon name="qr-code" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Kaaty QR Ordering</h3>
                    <p className="text-xs text-[#FA5A1E]">Self-directed, instant table ordering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Instant scan from table</h4>
                      <p className="text-xs text-navy-600 mt-0.5">
                        Guests sit down and immediately scan the table QR with their smartphone
                        camera.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">
                        Vivid photo menu in browser
                      </h4>
                      <p className="text-xs text-navy-600 mt-0.5">
                        Full digital catalog with dish images, categories, and live out-of-stock
                        indicators.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Direct to kitchen KDS</h4>
                      <p className="text-xs text-navy-600 mt-0.5">
                        Orders immediately route to the kitchen display system with exact table
                        numbers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-navy">Instant digital payment</h4>
                      <p className="text-xs text-navy-600 mt-0.5">
                        Guests pay smoothly via UPI on their phones or settle at the counter when
                        finished.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-orange-200/60 text-xs font-bold text-[#FA5A1E]">
                Result: Zero ordering delays, accurate tickets, and relaxed dining
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS (Connected to Live Interactive Mockup)
          ========================================================================= */}
      <section id="workflow" className="scroll-mt-24 py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Simple 4-Step Flow
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              From table to kitchen in a few simple steps.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Explore how effortless it is for diners to place their own orders. Click on any step
              below to test the live smartphone interface in real time.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: 4 Interactive Workflow Steps */}
            <div className="lg:col-span-7 space-y-4">
              {workflowSteps.map((step) => {
                const isActive = activeWorkflowStep === step.id
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveWorkflowStep(step.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isActive
                        ? 'bg-orange-50/50 border-[#FA5A1E] shadow-md ring-1 ring-[#FA5A1E]'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-black text-sm ${
                        isActive ? 'bg-[#FA5A1E] text-white shadow-sm' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {step.stepNum}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-display text-base sm:text-lg font-bold leading-tight ${
                            isActive ? 'text-[#FA5A1E]' : 'text-navy'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <Icon
                          name={step.icon}
                          size={18}
                          className={isActive ? 'text-[#FA5A1E]' : 'text-gray-400'}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right: Live Interactive Mockup Syncing with Steps */}
            <div className="lg:col-span-5 flex justify-center items-center py-4">
              <div className="relative z-10 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
                <PremiumQrOrderingUi
                  currentScreen={activeWorkflowStep}
                  onScreenChange={setActiveWorkflowStep}
                  tableNumber="04"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. FEATURES SECTION (4 Capability Cards)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              A simpler ordering experience for every table.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Every detail is engineered to make self-ordering easy for customers and effortless for
              restaurant management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Table QR Codes */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-5">
                  <Icon name="qr-code" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">Table QR Codes</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Give each dining table, booth, or counter seat a dedicated, identifiable QR code
                  that automatically tags orders with the right location.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#FA5A1E]">
                <Icon name="check" size={14} />
                <span>Zero manual table entry</span>
              </div>
            </div>

            {/* Card 2: Digital Menu */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <Icon name="book-open" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">Digital Menu</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Display menu categories, appetizing food images, transparent prices, and live item
                  availability updated directly from your POS.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                <Icon name="check" size={14} />
                <span>Live item availability</span>
              </div>
            </div>

            {/* Card 3: Direct Ordering */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <Icon name="shopping-bag" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">Direct Ordering</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Guests browse, select portion sizes, add special preparation notes, and place
                  orders directly from their own phone browser.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <Icon name="check" size={14} />
                <span>No app install needed</span>
              </div>
            </div>

            {/* Card 4: Connected Operations */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
                  <Icon name="chef-hat" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Connected Operations
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Orders print at the service counter or display directly on kitchen KDS screens,
                  keeping kitchen and waitstaff perfectly coordinated.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-purple-600">
                <Icon name="check" size={14} />
                <span>Instant POS & KDS sync</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. REAL PRODUCT SCREEN SHOWCASE
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Customer Journey
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              See what your guests experience.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Explore the end-to-end QR ordering screens. Each step is crafted for frictionless
              mobile interactions on any Android or iOS browser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {showcaseScreens.map((screen) => (
              <div
                key={screen.id}
                className="bg-gray-50 rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white text-navy font-bold text-xs border border-gray-200 shadow-xs">
                      {screen.label}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Web Flow
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy mb-2">{screen.title}</h3>
                  <p className="text-xs text-navy-600 leading-relaxed mb-6">{screen.desc}</p>
                </div>

                {/* Scaled Preview Frame */}
                <div className="relative my-4 flex justify-center items-center overflow-hidden py-2">
                  <div className="transform scale-[0.78] origin-center -my-14 filter drop-shadow-md">
                    <PremiumQrOrderingUi
                      initialScreen={screen.id}
                      compact={true}
                      interactive={false}
                      tableNumber="04"
                    />
                  </div>
                </div>

                {/* Key Points */}
                <div className="mt-4 pt-4 border-t border-gray-200/60 space-y-2">
                  {screen.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-navy-700">
                      <Icon name="check" size={13} className="text-[#FA5A1E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. ECOSYSTEM CONNECTION SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-navy-50 overflow-hidden border-t border-navy-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Workflow Diagram */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-transparent rounded-3xl -z-10 transform -rotate-2 scale-105" />

              <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                {/* Step 1: Customer Scans Table QR */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-orange-100 text-[#FA5A1E] rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="qr-code" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">1. Guest Scans Table QR</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Customer opens digital menu in browser with auto Table #04 detection
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2 relative z-0">
                  <div className="w-0.5 h-6 bg-orange-300" />
                </div>

                {/* Step 2: Kaaty Order Engine */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="cpu" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">2. Kaaty Order Processing</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Generates sequential token #142 and validates table payment status
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2 relative z-0">
                  <div className="w-0.5 h-6 bg-orange-300" />
                </div>

                {/* Step 3: Kitchen Display System (KDS) */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="chef-hat" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">3. Real-Time Kitchen Dispatch</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Tickets flash instantly on KDS screens with exact table # and prep timers
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2 relative z-0">
                  <div className="w-0.5 h-6 bg-orange-300" />
                </div>

                {/* Step 4: POS & Service */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="monitor" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">4. POS Counter Sync & Service</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Counter staff sees active table orders; runner delivers food to Table 04
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Description */}
            <div>
              <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Connected Operations
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
                Every table order connects to your operations.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                Kaaty QR Ordering is not a disconnected third-party menu. It ties straight into the
                same operational core that powers your billing counter and kitchen display system.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Unified Kitchen Queue</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      Whether an order is placed at the counter, kiosk, or from Table 04 via QR,
                      everything arrives in one chronological queue on the KDS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Real-Time Stock Depletion</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      When an item sells out at the counter, it instantly marks out-of-stock on
                      table QR menus to prevent unfulfillable orders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Consolidated End-of-Day Sales</h4>
                    <p className="text-xs text-navy-600 mt-0.5">
                      All table QR revenues reconcile cleanly alongside counter and takeaway orders
                      in Kaaty POS analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. INDUSTRIES SECTION (Restaurants, Cafés & QSRs, College Canteens)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Versatile Environments
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              A better way to order at every table.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Tailored for high-turnover food businesses where speeding up order placement directly
              improves table utilization and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Environment 1: Dine-In Restaurants */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-6">
                  <Icon name="utensils" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Dine-In Restaurants
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Let seated guests explore the full menu with rich dish photos, order rounds of
                  starters, re-order beverages, and pay without waiting for busy servers.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-medium text-navy-700">
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-[#FA5A1E]" />
                  <span>Effortless beverage & starter re-ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-[#FA5A1E]" />
                  <span>Faster table turns during lunch & dinner peaks</span>
                </div>
              </div>
            </div>

            {/* Environment 2: Cafés & QSRs */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Icon name="coffee" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">Cafés & QSRs</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Eliminate counter bottlenecks by allowing seated patrons to order coffees, quick
                  bites, and desserts directly from their booth or patio table.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-medium text-navy-700">
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-blue-600" />
                  <span>Cuts ordering lines during peak hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-blue-600" />
                  <span>Seated guests browse relaxed and add more items</span>
                </div>
              </div>
            </div>

            {/* Environment 3: College Canteens */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Icon name="graduation-cap" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">College Canteens</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Give students an immediate way to scan, order, and pay from bench tables during
                  short class breaks without crowding cash counters.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-medium text-navy-700">
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-emerald-600" />
                  <span>Distributes rush-hour ordering across all tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={13} className="text-emerald-600" />
                  <span>Fast UPI settlement with zero cash handling</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. FINAL CALL TO ACTION SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-navy-950 to-black text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <Container className="relative z-10 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-orange-400 font-semibold text-xs sm:text-sm mb-6 border border-white/10">
            Get Started with Kaaty
          </span>

          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
            Make ordering easier at every table.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Give your guests a simple way to explore your menu and place orders with Kaaty QR
            Ordering. See how fast your tables can turn with modern self-ordering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as="a"
              href="/demo?source=qr_ordering_footer"
              variant="primary"
              size="lg"
              className="bg-[#FA5A1E] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-orange-500/25"
            >
              Book a Free Demo →
            </Button>
            <Button
              as="a"
              href="#workflow"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-2xl"
            >
              See How It Works
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
