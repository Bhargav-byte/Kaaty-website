import { useState } from 'react'
import { Icon } from './Icon'

export type BusinessAppScreen = 'dashboard' | 'settlements' | 'menu' | 'stock' | 'analytics'

export interface MenuItemData {
  id: string
  name: string
  category: 'Breakfast' | 'Lunch' | 'Snacks' | 'Beverages'
  price: number
  inStock: boolean
  image: string
  isVeg: boolean
}

const INITIAL_MENU_ITEMS: MenuItemData[] = [
  {
    id: 'biryani',
    name: 'Chicken Dum Biryani',
    category: 'Lunch',
    price: 150,
    inStock: true,
    image: '/images/food/biryani.jpg',
    isVeg: false,
  },
  {
    id: 'dosa',
    name: 'Butter Masala Dosa',
    category: 'Breakfast',
    price: 80,
    inStock: true,
    image: '/images/food/dosa.jpg',
    isVeg: true,
  },
  {
    id: 'burger',
    name: 'Crunchy Chicken Burger',
    category: 'Snacks',
    price: 95,
    inStock: true,
    image: '/images/food/burger.jpg',
    isVeg: false,
  },
  {
    id: 'latte',
    name: 'Classic Hot Cafe Latte',
    category: 'Beverages',
    price: 55,
    inStock: true,
    image: '/images/food/latte.jpg',
    isVeg: true,
  },
  {
    id: 'fries',
    name: 'Peri Peri French Fries',
    category: 'Snacks',
    price: 60,
    inStock: false,
    image: '/images/food/fries.jpg',
    isVeg: true,
  },
  {
    id: 'pizza',
    name: 'Farmhouse Veggie Pizza',
    category: 'Lunch',
    price: 140,
    inStock: true,
    image: '/images/food/pizza.jpg',
    isVeg: true,
  },
]

interface PremiumBusinessAppUiProps {
  initialScreen?: BusinessAppScreen
  currentScreen?: BusinessAppScreen
  onScreenChange?: (screen: BusinessAppScreen) => void
  compact?: boolean
  interactive?: boolean
  outletName?: string
}

