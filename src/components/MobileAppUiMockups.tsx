import { useState } from 'react'
import { Icon } from './Icon'

export type ScreenType =
  | 'home'
  | 'menu'
  | 'cart'
  | 'payment'
  | 'confirmation'
  | 'tracking'
  | 'orders'
  | 'profile'
  | 'splash'

export interface CartItem {
  id: string | number
  name: string
  price: number
  quantity: number
  image: string
  isVeg: boolean
  desc?: string
}

export interface PremiumMobileAppUiProps {
  initialScreen?: ScreenType
  activeScreen?: ScreenType
  onScreenChange?: (screen: ScreenType) => void
  compact?: boolean
  className?: string
}

// Default initial catalog
const MENU_CATALOG: Omit<CartItem, 'quantity'>[] = [
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
    name: 'Special Masala Dosa',
    price: 80,
    image: '/images/food/dosa.jpg',
    isVeg: true,
    desc: 'Crisp crepe stuffed with spiced potato filling & chutney.',
  },
  {
    id: 3,
    name: 'Crispy Veg Burger',
    price: 90,
    image: '/images/food/burger.jpg',
    isVeg: true,
    desc: 'Golden vegetable patty with lettuce and signature sauce.',
  },
  {
    id: 4,
    name: 'Cold Coffee Latte',
    price: 60,
    image: '/images/food/latte.jpg',
    isVeg: true,
    desc: 'Chilled rich espresso blended with creamy milk.',
  },
  {
    id: 5,
    name: 'Crispy French Fries',
    price: 70,
    image: '/images/food/fries.jpg',
    isVeg: true,
    desc: 'Lightly salted golden potato fries served with dip.',
  },
]

