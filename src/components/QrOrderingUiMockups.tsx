import { useState } from 'react'
import { Icon } from './Icon'

export type QrScreenState = 'scan' | 'menu' | 'item' | 'cart' | 'checkout' | 'confirmation'

export interface QrMenuItem {
  id: string
  name: string
  category: 'Breakfast' | 'Lunch' | 'Snacks' | 'Beverages'
  price: number
  desc: string
  image: string
  isVeg: boolean
  badge?: string
}

export const QR_MENU_ITEMS: QrMenuItem[] = [
  {
    id: 'biryani',
    name: 'Hyderabadi Chicken Biryani',
    category: 'Lunch',
    price: 120,
    desc: 'Fragrant basmati rice dum cooked with marinated chicken pieces and aromatic spices.',
    image: '/images/food/biryani.jpg',
    isVeg: false,
    badge: 'Popular',
  },
  {
    id: 'dosa',
    name: 'Butter Masala Dosa',
    category: 'Breakfast',
    price: 80,
    desc: 'Crispy fermented crepe filled with spiced potato masala and served with fresh chutneys.',
    image: '/images/food/dosa.jpg',
    isVeg: true,
    badge: 'Bestseller',
  },
  {
    id: 'burger',
    name: 'Crunchy Chicken Burger',
    category: 'Snacks',
    price: 95,
    desc: 'Golden fried crispy patty topped with fresh lettuce, creamy mayo, and toasted sesame buns.',
    image: '/images/food/burger.jpg',
    isVeg: false,
  },
  {
    id: 'pizza',
    name: 'Farmhouse Veggie Pizza',
    category: 'Lunch',
    price: 150,
    desc: 'Hand-tossed base loaded with fresh bell peppers, onions, tomatoes and 100% mozzarella.',
    image: '/images/food/pizza.jpg',
    isVeg: true,
  },
  {
    id: 'fries',
    name: 'Peri Peri French Fries',
    category: 'Snacks',
    price: 60,
    desc: 'Crispy cut golden potatoes tossed in zesty peri-peri seasoning.',
    image: '/images/food/fries.jpg',
    isVeg: true,
  },
  {
    id: 'latte',
    name: 'Classic Hot Cafe Latte',
    category: 'Beverages',
    price: 55,
    desc: 'Rich freshly ground espresso balanced with silky steamed milk and light microfoam.',
    image: '/images/food/latte.jpg',
    isVeg: true,
  },
]

interface CartItem {
  item: QrMenuItem
  quantity: number
}

interface PremiumQrOrderingUiProps {
  initialScreen?: QrScreenState
  currentScreen?: QrScreenState
  onScreenChange?: (screen: QrScreenState) => void
  compact?: boolean
  interactive?: boolean
  tableNumber?: string
  venueName?: string
}