export function PremiumBusinessAppUi({
  initialScreen = 'dashboard',
  currentScreen: controlledScreen,
  onScreenChange,
  compact = false,
  interactive = true,
  outletName = 'Brainiacs Main Canteen',
}: PremiumBusinessAppUiProps) {
  const [internalScreen, setInternalScreen] = useState<BusinessAppScreen>(initialScreen)
  const activeScreen = controlledScreen ?? internalScreen

  const setScreen = (screen: BusinessAppScreen) => {
    if (!controlledScreen) {
      setInternalScreen(screen)
    }
    onScreenChange?.(screen)
  }

  // Interactive Menu and Stock state
  const [menuItems, setMenuItems] = useState<MenuItemData[]>(INITIAL_MENU_ITEMS)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [editingItem, setEditingItem] = useState<MenuItemData | null>(null)
  const [tempPrice, setTempPrice] = useState<number>(150)
  const [syncToast, setSyncToast] = useState<string | null>(null)
  const [selectedOutlet, setSelectedOutlet] = useState<string>(outletName)
  const [showOutletDropdown, setShowOutletDropdown] = useState<boolean>(false)

  const showSyncNotification = (msg: string) => {
    setSyncToast(msg)
    setTimeout(() => setSyncToast(null), 2400)
  }

  // Toggle inStock (86 item)
  const toggleStock = (itemId: string) => {
    setMenuItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const nextState = !item.inStock
          showSyncNotification(
            nextState
              ? `${item.name} marked IN STOCK across POS & App`
              : `${item.name} marked OUT OF STOCK (86) on all channels`,
          )
          return { ...item, inStock: nextState }
        }
        return item
      }),
    )
  }

  // Save edited price
  const handleSavePrice = () => {
    if (!editingItem) return
    setMenuItems((prev) =>
      prev.map((item) => (item.id === editingItem.id ? { ...item, price: tempPrice } : item)),
    )
    showSyncNotification(`${editingItem.name} price updated to ₹${tempPrice} across POS & App`)
    setEditingItem(null)
  }

  const outOfStockCount = menuItems.filter((m) => !m.inStock).length
  const filteredMenuItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((m) => m.category === selectedCategory)

  const scaleClass = compact
    ? 'w-[280px] h-[580px] text-[11px]'
    : 'w-[320px] sm:w-[340px] h-[670px] text-xs'

  return (
    <div
      className={`${scaleClass} bg-navy-950 rounded-[48px] p-3 shadow-2xl border-4 border-navy-800/80 relative flex flex-col justify-between overflow-hidden select-none text-navy-900 transition-all duration-300`}
    >
      {/* Outer Phone Bezel & Glare */}
      <div className="absolute inset-0 rounded-[44px] pointer-events-none border border-white/10 z-50" />
      <div className="absolute top-0 right-12 w-28 h-28 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl pointer-events-none z-50" />

      {/* Screen Frame Container */}
      <div className="relative w-full h-full bg-[#F8FAFC] rounded-[38px] overflow-hidden flex flex-col justify-between border border-gray-200">
        {/* Unified Status Bar & Dynamic Island */}
        <div className="px-6 pt-3.5 pb-2 flex items-center justify-between text-[11px] font-bold z-40 shrink-0 bg-white border-b border-gray-100 text-navy-800">
          <span className="w-12 text-left tracking-tight pl-1">12:45</span>

          <div className="w-20 h-4.5 rounded-full bg-black flex items-center justify-end pr-2 gap-1.5 shadow-inner border border-white/10 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
          </div>

          <div className="w-12 flex items-center justify-end gap-1.5 text-[10px] pr-1">
            <span className="text-[8px] px-1 py-0.2 rounded-xs font-bold leading-none bg-orange-100 text-[#FA5A1E]">
              5G
            </span>
            <Icon name="battery" size={12} className="text-gray-700" />
          </div>
        </div>

        {/* Sync Toast Notification */}
        {syncToast && (
          <div className="absolute top-14 inset-x-3 z-50 p-2.5 rounded-xl bg-navy-900 text-white text-[10px] font-semibold flex items-center gap-2 shadow-xl border border-navy-700 animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="flex-1 leading-tight">{syncToast}</span>
          </div>
        )}

        {/* =========================================================================
            STATE 1: OWNER DASHBOARD
            ========================================================================= */}
        {activeScreen === 'dashboard' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar p-3.5 space-y-3 bg-[#F8FAFC]">
            {/* Header / Outlet Switcher */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Owner Dashboard
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[9px] border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* Outlet Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowOutletDropdown(!showOutletDropdown)}
                  className="w-full p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-between text-left hover:border-orange-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#FA5A1E] flex items-center justify-center shrink-0">
                      <Icon name="store" size={14} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-extrabold text-navy truncate">
                        {selectedOutlet}
                      </h4>
                      <p className="text-[10px] text-gray-500">Tap to switch branch</p>
                    </div>
                  </div>
                  <Icon name="chevron-down" size={14} className="text-gray-400 shrink-0" />
                </button>

                {showOutletDropdown && (
                  <div className="absolute top-12 inset-x-0 z-30 bg-white rounded-xl shadow-xl border border-gray-200 p-1 space-y-1">
                    {[
                      'Brainiacs Main Canteen',
                      'North Block Food Court',
                      'Campus Library Cafe',
                    ].map((name) => (
                      <button
                        key={name}
                        onClick={() => {
                          setSelectedOutlet(name)
                          setShowOutletDropdown(false)
                          showSyncNotification(`Switched view to ${name}`)
                        }}
                        className={`w-full text-left p-2 rounded-lg text-xs font-semibold cursor-pointer ${
                          selectedOutlet === name
                            ? 'bg-orange-50 text-[#FA5A1E] font-bold'
                            : 'text-navy-700 hover:bg-gray-50'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Today Revenue Hero Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white shadow-md border border-navy-800">
              <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                <span>Today Revenue</span>
                <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                  <Icon name="trending-up" size={11} /> +14.2% vs yesterday
                </span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                ₹54,820
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10 text-[10px]">
                <div>
                  <span className="text-gray-400 block">Active Orders</span>
                  <span className="text-xs font-extrabold text-orange-400">342 Completed</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Avg. Order Value</span>
                  <span className="text-xs font-extrabold text-white">₹160</span>
                </div>
              </div>
            </div>

            {/* Hourly Order Velocity Mini Bar */}
            <div className="p-3 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-extrabold text-navy">Peak Velocity Today</span>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                  Peak: 1 PM - 2 PM (84 orders)
                </span>
              </div>
              <div className="flex items-end justify-between gap-1.5 h-12 pt-1 px-1">
                {[20, 35, 60, 95, 100, 75, 45, 50, 68, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1 h-full justify-end"
                  >
                    <div
                      className={`w-full rounded-xs transition-all ${
                        h >= 90 ? 'bg-[#FA5A1E]' : 'bg-orange-200'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-gray-400 mt-1.5 font-medium">
                <span>10 AM</span>
                <span>1 PM (Rush)</span>
                <span>4 PM</span>
                <span>8 PM</span>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setScreen('stock')}
                className="p-3 rounded-xl bg-white border border-gray-200/80 hover:border-orange-300 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Icon name="package" size={14} />
                </div>
                <div className="text-xs font-bold text-navy">Stock Control</div>
                <div className="text-[10px] text-rose-600 font-semibold mt-0.5">
                  {outOfStockCount > 0 ? `${outOfStockCount} item 86'd` : 'All in stock'}
                </div>
              </button>

              <button
                onClick={() => setScreen('settlements')}
                className="p-3 rounded-xl bg-white border border-gray-200/80 hover:border-orange-300 text-left transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <Icon name="wallet" size={14} />
                </div>
                <div className="text-xs font-bold text-navy">Settlements</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                  ₹48,250 Next Payout
                </div>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: SETTLEMENTS & FINANCIAL VISIBILITY
            ========================================================================= */}
        {activeScreen === 'settlements' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar p-3.5 space-y-3 bg-[#F8FAFC]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Settlements & Payouts
                </span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Daily Payout Cycle
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-navy">Bank Settlement Summary</h4>
            </div>

            {/* Available Settlement Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950 via-navy-950 to-black text-white shadow-md border border-emerald-900/50">
              <span className="text-[10px] text-emerald-300 font-medium block">
                Net Payout (Tomorrow Transfer)
              </span>
              <div className="font-display text-2xl font-black text-white mt-0.5 mb-2">
                ₹48,250.00
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-white/10 px-2.5 py-1 rounded-lg">
                <Icon name="check-circle-2" size={12} className="text-emerald-400" />
                <span>Reconciled with HDFC Bank •••• 4092</span>
              </div>

              {/* Settlement Deductions Breakdown */}
              <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-[10px]">
                <div className="flex justify-between text-gray-300">
                  <span>Gross Counter & Online Sales</span>
                  <span className="font-bold text-white">₹50,790.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Platform & Processing Fee (2%)</span>
                  <span className="text-rose-300">-₹1,015.80</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Applicable GST (18% on fee)</span>
                  <span className="text-rose-300">-₹182.84</span>
                </div>
                <div className="pt-1.5 border-t border-white/10 flex justify-between font-extrabold text-emerald-300">
                  <span>Net Direct Deposit</span>
                  <span>₹48,250.00</span>
                </div>
              </div>
            </div>

            {/* Settlement History Log */}
            <div>
              <h5 className="text-xs font-bold text-navy mb-2">Recent Bank Transfers</h5>
              <div className="space-y-2">
                {[
                  {
                    date: 'Yesterday, 10 Nov',
                    amount: '₹52,410.00',
                    status: 'Settled',
                    utr: 'HDFC0092817248',
                  },
                  {
                    date: '09 Nov 2026',
                    amount: '₹46,180.00',
                    status: 'Settled',
                    utr: 'HDFC0091823719',
                  },
                  {
                    date: '08 Nov 2026',
                    amount: '₹61,900.00',
                    status: 'Settled',
                    utr: 'HDFC0089281723',
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-extrabold text-navy">{s.amount}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        {s.date} • UTR: {s.utr}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold">
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 3: MENU MANAGEMENT (With Live Price Edit Interaction)
            ========================================================================= */}
        {activeScreen === 'menu' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden bg-[#F8FAFC]">
            {/* Header */}
            <div className="p-3 pb-2 bg-white border-b border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Menu Management
                </span>
                <span className="text-[10px] font-bold text-[#FA5A1E]">
                  {menuItems.length} Dishes
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-navy">
                Tap Any Price to Modify Live
              </h4>

              {/* Category Filter */}
              <div className="flex items-center gap-1 mt-2 overflow-x-auto no-scrollbar pb-0.5">
                {['All', 'Breakfast', 'Lunch', 'Snacks', 'Beverages'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
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
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
              {filteredMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-between gap-2.5"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                        }`}
                      />
                      <span className="text-[10px] text-gray-400 font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <h5 className="font-bold text-xs text-navy truncate">{item.name}</h5>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-black text-navy">₹{item.price}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                          item.inStock
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-rose-700 bg-rose-50'
                        }`}
                      >
                        {item.inStock ? 'In Stock' : "86'd"}
                      </span>
                    </div>
                  </div>

                  {/* Edit Price Button */}
                  <button
                    onClick={() => {
                      setEditingItem(item)
                      setTempPrice(item.price)
                    }}
                    className="px-2 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#FA5A1E] font-bold text-[10px] border border-orange-200/60 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <Icon name="pencil" size={11} />
                    <span>Edit ₹</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Price Edit Sheet Modal inside phone */}
            {editingItem && (
              <div className="absolute inset-x-2 bottom-2 z-50 p-3.5 bg-white rounded-2xl shadow-2xl border-2 border-orange-300 animate-in fade-in slide-in-from-bottom-4 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-xs font-black text-navy truncate">
                    Edit: {editingItem.name}
                  </h5>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 border border-gray-200 mb-3">
                  <span className="text-xs font-bold text-navy-600">New Counter Price:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTempPrice((p) => Math.max(10, p - 5))}
                      className="w-7 h-7 rounded-lg bg-white border border-gray-200 font-bold text-navy hover:bg-gray-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-display text-base font-black text-[#FA5A1E] w-12 text-center">
                      ₹{tempPrice}
                    </span>
                    <button
                      onClick={() => setTempPrice((p) => p + 5)}
                      className="w-7 h-7 rounded-lg bg-white border border-gray-200 font-bold text-navy hover:bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleSavePrice}
                  className="w-full py-2.5 rounded-xl bg-[#FA5A1E] hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Save & Broadcast to POS Counters
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STATE 4: STOCK MANAGEMENT (1-Tap 86 Toggle)
            ========================================================================= */}
        {activeScreen === 'stock' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden bg-[#F8FAFC]">
            {/* Header */}
            <div className="p-3 pb-2 bg-white border-b border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Live Stock Control
                </span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                  {outOfStockCount} Items 86'd
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-navy">
                Tap Switch to 86 Item Instantly
              </h4>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Removing an item instantly prevents orders on Customer App, QR, & Kiosk.
              </p>
            </div>

            {/* Stock Toggle List */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                    item.inStock
                      ? 'bg-white border-gray-200/80 shadow-xs'
                      : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover ${
                          !item.inStock ? 'grayscale opacity-60' : ''
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-bold text-xs text-navy truncate">{item.name}</h5>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        ₹{item.price} • {item.category}
                      </span>
                    </div>
                  </div>

                  {/* 1-Tap In-Stock / 86 Toggle */}
                  <button
                    onClick={() => toggleStock(item.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                      item.inStock
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-rose-600 text-white hover:bg-rose-700 shadow-xs'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.inStock ? 'bg-emerald-600' : 'bg-white'
                      }`}
                    />
                    <span>{item.inStock ? 'In Stock' : "86'd (Off)"}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 5: BUSINESS ANALYTICS
            ========================================================================= */}
        {activeScreen === 'analytics' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar p-3.5 space-y-3 bg-[#F8FAFC]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Business Intelligence
                </span>
                <span className="text-[10px] font-bold text-navy-600 bg-gray-100 px-2 py-0.5 rounded-full">
                  Last 7 Days
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-navy">Sales & Channel Velocity</h4>
            </div>

            {/* Total 7-day stats */}
            <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 uppercase">
                7-Day Total Revenue
              </span>
              <div className="font-display text-2xl font-black text-navy mt-0.5">₹3,84,500</div>
              <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-600">
                <span>
                  <strong className="text-navy font-bold">2,390</strong> Orders
                </span>
                <span>•</span>
                <span>
                  <strong className="text-navy font-bold">₹161</strong> Avg Ticket
                </span>
              </div>
            </div>

            {/* Channel Breakdown Card */}
            <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs space-y-2.5">
              <h5 className="text-xs font-bold text-navy">Revenue by Channel</h5>

              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span className="text-navy flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FA5A1E]" /> Counter POS
                  </span>
                  <span className="text-gray-600">₹2,38,390 (62%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-[#FA5A1E] rounded-full" style={{ width: '62%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span className="text-navy flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Kaaty Mobile App
                  </span>
                  <span className="text-gray-600">₹92,280 (24%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '24%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span className="text-navy flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> QR Table Ordering
                  </span>
                  <span className="text-gray-600">₹53,830 (14%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '14%' }} />
                </div>
              </div>
            </div>

            {/* Order Size Brackets */}
            <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
              <h5 className="text-xs font-bold text-navy mb-2">Order Size Distribution</h5>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-gray-400 block">Snack (₹0–50)</span>
                  <span className="font-bold text-navy">18% of orders</span>
                </div>
                <div className="p-2 rounded-lg bg-orange-50 border border-orange-100">
                  <span className="text-orange-700 block">Quick Meal (₹51–100)</span>
                  <span className="font-bold text-[#FA5A1E]">34% of orders</span>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-700 block">Regular (₹101–200)</span>
                  <span className="font-bold text-emerald-800">38% (Largest)</span>
                </div>
                <div className="p-2 rounded-lg bg-purple-50 border border-purple-100">
                  <span className="text-purple-700 block">Group (₹201+)</span>
                  <span className="font-bold text-purple-800">10% of orders</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            BOTTOM NAVIGATION BAR (5 Interactive Tabs)
            ========================================================================= */}
        {interactive && (
          <div className="px-2 py-1.5 bg-white border-t border-gray-100 grid grid-cols-5 gap-1 text-center shrink-0">
            {[
              { id: 'dashboard' as BusinessAppScreen, label: 'Overview', icon: 'layout-dashboard' },
              { id: 'settlements' as BusinessAppScreen, label: 'Payouts', icon: 'wallet' },
              { id: 'menu' as BusinessAppScreen, label: 'Menu', icon: 'book-open' },
              { id: 'stock' as BusinessAppScreen, label: 'Stock', icon: 'package' },
              { id: 'analytics' as BusinessAppScreen, label: 'Insights', icon: 'bar-chart-3' },
            ].map((tab) => {
              const active = activeScreen === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setScreen(tab.id)}
                  className={`py-1 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                    active ? 'text-[#FA5A1E] font-bold' : 'text-gray-400 hover:text-navy-600'
                  }`}
                >
                  <Icon name={tab.icon} size={15} />
                  <span className="text-[9px] mt-0.5 tracking-tight">{tab.label}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Bottom Home Indicator */}
        <div className="py-1 flex justify-center bg-white border-t border-gray-50">
          <div className="w-20 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}
