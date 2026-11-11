import { useState } from 'react'
import { Icon } from './Icon'

export type VendorAppScreen = 'billing' | 'orders' | 'menu' | 'stock' | 'analytics'

export interface VendorMenuItem {
  id: string
  name: string
  category: 'Juices' | 'Shakes' | 'Snacks' | 'Chai'
  price: number
  isVeg: boolean
  isAvailable: boolean
  image: string
  salesToday: number
  stockCount: number
}

const DEFAULT_STALL_ITEMS: VendorMenuItem[] = [
  {
    id: 'v1',
    name: 'Fresh Mango Juice',
    category: 'Juices',
    price: 50,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/latte.jpg',
    salesToday: 28,
    stockCount: 45,
  },
  {
    id: 'v2',
    name: 'Grilled Veg Sandwich',
    category: 'Snacks',
    price: 60,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/burger.jpg',
    salesToday: 34,
    stockCount: 22,
  },
  {
    id: 'v3',
    name: 'Sweet Corn Chaat',
    category: 'Snacks',
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/dosa.jpg',
    salesToday: 24,
    stockCount: 30,
  },
  {
    id: 'v4',
    name: 'Cold Badam Milk',
    category: 'Shakes',
    price: 40,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/latte.jpg',
    salesToday: 18,
    stockCount: 15,
  },
  {
    id: 'v5',
    name: 'Cutting Masala Chai',
    category: 'Chai',
    price: 20,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/latte.jpg',
    salesToday: 62,
    stockCount: 80,
  },
  {
    id: 'v6',
    name: 'Fresh Lime Soda',
    category: 'Juices',
    price: 30,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/latte.jpg',
    salesToday: 22,
    stockCount: 35,
  },
  {
    id: 'v7',
    name: 'Crispy Peri Peri Fries',
    category: 'Snacks',
    price: 60,
    isVeg: true,
    isAvailable: false, // 86'd example
    image: '/images/food/fries.jpg',
    salesToday: 14,
    stockCount: 0,
  },
  {
    id: 'v8',
    name: 'Thick Chocolate Shake',
    category: 'Shakes',
    price: 60,
    isVeg: true,
    isAvailable: true,
    image: '/images/food/latte.jpg',
    salesToday: 16,
    stockCount: 12,
  },
]

interface PremiumVendorAppUiProps {
  initialScreen?: VendorAppScreen
  interactive?: boolean
  compact?: boolean
  stallName?: string
}