export function PremiumQrOrderingUi({
  initialScreen = 'scan',
  currentScreen: controlledScreen,
  onScreenChange,
  compact = false,
  interactive: _interactive = true,
  tableNumber = '04',
  venueName = 'Brainiacs Dining',
}: PremiumQrOrderingUiProps) {
  const [internalScreen, setInternalScreen] = useState<QrScreenState>(initialScreen)
  const activeScreen = controlledScreen ?? internalScreen

  const setScreen = (screen: QrScreenState) => {
    if (!controlledScreen) {
      setInternalScreen(screen)
    }
    onScreenChange?.(screen)
  }

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    { item: QR_MENU_ITEMS[0], quantity: 1 },
    { item: QR_MENU_ITEMS[1], quantity: 1 },
  ])
  const [selectedItem, setSelectedItem] = useState<QrMenuItem>(QR_MENU_ITEMS[0])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [itemQuantity, setItemQuantity] = useState<number>(1)
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'counter'>('upi')
  const [isScanning, setIsScanning] = useState<boolean>(false)

  // Calculations
  const subtotal = cart.reduce((acc, c) => acc + c.item.price * c.quantity, 0)
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal > 0 ? subtotal + tax : 0
  const totalItemCount = cart.reduce((acc, c) => acc + c.quantity, 0)

  // Add to cart helper
  const handleAddToCart = (item: QrMenuItem, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id)
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, quantity: c.quantity + qty } : c))
      }
      return [...prev, { item, quantity: qty }]
    })
  }

  // Update item quantity
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta
            return newQty > 0 ? { ...c, quantity: newQty } : null
          }
          return c
        })
        .filter((c): c is CartItem => c !== null)
    })
  }

  // Scan simulation
  const triggerScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScreen('menu')
    }, 1200)
  }

  // Payment simulation
  const handleSimulatePayment = () => {
    setIsProcessingPayment(true)
    setTimeout(() => {
      setIsProcessingPayment(false)
      setScreen('confirmation')
    }, 1200)
  }

  const filteredItems =
    selectedCategory === 'All'
      ? QR_MENU_ITEMS
      : QR_MENU_ITEMS.filter((item) => item.category === selectedCategory)

  const scaleClass = compact
    ? 'w-[280px] h-[540px]'
    : 'w-[320px] sm:w-[350px] h-[640px] sm:h-[680px]'

  return (
    <div
      className={`${scaleClass} bg-navy-950 rounded-[48px] p-3 shadow-2xl border-4 border-navy-800/80 relative flex flex-col justify-between overflow-hidden select-none text-navy-900 transition-all duration-300`}
    >
      {/* Outer Phone Bezel & Glare */}
      <div className="absolute inset-0 rounded-[44px] pointer-events-none border border-white/10 z-50" />
      <div className="absolute top-0 right-12 w-28 h-28 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl pointer-events-none z-50" />

      {/* Screen Frame Container */}
      <div className="relative w-full h-full bg-gray-50 rounded-[38px] overflow-hidden flex flex-col justify-between border border-gray-200">
        {/* Unified Status Bar & Dynamic Island */}
        <div
          className={`px-6 pt-3.5 pb-2 flex items-center justify-between text-[11px] font-bold z-40 shrink-0 transition-colors duration-200 ${
            activeScreen === 'scan'
              ? 'bg-black text-white/90 border-b border-white/5'
              : 'bg-gray-100/90 text-navy-800'
          }`}
        >
          {/* Time (Safe inset away from curved corner bezel) */}
          <span className="w-12 text-left tracking-tight pl-1">12:45</span>

          {/* Dynamic Island (Centered notch) */}
          <div className="w-20 h-4.5 rounded-full bg-black flex items-center justify-end pr-2 gap-1.5 shadow-inner border border-white/10 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
          </div>

          {/* Indicators (Safe inset away from curved corner bezel) */}
          <div className="w-12 flex items-center justify-end gap-1.5 text-[10px] pr-1">
            <span
              className={`text-[8px] px-1 py-0.2 rounded-xs font-bold leading-none ${
                activeScreen === 'scan' ? 'bg-white/20 text-white' : 'bg-orange-100 text-[#FA5A1E]'
              }`}
            >
              5G
            </span>
            <Icon
              name="battery"
              size={12}
              className={activeScreen === 'scan' ? 'text-white/80' : 'text-gray-700'}
            />
          </div>
        </div>

        {/* Browser URL Header (Visible in in-browser states: Menu, Item, Cart, Checkout, Confirmation) */}
        {activeScreen !== 'scan' && (
          <div className="px-3.5 pb-2 pt-0.5 bg-gray-100/90 border-b border-gray-200/70 z-40 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200/90 px-3 py-1.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-1.5 min-w-0">
                <Icon name="lock" size={11} className="text-emerald-600 shrink-0" />
                <span className="text-[11px] font-medium text-navy-800 tracking-tight truncate">
                  kaaty.store/table/{tableNumber}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <span className="px-1.5 py-0.5 rounded-md bg-orange-50 border border-orange-200/60 text-[#FA5A1E] text-[9px] font-bold">
                  Table {tableNumber}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 1: QR SCAN
            ========================================================================= */}
        {activeScreen === 'scan' && (
          <div className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-b from-gray-900 via-navy-950 to-black text-white relative overflow-hidden">
            {/* Camera Header */}
            <div className="text-center pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-2 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA5A1E] animate-ping" />
                Camera Scan
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                Point at Table QR Stand
              </h4>
              <p className="text-[11px] text-gray-300 mt-1 max-w-[240px] mx-auto leading-normal">
                Scan the QR code on your table to browse menu and order
              </p>
            </div>

            {/* Camera Viewfinder with Realistic Table QR Stand */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              {/* Scan Reticle Frame */}
              <div className="relative w-44 h-44 rounded-2xl p-2.5 border-2 border-dashed border-[#FA5A1E]/80 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center shadow-lg">
                {/* 4 Corner Accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-3 border-l-3 border-[#FA5A1E] rounded-tl-md" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-3 border-r-3 border-[#FA5A1E] rounded-tr-md" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-3 border-l-3 border-[#FA5A1E] rounded-bl-md" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-3 border-r-3 border-[#FA5A1E] rounded-br-md" />

                {/* Animated Scanning Laser Line */}
                {isScanning && (
                  <div className="absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-[#FA5A1E] to-transparent shadow-[0_0_12px_#FA5A1E] animate-bounce z-20" />
                )}

                {/* Realistic Table Tent QR Card Stand Visual */}
                <div className="w-32 bg-white rounded-xl p-2 text-navy shadow-md flex flex-col items-center text-center border border-gray-200">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-3.5 h-3.5 rounded bg-[#FA5A1E] text-white flex items-center justify-center text-[8px] font-black">
                      K
                    </span>
                    <span className="text-[10px] font-extrabold text-navy tracking-tight">
                      KAATY
                    </span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-orange-100 text-[#FA5A1E] text-[8px] font-extrabold mb-1">
                    TABLE {tableNumber}
                  </div>

                  {/* Clean Vector QR Code Matrix */}
                  <div className="w-18 h-18 bg-gray-50 border border-gray-300 rounded-lg p-1 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-navy">
                      {/* Top-Left Finder */}
                      <rect x="5" y="5" width="28" height="28" rx="3" fill="#111827" />
                      <rect x="11" y="11" width="16" height="16" rx="2" fill="#FFFFFF" />
                      <rect x="15" y="15" width="8" height="8" rx="1" fill="#FA5A1E" />
                      {/* Top-Right Finder */}
                      <rect x="67" y="5" width="28" height="28" rx="3" fill="#111827" />
                      <rect x="73" y="11" width="16" height="16" rx="2" fill="#FFFFFF" />
                      <rect x="77" y="15" width="8" height="8" rx="1" fill="#111827" />
                      {/* Bottom-Left Finder */}
                      <rect x="5" y="67" width="28" height="28" rx="3" fill="#111827" />
                      <rect x="11" y="73" width="16" height="16" rx="2" fill="#FFFFFF" />
                      <rect x="15" y="77" width="8" height="8" rx="1" fill="#111827" />
                      {/* Data dots */}
                      <rect x="38" y="10" width="8" height="8" />
                      <rect x="50" y="14" width="8" height="8" />
                      <rect x="38" y="26" width="8" height="8" />
                      <rect x="50" y="26" width="8" height="8" />
                      <rect x="10" y="38" width="8" height="8" />
                      <rect x="22" y="44" width="8" height="8" />
                      <rect x="38" y="42" width="12" height="12" rx="2" fill="#FA5A1E" />
                      <rect x="54" y="40" width="8" height="8" />
                      <rect x="68" y="38" width="8" height="8" />
                      <rect x="80" y="44" width="8" height="8" />
                      <rect x="38" y="68" width="8" height="8" />
                      <rect x="50" y="68" width="8" height="8" />
                      <rect x="68" y="60" width="8" height="8" />
                      <rect x="80" y="68" width="8" height="8" />
                      <rect x="58" y="80" width="8" height="8" />
                      <rect x="74" y="80" width="12" height="8" />
                    </svg>
                  </div>
                  <span className="text-[8px] font-semibold text-gray-500 mt-1">
                    Scan to view menu
                  </span>
                </div>
              </div>

              {isScanning && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <Icon name="check" size={13} />
                  <span>Table {tableNumber} Identified...</span>
                </div>
              )}
            </div>

            {/* Scan Action Button */}
            <div className="pt-2">
              <button
                onClick={triggerScan}
                disabled={isScanning}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FA5A1E] hover:bg-orange-600 text-white font-extrabold text-xs shadow-lg shadow-orange-600/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon name="scan-line" size={16} />
                <span>{isScanning ? 'Opening Digital Menu...' : 'Tap to Scan Table QR'}</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: DIGITAL MENU
            ========================================================================= */}
        {activeScreen === 'menu' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden bg-white">
            {/* Menu Header with Table & Search */}
            <div className="p-3 pb-2 border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-navy leading-tight">
                    {venueName}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Dine-In • Table {tableNumber}</span>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[#FA5A1E] font-bold text-[10px] flex items-center gap-1">
                  <Icon name="utensils" size={11} />
                  <span>Table {tableNumber}</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Icon
                  name="search"
                  size={12}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search dishes, drinks..."
                  readOnly
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-gray-100 text-[11px] text-navy placeholder:text-gray-400 focus:outline-none"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar pb-0.5">
                {['All', 'Breakfast', 'Lunch', 'Snacks', 'Beverages'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#FA5A1E] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items List */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2.5">
              {filteredItems.map((item) => {
                const inCart = cart.find((c) => c.item.id === item.id)
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-gray-200 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-xs border flex items-center justify-center p-0.5 ${
                            item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                          }`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          />
                        </span>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-orange-100 text-[#FA5A1E] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h5 className="font-bold text-navy text-xs truncate">{item.name}</h5>
                      <p className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">{item.desc}</p>
                      <div className="text-xs font-extrabold text-navy mt-1">₹{item.price}</div>
                    </div>

                    {/* Image & Add Button */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-x-1 bottom-1">
                        {inCart ? (
                          <div className="bg-white/95 backdrop-blur-xs rounded-lg shadow-sm border border-orange-200 flex items-center justify-between px-1.5 py-0.5 text-xs font-bold text-[#FA5A1E]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleUpdateQuantity(item.id, -1)
                              }}
                              className="text-gray-500 hover:text-navy px-0.5 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="text-[10px] font-bold">{inCart.quantity}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleUpdateQuantity(item.id, 1)
                              }}
                              className="text-gray-500 hover:text-navy px-0.5 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedItem(item)
                              setItemQuantity(1)
                              setScreen('item')
                            }}
                            className="w-full py-0.5 rounded-lg bg-white/95 backdrop-blur-xs text-[#FA5A1E] border border-orange-200 font-extrabold text-[10px] shadow-sm hover:bg-[#FA5A1E] hover:text-white transition-colors cursor-pointer"
                          >
                            + ADD
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Floating Bottom Cart Bar */}
            {totalItemCount > 0 && (
              <div className="p-3 bg-white border-t border-gray-100 shadow-md">
                <button
                  onClick={() => setScreen('cart')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FA5A1E] text-white flex items-center justify-between shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-left">
                    <span className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center text-[10px] font-bold">
                      {totalItemCount}
                    </span>
                    <span className="text-xs font-bold">View Cart</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold">
                    <span>₹{total}</span>
                    <Icon name="arrow-right" size={13} />
                  </div>
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STATE 3: ITEM DETAILS & CUSTOMIZATION
            ========================================================================= */}
        {activeScreen === 'item' && (
          <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden">
            <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setScreen('menu')}
                className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-navy shadow-sm cursor-pointer"
              >
                <Icon name="arrow-left" size={14} />
              </button>
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-bold">
                Table {tableNumber}
              </div>
            </div>

            <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto no-scrollbar">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`w-3 h-3 rounded-xs border flex items-center justify-center p-0.5 ${
                      selectedItem.isVeg ? 'border-emerald-600' : 'border-rose-600'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        selectedItem.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    />
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                    {selectedItem.category}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-navy">{selectedItem.name}</h4>
                <div className="text-sm font-extrabold text-[#FA5A1E] mt-1">
                  ₹{selectedItem.price}
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{selectedItem.desc}</p>

                {/* Dine-In Customization Notes */}
                <div className="mt-4 p-3 rounded-xl bg-orange-50/60 border border-orange-100">
                  <span className="text-[10px] font-bold text-navy block mb-1">
                    Kitchen Note for Table {tableNumber}:
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Less spicy, extra lemon..."
                    readOnly
                    className="w-full bg-white rounded-lg px-2.5 py-1.5 text-xs text-navy border border-gray-200 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Quantity Controls & Add Button */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
                  <button
                    onClick={() => setItemQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-lg bg-white shadow-xs flex items-center justify-center font-bold text-gray-600 hover:text-navy cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-xs text-navy">
                    {itemQuantity}
                  </span>
                  <button
                    onClick={() => setItemQuantity((q) => q + 1)}
                    className="w-7 h-7 rounded-lg bg-white shadow-xs flex items-center justify-center font-bold text-gray-600 hover:text-navy cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(selectedItem, itemQuantity)
                    setScreen('cart')
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#FA5A1E] text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Add to Cart</span>
                  <span className="font-extrabold">₹{selectedItem.price * itemQuantity}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 4: CART BREAKDOWN
            ========================================================================= */}
        {activeScreen === 'cart' && (
          <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden">
            {/* Header */}
            <div className="p-3 border-b border-gray-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setScreen('menu')}
                  className="p-1 text-gray-500 hover:text-navy cursor-pointer"
                >
                  <Icon name="arrow-left" size={14} />
                </button>
                <div>
                  <h4 className="text-xs font-extrabold text-navy">Your Table Order</h4>
                  <p className="text-[10px] text-gray-500">Table {tableNumber} • Dine-In</p>
                </div>
              </div>
              <button
                onClick={() => setScreen('menu')}
                className="text-[10px] font-bold text-[#FA5A1E] hover:underline cursor-pointer"
              >
                + Add Items
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <Icon name="shopping-bag" size={32} className="mb-2 text-gray-300" />
                  <p className="text-xs font-bold text-navy">Your cart is empty</p>
                  <button
                    onClick={() => setScreen('menu')}
                    className="mt-3 px-3 py-1.5 rounded-lg bg-orange-100 text-[#FA5A1E] text-xs font-bold cursor-pointer"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                        <h6 className="font-bold text-xs text-navy truncate">{item.name}</h6>
                      </div>
                      <div className="text-[11px] font-semibold text-gray-600 mt-0.5">
                        ₹{item.price} x {quantity} = ₹{item.price * quantity}
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg bg-white border border-gray-200 p-0.5">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-gray-600 hover:text-navy text-xs font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-[10px] font-bold text-navy">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-gray-600 hover:text-navy text-xs font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Bill Details */}
              {cart.length > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-200/60 text-[11px] space-y-1.5">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>GST (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="pt-1.5 border-t border-gray-200 flex justify-between font-extrabold text-xs text-navy">
                    <span>To Pay</span>
                    <span className="text-[#FA5A1E]">₹{total}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Checkout Action Button */}
            {cart.length > 0 && (
              <div className="p-3 bg-white border-t border-gray-100">
                <button
                  onClick={() => setScreen('checkout')}
                  className="w-full py-3 px-4 rounded-xl bg-[#FA5A1E] text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:bg-orange-600 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Table {tableNumber}</div>
                    <div className="font-extrabold">Proceed to Checkout</div>
                  </div>
                  <div className="flex items-center gap-1 font-extrabold text-sm">
                    <span>₹{total}</span>
                    <Icon name="arrow-right" size={14} />
                  </div>
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STATE 5: CHECKOUT & PAYMENT
            ========================================================================= */}
        {activeScreen === 'checkout' && (
          <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden p-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={() => setScreen('cart')}
                  className="p-1 text-gray-500 hover:text-navy cursor-pointer"
                >
                  <Icon name="arrow-left" size={14} />
                </button>
                <h4 className="text-xs sm:text-sm font-extrabold text-navy">Checkout & Pay</h4>
              </div>

              {/* Table Summary Card */}
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 mb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Dine-In Location
                  </span>
                  <div className="text-xs font-bold text-navy">
                    Table {tableNumber} • Ground Floor
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-gray-500">Order Amount</span>
                  <div className="text-sm font-extrabold text-[#FA5A1E]">₹{total}</div>
                </div>
              </div>

              {/* Payment Methods (Verified Kaaty Options: UPI Intent / QR, Counter Pay) */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                  Select Payment Option:
                </label>

                {/* UPI Option */}
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#FA5A1E] bg-orange-50/40 ring-1 ring-[#FA5A1E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#FA5A1E]">
                      <Icon name="qr-code" size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Instant UPI / QR</div>
                      <div className="text-[10px] text-gray-500">GPay, PhonePe, Paytm, BHIM</div>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      paymentMethod === 'upi' ? 'border-[#FA5A1E] bg-[#FA5A1E]' : 'border-gray-300'
                    }`}
                  >
                    {paymentMethod === 'upi' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                {/* Pay at Counter Option */}
                <div
                  onClick={() => setPaymentMethod('counter')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'counter'
                      ? 'border-[#FA5A1E] bg-orange-50/40 ring-1 ring-[#FA5A1E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                      <Icon name="store" size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy">Pay at Counter</div>
                      <div className="text-[10px] text-gray-500">Cash / Card after dining</div>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      paymentMethod === 'counter'
                        ? 'border-[#FA5A1E] bg-[#FA5A1E]'
                        : 'border-gray-300'
                    }`}
                  >
                    {paymentMethod === 'counter' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pay Button with Simulation */}
            <div className="pt-3">
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessingPayment}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FA5A1E] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessingPayment ? (
                  <>
                    <Icon name="refresh-cw" size={14} className="animate-spin" />
                    <span>Sending Order to Kitchen...</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹{total} & Confirm Order</span>
                    <Icon name="arrow-right" size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 6: ORDER CONFIRMATION & LIVE TRACKING
            ========================================================================= */}
        {activeScreen === 'confirmation' && (
          <div className="flex-1 flex flex-col justify-between bg-white overflow-hidden p-4">
            <div className="text-center pt-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Icon name="check-circle-2" size={26} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Order Sent to Kitchen
              </span>
              <h3 className="text-base sm:text-lg font-black text-navy mt-1">Order Confirmed!</h3>

              {/* High-Visibility Token & Table Card */}
              <div className="mt-3 p-3 rounded-2xl bg-gradient-to-br from-navy via-navy-900 to-navy-950 text-white shadow-md border border-navy-800">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Order Token Number
                </div>
                <div className="font-display text-3xl font-extrabold text-[#FA5A1E] my-1">#142</div>
                <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold">
                  Table {tableNumber} • 2 Items • ₹{total || 210}
                </div>
              </div>

              {/* Live Operational Progress (Synchronized with KDS) */}
              <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Kitchen Progress
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    KDS Realtime Sync
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700">Order Received & Paid</span>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-[#FA5A1E] text-white flex items-center justify-center text-[9px] font-bold animate-pulse">
                      2
                    </div>
                    <span className="font-bold text-[#FA5A1E]">Preparing in Kitchen...</span>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-center gap-2 text-xs opacity-50">
                    <div className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-[9px]">
                      3
                    </div>
                    <span className="text-gray-500">Ready for Table Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2">
              <button
                onClick={() => setScreen('menu')}
                className="w-full py-2.5 px-3 rounded-xl bg-gray-100 text-navy font-bold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
              >
                + Order More for Table {tableNumber}
              </button>
            </div>
          </div>
        )}

        {/* Bottom Home Indicator Bar */}
        <div className="py-1.5 flex justify-center bg-white border-t border-gray-100">
          <div className="w-24 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}