export function PremiumMobileAppUi({
  initialScreen = 'home',
  activeScreen: externalScreen,
  onScreenChange,
  compact = false,
  className = '',
}: PremiumMobileAppUiProps) {
  const [internalScreen, setInternalScreen] = useState<ScreenType>(initialScreen)
  const currentScreen = externalScreen ?? internalScreen

  // Connected shopping cart & order state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Chicken Biryani',
      price: 120,
      quantity: 1,
      image: '/images/food/biryani.jpg',
      isVeg: false,
      desc: 'Fragrant basmati rice cooked with spiced tender chicken.',
    },
  ])

  // Active placed order state
  const [activeOrder, setActiveOrder] = useState<{
    orderNumber: string
    items: CartItem[]
    total: number
    timestamp: string
    paymentMethod: string
    status: 'Preparing' | 'Ready' | 'Delivered'
  }>({
    orderNumber: '78',
    items: [
      {
        id: 1,
        name: 'Chicken Biryani',
        price: 120,
        quantity: 1,
        image: '/images/food/biryani.jpg',
        isVeg: false,
      },
    ],
    total: 120,
    timestamp: '23/8/2025, 10:13:35 AM',
    paymentMethod: 'UPI / QR Pay',
    status: 'Preparing',
  })

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('UPI / QR Pay')
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const handleScreenChange = (screen: ScreenType) => {
    setInternalScreen(screen)
    onScreenChange?.(screen)
  }

  // Cart operations
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string | number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta
            return newQty > 0 ? { ...i, quantity: newQty } : null
          }
          return i
        })
        .filter(Boolean) as CartItem[]
    })
  }

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  const clearCart = () => setCartItems([])

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // Payment simulation
  const handlePayOrder = () => {
    setIsProcessingPayment(true)
    setTimeout(() => {
      const newOrderNum = (Math.floor(Math.random() * 20) + 80).toString()
      const now = new Date()
      const formattedDate = `${now.toLocaleDateString('en-GB')}, ${now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`

      setActiveOrder({
        orderNumber: newOrderNum,
        items: [...cartItems],
        total: cartTotal,
        timestamp: formattedDate,
        paymentMethod: selectedPaymentMethod,
        status: 'Preparing',
      })

      setIsProcessingPayment(false)
      handleScreenChange('confirmation')
    }, 1200)
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
          className={`relative z-30 flex items-center justify-between px-6 pt-3 pb-1.5 shrink-0 ${
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

        {/* Screen Content Area (Scrollbar completely hidden via .no-scrollbar) */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-20">
          {currentScreen === 'splash' && (
            <SplashScreen onGetStarted={() => handleScreenChange('home')} />
          )}

          {currentScreen === 'home' && (
            <HomeScreen
              onTrackOrder={() => handleScreenChange('tracking')}
              onGoMenu={() => handleScreenChange('menu')}
              onGoOrders={() => handleScreenChange('orders')}
              onOpenCart={() => handleScreenChange('cart')}
              onAddToCart={addToCart}
              cartCount={cartCount}
              cartTotal={cartTotal}
              activeOrderNumber={activeOrder.orderNumber}
            />
          )}

          {currentScreen === 'menu' && (
            <MenuScreen
              catalog={MENU_CATALOG}
              cartItems={cartItems}
              onAddToCart={addToCart}
              onUpdateQuantity={updateQuantity}
              cartCount={cartCount}
              cartTotal={cartTotal}
              onViewCart={() => handleScreenChange('cart')}
            />
          )}

          {currentScreen === 'cart' && (
            <CartScreen
              items={cartItems}
              total={cartTotal}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              onClear={clearCart}
              onBack={() => handleScreenChange('menu')}
              onProceed={() => handleScreenChange('payment')}
            />
          )}

          {currentScreen === 'payment' && (
            <PaymentScreen
              items={cartItems}
              total={cartTotal}
              selectedMethod={selectedPaymentMethod}
              onSelectMethod={setSelectedPaymentMethod}
              isProcessing={isProcessingPayment}
              onPay={handlePayOrder}
              onBack={() => handleScreenChange('cart')}
            />
          )}

          {currentScreen === 'confirmation' && (
            <OrderConfirmationScreen
              orderNumber={activeOrder.orderNumber}
              total={activeOrder.total}
              items={activeOrder.items}
              onTrackOrder={() => handleScreenChange('tracking')}
              onGoHome={() => handleScreenChange('home')}
            />
          )}

          {currentScreen === 'tracking' && (
            <OrderTrackingScreen order={activeOrder} onBack={() => handleScreenChange('home')} />
          )}

          {currentScreen === 'orders' && (
            <OrdersScreen
              activeOrder={activeOrder}
              onTrack={() => handleScreenChange('tracking')}
            />
          )}

          {currentScreen === 'profile' && <ProfileScreen />}
        </div>

        {/* Fixed Bottom Navigation Bar (Hidden on Splash) */}
        {currentScreen !== 'splash' && (
          <div className="absolute bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-100 px-3 pt-2 pb-5 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
            {/* 1. Home Tab */}
            <button
              type="button"
              onClick={() => handleScreenChange('home')}
              className={`flex flex-col items-center justify-center gap-1 min-w-[54px] py-1 transition-colors ${
                currentScreen === 'home' ? 'text-[#FA5A1E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="home" size={20} />
              <span className="text-[10px] font-semibold tracking-tight">Home</span>
            </button>

            {/* 2. Menu Tab */}
            <button
              type="button"
              onClick={() => handleScreenChange('menu')}
              className={`flex flex-col items-center justify-center gap-1 min-w-[54px] py-1 transition-colors relative ${
                currentScreen === 'menu' || currentScreen === 'cart'
                  ? 'text-[#FA5A1E]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="utensils" size={20} />
              <span className="text-[10px] font-semibold tracking-tight">Menu</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-3 w-4 h-4 rounded-full bg-[#FA5A1E] text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 3. Orders Tab */}
            <button
              type="button"
              onClick={() => handleScreenChange('orders')}
              className={`flex flex-col items-center justify-center gap-1 min-w-[54px] py-1 transition-colors ${
                currentScreen === 'orders' ||
                currentScreen === 'tracking' ||
                currentScreen === 'payment' ||
                currentScreen === 'confirmation'
                  ? 'text-[#FA5A1E]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="receipt-text" size={20} />
              <span className="text-[10px] font-semibold tracking-tight">Orders</span>
            </button>

            {/* 4. Profile Tab */}
            <button
              type="button"
              onClick={() => handleScreenChange('profile')}
              className={`flex flex-col items-center justify-center gap-1 min-w-[54px] py-1 transition-colors ${
                currentScreen === 'profile' ? 'text-[#FA5A1E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon name="user-round" size={20} />
              <span className="text-[10px] font-semibold tracking-tight">Profile</span>
            </button>
          </div>
        )}

        {/* Home Indicator */}
        <div className="pointer-events-none absolute bottom-1.5 inset-x-0 z-40 flex justify-center">
          <div className="h-1 w-28 rounded-full bg-neutral-900/25" />
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
  onOpenCart,
  onAddToCart,
  cartCount,
  cartTotal,
  activeOrderNumber,
}: {
  onTrackOrder: () => void
  onGoMenu: () => void
  onGoOrders: () => void
  onOpenCart: () => void
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void
  cartCount: number
  cartTotal: number
  activeOrderNumber: string
}) {
  const [selectedCategory, setSelectedCategory] = useState('Lunch')

  const categories = [
    { name: 'Breakfast', icon: 'wheat' },
    { name: 'Lunch', icon: 'utensils' },
    { name: 'Snacks', icon: 'shopping-bag' },
    { name: 'Beverages', icon: 'coffee' },
  ]

  const popularItems = [
    {
      id: 1,
      name: 'Chicken Biryani',
      price: 120,
      image: '/images/food/biryani.jpg',
      isVeg: false,
    },
    {
      id: 2,
      name: 'Masala Dosa',
      price: 80,
      image: '/images/food/dosa.jpg',
      isVeg: true,
    },
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

      {/* Popular Items (Equal width and height cards) */}
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
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 bg-gray-50">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded bg-white p-0.5 shadow-sm flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}
                  />
                </div>
              </div>

              <div>
                <h5 className="text-[11px] font-bold text-navy leading-tight truncate">
                  {item.name}
                </h5>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[12px] font-extrabold text-[#FA5A1E]">₹{item.price}</span>
                  <button
                    type="button"
                    onClick={() => onAddToCart(item)}
                    className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#FA5A1E] text-[10px] font-bold border border-orange-200 hover:bg-[#FA5A1E] hover:text-white transition-colors"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Indicator Bar (If items added) */}
      {cartCount > 0 && (
        <div className="px-4 pt-1">
          <div className="bg-navy text-white p-3 rounded-2xl shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FA5A1E] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </div>
              <span className="text-[11px] font-bold">
                {cartCount} {cartCount === 1 ? 'item' : 'items'} • ₹{cartTotal}
              </span>
            </div>
            <button
              type="button"
              onClick={onOpenCart}
              className="bg-[#00c938] text-white text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1 shadow-sm hover:bg-green-600 active:scale-95 transition-all"
            >
              <span>View Cart</span>
              <Icon name="arrow-right" size={10} />
            </button>
          </div>
        </div>
      )}

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
              <span className="block text-[11px] font-bold leading-none">
                Order #{activeOrderNumber}
              </span>
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
   3. MENU SCREEN (With Add/Quantity Controls & "View Cart →")
   ========================================================================= */
function MenuScreen({
  catalog,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  cartCount,
  cartTotal,
  onViewCart,
}: {
  catalog: Omit<CartItem, 'quantity'>[]
  cartItems: CartItem[]
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void
  onUpdateQuantity: (id: string | number, delta: number) => void
  cartCount: number
  cartTotal: number
  onViewCart: () => void
}) {
  const [selectedCat, setSelectedCat] = useState('All')

  return (
    <div className="space-y-3 pb-8">
      {/* Top Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-4 rounded-b-[1.75rem] shadow-sm">
        <h3 className="font-display text-lg font-bold">Campus Menu</h3>
        <p className="text-[11px] text-white/80">Select items to build your order</p>
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
        {catalog.map((item) => {
          const inCart = cartItems.find((i) => i.id === item.id)

          return (
            <div
              key={item.id}
              className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
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

                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-bold text-navy leading-tight truncate">
                    {item.name}
                  </h5>
                  <p className="text-[9px] text-gray-400 line-clamp-1 mt-0.5">{item.desc}</p>
                  <span className="text-[12px] font-extrabold text-[#FA5A1E] block mt-1">
                    ₹{item.price}
                  </span>
                </div>
              </div>

              {/* Quantity Controls or Add Button */}
              {inCart ? (
                <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-lg p-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-5 h-5 rounded flex items-center justify-center bg-white text-[#FA5A1E] text-[11px] font-bold shadow-xs hover:bg-orange-100"
                  >
                    -
                  </button>
                  <span className="text-[11px] font-bold text-navy w-4 text-center">
                    {inCart.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-5 h-5 rounded flex items-center justify-center bg-[#FA5A1E] text-white text-[11px] font-bold shadow-xs hover:bg-orange-600"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => onAddToCart(item)}
                  className="px-3 py-1.5 rounded-lg bg-orange-50 text-[#FA5A1E] text-[11px] font-bold border border-orange-200 hover:bg-[#FA5A1E] hover:text-white transition-colors shrink-0"
                >
                  + Add
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* Cart Handoff Bar: Navigates to CART, NOT Track Order! */}
      {cartCount > 0 && (
        <div className="px-4 pt-2">
          <div className="bg-navy text-white p-3 rounded-2xl shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold block">
                {cartCount} {cartCount === 1 ? 'Item' : 'Items'} in Cart
              </span>
              <span className="text-[10px] text-gray-300">Total: ₹{cartTotal}</span>
            </div>
            <button
              type="button"
              onClick={onViewCart}
              className="bg-[#00c938] text-white px-4 py-2 rounded-xl text-[11px] font-bold shadow hover:bg-green-600 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>View Cart</span>
              <Icon name="arrow-right" size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/* =========================================================================
   4. CART SCREEN (Full editable cart with quantity controls)
   ========================================================================= */
function CartScreen({
  items,
  total,
  onUpdateQuantity,
  onRemove,
  onClear,
  onBack,
  onProceed,
}: {
  items: CartItem[]
  total: number
  onUpdateQuantity: (id: string | number, delta: number) => void
  onRemove: (id: string | number) => void
  onClear: () => void
  onBack: () => void
  onProceed: () => void
}) {
  return (
    <div className="space-y-4">
      {/* Top Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-5 rounded-b-[1.75rem] shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Icon name="arrow-left" size={14} />
          </button>
          <div>
            <h3 className="font-display text-lg font-bold leading-tight">Your Cart</h3>
            <span className="text-[10px] text-white/80">Review items before payment</span>
          </div>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] font-bold text-white/90 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="px-4 space-y-3">
        {/* Empty State */}
        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-orange-50 text-[#FA5A1E] flex items-center justify-center mx-auto">
              <Icon name="shopping-bag" size={28} />
            </div>
            <div>
              <h4 className="font-bold text-navy text-sm">Your cart is empty</h4>
              <p className="text-[11px] text-gray-500 mt-1 max-w-[200px] mx-auto">
                Explore our campus menu and add your favorite dishes.
              </p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="mt-2 px-5 py-2 rounded-xl bg-[#FA5A1E] text-white text-xs font-bold shadow hover:bg-orange-600 transition-colors"
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2.5 pb-2.5 border-b border-gray-50 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-11 h-11 rounded-lg object-cover bg-gray-50 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="text-[11px] font-bold text-navy truncate">{item.name}</h5>
                      <span className="text-[10px] text-gray-400">₹{item.price} each</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg p-0.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-5 h-5 rounded flex items-center justify-center bg-white text-gray-700 text-[11px] font-bold shadow-xs hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-[11px] font-bold text-navy w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-5 h-5 rounded flex items-center justify-center bg-[#FA5A1E] text-white text-[11px] font-bold shadow-xs hover:bg-orange-600"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right shrink-0 w-12">
                    <span className="text-[11px] font-extrabold text-navy block">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="text-[9px] text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Summary */}
            <div className="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm space-y-2 text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-semibold text-navy">₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Campus Packaging</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t border-gray-100 pt-2 flex justify-between items-center">
                <span className="font-bold text-navy text-sm">Grand Total</span>
                <span className="font-extrabold text-[#FA5A1E] text-base">₹{total}</span>
              </div>
            </div>

            {/* Proceed to Payment Button */}
            <button
              type="button"
              onClick={onProceed}
              className="w-full py-3 rounded-2xl bg-[#00c938] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-green-600 active:scale-[0.98] transition-all"
            >
              <span>Proceed to Payment</span>
              <Icon name="arrow-right" size={14} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

/* =========================================================================
   5. PAYMENT SCREEN (Demo simulated checkout)
   ========================================================================= */
function PaymentScreen({
  items,
  total,
  selectedMethod,
  onSelectMethod,
  isProcessing,
  onPay,
  onBack,
}: {
  items: CartItem[]
  total: number
  selectedMethod: string
  onSelectMethod: (method: string) => void
  isProcessing: boolean
  onPay: () => void
  onBack: () => void
}) {
  const methods = [
    {
      id: 'UPI / QR Pay',
      label: 'UPI / QR Code',
      sub: 'Google Pay, PhonePe, Paytm',
      icon: 'qr-code',
    },
    {
      id: 'Campus Card',
      label: 'Campus Student ID',
      sub: 'KGRCET / SITS Smart Card',
      icon: 'credit-card',
    },
    {
      id: 'Cash on Counter',
      label: 'Pay at Counter',
      sub: 'Cash or Card on pickup',
      icon: 'store',
    },
  ]

  return (
    <div className="space-y-4">
      {/* Top Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-5 rounded-b-[1.75rem] shadow-sm flex items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <Icon name="arrow-left" size={14} />
        </button>
        <div>
          <h3 className="font-display text-lg font-bold leading-tight">Checkout</h3>
          <span className="text-[10px] text-white/80">Select payment method</span>
        </div>
      </div>

      <div className="px-4 space-y-3">
        {/* Order Summary Pill */}
        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-navy block">
              {items.length} {items.length === 1 ? 'Dish' : 'Dishes'} Selected
            </span>
            <span className="text-[10px] text-gray-400">Total Payable Amount</span>
          </div>
          <span className="text-base font-extrabold text-[#FA5A1E]">₹{total}</span>
        </div>

        {/* Payment Methods Selection */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-navy block px-1">Payment Method</span>
          {methods.map((m) => {
            const isSelected = selectedMethod === m.id
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onSelectMethod(m.id)}
                className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-orange-50 border-[#FA5A1E] shadow-sm'
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#FA5A1E] text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Icon name={m.icon} size={16} />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-navy">{m.label}</h5>
                    <span className="text-[9px] text-gray-400">{m.sub}</span>
                  </div>
                </div>

                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-[#FA5A1E] bg-[#FA5A1E]' : 'border-gray-300'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Demo Simulation Notice */}
        <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[10px] text-gray-500 text-center">
          <span className="font-semibold text-navy">Interactive UI Demo:</span> Simulates instant
          order generation into kitchen KDS.
        </div>

        {/* Pay Button */}
        <button
          type="button"
          disabled={isProcessing}
          onClick={onPay}
          className="w-full py-3 rounded-2xl bg-[#FA5A1E] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-orange-600 active:scale-[0.98] transition-all disabled:opacity-75"
        >
          {isProcessing ? (
            <>
              <Icon name="refresh-cw" size={14} className="animate-spin" />
              <span>Placing Order in Kitchen...</span>
            </>
          ) : (
            <>
              <span>Pay ₹{total}</span>
              <Icon name="arrow-right" size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  )
}

/* =========================================================================
   6. ORDER CONFIRMATION SCREEN (Order Placed Successfully)
   ========================================================================= */
function OrderConfirmationScreen({
  orderNumber,
  total,
  items,
  onTrackOrder,
  onGoHome,
}: {
  orderNumber: string
  total: number
  items: CartItem[]
  onTrackOrder: () => void
  onGoHome: () => void
}) {
  return (
    <div className="space-y-4 px-4 pt-3">
      {/* Success Card */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-green-100 text-[#00c938] flex items-center justify-center mx-auto shadow-sm">
          <Icon name="check-circle-2" size={32} />
        </div>

        <div>
          <h3 className="font-display text-lg font-extrabold text-navy">
            Order Placed Successfully!
          </h3>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Your token has been transmitted to the kitchen display.
          </p>
        </div>

        {/* Big Token Number */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl py-3 px-4 inline-block mx-auto">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#FA5A1E] block">
            Your Order Token
          </span>
          <span className="font-display text-4xl font-black text-navy leading-none mt-1 block">
            #{orderNumber}
          </span>
        </div>

        {/* Order Details Brief */}
        <div className="border-t border-gray-100 pt-3 text-left space-y-1.5 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Items:</span>
            <span className="font-bold text-navy">
              {items.map((i) => `${i.name} (x${i.quantity})`).join(', ')}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Paid:</span>
            <span className="font-extrabold text-[#FA5A1E]">₹{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="font-bold text-blue-600 flex items-center gap-1">
              <Icon name="timer" size={12} />
              PREPARING
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          type="button"
          onClick={onTrackOrder}
          className="w-full py-3 rounded-2xl bg-[#00c938] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-green-600 active:scale-[0.98] transition-all"
        >
          <span>Track My Order</span>
          <Icon name="arrow-right" size={14} />
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="w-full py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 font-semibold text-xs hover:bg-gray-50 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

/* =========================================================================
   7. ORDER TRACKING SCREEN (media_1794293571238.png)
   ========================================================================= */
function OrderTrackingScreen({
  order,
  onBack,
}: {
  order: {
    orderNumber: string
    items: CartItem[]
    total: number
    timestamp: string
    paymentMethod: string
    status: 'Preparing' | 'Ready' | 'Delivered'
  }
  onBack: () => void
}) {
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
        <div className="font-display text-6xl font-black tracking-tight text-white my-1">
          {order.orderNumber}
        </div>
      </div>

      <div className="px-4 space-y-3 -mt-2">
        {/* Order Details Card */}
        <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px] font-bold text-navy">Order #{order.orderNumber}</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold flex items-center gap-1">
              <Icon name="utensils" size={10} />
              PREPARING
            </span>
          </div>
          <span className="text-[9px] text-gray-400 block mb-2.5">{order.timestamp}</span>

          <div className="border-t border-gray-100 pt-2 space-y-1.5">
            {order.items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between items-center text-[11px] text-gray-700"
              >
                <span>{i.name}</span>
                <span className="text-gray-400 font-medium">x{i.quantity}</span>
                <span className="font-bold text-navy">₹{i.price * i.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 mt-2.5 pt-2 flex justify-between items-center">
            <span className="text-[11px] font-bold text-navy">Total:</span>
            <span className="text-[13px] font-extrabold text-[#FA5A1E]">₹{order.total}</span>
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

        {/* Back to Home Action */}
        <button
          type="button"
          onClick={onBack}
          className="w-full py-2.5 rounded-xl bg-gray-100 text-navy font-bold text-xs hover:bg-gray-200 transition-colors text-center"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

/* =========================================================================
   8. ORDERS SCREEN (Previous & Live Orders)
   ========================================================================= */
function OrdersScreen({
  activeOrder,
  onTrack,
}: {
  activeOrder: {
    orderNumber: string
    items: CartItem[]
    total: number
    timestamp: string
    paymentMethod: string
    status: 'Preparing' | 'Ready' | 'Delivered'
  }
  onTrack: () => void
}) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-[#FA5A1E] text-white px-5 pt-2 pb-5 rounded-b-[1.75rem] shadow-sm">
        <h3 className="font-display text-lg font-bold">Your Orders</h3>
        <p className="text-[11px] text-white/80">Track live orders and check receipt history</p>
      </div>

      <div className="px-4 space-y-3">
        {/* Active Placed Order Card */}
        <div className="bg-white rounded-2xl p-3.5 border-2 border-orange-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-extrabold text-navy">
              Order #{activeOrder.orderNumber}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold flex items-center gap-1">
              <Icon name="timer" size={10} />
              PREPARING
            </span>
          </div>

          <div className="text-[11px] text-gray-600 space-y-0.5 mb-3">
            <div className="flex justify-between">
              <span>{activeOrder.items.map((i) => `${i.name} (x${i.quantity})`).join(', ')}</span>
              <span className="font-bold text-navy">₹{activeOrder.total}</span>
            </div>
            <span className="text-[9px] text-gray-400 block">{activeOrder.timestamp}</span>
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

        {/* Completed Past Order 1 */}
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

        {/* Completed Past Order 2 */}
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
   9. PROFILE SCREEN (media_1794293561623.png)
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
              <Icon name="user-round" size={14} />
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