export function PremiumVendorAppUi({
  initialScreen = 'billing',
  interactive = true,
  compact = false,
  stallName = 'MGIT Fresh Juice & Snacks',
}: PremiumVendorAppUiProps) {
  const [currentScreen, setCurrentScreen] = useState<VendorAppScreen>(initialScreen)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [cart, setCart] = useState<{ [id: string]: number }>({ v1: 1, v2: 1 })
  const [items, setItems] = useState<VendorMenuItem[]>(DEFAULT_STALL_ITEMS)
  const [paymentMode, setPaymentMode] = useState<'upi' | 'cash'>('upi')
  const [orderSuccessModal, setOrderSuccessModal] = useState<boolean>(false)
  const [lastTokenNum, setLastTokenNum] = useState<number>(104)
  const [orderTab, setOrderTab] = useState<'pending' | 'ready'>('pending')
  const [notificationToast, setNotificationToast] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setNotificationToast(msg)
    setTimeout(() => {
      setNotificationToast(null)
    }, 2400)
  }

  // Cart math
  const cartItemEntries = Object.entries(cart).filter(([_, qty]) => qty > 0)
  const totalCartCount = cartItemEntries.reduce((sum, [_, qty]) => sum + qty, 0)
  const totalCartAmount = cartItemEntries.reduce((sum, [id, qty]) => {
    const item = items.find((i) => i.id === id)
    return sum + (item ? item.price * qty : 0)
  }, 0)

  const addToCart = (id: string) => {
    if (!interactive) return
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const removeFromCart = (id: string) => {
    if (!interactive) return
    setCart((prev) => {
      const current = prev[id] || 0
      if (current <= 1) {
        const next = { ...prev }
        delete next[id]
        return next
      }
      return { ...prev, [id]: current - 1 }
    })
  }

  const toggleAvailability = (id: string) => {
    if (!interactive) return
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.isAvailable
          showToast(
            nextState
              ? `"${item.name}" marked In Stock`
              : `"${item.name}" marked Out of Stock (86'd)`,
          )
          return { ...item, isAvailable: nextState }
        }
        return item
      }),
    )
  }

  const handleCompleteOrder = () => {
    if (!interactive || totalCartCount === 0) return
    const nextToken = lastTokenNum + 1
    setLastTokenNum(nextToken)
    setOrderSuccessModal(true)
  }

  const handleResetForNextOrder = () => {
    setCart({})
    setOrderSuccessModal(false)
    showToast(`Token #${lastTokenNum} sent to KDS & Thermal Printer`)
  }

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.category === selectedCategory
  })

  return (
    <div
      className={`relative mx-auto rounded-[46px] border-[10px] border-slate-900 bg-[#F2F2F6] shadow-2xl overflow-hidden font-sans select-none ${
        compact ? 'w-[290px] h-[580px]' : 'w-[340px] sm:w-[360px] h-[720px]'
      }`}
      style={{
        boxShadow:
          '0 25px 60px -15px rgba(220, 53, 75, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.08), 0 20px 40px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Phone Hardware Top: Dynamic Island & Status Bar */}
      <div className="absolute top-0 inset-x-0 h-10 bg-[#F2F2F6] z-50 flex items-center justify-between px-6 pt-1">
        <span className="text-[12px] font-bold text-slate-800 tracking-tight">12:30</span>
        {/* Dynamic Island */}
        <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
        </div>
        <div className="flex items-center space-x-1 text-slate-800">
          <span className="text-[10px] font-extrabold text-[#DC354B]">4G</span>
          <Icon name="wifi" size={12} />
          <Icon name="battery" size={12} />
        </div>
      </div>

      {/* In-App Notification Toast */}
      {notificationToast && (
        <div className="absolute top-12 left-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-2 rounded-xl shadow-lg border border-slate-800 flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#DC354B]" />
          <span className="truncate flex-1">{notificationToast}</span>
        </div>
      )}

      {/* Screen Body */}
      <div className="pt-11 pb-16 h-full flex flex-col justify-between overflow-hidden bg-[#F2F2F6]">
        {/* =========================================================================
            SCREEN 1: BILLING / MOBILE POS (HOME)
            ========================================================================= */}
        {currentScreen === 'billing' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Stall Header Bar */}
            <div className="px-4 py-2.5 bg-white border-b border-[#E5E5EA] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#DC354B] flex items-center justify-center text-white shadow-xs">
                  <Icon name="store" size={14} />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[12px] font-black text-slate-900 leading-tight truncate">
                    {stallName}
                  </h4>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>POS Active • Bluetooth Printer Ready</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="px-2 py-0.5 rounded-full bg-[#FFF1F2] border border-[#DC354B]/30 text-[#DC354B] text-[10px] font-bold">
                  Stall POS
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="px-3 py-2 bg-white/70 border-b border-[#E5E5EA] flex gap-1.5 overflow-x-auto no-scrollbar">
              {['All', 'Juices', 'Shakes', 'Snacks', 'Chai'].map((cat) => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => interactive && setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 ${
                      isActive
                        ? 'bg-[#DC354B] text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-[#E5E5EA] hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Menu Items Grid */}
            <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {filteredItems.map((item) => {
                  const qty = cart[item.id] || 0
                  return (
                    <div
                      key={item.id}
                      className={`relative bg-white rounded-2xl p-2.5 border transition-all duration-200 flex flex-col justify-between ${
                        !item.isAvailable
                          ? 'opacity-60 border-slate-200 bg-slate-50/80'
                          : qty > 0
                            ? 'border-[#DC354B] shadow-xs ring-1 ring-[#DC354B]/20'
                            : 'border-[#E5E5EA] hover:border-slate-300'
                      }`}
                    >
                      {/* Image + Veg Indicator + Price Tag */}
                      <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 mb-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full h-full object-cover ${!item.isAvailable ? 'grayscale' : ''}`}
                        />
                        <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-600 block" />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-slate-900/90 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-xs">
                          ₹{item.price}
                        </div>
                        {!item.isAvailable && (
                          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                            <span className="text-[10px] font-black text-white uppercase tracking-wider bg-rose-600 px-2 py-0.5 rounded">
                              86'd (Sold Out)
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-900 leading-snug line-clamp-2">
                          {item.name}
                        </h5>
                        <p className="text-[9px] text-slate-400 mt-0.5">{item.category}</p>
                      </div>

                      {/* Fast Quantity Selector Button */}
                      <div className="mt-2 pt-1 border-t border-slate-100">
                        {item.isAvailable ? (
                          qty > 0 ? (
                            <div className="flex items-center justify-between bg-[#FFF1F2] border border-[#DC354B]/30 rounded-lg p-0.5">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="w-6 h-6 rounded bg-white text-[#DC354B] font-black text-xs flex items-center justify-center shadow-2xs hover:bg-slate-50 active:scale-95"
                              >
                                -
                              </button>
                              <span className="text-xs font-black text-[#DC354B]">{qty}</span>
                              <button
                                onClick={() => addToCart(item.id)}
                                className="w-6 h-6 rounded bg-[#DC354B] text-white font-black text-xs flex items-center justify-center shadow-2xs active:scale-95"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item.id)}
                              className="w-full py-1 rounded-lg bg-slate-100 hover:bg-[#FFF1F2] hover:text-[#DC354B] text-slate-700 text-[11px] font-bold transition-colors flex items-center justify-center gap-1 active:scale-98"
                            >
                              <Icon name="plus" size={12} />
                              <span>Add</span>
                            </button>
                          )
                        ) : (
                          <div className="text-center py-1 text-[10px] font-medium text-slate-400">
                            Unavailable
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Floating Fast Cart Drawer */}
            {totalCartCount > 0 && (
              <div className="p-3 bg-white border-t border-[#E5E5EA] shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC354B] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                      {totalCartCount}
                    </span>
                    <span className="text-[12px] font-bold text-slate-800">Current Order</span>
                  </div>
                  {/* Payment Mode Selector */}
                  <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                    <button
                      onClick={() => interactive && setPaymentMode('upi')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                        paymentMode === 'upi'
                          ? 'bg-[#DC354B] text-white shadow-2xs'
                          : 'text-slate-600'
                      }`}
                    >
                      UPI QR
                    </button>
                    <button
                      onClick={() => interactive && setPaymentMode('cash')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                        paymentMode === 'cash'
                          ? 'bg-[#DC354B] text-white shadow-2xs'
                          : 'text-slate-600'
                      }`}
                    >
                      Cash
                    </button>
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={handleCompleteOrder}
                  className="w-full py-2.5 rounded-xl bg-[#DC354B] text-white font-extrabold text-xs shadow-md shadow-[#DC354B]/30 hover:bg-[#c92f43] active:scale-98 transition-all flex items-center justify-between px-4"
                >
                  <div className="text-left">
                    <span className="block text-[9px] font-medium opacity-80 uppercase tracking-wider">
                      Charge {paymentMode === 'upi' ? 'via UPI QR' : 'Cash'}
                    </span>
                    <span className="text-sm font-black">₹{totalCartAmount}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-xs">
                    <span>Confirm Order</span>
                    <Icon name="arrow-right" size={14} />
                  </div>
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            SCREEN 2: KDS / ORDERS SCREEN
            ========================================================================= */}
        {currentScreen === 'orders' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Orders Header */}
            <div className="px-4 py-2.5 bg-white border-b border-[#E5E5EA]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[13px] font-black text-slate-900">Live Kitchen Orders</h4>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  3 Active
                </span>
              </div>
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => interactive && setOrderTab('pending')}
                  className={`py-1 text-center rounded-lg text-xs font-bold transition-all ${
                    orderTab === 'pending'
                      ? 'bg-white text-[#DC354B] shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Preparing (2)
                </button>
                <button
                  onClick={() => interactive && setOrderTab('ready')}
                  className={`py-1 text-center rounded-lg text-xs font-bold transition-all ${
                    orderTab === 'ready'
                      ? 'bg-white text-[#DC354B] shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Ready for Pickup (1)
                </button>
              </div>
            </div>

            {/* Orders List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
              {orderTab === 'pending' ? (
                <>
                  {/* Order Ticket 1 */}
                  <div className="bg-white rounded-2xl p-3 border border-[#E5E5EA] shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-[#FFF1F2] text-[#DC354B] font-black text-xs">
                          #104
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">2 mins ago</span>
                      </div>
                      <span className="text-xs font-black text-slate-900">₹110 • UPI</span>
                    </div>
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between text-xs text-slate-800">
                        <span>1x Fresh Mango Juice</span>
                        <span className="font-bold">₹50</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-800">
                        <span>1x Grilled Veg Sandwich</span>
                        <span className="font-bold">₹60</span>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast('Token #104 marked Ready for Pickup!')}
                      className="w-full py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1"
                    >
                      <Icon name="check" size={12} />
                      <span>Mark Ready for Pickup</span>
                    </button>
                  </div>

                  {/* Order Ticket 2 */}
                  <div className="bg-white rounded-2xl p-3 border border-[#E5E5EA] shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 font-black text-xs">
                          #103
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">5 mins ago</span>
                      </div>
                      <span className="text-xs font-black text-slate-900">₹80 • Cash</span>
                    </div>
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between text-xs text-slate-800">
                        <span>2x Sweet Corn Chaat</span>
                        <span className="font-bold">₹80</span>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast('Token #103 marked Ready for Pickup!')}
                      className="w-full py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1"
                    >
                      <Icon name="check" size={12} />
                      <span>Mark Ready for Pickup</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-2xl p-3 border border-emerald-200 bg-emerald-50/20 shadow-xs">
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-black text-xs">
                        #102
                      </span>
                      <span className="text-[11px] text-emerald-800 font-medium">Ready</span>
                    </div>
                    <span className="text-xs font-black text-slate-900">₹40 • UPI</span>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between text-xs text-slate-800">
                      <span>1x Cold Badam Milk</span>
                      <span className="font-bold">₹40</span>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast('Token #102 Completed & Delivered')}
                    className="w-full py-1.5 rounded-xl bg-slate-900 text-white font-bold text-[11px] hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                  >
                    <Icon name="check-check" size={12} />
                    <span>Complete & Handover</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 3: CATALOG & MENU MANAGEMENT
            ========================================================================= */}
        {currentScreen === 'menu' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 bg-white border-b border-[#E5E5EA] flex items-center justify-between">
              <div>
                <h4 className="text-[13px] font-black text-slate-900">Stall Menu Catalog</h4>
                <p className="text-[10px] text-slate-500">Edit prices and menu availability</p>
              </div>
              <button
                onClick={() => showToast('Add item form opened on mobile')}
                className="px-2.5 py-1 rounded-xl bg-[#DC354B] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs"
              >
                <Icon name="plus" size={12} />
                <span>Add Item</span>
              </button>
            </div>

            {/* Menu List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-2.5 border border-[#E5E5EA] shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900">{item.name}</h5>
                      <p className="text-[10px] text-slate-500 font-medium">
                        ₹{item.price} • {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => showToast(`Price edit sheet for ${item.name}`)}
                      className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold"
                    >
                      Edit ₹
                    </button>
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`w-7 h-4 rounded-full transition-colors relative ${
                        item.isAvailable ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                          item.isAvailable ? 'left-3.5' : 'left-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 4: STOCK MANAGEMENT
            ========================================================================= */}
        {currentScreen === 'stock' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 bg-white border-b border-[#E5E5EA]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-black text-slate-900">Live Stock Control</h4>
                  <p className="text-[10px] text-slate-500">1-tap 86 switch for small stalls</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">
                  {items.filter((i) => !i.isAvailable).length} Sold Out
                </span>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="px-3 py-2 bg-[#FFF1F2] border-b border-[#DC354B]/20 flex items-center justify-between text-[11px]">
              <span className="text-[#DC354B] font-bold">Quick 86 Control:</span>
              <span className="text-slate-600 text-[10px]">Tap switch to toggle item live</span>
            </div>

            {/* Stock List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-2.5 border transition-all flex items-center justify-between ${
                    !item.isAvailable ? 'border-rose-200 bg-rose-50/20' : 'border-[#E5E5EA]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700">
                      {item.stockCount}
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-900">{item.name}</h5>
                      <p className="text-[10px] text-slate-500">
                        {item.stockCount} in batch • ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`px-3 py-1 rounded-xl text-[10px] font-black transition-all ${
                      item.isAvailable
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-rose-600 text-white shadow-xs'
                    }`}
                  >
                    {item.isAvailable ? 'In Stock' : "86'd (Off)"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 5: SALES ANALYTICS
            ========================================================================= */}
        {currentScreen === 'analytics' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 bg-white border-b border-[#E5E5EA] flex items-center justify-between">
              <div>
                <h4 className="text-[13px] font-black text-slate-900">Today's Stall Sales</h4>
                <p className="text-[10px] text-slate-500">Real-time daily summary</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#FFF1F2] text-[#DC354B] text-[10px] font-bold border border-[#DC354B]/30">
                Live Sync
              </span>
            </div>

            {/* Analytics Content */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {/* Primary Revenue Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-3.5 shadow-md">
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">
                  Today Total Revenue
                </span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <div className="text-2xl font-black tracking-tight text-white">₹6,420</div>
                  <span className="text-[10px] font-bold text-emerald-400">
                    +18.5% vs yesterday
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Total Orders</span>
                    <span className="font-bold text-slate-100">84 Orders</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Avg Ticket</span>
                    <span className="font-bold text-slate-100">₹76.40</span>
                  </div>
                </div>
              </div>

              {/* Payment Split */}
              <div className="bg-white rounded-2xl p-3 border border-[#E5E5EA]">
                <h5 className="text-[11px] font-bold text-slate-900 mb-2">Payment Collection</h5>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
                      <span>UPI QR Payments (72%)</span>
                      <span className="font-bold">₹4,620</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-[#DC354B] rounded-full w-[72%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
                      <span>Cash Collections (28%)</span>
                      <span className="font-bold">₹1,800</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-slate-700 rounded-full w-[28%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Peak Velocity Rush Window */}
              <div className="bg-white rounded-2xl p-3 border border-[#E5E5EA]">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-[11px] font-bold text-slate-900">Peak Rush Windows</h5>
                  <span className="text-[10px] text-slate-500 font-medium">Hourly Volume</span>
                </div>
                <div className="grid grid-cols-6 gap-1 items-end h-16 pt-2">
                  {[
                    { time: '8 AM', h: '35%', count: 12 },
                    { time: '10 AM', h: '85%', count: 32, peak: true },
                    { time: '12 PM', h: '50%', count: 18 },
                    { time: '1 PM', h: '95%', count: 38, peak: true },
                    { time: '3 PM', h: '30%', count: 10 },
                    { time: '5 PM', h: '45%', count: 16 },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        style={{ height: bar.h }}
                        className={`w-full rounded-t-sm transition-all ${
                          bar.peak ? 'bg-[#DC354B]' : 'bg-slate-200'
                        }`}
                      />
                      <span className="text-[8px] font-bold text-slate-500">{bar.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            BOTTOM NAVIGATION BAR (Matching Kaaty-Connect)
            ========================================================================= */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-[#E5E5EA] flex items-center justify-around px-2 z-40">
          {[
            { id: 'billing' as VendorAppScreen, label: 'POS', icon: 'home' },
            { id: 'orders' as VendorAppScreen, label: 'KDS', icon: 'room-service' },
            { id: 'menu' as VendorAppScreen, label: 'Menu', icon: 'book-open' },
            { id: 'stock' as VendorAppScreen, label: 'Stock', icon: 'package' },
            { id: 'analytics' as VendorAppScreen, label: 'Sales', icon: 'bar-chart-2' },
          ].map((tab) => {
            const isActive = currentScreen === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => interactive && setCurrentScreen(tab.id)}
                className="flex flex-col items-center justify-center w-12 py-1 transition-all"
              >
                <div
                  className={`transition-colors ${isActive ? 'text-[#DC354B]' : 'text-[#8E8E93]'}`}
                >
                  <Icon name={tab.icon} size={18} />
                </div>
                <span
                  className={`text-[9px] font-bold mt-1 transition-colors ${
                    isActive ? 'text-[#DC354B]' : 'text-[#8E8E93]'
                  }`}
                >
                  {tab.label}
                </span>
                {isActive && (
                  <span className="w-4 h-0.5 rounded-full bg-[#DC354B] mt-0.5 animate-fade-in" />
                )}
              </button>
            )
          })}
        </div>

        {/* Order Success Modal Sheet */}
        {orderSuccessModal && (
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl p-5 w-full max-w-[280px] text-center shadow-2xl border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Icon name="check" size={24} />
              </div>
              <h4 className="text-base font-black text-slate-900">Order Placed!</h4>
              <p className="text-xs text-slate-500 mt-1">
                Paid ₹{totalCartAmount} via {paymentMode.toUpperCase()}
              </p>

              <div className="my-4 py-3 bg-[#FFF1F2] rounded-2xl border border-[#DC354B]/20">
                <span className="text-[10px] text-[#DC354B] font-bold uppercase tracking-wider block">
                  Token Number
                </span>
                <span className="text-3xl font-black text-[#DC354B] block mt-0.5">
                  #{lastTokenNum}
                </span>
                <span className="text-[9px] text-slate-500 mt-1 block">
                  Printed to ESC/POS Thermal Printer
                </span>
              </div>

              <button
                onClick={handleResetForNextOrder}
                className="w-full py-2.5 rounded-xl bg-[#DC354B] text-white font-bold text-xs shadow-md shadow-[#DC354B]/30 hover:bg-[#c92f43] transition-all"
              >
                Next Customer Order
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Phone Hardware Bottom Indicator */}
      <div className="absolute bottom-1 inset-x-0 h-1 flex justify-center z-50">
        <div className="w-32 h-1 bg-slate-300 rounded-full" />
      </div>
    </div>
  )
}
