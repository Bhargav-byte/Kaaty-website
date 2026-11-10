import { useState } from 'react'
import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import type { ScreenType } from './MobileAppUiMockups'
import { PremiumMobileAppUi } from './MobileAppUiMockups'

export function KaatyMobileAppPage() {
  const [workflowStep, setWorkflowStep] = useState<number>(0)
  const [showcaseScreen, setShowcaseScreen] = useState<ScreenType>('home')

  const workflowSteps: {
    id: number
    num: string
    title: string
    desc: string
    screen: ScreenType
    icon: string
  }[] = [
    {
      id: 0,
      num: '01',
      title: 'EXPLORE',
      desc: 'Customers browse food categories and menu items with clear photos and dietary tags.',
      screen: 'home',
      icon: 'search',
    },
    {
      id: 1,
      num: '02',
      title: 'SELECT DISHES',
      desc: 'Customers choose dishes, view instant prices, and add items into their live cart.',
      screen: 'menu',
      icon: 'utensils',
    },
    {
      id: 2,
      num: '03',
      title: 'CART & CHECKOUT',
      desc: 'Review selected dishes, adjust quantities, choose payment method, and place the order.',
      screen: 'cart',
      icon: 'shopping-bag',
    },
    {
      id: 3,
      num: '04',
      title: 'TRACK & PICK UP',
      desc: 'Follow live kitchen status: Ordered → Preparing → Ready. Pick up smoothly when ready.',
      screen: 'tracking',
      icon: 'timer',
    },
  ]

  const showcaseTabs: {
    id: ScreenType
    label: string
    title: string
    desc: string
    features: string[]
  }[] = [
    {
      id: 'home',
      label: 'Home Screen',
      title: 'Campus & Venue Home Screen',
      desc: 'The central hub for your customers. Displays venue identity, location selector, global search, categorized meals, popular items, and an active floating order tracker.',
      features: [
        'Branded business name and campus location selector',
        'Direct search with smart dish suggestions',
        'Visual category filters (Breakfast, Lunch, Snacks, Beverages)',
        'Docked active order pill bar with 1-tap tracking handoff',
      ],
    },
    {
      id: 'menu',
      label: 'Digital Menu',
      title: 'Visual Menu Catalog',
      desc: 'Rich digital menus presenting dish photos, pricing, descriptions, and veg/non-veg indicators so customers can make informed choices quickly.',
      features: [
        'Category-based navigation and dietary badges',
        'Real prices and high-resolution food imagery',
        'Quick item addition with quantity adjustment controls',
        'Clear cart indicator bar with direct review handoff',
      ],
    },
    {
      id: 'cart',
      label: 'Cart & Checkout',
      title: 'Cart, Quantities & Payment',
      desc: 'Full interactive cart allowing customers to modify quantities, remove items, review the bill breakdown, and choose from supported campus payment methods.',
      features: [
        'Full itemized list with instant subtotal and tax calculation',
        'Quantity increment/decrement and item removal controls',
        'Supported payment options (UPI / QR, Student ID Card, Counter Pay)',
        'Simulated one-tap payment leading to order confirmation',
      ],
    },
    {
      id: 'tracking',
      label: 'Live Tracking',
      title: 'Real-Time Order Tracking',
      desc: 'Crystal-clear order status tracking featuring a high-visibility token number header, order summary, and real-time stage progress.',
      features: [
        'Prominent order token number designed for fast counter verification',
        'Itemized order card with date, items, and total amount',
        'Sequential timeline: Ordered → Preparing → Ready → Delivered',
        'Direct status synchronization with the kitchen KDS',
      ],
    },
    {
      id: 'orders',
      label: 'Order History',
      title: 'Order History & Receipts',
      desc: 'A complete chronological record of current and previous orders, giving customers instant access to active status and past receipts.',
      features: [
        'Active orders highlighted with current kitchen state',
        'Full historical list of delivered orders',
        '1-tap navigation to live tracking for ongoing orders',
        'Simple reference for repeat meal selection',
      ],
    },
    {
      id: 'profile',
      label: 'Profile',
      title: 'Customer Account & Profile',
      desc: 'Personalized customer profile keeping track of customer identity, total orders completed, payment preferences, and notification settings.',
      features: [
        'Customer avatar and verified account credentials',
        'Total order milestone counter (e.g. 161 Orders)',
        'Direct access to saved payment methods',
        'Notification preferences and profile management',
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
                <Icon name="smartphone" size={16} />
                <span>Kaaty Mobile App</span>
              </div>

              <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.08]">
                Your food business, <br />
                <span className="text-[#FA5A1E]">right in your customers' hands.</span>
              </h1>

              <p className="text-lg sm:text-xl text-navy-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Give customers a convenient way to explore your menu, place orders and follow their
                order status through a branded Kaaty mobile experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button as="a" href="/demo?source=mobile_app_hero" variant="primary" size="lg">
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
                    <span>Visual Menu</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Photos & categories</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Live Tracking</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Token # status sync</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Zero Chaos</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Order from phone</p>
                </div>
              </div>
            </div>

            {/* Right Column: Dual Phone Showcase (Neatly contained with no edge overflow) */}
            <div className="lg:col-span-5 relative z-10 flex justify-center items-center py-4 px-2 sm:px-6">
              <div className="relative w-full max-w-[380px] mx-auto flex items-center justify-center">
                {/* Secondary Background Phone (Order Tracking) */}
                <div className="hidden sm:block absolute -right-4 top-6 scale-[0.85] opacity-80 rotate-3 transition-transform duration-500 filter drop-shadow-xl z-0 pointer-events-none">
                  <PremiumMobileAppUi initialScreen="tracking" compact={true} />
                </div>

                {/* Primary Foreground Phone (Home Screen - Interactive) */}
                <div className="relative z-10 filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
                  <PremiumMobileAppUi initialScreen="home" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. PROBLEM SECTION (Traditional vs Kaaty Mobile App)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mb-6">
              Ordering shouldn't begin with standing in line.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              During busy campus and lunch service, customers need a simple way to discover food and
              order without crowding around the counter. Moving ordering to the customer's phone
              keeps your service moving fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Traditional Experience Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
                    <Icon name="users" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Traditional Ordering</h3>
                    <p className="text-xs text-gray-400">Queue friction at the counter</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-navy-600 relative before:absolute before:inset-y-2 before:left-2 before:w-[2px] before:bg-gray-200">
                  <li className="flex gap-4 relative items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />
                    <span>Customer reaches counter and waits in line</span>
                  </li>
                  <li className="flex gap-4 relative items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />
                    <span>Waits to see the physical menu board</span>
                  </li>
                  <li className="flex gap-4 relative items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />
                    <span>Places order verbally with counter cashier</span>
                  </li>
                  <li className="flex gap-4 relative items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-gray-300 shrink-0 relative z-10" />
                    <span>Waits around pickup counter for manual calls</span>
                  </li>
                  <li className="flex gap-4 relative items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-red-400 shrink-0 relative z-10" />
                    <span className="text-red-600 font-medium">
                      Repeated inquiries: "Is my order ready?"
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-500 text-center font-medium">
                Results in crowded pickup counters and slow throughput.
              </div>
            </div>

            {/* Kaaty Mobile App Experience Card */}
            <div className="bg-gradient-to-br from-orange-50/80 to-orange-100/30 p-8 rounded-3xl border border-orange-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FA5A1E]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#FA5A1E] text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                    <Icon name="smartphone" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">With Kaaty Mobile App</h3>
                    <p className="text-xs text-[#FA5A1E] font-medium">Independent mobile flow</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-navy relative before:absolute before:inset-y-2 before:left-2 before:w-[2px] before:bg-orange-300">
                  <li className="flex gap-4 relative items-center font-medium">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FA5A1E] shrink-0 relative z-10" />
                    <span>Explore menu and dishes on the phone anywhere</span>
                  </li>
                  <li className="flex gap-4 relative items-center font-medium">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FA5A1E] shrink-0 relative z-10" />
                    <span>Browse visual categories with photos and dietary tags</span>
                  </li>
                  <li className="flex gap-4 relative items-center font-medium">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FA5A1E] shrink-0 relative z-10" />
                    <span>Place order and receive a direct digital token number</span>
                  </li>
                  <li className="flex gap-4 relative items-center font-medium">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FA5A1E] shrink-0 relative z-10" />
                    <span>Track status: Ordered → Preparing → Ready</span>
                  </li>
                  <li className="flex gap-4 relative items-center font-bold text-[#00c938]">
                    <div className="w-4 h-4 rounded-full bg-[#00c938] border-[3px] border-[#00c938] shrink-0 relative z-10" />
                    <span>Walk up to collect food only when it's ready</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-3 rounded-2xl bg-white/80 border border-orange-200 text-xs text-[#FA5A1E] text-center font-bold">
                Keeps customers informed and lines at the counter clear.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS (Interactive Step-by-Step Workflow)
          ========================================================================= */}
      <section id="workflow" className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHead
            eyebrow="The Workflow"
            title="From browsing to pickup, all in one app."
            sub="Tap any step to see how the customer journey unfolds inside the application."
            align="center"
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Step Selection Column */}
            <div className="lg:col-span-7 space-y-4">
              {workflowSteps.map((step, idx) => {
                const isActive = workflowStep === idx
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setWorkflowStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl transition-all border flex items-start gap-5 ${
                      isActive
                        ? 'bg-orange-50/70 border-[#FA5A1E] shadow-sm'
                        : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl font-bold flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#FA5A1E] text-white shadow-md shadow-orange-500/20'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <Icon name={step.icon} size={22} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#FA5A1E]">{step.num}</span>
                        <h4 className="text-lg font-bold text-navy">{step.title}</h4>
                      </div>
                      <p className="text-sm text-navy-600 leading-relaxed">{step.desc}</p>
                    </div>

                    <div className="self-center hidden sm:block">
                      <Icon
                        name="arrow-right"
                        size={18}
                        className={isActive ? 'text-[#FA5A1E]' : 'text-gray-300'}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Interactive Phone Mockup Synchronized to Step */}
            <div className="lg:col-span-5 flex justify-center py-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-amber-50 rounded-[54px] -z-10 blur-xl opacity-70" />
                <PremiumMobileAppUi
                  activeScreen={workflowSteps[workflowStep].screen}
                  onScreenChange={(screen) => {
                    const matchIndex = workflowSteps.findIndex((s) => s.screen === screen)
                    if (matchIndex >= 0) setWorkflowStep(matchIndex)
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. FEATURES SECTION (4 Core Product Capability Cards)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-navy-50 border-y border-navy-100">
        <Container>
          <SectionHead
            eyebrow="Capabilities"
            title="Everything customers need, in one place."
            sub="A focused customer ordering app built specifically for quick, reliable campus and venue dining."
            align="center"
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-6">
                  <Icon name="palette" size={24} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Branded Ordering Experience</h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Give customers a dedicated mobile experience associated with your food business
                  name, location, and culinary identity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#FA5A1E]">
                <Icon name="check" size={14} />
                <span>Custom outlet identity</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Icon name="utensils" size={24} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Visual Digital Menu</h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Present categories, food images, pricing, and clear dietary indicators in an
                  easy-to-browse mobile layout.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <Icon name="check" size={14} />
                <span>Photos & dietary tags</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Icon name="timer" size={24} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Live Order Tracking</h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Let customers follow real-time order progress through clear stages: Ordered,
                  Preparing, Ready, and Delivered.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <Icon name="check" size={14} />
                <span>Direct token number sync</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Icon name="file-text" size={24} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">Order History & Profile</h4>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Give customers instant access to their previous order receipts, quick favorites,
                  and personalized account details.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                <Icon name="check" size={14} />
                <span>Receipts & profile settings</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. APP SCREENS SHOWCASE (Interactive Gallery with Cart & Checkout)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHead
            eyebrow="Interactive Showcase"
            title="A closer look at the Kaaty experience."
            sub="Explore each screen of the customer ordering application, designed for zero confusion and effortless re-ordering."
            align="center"
          />

          {/* Screen Tab Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {showcaseTabs.map((tab) => {
              const isSelected = showcaseScreen === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setShowcaseScreen(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Active Screen Feature Panel & Phone Preview */}
          <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 via-white to-orange-50/30 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              {(() => {
                const currentTab =
                  showcaseTabs.find((t) => t.id === showcaseScreen) ?? showcaseTabs[0]
                return (
                  <>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FA5A1E] text-xs font-bold">
                      <Icon name="smartphone" size={14} />
                      <span>{currentTab.label}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
                      {currentTab.title}
                    </h3>

                    <p className="text-navy-600 text-base leading-relaxed">{currentTab.desc}</p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">
                        Screen Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {currentTab.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-navy-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                              <Icon name="check" size={12} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Right Phone Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <PremiumMobileAppUi
                activeScreen={showcaseScreen}
                onScreenChange={(screen) => setShowcaseScreen(screen)}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          DOWNLOAD & EXPERIENCE SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gray-50/75 border-t border-gray-100">
        <Container>
          <SectionHead
            eyebrow="Get Kaaty"
            title="Experience Kaaty. Wherever you are."
            sub="Download the Kaaty app on your phone or explore the complete ordering experience directly from your browser."
            align="center"
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {/* OPTION 1 — GOOGLE PLAY */}
            <a
              href="https://play.google.com/store/apps/details?id=com.nishanth2006.katty"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 shadow-xs group-hover:scale-105 transition-transform">
                    {/* Google Play Multi-colored Vector Logo */}
                    <svg className="w-7 h-7" viewBox="0 0 512 512" aria-hidden="true">
                      <path
                        fill="#00C3FF"
                        d="M32.5 24.3C27 30.1 24 38.6 24 49.5v413c0 10.9 3 19.4 8.5 25.2l232-232L32.5 24.3z"
                      />
                      <path
                        fill="#00E676"
                        d="M341.2 328.7l-76.7-76.7-232 232c7.7 8.2 20.5 9.2 34.6 1.4l274.1-156.7z"
                      />
                      <path
                        fill="#FF334C"
                        d="M341.2 183.3L67.1 26.6C53 18.8 40.2 19.8 32.5 28l232 232 76.7-76.7z"
                      />
                      <path
                        fill="#FFD400"
                        d="M485.4 240.2l-144.2-82.5-68.7 68.7 68.7 68.7 144.2-82.5c15.2-8.7 15.2-22.9 0-31.6z"
                      />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/60">
                    Android
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-navy group-hover:text-black mb-2 leading-tight">
                  Available on Google Play
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Download Kaaty on your Android device and order ahead from any campus counter or
                  food court.
                </p>
              </div>

              <div className="pt-2">
                <div className="w-full py-3 px-4 rounded-2xl bg-navy text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm group-hover:bg-black transition-colors">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 512 512" aria-hidden="true">
                    <path
                      fill="#00C3FF"
                      d="M32.5 24.3C27 30.1 24 38.6 24 49.5v413c0 10.9 3 19.4 8.5 25.2l232-232L32.5 24.3z"
                    />
                    <path
                      fill="#00E676"
                      d="M341.2 328.7l-76.7-76.7-232 232c7.7 8.2 20.5 9.2 34.6 1.4l274.1-156.7z"
                    />
                    <path
                      fill="#FF334C"
                      d="M341.2 183.3L67.1 26.6C53 18.8 40.2 19.8 32.5 28l232 232 76.7-76.7z"
                    />
                    <path
                      fill="#FFD400"
                      d="M485.4 240.2l-144.2-82.5-68.7 68.7 68.7 68.7 144.2-82.5c15.2-8.7 15.2-22.9 0-31.6z"
                    />
                  </svg>
                  <span>Get it on Google Play</span>
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="text-gray-300 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </a>

            {/* OPTION 2 — APP STORE */}
            <a
              href="https://apps.apple.com/in/app/kaaty/id6757310016"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 shadow-xs group-hover:scale-105 transition-transform">
                    {/* Official Pixel-Perfect Apple Vector Logo */}
                    <svg
                      className="w-7 h-7 fill-current text-navy group-hover:text-black transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.16.65-2.84 1.44-.59.69-1.11 1.76-1.01 2.82 1.07.08 2.21-.57 2.84-1.39z" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200/60">
                    iOS
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-navy group-hover:text-black mb-2 leading-tight">
                  Download on the App Store
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Get the Kaaty experience on your iPhone with seamless order tracking and instant
                  tokens.
                </p>
              </div>

              <div className="pt-2">
                <div className="w-full py-3 px-4 rounded-2xl bg-navy text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm group-hover:bg-black transition-colors">
                  <svg
                    className="w-3.5 h-3.5 fill-white shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.16.65-2.84 1.44-.59.69-1.11 1.76-1.01 2.82 1.07.08 2.21-.57 2.84-1.39z" />
                  </svg>
                  <span>Download on App Store</span>
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="text-gray-300 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </a>

            {/* OPTION 3 — KAATY WEB APP (Prominent Kaaty Orange Accent) */}
            <a
              href="https://kaaty.store"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white via-orange-50/20 to-orange-100/40 rounded-3xl p-7 border-2 border-[#FA5A1E]/30 shadow-lg shadow-orange-500/5 hover:shadow-2xl hover:border-[#FA5A1E] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left ring-1 ring-[#FA5A1E]/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FA5A1E]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center p-2.5 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon name="globe" size={26} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FA5A1E] text-white text-[11px] font-bold shadow-xs">
                    No Install Required
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-navy group-hover:text-[#FA5A1E] transition-colors mb-2 leading-tight">
                  Experience Kaaty on the Web
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-6">
                  Explore the Kaaty ordering experience directly from your browser. No app
                  installation required.
                </p>
              </div>

              <div className="pt-2">
                <div className="w-full py-3.5 px-4 rounded-2xl bg-[#FA5A1E] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 group-hover:bg-orange-600 active:scale-[0.98] transition-all">
                  <span>Explore Kaaty Web App &rarr;</span>
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. CONNECTED KAATY ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-navy-50 overflow-hidden border-t border-navy-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Interactive Workflow Diagram */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-transparent rounded-3xl -z-10 transform -rotate-2 scale-105" />

              <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                {/* Step 1: Customer Mobile App */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-orange-100 text-[#FA5A1E] rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="smartphone" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">1. Order Placed on Mobile App</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Customer selects food and receives digital Token #78.
                    </p>
                  </div>
                </div>

                <div className="ml-10 w-0.5 h-6 bg-orange-200" />

                {/* Step 2: Kaaty POS / Backend */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="monitor" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">2. Synced with Kaaty POS System</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Transaction logs automatically; counter staff sees incoming orders.
                    </p>
                  </div>
                </div>

                <div className="ml-10 w-0.5 h-6 bg-orange-200" />

                {/* Step 3: Kitchen Display (KDS) */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="chef-hat" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">3. Appears Live on Kaaty KDS</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      Kitchen begins preparing items immediately. No printed paper tickets needed.
                    </p>
                  </div>
                </div>

                <div className="ml-10 w-0.5 h-6 bg-orange-200" />

                {/* Step 4: Ready & Token Board */}
                <div className="bg-white p-5 rounded-2xl shadow-md border border-green-200 flex items-center gap-4 relative z-10 ring-2 ring-green-500/20">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon name="check-circle-2" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">4. Order Ready & Customer Pickup</h4>
                    <p className="text-xs text-navy-500 mt-0.5">
                      App updates to Ready; Token #78 shows on venue display for collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Description */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FA5A1E] font-semibold text-xs mb-4">
                <Icon name="refresh-cw" size={14} />
                <span>Connected Operations</span>
              </div>

              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl mb-6">
                More than an ordering app. <br />
                <span className="text-[#FA5A1E]">Connected to your operations.</span>
              </h2>

              <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                Kaaty Mobile App isn't an isolated silo. It feeds directly into the unified Kaaty
                ecosystem. When a customer orders on their phone, the kitchen sees it immediately on
                the KDS, the counter sees it on the POS, and status updates sync across displays in
                real time.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button as="a" href="/products/pos" variant="outline">
                  Explore Kaaty POS
                </Button>
                <Button as="a" href="/products/kds" variant="outline">
                  Explore Kaaty KDS
                </Button>
                <Button as="a" href="/products/token-board" variant="outline">
                  Explore Token Board
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. REAL-WORLD ENVIRONMENTS (College Canteens, Cafés & QSR, Food Courts)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <Container>
          <SectionHead
            light
            eyebrow="Environments"
            title="Designed for everyday food ordering."
            sub="Empowering high-traffic dining hubs where speed, clarity, and convenience matter most."
            align="center"
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. College Canteens */}
            <div className="group relative bg-navy-800 rounded-3xl overflow-hidden border border-navy-700 flex flex-col justify-between hover:border-orange-500/50 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src="/images/kds-canteen.jpg"
                  alt="Students using mobile ordering in college canteen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="graduation-cap" size={20} className="text-[#FA5A1E]" />
                  <h3 className="font-bold text-xl text-white">College Canteens</h3>
                </div>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Students browse menus and place food orders from campus lawns or lecture halls,
                  skipping the frantic lunch rush crowd at the counter.
                </p>
              </div>
            </div>

            {/* 2. Cafés & QSRs */}
            <div className="group relative bg-navy-800 rounded-3xl overflow-hidden border border-navy-700 flex flex-col justify-between hover:border-orange-500/50 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src="/images/kds-qsr.jpg"
                  alt="Quick service restaurant mobile ordering"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="coffee" size={20} className="text-[#FA5A1E]" />
                  <h3 className="font-bold text-xl text-white">Cafés & QSRs</h3>
                </div>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Customers explore the visual menu and place orders from their phones, keeping the
                  front counter free for quick meal handoffs and guest hospitality.
                </p>
              </div>
            </div>

            {/* 3. Restaurants & Food Courts */}
            <div className="group relative bg-navy-800 rounded-3xl overflow-hidden border border-navy-700 flex flex-col justify-between hover:border-orange-500/50 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src="/images/kds-foodcourt.jpg"
                  alt="Food court mobile ordering"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="building-2" size={20} className="text-[#FA5A1E]" />
                  <h3 className="font-bold text-xl text-white">Food Courts</h3>
                </div>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Give customers a convenient digital ordering channel that routes orders cleanly to
                  the right prep counters without crowding aisles.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. FINAL CTA
          ========================================================================= */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Bring your food business closer to your customers.
            </h2>
            <p className="text-navy-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              See how Kaaty Mobile App can make menu discovery, ordering and order tracking easier
              for your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button as="a" href="/demo?source=mobile_app_bottom" variant="primary" size="lg">
                Book a Free Demo &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
