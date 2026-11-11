import { useState } from 'react'
import { Container, Button } from './Primitives'
import { Icon } from './Icon'
import { PremiumBusinessAppUi, type BusinessAppScreen } from './BusinessAppUiMockups'

export function KaatyBusinessAppPage() {
  const [activeDashboardTab, setActiveDashboardTab] = useState<BusinessAppScreen>('dashboard')

  // Showcase screens definitions
  const showcaseScreens: Array<{
    id: BusinessAppScreen
    label: string
    title: string
    desc: string
  }> = [
    {
      id: 'dashboard',
      label: 'Real-Time Overview',
      title: 'Owner Command Dashboard',
      desc: 'Live revenue totals, active order counts, hourly velocity spikes, and branch switching right from the home screen.',
    },
    {
      id: 'settlements',
      label: 'Financial Visibility',
      title: 'Bank Settlements & Payouts',
      desc: 'Itemized breakdown of gross collections, platform deductions, GST, and verified bank deposit logs with UTR tracking.',
    },
    {
      id: 'menu',
      label: 'Catalog Control',
      title: 'Live Menu Management',
      desc: 'Adjust dish prices, update preparation types, and organize categories without touching counter billing terminals.',
    },
    {
      id: 'stock',
      label: 'Inventory Control',
      title: '1-Tap 86 Stock Management',
      desc: 'Mark depleted ingredients out of stock in one tap to instantly gray them out on customer apps and QR menus.',
    },
    {
      id: 'analytics',
      label: 'Actionable Intelligence',
      title: 'Deep Business Analytics',
      desc: 'Multi-day revenue trajectories, channel breakdowns (POS vs App vs QR), and authentic Kaaty order size distributions.',
    },
  ]

  // Interactive Owner Dashboard features
  const dashboardFeatures = [
    {
      id: 'dashboard' as BusinessAppScreen,
      stepNum: '01',
      title: 'Real-Time Revenue & Order Velocity',
      icon: 'trending-up',
      desc: 'Track sales as they happen. See today revenue, completed order volume, and average ticket size updated in real time.',
      points: [
        'Live revenue counter with percentage comparison against yesterday',
        'Hourly velocity chart pinpointing exact peak rush windows',
        'Direct tracking of active tickets currently cooking in the kitchen',
      ],
    },
    {
      id: 'settlements' as BusinessAppScreen,
      stepNum: '02',
      title: 'Automated Bank Settlements & Payouts',
      icon: 'wallet',
      desc: 'Know exactly when and how much money arrives in your bank account with transparent platform and GST deductions.',
      points: [
        'Daily automated payout cycle direct to verified bank accounts',
        'Transparent ledger showing gross sales, gateway fees, and net payouts',
        'Searchable settlement history with official bank UTR reference numbers',
      ],
    },
    {
      id: 'menu' as BusinessAppScreen,
      stepNum: '03',
      title: 'Live Menu & Price Adjustments',
      icon: 'book-open',
      desc: 'Update dish prices or modify food items remotely. Changes broadcast across counter POS and ordering apps instantly.',
      points: [
        'Instant price editing without taking counter terminals offline',
        'Organized categorization for Breakfast, Lunch, Snacks, and Beverages',
        'Real-time synchronization across POS, Kiosk, and QR menus',
      ],
    },
    {
      id: 'stock' as BusinessAppScreen,
      stepNum: '04',
      title: '1-Tap Stock Depletion (86 Items)',
      icon: 'package',
      desc: 'Prevent kitchen chaos during unexpected rushes. Mark any item out of stock with a single tap from your smartphone.',
      points: [
        'Instantly removes 86’d items from customer mobile app and table QR menus',
        'Visual indicators show active out-of-stock items across branches',
        'Immediate reactivation when kitchen prep is replenished',
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FA5A1E] font-semibold text-xs sm:text-sm mb-6 border border-orange-200 shadow-xs">
                <Icon name="layout-dashboard" size={16} />
                <span>Kaaty Business App</span>
              </div>

              <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.08]">
                Your business. <br />
                <span className="text-[#FA5A1E]">In your hands.</span>
              </h1>

              <p className="text-lg sm:text-xl text-navy-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Stay connected to your food business wherever you are. Monitor performance, track
                settlements, manage menu and stock, and keep an eye on your operations — all from
                the Kaaty Business App.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button as="a" href="/demo?source=business_app_hero" variant="primary" size="lg">
                  Book a Free Demo
                </Button>
                <Button as="a" href="#features" variant="outline" size="lg">
                  Explore Features
                </Button>
              </div>

              {/* Verified Trust Metrics / Key Points */}
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Multi-Outlet</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Central branch rollup</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>Settlements</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Automated bank sync</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FA5A1E] font-bold text-sm sm:text-base">
                    <Icon name="check" size={16} />
                    <span>1-Tap Control</span>
                  </div>
                  <p className="text-xs text-navy-500 mt-0.5">Live stock & menu edit</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Smartphone Visual */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-center items-center py-4 px-2 sm:px-6">
              <div className="relative w-full max-w-[380px] mx-auto flex items-center justify-center">
                {/* Floating Owner Live Badge */}
                <div className="hidden sm:block absolute -left-14 lg:-left-18 bottom-36 w-36 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-[0_12px_28px_rgba(0,0,0,0.12)] z-30 pointer-events-none sm:pointer-events-auto">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700">Live Counters</span>
                  </div>
                  <div className="text-xs font-black text-navy">₹54,820 Today</div>
                  <div className="text-[9px] text-gray-500 mt-0.5 leading-tight">
                    342 orders • 8 in kitchen
                  </div>
                </div>

                {/* Primary Interactive Smartphone Mockup */}
                <div className="relative z-10 filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
                  <PremiumBusinessAppUi initialScreen="dashboard" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. OWNER DASHBOARD SECTION (Interactive Flow)
          ========================================================================= */}
      <section
        id="features"
        className="scroll-mt-24 py-20 lg:py-32 bg-gray-50 border-t border-gray-100"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Remote Visibility
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Know what's happening. Even when you're away.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Food business owners cannot be at the billing counter all day. Kaaty Business App
              gives you immediate, verified clarity into revenue, order volume, and outlet activity
              from wherever you are.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Feature Cards */}
            <div className="lg:col-span-7 space-y-4">
              {dashboardFeatures.map((feat) => {
                const isActive = activeDashboardTab === feat.id
                return (
                  <div
                    key={feat.id}
                    onClick={() => setActiveDashboardTab(feat.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-orange-50/50 border-[#FA5A1E] shadow-md ring-1 ring-[#FA5A1E]'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-black text-sm ${
                          isActive
                            ? 'bg-[#FA5A1E] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {feat.stepNum}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-display text-base sm:text-lg font-bold leading-tight ${
                              isActive ? 'text-[#FA5A1E]' : 'text-navy'
                            }`}
                          >
                            {feat.title}
                          </h3>
                          <Icon
                            name={feat.icon}
                            size={18}
                            className={isActive ? 'text-[#FA5A1E]' : 'text-gray-400'}
                          />
                        </div>

                        <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                          {feat.desc}
                        </p>

                        {isActive && (
                          <div className="mt-4 pt-3 border-t border-orange-200/60 space-y-1.5 animate-in fade-in duration-200">
                            {feat.points.map((pt, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs font-semibold text-navy-800"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FA5A1E]" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right: Live Mockup Syncing with Active Tab */}
            <div className="lg:col-span-5 flex justify-center items-center py-4">
              <div className="relative z-10 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
                <PremiumBusinessAppUi
                  currentScreen={activeDashboardTab}
                  onScreenChange={setActiveDashboardTab}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. SETTLEMENTS & FINANCIAL VISIBILITY SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Financial Clarity
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
                Keep track of every settlement.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                Eliminate the anxiety of manual reconciliations and delayed bank deposits. Kaaty
                Business App provides transparent, itemized accounting of all online and counter
                collections, with traceable bank payout histories.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Icon name="check-circle-2" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base">Direct Bank Deposit Tracking</h4>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                      Follow daily automated payout batches straight to your registered bank
                      account, complete with verified UTR reference numbers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0">
                    <Icon name="file-text" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base">
                      Clear, Dispute-Free Deductions
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                      Every deduction is transparently itemized: gross collections, payment gateway
                      and platform charges (2%), and applicable GST (18%).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Icon name="calendar" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base">
                      Complete Historical Payout Logs
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                      Access past payout summaries anytime to simplify monthly accounting, audit
                      trails, and tax filing without exporting endless spreadsheets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Settlements Mockup View */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
                <PremiumBusinessAppUi initialScreen="settlements" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. MENU MANAGEMENT SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Mockup View */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center">
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
                <PremiumBusinessAppUi initialScreen="menu" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Menu Control
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
                Your menu. Always under your control.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                Need to adjust the price of Chicken Biryani or introduce a seasonal special? Modify
                your food catalog directly from your smartphone without needing physical access to
                counter POS machines or asking busy staff.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-1 text-navy font-bold text-sm">
                    <Icon name="pencil" size={16} className="text-[#FA5A1E]" />
                    <span>Instant Price Updates</span>
                  </div>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Tap any item, enter the new price, and broadcast it immediately across POS, QR
                    menus, and customer apps in seconds.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-1 text-navy font-bold text-sm">
                    <Icon name="layers" size={16} className="text-blue-600" />
                    <span>Category Organization</span>
                  </div>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Organize Breakfast, Lunch, Snacks, and Beverages into clean digital sections
                    that help counter staff and diners find items faster.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-1 text-navy font-bold text-sm">
                    <Icon name="zap" size={16} className="text-emerald-600" />
                    <span>Zero Counter Interruption</span>
                  </div>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Your updates sync silently in the background — no POS restarts, no frozen
                    billing queues, and no lost transaction data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. STOCK MANAGEMENT SECTION (1-Tap 86 Toggle)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Inventory Visibility
              </span>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
                Stay ahead of your stock.
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                Nothing frustrates a customer more than ordering a meal only to be told ten minutes
                later that the kitchen ran out. Kaaty Business App lets owners and managers 86 any
                depleted item with a single tap from their phone.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">1-Tap 86 Switch</h4>
                    <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">
                      Instantly mark depleted dishes out-of-stock. The item is automatically grayed
                      out on customer apps and table QR codes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Instant Reactivation</h4>
                    <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">
                      As soon as fresh kitchen prep arrives, toggle the switch back to In-Stock.
                      Orders open immediately across all sales channels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Reduced Kitchen Waste & Refunds</h4>
                    <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">
                      Stops unfulfillable orders before payment occurs, cutting cashier void steps
                      and customer refund friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup View */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
                <PremiumBusinessAppUi initialScreen="stock" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. BUSINESS ANALYTICS SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Business Intelligence
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Turn business activity into clear insights.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Understand the operational patterns that drive your revenue. Analyze sales across
              channels, identify your best-selling dishes, and optimize kitchen staffing during rush
              hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {/* Card 1 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-4">
                  <Icon name="trending-up" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Revenue Trajectory
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Track 7-day, 14-day, and 30-day revenue trends to understand growth velocity and
                  weekday patterns.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-[#FA5A1E]">
                Daily Trailing Insights
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="layers" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Channel Breakdown
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  See exact revenue distribution across Counter POS billing, customer Mobile App,
                  and table QR ordering.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-blue-600">
                Multi-Channel Visibility
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="bar-chart-3" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Order Size Distribution
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Categorized into verified ticket brackets: Snack (₹0–50), Quick Meal (₹51–100),
                  Regular (₹101–200), and Group (₹201+).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-600">
                Ticket Size Intelligence
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Icon name="clock" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">
                  Hourly Peak Spikes
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Identify exact hourly rush windows to align kitchen prep schedules and avoid
                  counter bottlenecks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-purple-600">
                Hourly Rush Mapping
              </div>
            </div>
          </div>

          {/* Interactive Analytics Preview */}
          <div className="flex justify-center items-center">
            <div className="relative filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
              <PremiumBusinessAppUi initialScreen="analytics" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. REMOTE BUSINESS MANAGEMENT (The Owner's Story)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              The Owner's Journey
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Stay in control, wherever business takes you.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Food business management shouldn't require standing by the cash register all day. Here
              is how owners run their business remotely with Kaaty.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Away From Outlet',
                desc: 'Traveling, meeting suppliers, or managing other branches without being on-site.',
                icon: 'navigation',
              },
              {
                step: '02',
                title: 'Opens Business App',
                desc: 'Secured biometric login on smartphone with immediate multi-outlet dashboard.',
                icon: 'smartphone',
              },
              {
                step: '03',
                title: 'Checks Live Revenue',
                desc: 'Reviews live sales velocity, order counts, and active kitchen queue in seconds.',
                icon: 'trending-up',
              },
              {
                step: '04',
                title: 'Reviews Settlements',
                desc: 'Verifies today net bank transfer, gateway charges, and traceable UTR codes.',
                icon: 'wallet',
              },
              {
                step: '05',
                title: 'Updates Menu & Stock',
                desc: 'Toggles 86 stock or adjusts dish pricing with instant broadcast to all counters.',
                icon: 'check-circle-2',
              },
            ].map((journey, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-black text-sm text-[#FA5A1E]">
                      {journey.step}
                    </span>
                    <Icon name={journey.icon} size={18} className="text-gray-400" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-navy mb-1.5 leading-snug">
                    {journey.title}
                  </h4>
                  <p className="text-xs text-navy-600 leading-relaxed">{journey.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. CONNECTED KAATY ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Ecosystem Architecture
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              One connected business. Every operation in sync.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Kaaty Business App is not a standalone report viewer. It connects directly to the core
              operational software running your counters, kitchens, and tables.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Top/Central Command Layer */}
            <div className="lg:col-span-12">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-navy via-navy-900 to-navy-950 text-white shadow-xl border border-navy-800 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs mb-2 border border-orange-500/30">
                  Owner Intelligence Layer
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                  Kaaty Business App
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mt-1">
                  Owner command centre receiving real-time transaction, inventory, and settlement
                  telemetry from all operating stations.
                </p>
              </div>
            </div>

            {/* Operating Products Grid */}
            <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-3">
                  <Icon name="monitor" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty POS</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Counter billing registers stream transaction data and cash drawer reconciliations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <Icon name="chef-hat" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kaaty KDS</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Kitchen display screens report prep velocity and active cooking queue sizes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Icon name="smartphone" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Mobile & QR Ordering</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Customer ordering touchpoints sync 86 stock and updated menu prices in real time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Icon name="tv" size={16} />
                </div>
                <h4 className="font-bold text-navy text-sm">Kiosk & Token Board</h4>
                <p className="text-xs text-navy-500 mt-0.5">
                  Self-service terminals and pickup displays maintain synchronous item availability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. BUILT FOR FOOD BUSINESS OWNERS (Industries)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Purpose-Built
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              One app for the people behind the business.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Tailored for food business operators across fast-moving hospitality environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Industry 1 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A1E] flex items-center justify-center mb-4">
                  <Icon name="utensils" size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-2">Restaurants</h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Monitor floor dining revenue, oversee table turns, track daily settlement
                  deposits, and update seasonal specials on the go.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-semibold text-[#FA5A1E]">
                ✓ Floor turn tracking
              </div>
            </div>

            {/* Industry 2 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="graduation-cap" size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-2">
                  College Canteens
                </h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Keep tabs on intense rush-hour transactions, manage bench stock, and monitor
                  student app orders without standing at the cash desk.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-semibold text-blue-600">
                ✓ Rush velocity mapping
              </div>
            </div>

            {/* Industry 3 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon name="coffee" size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-2">Cafés & QSRs</h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Update coffee and snack prices instantly, toggle depleted items in one tap, and
                  reconcile multi-channel UPI and card payouts.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-semibold text-emerald-600">
                ✓ Rapid 86 item control
              </div>
            </div>

            {/* Industry 4 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Icon name="store" size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-2">Food Courts</h3>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Switch effortlessly between multiple stalls or branches, aggregate master sales,
                  and review automated multi-vendor settlements.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-semibold text-purple-600">
                ✓ Multi-branch aggregation
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. PRODUCT UI SHOWCASE (5 Coordinated Screens)
          ========================================================================= */}
      <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-[#FA5A1E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Interface Gallery
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl mt-3 mb-6">
              Everything important, right on your phone.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Explore the five core functional modules of Kaaty Business App. Designed with
              intuitive navigation for fast, reliable decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {showcaseScreens.map((screen) => (
              <div
                key={screen.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-[#FA5A1E] font-bold text-xs border border-orange-200/60 shadow-xs">
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
                <div className="relative mx-auto my-2 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
                  <PremiumBusinessAppUi
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
          11. FINAL CALL TO ACTION SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-navy-950 to-black text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-orange-400 font-semibold text-xs sm:text-sm mb-6 border border-white/10">
              Get Started with Kaaty
            </span>

            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Manage your business with confidence.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get a clearer view of your operations with Kaaty Business App.
            </p>

            <div className="flex justify-center items-center">
              <Button
                as="a"
                href="/demo?source=business_app_footer"
                variant="primary"
                size="lg"
                className="bg-[#FA5A1E] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-orange-500/25"
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
