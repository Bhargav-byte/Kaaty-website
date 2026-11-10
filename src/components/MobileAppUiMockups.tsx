import { useState } from 'react'
import { Icon } from './Icon'

export type ScreenType = 'home' | 'menu' | 'orders' | 'tracking' | 'profile' | 'splash'

export interface PremiumMobileAppUiProps {
  initialScreen?: ScreenType
  activeScreen?: ScreenType
  onScreenChange?: (screen: ScreenType) => void
  compact?: boolean
  className?: string
}

export function PremiumMobileAppUi({
  initialScreen = 'home',
  activeScreen: externalScreen,
  onScreenChange,
  compact = false,
  className = '',
}: PremiumMobileAppUiProps) {
  const [internalScreen, setInternalScreen] = useState<ScreenType>(initialScreen)
  const currentScreen = externalScreen ?? internalScreen

  const handleScreenChange = (screen: ScreenType) => {
    setInternalScreen(screen)
    onScreenChange?.(screen)
  }

  return (
    <div
      className={`relative mx-auto select-none bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-white/10 ${
        compact
          ? 'w-[280px] h-[560px] rounded-[38px] p-[6px]'
          : 'w-[310px] sm:w-[350px] h-[640px] sm:h-[690px] rounded-[48px] p-[8px]'
      } ${className}`}
    >
      {/* Phone Outer Edge Highlights */}
      <div className="absolute -left-[2px] top-24 h-12 w-[3px] rounded-l bg-neutral-700/60" />
      <div className="absolute -left-[2px] top-40 h-12 w-[3px] rounded-l bg-neutral-700/60" />
      <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-r bg-neutral-700/60" />

      {/* Screen Inner Frame */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] sm:rounded-[42px] bg-[#F7F8FA] text-navy font-sans">
        {/* Dynamic Island & Status Bar */}
        <div
          className={`relative z-30 flex items-center justify-between px-6 pt-3 pb-1 shrink-0 ${
            currentScreen === 'splash'
              ? 'bg-[#FA5A1E] text-white'
              : currentScreen === 'tracking'
                ? 'bg-[#00c938] text-white'
                : 'bg-[#FA5A1E] text-white'
          }`}
        >
          <span className="text-[12px] font-bold tracking-tight">11:11</span>
          {/* Dynamic Island */}
          <div className="h-5 w-24 rounded-full bg-black flex items-center justify-end pr-2 gap-1.5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10" />
            <div className="w-2 h-2 rounded-full bg-blue-950/80" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <Icon name="wifi" size={12} />
            <Icon name="battery" size={12} />
          </div>
        </div>

        {/* Screen Content Area */}
        <div className="relative flex-1 overflow-y-auto no-scrollbar pb-16">
          {currentScreen === 'splash' && (
            <SplashScreen onGetStarted={() => handleScreenChange('home')} />
          )}

          {currentScreen === 'home' && (
            <HomeScreen
              onTrackOrder={() => handleScreenChange('tracking')}
              onGoMenu={() => handleScreenChange('menu')}
              onGoOrders={() => handleScreenChange('orders')}
            />
          )}

          {currentScreen === 'menu' && (
            <MenuScreen onProceed={() => handleScreenChange('tracking')} />
          )}

          {currentScreen === 'orders' && (
            <OrdersScreen onTrack={() => handleScreenChange('tracking')} />
          )}

          {currentScreen === 'tracking' && (
            <OrderTrackingScreen onBack={() => handleScreenChange('home')} />
          )}

          {currentScreen === 'profile' && <ProfileScreen />}
        </div>

        {/* Bottom Navigation Bar (Hidden on Splash) */}
        {currentScreen !== 'splash' && (
          <div className="absolute bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pt-2 pb-5 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
            <button
              type="button"
              onClick={() => handleScreenChange('home')}
              className={`flex flex-col items-center gap-1 transition-colors ${
                currentScreen === 'home' ? 'text-[#FA5A1E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="home" size={20} />
              <span className="text-[10px] font-semibold">Home</span>
            </button>
            <button
              type="button"
              onClick={() => handleScreenChange('menu')}
              className={`flex flex-col items-center gap-1 transition-colors ${
                currentScreen === 'menu' ? 'text-[#FA5A1E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="utensils" size={20} />
              <span className="text-[10px] font-semibold">Menu</span>
            </button>
            <button
              type="button"
              onClick={() => handleScreenChange('orders')}
              className={`flex flex-col items-center gap-1 transition-colors ${
                currentScreen === 'orders' || currentScreen === 'tracking'
                  ? 'text-[#FA5A1E]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="file-text" size={20} />
              <span className="text-[10px] font-semibold">Orders</span>
            </button>
            <button
              type="button"
              onClick={() => handleScreenChange('profile')}
              className={`flex flex-col items-center gap-1 transition-colors ${
                currentScreen === 'profile' ? 'text-[#FA5A1E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="user" size={20} />
              <span className="text-[10px] font-semibold">Profile</span>
            </button>
          </div>
        )}

        {/* Home Indicator */}
        <div className="pointer-events-none absolute bottom-1.5 inset-x-0 z-40 flex justify-center">
          <div className="h-1 w-28 rounded-full bg-neutral-900/30" />
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   1. SPLASH SCREEN (media_1794293559279.png)
   ========================================================================= */
function SplashScreen({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between bg-[#FA5A1E] px-6 py-12 text-white text-center">
      <div className="flex-1 flex flex-col items-center justify-center -mt-8">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Kaaty
        </h1>
        <p className="text-white/90 text-sm font-medium tracking-wide">scroll less eat more...</p>
      </div>

      <div>
        <button
          type="button"
          onClick={onGetStarted}
          className="w-full py-3.5 px-6 rounded-full bg-white text-[#FA5A1E] font-bold text-sm shadow-lg hover:bg-orange-50 active:scale-[0.98] transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

/* =========================================================================
   2. HOME SCREEN (media_1794293565533.png)
   ========================================================================= */
function HomeScreen({
  onTrackOrder,
  onGoMenu,
  onGoOrders,
}: {
  onTrackOrder: () => void
  onGoMenu: () => void
  onGoOrders: () => void
}) {
  const [selectedCategory, setSelectedCategory] = useState('Lunch')

  const categories = [
    { name: 'Breakfast', icon: 'wheat' },
    { name: 'Lunch', icon: 'utensils' },
    { name: 'Snacks', icon: 'shopping-bag' },
    { name: 'Beverages', icon: 'coffee' },
  ]

  return (
    <div className="space-y-4">
      {/* Top Curved Orange Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-6 rounded-b-[2rem] shadow-sm">
        {/* Brand & Location Row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display text-xl font-bold leading-tight">Brainiacs</h3>
            <div className="flex items-center gap-1 text-[11px] text-white/90 font-medium mt-0.5">
              <Icon name="map-pin" size={11} />
              <span>SITS</span>
              <Icon name="chevron-down" size={10} />
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm shadow-inner">
            😋
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="w-full bg-white/20 border border-white/30 rounded-xl py-2.5 pl-9 pr-3 text-[12px] text-white placeholder-white/70 flex items-center gap-2 backdrop-blur-sm">
            <Icon name="search" size={14} className="text-white/80" />
            <span className="text-white/80 truncate">Search for "Chicken Fried Rice"</span>
          </div>
        </div>
      </div>

      {/* Quick Actions (Order History & Favorites) */}
      <div className="px-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onGoOrders}
          className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-2.5 hover:border-orange-200 transition-colors text-left"
        >
          <div className="w-7 h-7 rounded-full bg-orange-50 text-[#FA5A1E] flex items-center justify-center shrink-0">
            <Icon name="timer" size={14} />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-navy">Order History</span>
            <span className="block text-[9px] text-gray-400">View past tokens</span>
          </div>
        </button>

        <button
          type="button"
          onClick={onGoMenu}
          className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-2.5 hover:border-orange-200 transition-colors text-left"
        >
          <div className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
            <Icon name="check-circle-2" size={14} />
          </div>
          <div>
            <span className="block text-[11px] font-bold text-navy">Favorites</span>
            <span className="block text-[9px] text-gray-400">Your top picks</span>
          </div>
        </button>
      </div>

      {/* Categories */}
      <div className="px-4">
        <h4 className="text-[13px] font-bold text-navy mb-2.5">Categories</h4>
        <div className="grid grid-cols-4 gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex flex-col items-center py-2.5 px-1 rounded-2xl transition-all border ${
                  isSelected
                    ? 'bg-orange-50 border-[#FA5A1E] text-[#FA5A1E] shadow-sm'
                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-[#FA5A1E] text-white' : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  <Icon name={cat.icon} size={16} />
                </div>
                <span className="text-[10px] font-semibold text-center truncate w-full">
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Popular Items */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-[13px] font-bold text-navy">Popular Items</h4>
          <button
            type="button"
            onClick={onGoMenu}
            className="text-[11px] font-bold text-[#00c938] hover:underline"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Item 1 */}
          <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-amber-50">
              <img
                src="/images/food/biryani.jpg"
                alt="Chicken Biryani"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded bg-white p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>
            </div>
            <div>
              <h5 className="text-[11px] font-bold text-navy leading-tight line-clamp-1">
                Chicken Biryani
              </h5>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[12px] font-extrabold text-[#FA5A1E]">₹120</span>
                <button
                  type="button"
                  onClick={onGoMenu}
                  className="px-2 py-0.5 rounded-md bg-orange-100 text-[#FA5A1E] text-[10px] font-bold hover:bg-[#FA5A1E] hover:text-white transition-colors"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-emerald-50">
              <img
                src="/images/food/dosa.jpg"
                alt="Masala Dosa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded bg-white p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-600" />
              </div>
            </div>
            <div>
              <h5 className="text-[11px] font-bold text-navy leading-tight line-clamp-1">
                Masala Dosa
              </h5>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[12px] font-extrabold text-[#FA5A1E]">₹80</span>
                <button
                  type="button"
                  onClick={onGoMenu}
                  className="px-2 py-0.5 rounded-md bg-orange-100 text-[#FA5A1E] text-[10px] font-bold hover:bg-[#FA5A1E] hover:text-white transition-colors"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Docked Active Order Card */}
      <div className="px-4 pt-1">
        <div className="bg-gradient-to-r from-[#FA5A1E] to-[#FF7034] text-white p-3 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0 bg-white">
              <img
                src="/images/food/biryani.jpg"
                alt="Active Order"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block text-[11px] font-bold leading-none">Order #78</span>
              <span className="block text-[9px] text-white/80 mt-0.5">Preparing in kitchen</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onTrackOrder}
            className="bg-white text-[#FA5A1E] text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1 shadow-sm hover:bg-orange-50 active:scale-95 transition-all"
          >
            <Icon name="map-pin" size={10} />
            Track Order
          </button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   3. MENU SCREEN
   ========================================================================= */
function MenuScreen({ onProceed }: { onProceed: () => void }) {
  const [selectedCat, setSelectedCat] = useState('All')
  const [cartCount, setCartCount] = useState(1)

  const items = [
    {
      id: 1,
      name: 'Chicken Biryani',
      price: 120,
      image: '/images/food/biryani.jpg',
      isVeg: false,
      desc: 'Fragrant basmati rice cooked with spiced tender chicken.',
    },
    {
      id: 2,
      name: 'Crispy Veg Burger',
      price: 90,
      image: '/images/food/burger.jpg',
      isVeg: true,
      desc: 'Golden vegetable patty with lettuce and signature sauce.',
    },
    {
      id: 3,
      name: 'Special Masala Dosa',
      price: 80,
      image: '/images/food/dosa.jpg',
      isVeg: true,
      desc: 'Crisp crepe stuffed with spiced potato filling & chutney.',
    },
    {
      id: 4,
      name: 'Cold Coffee Latte',
      price: 60,
      image: '/images/food/latte.jpg',
      isVeg: true,
      desc: 'Chilled rich espresso blended with creamy milk.',
    },
  ]

  return (
    <div className="space-y-3 pb-8">
      {/* Top Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-4 rounded-b-[1.75rem] shadow-sm">
        <h3 className="font-display text-lg font-bold">Campus Menu</h3>
        <p className="text-[11px] text-white/80">Select items to place direct order</p>
      </div>

      {/* Categories Bar */}
      <div className="px-4 flex gap-1.5 overflow-x-auto no-scrollbar py-1">
        {['All', 'Breakfast', 'Lunch', 'Snacks', 'Drinks'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold shrink-0 transition-colors ${
              selectedCat === cat
                ? 'bg-[#FA5A1E] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Item List */}
      <div className="px-4 space-y-2.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-2.5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-1 left-1 w-3 h-3 rounded bg-white p-0.5 shadow-sm flex items-center justify-center">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.isVeg ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  />
                </div>
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-navy leading-tight">{item.name}</h5>
                <p className="text-[9px] text-gray-400 line-clamp-1 mt-0.5">{item.desc}</p>
                <span className="text-[11px] font-bold text-[#FA5A1E] block mt-1">
                  ₹{item.price}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCartCount((prev) => prev + 1)}
              className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#FA5A1E] text-[10px] font-bold border border-orange-200 hover:bg-[#FA5A1E] hover:text-white transition-colors shrink-0"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart Handoff Bar */}
      <div className="px-4 pt-2">
        <div className="bg-navy text-white p-3 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold block">{cartCount} Item in Cart</span>
            <span className="text-[10px] text-gray-300">Total: ₹120</span>
          </div>
          <button
            type="button"
            onClick={onProceed}
            className="bg-[#00c938] text-white px-3.5 py-1.5 rounded-xl text-[11px] font-bold shadow hover:bg-green-600 active:scale-95 transition-all flex items-center gap-1"
          >
            <span>Track Order</span>
            <Icon name="arrow-right" size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   4. ORDERS SCREEN
   ========================================================================= */
function OrdersScreen({ onTrack }: { onTrack: () => void }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-5 rounded-b-[1.75rem] shadow-sm">
        <h3 className="font-display text-lg font-bold">Your Orders</h3>
        <p className="text-[11px] text-white/80">Track live orders and check receipt history</p>
      </div>

      <div className="px-4 space-y-3">
        {/* Active Order Card */}
        <div className="bg-white rounded-2xl p-3.5 border-2 border-orange-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-extrabold text-navy">Order #78</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold flex items-center gap-1">
              <Icon name="timer" size={10} />
              PREPARING
            </span>
          </div>

          <div className="text-[11px] text-gray-600 space-y-0.5 mb-3">
            <div className="flex justify-between">
              <span>Chicken Biryani x1</span>
              <span className="font-bold text-navy">₹120</span>
            </div>
            <span className="text-[9px] text-gray-400 block">Today, 10:13 AM</span>
          </div>

          <button
            type="button"
            onClick={onTrack}
            className="w-full py-2 rounded-xl bg-[#FA5A1E] text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-sm hover:bg-orange-600 active:scale-[0.98] transition-all"
          >
            <Icon name="map-pin" size={12} />
            Live Status Tracker
          </button>
        </div>

        {/* Completed Order 1 */}
        <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-navy">Order #73</span>
            <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[9px] font-bold">
              DELIVERED
            </span>
          </div>
          <div className="text-[10px] text-gray-500 flex justify-between items-center">
            <span>Chicken Fried Rice x1</span>
            <span className="font-semibold text-navy">₹110</span>
          </div>
          <span className="text-[9px] text-gray-400 block mt-1">Yesterday, 1:45 PM</span>
        </div>

        {/* Completed Order 2 */}
        <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-navy">Order #65</span>
            <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[9px] font-bold">
              DELIVERED
            </span>
          </div>
          <div className="text-[10px] text-gray-500 flex justify-between items-center">
            <span>Masala Dosa x2</span>
            <span className="font-semibold text-navy">₹160</span>
          </div>
          <span className="text-[9px] text-gray-400 block mt-1">21 Aug, 12:30 PM</span>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   5. ORDER TRACKING SCREEN (media_1794293571238.png)
   ========================================================================= */
function OrderTrackingScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-4">
      {/* Top Green Semicircular Header */}
      <div className="bg-[#00c938] text-white pt-2 pb-8 px-5 rounded-b-[2.75rem] shadow-sm text-center relative">
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={onBack}
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Icon name="arrow-left" size={14} />
          </button>
          <span className="text-[13px] font-bold">Order No.</span>
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white"
          >
            <Icon name="refresh-cw" size={12} />
          </button>
        </div>

        {/* Large Order Number */}
        <div className="font-display text-6xl font-black tracking-tight text-white my-1">78</div>
      </div>

      <div className="px-4 space-y-3 -mt-2">
        {/* Order Details Card */}
        <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px] font-bold text-navy">Order #78</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold flex items-center gap-1">
              <Icon name="utensils" size={10} />
              PREPARING
            </span>
          </div>
          <span className="text-[9px] text-gray-400 block mb-2.5">23/8/2025, 10:13:35 AM</span>

          <div className="border-t border-gray-100 pt-2 flex justify-between items-center text-[11px] text-gray-700">
            <span>Chicken Biryani</span>
            <span className="text-gray-400 font-medium">x1</span>
            <span className="font-bold text-navy">₹120</span>
          </div>

          <div className="border-t border-gray-100 mt-2.5 pt-2 flex justify-between items-center">
            <span className="text-[11px] font-bold text-navy">Total:</span>
            <span className="text-[13px] font-extrabold text-[#FA5A1E]">₹120</span>
          </div>
        </div>

        {/* Order Status Timeline Card */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="text-[12px] font-bold text-navy mb-3">Order Status</h4>

          <div className="space-y-4 relative">
            {/* Step 1: Ordered (Done) */}
            <div className="flex items-start gap-3 relative">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                <Icon name="timer" size={12} />
              </div>
              {/* Connector */}
              <div className="absolute top-6 left-3 w-[2px] h-6 -ml-[1px] bg-blue-500" />
              <div>
                <span className="text-[11px] font-bold text-navy block">Ordered</span>
                <span className="text-[9px] text-gray-400">Your order has been received</span>
              </div>
            </div>

            {/* Step 2: Preparing (Active) */}
            <div className="flex items-start gap-3 relative">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 z-10 shadow-md ring-4 ring-blue-100">
                <Icon name="utensils" size={12} />
              </div>
              {/* Connector */}
              <div className="absolute top-6 left-3 w-[2px] h-6 -ml-[1px] bg-gray-200" />
              <div>
                <span className="text-[11px] font-bold text-blue-600 block">Preparing</span>
                <span className="text-[9px] text-navy-600 font-medium">
                  Your order is being prepared
                </span>
              </div>
            </div>

            {/* Step 3: Ready */}
            <div className="flex items-start gap-3 relative">
              <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 z-10">
                <Icon name="check" size={12} />
              </div>
              {/* Connector */}
              <div className="absolute top-6 left-3 w-[2px] h-6 -ml-[1px] bg-gray-200" />
              <div>
                <span className="text-[11px] font-semibold text-gray-500 block">Ready</span>
                <span className="text-[9px] text-gray-400">Your order is ready for pickup</span>
              </div>
            </div>

            {/* Step 4: Delivered */}
            <div className="flex items-start gap-3 relative">
              <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 z-10">
                <Icon name="check-circle-2" size={12} />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-gray-500 block">Delivered</span>
                <span className="text-[9px] text-gray-400">Order completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   6. PROFILE SCREEN (media_1794293561623.png)
   ========================================================================= */
function ProfileScreen() {
  return (
    <div className="space-y-4">
      {/* Top Orange Header with Avatar & Order Count */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-3 pb-6 rounded-b-[2.5rem] shadow-sm text-center">
        {/* Avatar */}
        <div className="relative mx-auto w-16 h-16 rounded-full bg-white p-1 shadow-md mb-2">
          <div className="w-full h-full rounded-full bg-amber-100 flex items-center justify-center text-2xl">
            🧛‍♂️
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-black/80 text-white flex items-center justify-center text-[9px] border border-white">
            📷
          </div>
        </div>

        <h3 className="font-display text-lg font-bold">Brainiacs</h3>
        <p className="text-[11px] text-white/80">customer.demo@kaaty.in</p>

        {/* Orders Count Card */}
        <div className="mt-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-3 mx-2 text-center shadow-inner">
          <div className="flex items-center justify-center gap-1.5 text-white/90 mb-0.5">
            <Icon name="file-text" size={14} />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Orders</span>
          </div>
          <div className="font-display text-3xl font-extrabold text-white">161</div>
        </div>
      </div>

      {/* Options List */}
      <div className="px-4 space-y-2">
        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-orange-200 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FA5A1E] flex items-center justify-center shrink-0">
              <Icon name="user" size={14} />
            </div>
            <span className="text-[11px] font-bold text-navy">Edit Profile</span>
          </div>
          <Icon name="arrow-right" size={12} className="text-gray-400" />
        </div>

        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-orange-200 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FA5A1E] flex items-center justify-center shrink-0">
              <Icon name="credit-card" size={14} />
            </div>
            <span className="text-[11px] font-bold text-navy">Payment Methods</span>
          </div>
          <Icon name="arrow-right" size={12} className="text-gray-400" />
        </div>

        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-orange-200 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FA5A1E] flex items-center justify-center shrink-0">
              <Icon name="bell" size={14} />
            </div>
            <span className="text-[11px] font-bold text-navy">Notifications</span>
          </div>
          <Icon name="arrow-right" size={12} className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}
