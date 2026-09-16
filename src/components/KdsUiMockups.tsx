import { useState, useEffect } from 'react'
import { Icon } from './Icon'
import { FOOD_ITEMS } from './PosUiMockups'

type KdsOrder = {
  id: number
  items: { item: (typeof FOOD_ITEMS)[0]; qty: number }[]
  timeStr: string // e.g., '12:41'
  elapsedMinutes: number
  status: 'pending' | 'preparing' | 'ready'
  type: 'dine-in' | 'takeaway'
}

// 1. Full Interactive KDS Board
export function KdsInteractiveBoard() {
  const [activeTab, setActiveTab] = useState<'pending' | 'ready'>('pending')
  const [activeCategory, setActiveCategory] = useState<'All' | 'Mains' | 'Beverages' | 'Snacks'>(
    'All',
  )

  const [orders, setOrders] = useState<KdsOrder[]>([
    {
      id: 104,
      items: [
        { item: FOOD_ITEMS[0], qty: 2 },
        { item: FOOD_ITEMS[1], qty: 1 },
      ],
      timeStr: '12:30',
      elapsedMinutes: 12,
      status: 'pending',
      type: 'dine-in',
    },
    {
      id: 105,
      items: [{ item: FOOD_ITEMS[4], qty: 1 }],
      timeStr: '12:34',
      elapsedMinutes: 8,
      status: 'pending',
      type: 'takeaway',
    },
    {
      id: 106,
      items: [{ item: FOOD_ITEMS[3], qty: 3 }],
      timeStr: '12:38',
      elapsedMinutes: 4,
      status: 'pending',
      type: 'dine-in',
    },
    {
      id: 107,
      items: [{ item: FOOD_ITEMS[2], qty: 2 }],
      timeStr: '12:40',
      elapsedMinutes: 2,
      status: 'pending',
      type: 'dine-in',
    },
    {
      id: 101,
      items: [{ item: FOOD_ITEMS[5], qty: 1 }],
      timeStr: '12:15',
      elapsedMinutes: 27,
      status: 'ready',
      type: 'takeaway',
    },
  ])

  // Live timer tick to simulate realism
  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((prev) =>
        prev.map((o) =>
          o.status === 'pending' ? { ...o, elapsedMinutes: o.elapsedMinutes + 1 } : o,
        ),
      )
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const markReady = (id: number) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: 'ready' } : o)))
    // Switch to ready tab briefly to show where it went
    setTimeout(() => setActiveTab('ready'), 300)
  }

  const deliver = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id))
  }

  const filteredOrders = orders.filter((o) => {
    if (activeTab === 'pending' && o.status === 'ready') return false
    if (activeTab === 'ready' && o.status === 'pending') return false

    // Category filter logic (simplified for mockup)
    if (activeCategory === 'All') return true
    const hasCategory = o.items.some((i) => {
      if (
        activeCategory === 'Mains' &&
        ['Premium Burger', 'Chicken Biryani', 'Margherita Pizza'].includes(i.item.name)
      )
        return true
      if (activeCategory === 'Beverages' && ['Iced Latte'].includes(i.item.name)) return true
      if (activeCategory === 'Snacks' && ['Crispy Fries', 'Classic Dosa'].includes(i.item.name))
        return true
      return false
    })
    return hasCategory
  })

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl border border-navy-200 bg-navy-50 shadow-2xl overflow-hidden flex flex-col h-[700px] md:h-[600px] text-left font-sans">
      {/* KDS Header */}
      <div className="bg-navy-900 text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-kaaty-500 flex items-center justify-center font-bold text-lg">
              K
            </div>
            <span className="font-display font-bold text-lg">Kitchen Display</span>
          </div>
          <div className="hidden md:flex gap-1 bg-navy-800 p-1 rounded-lg">
            {(['All', 'Mains', 'Snacks', 'Beverages'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-kaaty-500 text-white'
                    : 'text-navy-300 hover:text-white hover:bg-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex bg-navy-800 p-1 rounded-lg w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'pending'
                ? 'bg-white text-navy-900 shadow-sm'
                : 'text-navy-300 hover:text-white'
            }`}
          >
            Pending
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'pending' ? 'bg-navy-100 text-navy-600' : 'bg-navy-700 text-navy-200'}`}
            >
              {orders.filter((o) => o.status === 'pending').length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('ready')}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ready'
                ? 'bg-emerald-500 text-white shadow-sm ring-2 ring-emerald-500/20'
                : 'text-navy-300 hover:text-white'
            }`}
          >
            Ready
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'ready' ? 'bg-emerald-600 text-white' : 'bg-navy-700 text-navy-200'}`}
            >
              {orders.filter((o) => o.status === 'ready').length}
            </span>
          </button>
        </div>
      </div>

      {/* KDS Mobile Categories */}
      <div className="md:hidden flex gap-2 p-3 bg-white border-b border-navy-100 overflow-x-auto shrink-0">
        {(['All', 'Mains', 'Snacks', 'Beverages'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
              activeCategory === cat
                ? 'bg-navy-900 border-navy-900 text-white'
                : 'bg-white border-navy-200 text-navy-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-navy-50/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredOrders.length === 0 ? (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-navy-400">
              <Icon name="check-circle" size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">No {activeTab} orders in this category</p>
            </div>
          ) : (
            filteredOrders
              .sort((a, b) => b.elapsedMinutes - a.elapsedMinutes)
              .map((order) => (
                <div
                  key={order.id}
                  className={`bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300 ${
                    order.elapsedMinutes >= 10 && order.status === 'pending'
                      ? 'border-red-300 ring-1 ring-red-300'
                      : 'border-navy-200'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`px-4 py-3 border-b flex justify-between items-center ${
                      order.elapsedMinutes >= 10 && order.status === 'pending'
                        ? 'bg-red-50 border-red-100'
                        : 'bg-navy-50/50 border-navy-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-xl text-navy-900">
                        #{order.id}
                      </span>
                      {order.type === 'takeaway' && (
                        <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          Parcel
                        </span>
                      )}
                    </div>
                    <div
                      className={`flex items-center gap-1.5 font-mono text-sm font-bold ${
                        order.elapsedMinutes >= 10 && order.status === 'pending'
                          ? 'text-red-600'
                          : 'text-navy-600'
                      }`}
                    >
                      <Icon name="clock" size={14} />
                      {Math.floor(order.elapsedMinutes / 60)
                        .toString()
                        .padStart(2, '0')}
                      :{(order.elapsedMinutes % 60).toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card Body (Items) */}
                  <div className="p-4 flex-1 space-y-3">
                    {order.items.map((cartItem, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-6 h-6 rounded bg-navy-100 flex items-center justify-center text-xs font-bold text-navy-700 shrink-0">
                          {cartItem.qty}x
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-navy-900 text-sm">
                            {cartItem.item.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer (Action) */}
                  <div className="p-3 bg-white border-t border-navy-50">
                    {order.status === 'pending' ? (
                      <button
                        onClick={() => markReady(order.id)}
                        className="w-full py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                      >
                        <Icon
                          name="check"
                          size={16}
                          className="group-hover:scale-110 transition-transform"
                        />
                        Mark Ready
                      </button>
                    ) : (
                      <button
                        onClick={() => deliver(order.id)}
                        className="w-full py-2.5 rounded-lg bg-kaaty-50 text-kaaty-600 font-bold text-sm hover:bg-kaaty-500 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                      >
                        <Icon
                          name="check-check"
                          size={16}
                          className="group-hover:scale-110 transition-transform"
                        />
                        Deliver Order
                      </button>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  )
}

// 2. KDS Workflow Timeline
export function KdsWorkflowTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative py-8 px-4">
      {/* Connecting Line */}
      <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-1 bg-navy-100 -translate-y-1/2 z-0">
        <div className="h-full bg-kaaty-500 w-[75%] animate-pulse"></div>
      </div>

      {/* Step 1: POS */}
      <div className="relative z-10 flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-navy-200 shadow-lg flex items-center justify-center text-kaaty-500 group-hover:border-kaaty-400 group-hover:scale-110 transition-all">
          <Icon name="monitor" size={28} />
        </div>
        <div className="text-center">
          <div className="font-bold text-navy-900 text-[15px]">1. Order Taken</div>
          <div className="text-navy-500 text-[13px]">At POS or QR Menu</div>
        </div>
      </div>

      {/* Step 2: KDS Arrives */}
      <div className="relative z-10 flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-kaaty-500 shadow-lg shadow-kaaty-500/20 flex items-center justify-center text-kaaty-500 group-hover:scale-110 transition-all">
          <Icon name="layout-dashboard" size={28} />
        </div>
        <div className="text-center">
          <div className="font-bold text-navy-900 text-[15px]">2. Reaches Kitchen</div>
          <div className="text-navy-500 text-[13px]">Instantly on KDS</div>
        </div>
      </div>

      {/* Step 3: Preparing */}
      <div className="relative z-10 flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-navy-200 shadow-lg flex items-center justify-center text-navy-400 group-hover:border-navy-400 group-hover:scale-110 transition-all">
          <Icon name="clock" size={28} />
        </div>
        <div className="text-center">
          <div className="font-bold text-navy-900 text-[15px]">3. Timer Starts</div>
          <div className="text-navy-500 text-[13px]">Team prepares food</div>
        </div>
      </div>

      {/* Step 4: Ready */}
      <div className="relative z-10 flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center text-white group-hover:scale-110 transition-all">
          <Icon name="check-circle" size={28} />
        </div>
        <div className="text-center">
          <div className="font-bold text-navy-900 text-[15px]">4. Marked Ready</div>
          <div className="text-navy-500 text-[13px]">Customer notified</div>
        </div>
      </div>
    </div>
  )
}
