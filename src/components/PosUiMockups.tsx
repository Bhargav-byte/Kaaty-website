import { useState } from 'react'
import { Icon } from './Icon'

// Premium Food Data for Marketing Mockups
const FOOD_ITEMS = [
  {
    name: 'Premium Burger',
    price: '249.00',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80',
    available: true,
    qty: 45,
  },
  {
    name: 'Crispy Fries',
    price: '149.00',
    img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80',
    available: true,
    qty: 120,
  },
  {
    name: 'Iced Latte',
    price: '199.00',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80',
    available: true,
    qty: 85,
  },
  {
    name: 'Classic Dosa',
    price: '120.00',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80',
    available: true,
    qty: 30,
  },
  {
    name: 'Chicken Biryani',
    price: '299.00',
    img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=300&q=80',
    available: false,
    qty: 0,
  },
  {
    name: 'Margherita Pizza',
    price: '349.00',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=300&q=80',
    available: true,
    qty: 15,
  },
]

type CartItem = {
  name: string
  price: number
  img: string
  qty: number
}

export function PremiumPosGridUi() {
  const [cart, setCart] = useState<CartItem[]>([
    { name: 'Premium Burger', price: 249, img: FOOD_ITEMS[0].img, qty: 2 },
  ])
  const [isPlaced, setIsPlaced] = useState(false)

  const handleAdd = (item: (typeof FOOD_ITEMS)[0]) => {
    if (!item.available) return
    setIsPlaced(false)
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name)
      if (existing) {
        return prev.map((c) => (c.name === item.name ? { ...c, qty: c.qty + 1 } : c))
      }
      return [...prev, { name: item.name, price: parseFloat(item.price), img: item.img, qty: 1 }]
    })
  }

  const handleUpdateQty = (name: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => {
        if (c.name === name) {
          return { ...c, qty: Math.max(1, c.qty + delta) }
        }
        return c
      }),
    )
  }

  const handleRemove = (name: string) => {
    setCart((prev) => prev.filter((c) => c.name !== name))
  }

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      setIsPlaced(true)
      setTimeout(() => {
        setCart([])
        setIsPlaced(false)
      }, 2000)
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div
      className="w-full max-w-5xl mx-auto rounded-xl border border-navy-200 bg-navy-50 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px]"
      aria-hidden="true"
    >
      {/* Left Sidebar: Token Status */}
      <div className="hidden md:flex flex-col w-[240px] bg-white border-r border-navy-200 p-4 shrink-0">
        <div className="bg-kaaty-500 text-white rounded-lg py-2.5 px-4 font-bold text-[14px] text-center shadow-sm mb-4">
          Order Status
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto pr-1">
          {isPlaced && (
            <div className="bg-white rounded-lg border border-kaaty-200 p-3 shadow-sm flex items-center justify-between ring-2 ring-kaaty-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-[16px] text-kaaty-500">93</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold">
                  NEW
                </span>
              </div>
              <Icon name="clock" size={14} className="text-navy-300" />
            </div>
          )}
          <div className="bg-white rounded-lg border border-navy-100 p-3 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-[16px] text-kaaty-500">92</span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold">
                PREPARING
              </span>
            </div>
            <Icon name="play" size={14} className="text-navy-300" />
          </div>
          <div className="bg-white rounded-lg border border-navy-100 p-3 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-[16px] text-kaaty-500">91</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                READY
              </span>
            </div>
            <Icon name="play" size={14} className="text-navy-300" />
          </div>
          <div className="bg-white rounded-lg border border-navy-100 p-3 shadow-sm flex items-center justify-between transition-all hover:border-red-200">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-[16px] text-navy-900">90</span>
              <button className="px-2 py-0.5 rounded bg-red-50 text-red-600 text-[10px] font-bold hover:bg-red-100 transition-colors">
                DELIVER
              </button>
            </div>
            <Icon name="arrow-right" size={14} className="text-red-400" />
          </div>
        </div>
      </div>

      {/* Main Area: Menu Grid */}
      <div className="flex-1 flex flex-col p-4 bg-navy-50 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-navy-900 text-[18px]">Menu Items</h3>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-white border border-navy-200 rounded-lg text-[13px] font-medium text-navy-600">
              All Categories
            </div>
            <div className="px-3 py-1.5 bg-white border border-navy-200 rounded-lg text-[13px] font-medium text-navy-600 flex items-center gap-2">
              <Icon name="search" size={14} /> Search
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto grid grid-cols-2 lg:grid-cols-3 gap-3 pr-2 pb-4">
          {FOOD_ITEMS.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-navy-200 p-2.5 flex flex-col shadow-sm relative group hover:border-kaaty-400 transition-colors"
            >
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-3 relative bg-navy-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${!item.available ? 'opacity-40 grayscale' : ''}`}
                />
                {item.available && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-500 rounded-sm ring-2 ring-white"></div>
                )}
                {!item.available && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-sm ring-2 ring-white"></div>
                )}
              </div>
              <h4 className="font-bold text-navy-900 text-[14px] leading-tight truncate">
                {item.name}
              </h4>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-[13px] font-mono text-navy-600">₹{item.price}</span>
                <button
                  onClick={() => handleAdd(item)}
                  disabled={!item.available}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all border ${item.available ? 'border-navy-200 bg-white text-navy-700 shadow-sm hover:border-kaaty-500 hover:text-kaaty-600 active:scale-95' : 'border-transparent bg-navy-50 text-navy-400 cursor-not-allowed'}`}
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar: Cart */}
      <div className="hidden lg:flex flex-col w-[280px] bg-white border-l border-navy-200 shrink-0 shadow-[-4px_0_15px_rgba(0,0,0,0.03)]">
        <div className="p-4 border-b border-navy-100 flex justify-between items-center">
          <h3 className="font-bold text-navy-900 text-[16px]">Your Cart</h3>
          <span className="bg-navy-100 text-navy-600 font-bold text-[12px] px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        </div>
        <div className="flex-1 p-3 space-y-3 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-navy-400 opacity-50">
              <Icon name="shopping-cart" size={48} className="mb-2" />
              <span className="text-[14px] font-medium">Cart is empty</span>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="bg-navy-50/50 rounded-lg p-2.5 border border-navy-100 flex gap-3 relative group animate-in slide-in-from-right-4 fade-in duration-200"
              >
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-navy-900 truncate">{item.name}</h4>
                  <p className="text-[12px] font-mono text-navy-600">₹{item.price}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => handleRemove(item.name)}
                    className="text-navy-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="trash-2" size={14} />
                  </button>
                  <div className="flex items-center gap-1.5 bg-white border border-navy-200 rounded px-1 py-0.5 shadow-sm">
                    <button
                      onClick={() => handleUpdateQty(item.name, -1)}
                      className="text-navy-400 hover:text-navy-900 text-[14px] px-1 active:scale-90"
                    >
                      -
                    </button>
                    <span className="text-[12px] font-bold text-navy-900 w-3 text-center select-none">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => handleUpdateQty(item.name, 1)}
                      className="text-kaaty-500 hover:text-kaaty-600 text-[14px] px-1 active:scale-90"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-navy-100 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-navy-600 text-[14px]">Total</span>
            <span className="font-display font-bold text-[20px] text-navy-900">
              ₹{total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={cart.length === 0 || isPlaced}
            className={`w-full rounded-xl py-3 font-bold shadow-md transition-all flex items-center justify-center gap-2 ${cart.length === 0 ? 'bg-navy-100 text-navy-400 cursor-not-allowed' : isPlaced ? 'bg-emerald-500 text-white' : 'bg-kaaty-500 hover:bg-kaaty-600 text-white active:scale-95'}`}
          >
            {isPlaced ? (
              <>
                <Icon name="check" size={18} /> Order Placed
              </>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export function PremiumStockUi() {
  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl border border-navy-200 bg-white shadow-2xl overflow-hidden flex flex-col h-[400px]"
      aria-hidden="true"
    >
      <div className="p-4 border-b border-navy-100 flex items-center justify-between bg-navy-50/50">
        <div className="flex gap-4">
          <div className="text-center px-4 border-r border-navy-200">
            <div className="text-[12px] text-navy-500 font-medium">Total Items</div>
            <div className="font-display font-bold text-[20px] text-navy-900">105</div>
          </div>
          <div className="text-center px-4 border-r border-navy-200">
            <div className="text-[12px] text-emerald-600 font-medium">Available</div>
            <div className="font-display font-bold text-[20px] text-emerald-700">93</div>
          </div>
          <div className="text-center px-4">
            <div className="text-[12px] text-red-500 font-medium">Out of Stock</div>
            <div className="font-display font-bold text-[20px] text-red-600">12</div>
          </div>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm hidden sm:block">
          Mark All Out of Stock
        </button>
      </div>
      <div className="flex-1 p-5 overflow-y-auto bg-navy-50">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FOOD_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-navy-200 p-3 flex flex-col shadow-sm relative"
            >
              <div className="absolute top-0 left-0 w-full p-2 flex justify-between z-10">
                {item.available ? (
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">
                    Out of Stock
                  </span>
                )}
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-white ${item.available ? 'bg-emerald-500' : 'bg-red-500'}`}
                >
                  {item.available ? <Icon name="check" size={10} /> : <Icon name="x" size={10} />}
                </div>
              </div>
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-3 relative bg-navy-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`w-full h-full object-cover ${!item.available ? 'opacity-40 grayscale' : ''}`}
                />
              </div>
              <h4 className="font-bold text-navy-900 text-[13px] text-center truncate">
                {item.name}
              </h4>
              <div className="mt-3 bg-navy-50 rounded-lg p-2 text-center border border-navy-100">
                <span
                  className={`font-display font-bold text-[18px] ${item.available ? 'text-emerald-600' : 'text-red-500'}`}
                >
                  {item.qty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PremiumKdsUi() {
  const [activeTab, setActiveTab] = useState<'pending' | 'ready'>('pending')
  const [justReady, setJustReady] = useState(false)

  // Initial state mimicking a busy kitchen
  const [orders, setOrders] = useState([
    { id: 89, item: FOOD_ITEMS[0], time: '12:41', status: 'pending' },
    { id: 88, item: FOOD_ITEMS[1], time: '12:42', status: 'pending' },
    { id: 87, item: FOOD_ITEMS[2], time: '12:43', status: 'pending' },
    { id: 86, item: FOOD_ITEMS[5], time: '12:35', status: 'ready' },
  ])

  const pendingOrders = orders.filter((o) => o.status === 'pending')
  const readyOrders = orders.filter((o) => o.status === 'ready')

  const markReady = (id: number) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: 'ready' } : o)))
    setJustReady(true)
    setTimeout(() => setJustReady(false), 800)
  }

  const markDelivered = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id))
  }

  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl border border-navy-200 bg-navy-50 shadow-2xl overflow-hidden flex flex-col h-[400px]"
      aria-hidden="true"
    >
      <div className="p-4 border-b border-navy-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <h3 className="font-display font-bold text-[20px] text-navy-900">KDS</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-3 py-1 rounded-full text-[12px] font-bold shadow-sm transition-all ${
                activeTab === 'pending'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white border border-navy-200 text-navy-600 hover:border-navy-400'
              }`}
            >
              Pending {pendingOrders.length}
            </button>
            <button
              onClick={() => setActiveTab('ready')}
              className={`px-3 py-1 rounded-full text-[12px] font-bold shadow-sm transition-all ${
                activeTab === 'ready'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white border border-navy-200 text-navy-600 hover:border-navy-400'
              } ${justReady ? 'ring-4 ring-emerald-500/30 scale-105' : ''}`}
            >
              Ready {readyOrders.length}
            </button>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[13px] font-bold text-navy-600">12:34 PM</span>
        </div>
      </div>
      <div className="flex-1 p-5 overflow-y-auto relative">
        {activeTab === 'pending' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingOrders.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-navy-400 opacity-60">
                <Icon name="check-circle" size={48} className="mb-2 text-emerald-500" />
                <span className="text-[14px] font-bold text-navy-600">All caught up!</span>
              </div>
            )}
            {pendingOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl border border-navy-200 p-4 shadow-sm flex flex-col animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <img
                      src={order.item.img}
                      alt="Food"
                      className="w-10 h-10 rounded-lg object-cover shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-navy-900 text-[14px] leading-tight">
                        {order.item.name}
                      </h4>
                      <span className="text-[12px] font-mono text-red-500 font-bold">
                        {order.time} min ago
                      </span>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded bg-emerald-100 border border-emerald-300"></div>
                </div>
                <div className="mb-4">
                  <span className="font-display font-black text-[28px] text-navy-900 leading-none">
                    #{order.id}
                  </span>
                </div>
                <button
                  onClick={() => markReady(order.id)}
                  className="mt-auto w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold py-2.5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Icon name="check" size={16} /> READY
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ready' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {readyOrders.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-navy-400 opacity-60">
                <span className="text-[14px] font-bold">No ready orders</span>
              </div>
            )}
            {readyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 shadow-sm flex flex-col animate-in fade-in slide-in-from-left-4 duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <img
                      src={order.item.img}
                      alt="Food"
                      className="w-10 h-10 rounded-lg object-cover shadow-sm opacity-80"
                    />
                    <div>
                      <h4 className="font-bold text-emerald-900 text-[14px] leading-tight">
                        {order.item.name}
                      </h4>
                      <span className="text-[12px] font-mono text-emerald-700 font-bold">
                        Marked ready
                      </span>
                    </div>
                  </div>
                  <Icon name="check-circle-2" size={18} className="text-emerald-500" />
                </div>
                <div className="mb-4">
                  <span className="font-display font-black text-[28px] text-emerald-800 leading-none">
                    #{order.id}
                  </span>
                </div>
                <button
                  onClick={() => markDelivered(order.id)}
                  className="mt-auto w-full bg-white border border-red-200 hover:bg-red-50 active:scale-95 text-red-600 font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all text-[13px]"
                >
                  <Icon name="check" size={14} /> DELIVER
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function PremiumSettingsUi() {
  const [activeTab, setActiveTab] = useState('Stock In / Out')

  const menu = [
    {
      group: 'ACCOUNT & SYSTEM',
      items: [
        { name: 'Profile', icon: 'user' },
        { name: 'Notifications', icon: 'bell' },
        { name: 'Appearance', icon: 'sun' },
      ],
    },
    {
      group: 'POS SETTINGS',
      items: [
        { name: 'Print Category', icon: 'printer' },
        { name: 'Token Settings', icon: 'ticket' },
        { name: 'Parcel Items', icon: 'package' },
        { name: 'Delivered Orders', icon: 'check-circle' },
        { name: 'Stock In / Out', icon: 'arrow-right-left' },
      ],
    },
    {
      group: 'KITCHEN DISPLAY',
      items: [{ name: 'KDS Settings', icon: 'monitor' }],
    },
  ]

  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl border border-navy-200 bg-white shadow-2xl overflow-hidden flex flex-col sm:flex-row h-[520px] text-left"
      aria-hidden="true"
    >
      <div className="w-full sm:w-[240px] border-r border-navy-100 bg-navy-50 flex flex-col shrink-0 overflow-y-auto pt-4 pb-4">
        {menu.map((section, idx) => (
          <div key={idx} className="mb-6 px-3">
            <h4 className="text-[11px] font-bold text-navy-400 mb-2 px-3 tracking-wider">
              {section.group}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = activeTab === item.name
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-bold transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-navy-600 hover:bg-navy-100 hover:text-navy-900'
                    }`}
                  >
                    <Icon
                      name={item.icon as any}
                      size={16}
                      className={isActive ? 'text-orange-500' : 'text-navy-400'}
                    />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white p-6 sm:p-8 overflow-y-auto">
        {activeTab === 'Appearance' && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-[20px] font-display font-bold text-navy-900 mb-1">Appearance</h3>
            <p className="text-[14px] text-navy-500 mb-8">Theme and visual preferences</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['Light', 'Dark', 'System'].map((theme) => (
                <div
                  key={theme}
                  className={`border rounded-xl p-4 cursor-pointer transition-all ${theme === 'Light' ? 'border-orange-500 ring-1 ring-orange-500 bg-orange-50/20' : 'border-navy-200 hover:border-navy-300'}`}
                >
                  <div
                    className={`h-24 rounded-lg mb-4 shadow-sm ${theme === 'Light' ? 'bg-white border border-navy-100' : theme === 'Dark' ? 'bg-navy-900' : 'bg-gradient-to-br from-white to-navy-900'}`}
                  ></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[14px] text-navy-900">{theme}</span>
                    {theme === 'Light' && (
                      <div className="w-4 h-4 rounded-full bg-orange-500 shadow-sm border-2 border-white"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Stock In / Out' && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-[20px] font-display font-bold text-navy-900 mb-1">
              Stock Management
            </h3>
            <p className="text-[14px] text-navy-500 mb-8">
              Instantly adjust inventory levels for menu items
            </p>
            <div className="space-y-4">
              {FOOD_ITEMS.slice(0, 4).map((item, i) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-navy-100 rounded-xl hover:border-navy-300 transition-colors bg-white shadow-sm gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover border border-navy-100"
                    />
                    <div>
                      <div className="font-bold text-navy-900 text-[15px]">{item.name}</div>
                      <div
                        className={`text-[12px] font-bold ${i === 2 ? 'text-red-500' : 'text-emerald-600'}`}
                      >
                        {i === 2 ? 'Out of Stock' : `Current Stock: ${45 - i * 10}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-[13px] font-bold transition-colors">
                      - Out
                    </button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg text-[13px] font-bold transition-colors">
                      + In
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab !== 'Appearance' && activeTab !== 'Stock In / Out' && (
          <div className="h-full flex flex-col items-center justify-center opacity-40 animate-in fade-in duration-300">
            <Icon name="settings-2" size={48} className="text-navy-400 mb-4" />
            <h3 className="text-[18px] font-bold text-navy-600">{activeTab} Settings</h3>
            <p className="text-[14px] text-navy-500 mt-2">
              Configuration for {activeTab.toLowerCase()} will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function PremiumAnalyticsUi() {
  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl border border-navy-200 bg-white shadow-2xl p-6"
      aria-hidden="true"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="font-bold text-navy-900 text-[18px]">Profit & Loss Summary</h3>
          <p className="text-[13px] text-navy-500">
            Comprehensive breakdown of revenue and profitability
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
          <span className="text-[12px] font-bold text-navy-500 uppercase tracking-wider">
            Gross Revenue
          </span>
          <div className="mt-2 font-display font-bold text-[28px] text-navy-900">₹14,720</div>
        </div>
        <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
          <span className="text-[12px] font-bold text-navy-500 uppercase tracking-wider">
            Cost of Goods
          </span>
          <div className="mt-2 font-display font-bold text-[28px] text-red-500">₹8,832</div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-sm">
          <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-wider">
            Net Profit
          </span>
          <div className="mt-2 font-display font-bold text-[28px] text-emerald-600">₹5,888</div>
        </div>
      </div>

      <div className="bg-navy-50 rounded-xl p-5 border border-navy-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[14px] font-bold text-navy-900">Profit Margin</span>
          <span className="font-display font-bold text-[24px] text-emerald-600">40%</span>
        </div>
        <div className="w-full h-3 bg-navy-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full w-[40%]"></div>
        </div>
        <div className="mt-4 flex gap-6 text-[12px]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
            <span className="text-navy-600 font-medium">Profit (40%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-navy-300 rounded-sm"></div>
            <span className="text-navy-600 font-medium">Food Cost (50%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-navy-400 rounded-sm"></div>
            <span className="text-navy-600 font-medium">Packaging (10%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TimelineUi() {
  return (
    <div className="w-full max-w-md mx-auto relative py-4">
      <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-navy-100"></div>
      <div className="space-y-8 relative z-10">
        <div className="flex gap-4 items-start">
          <div className="w-14 shrink-0 text-right pt-1">
            <span className="text-[12px] font-bold text-navy-900">12:30</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-white border-4 border-kaaty-500 shadow-sm mt-1 shrink-0"></div>
          <div className="flex-1 bg-white rounded-xl border border-navy-100 p-4 shadow-sm">
            <h4 className="font-bold text-navy-900 text-[14px]">Order Punched</h4>
            <p className="text-[13px] text-navy-600 mt-1">
              Cashier instantly enters a 6-item order via the POS grid.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-14 shrink-0 text-right pt-1">
            <span className="text-[12px] font-bold text-navy-900">12:31</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-white border-2 border-navy-300 mt-1 shrink-0"></div>
          <div className="flex-1 bg-white rounded-xl border border-navy-100 p-4 shadow-sm">
            <h4 className="font-bold text-navy-900 text-[14px]">Syncs to Kitchen</h4>
            <p className="text-[13px] text-navy-600 mt-1">
              Token #92 routes automatically to the Kitchen Display (KDS).
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-14 shrink-0 text-right pt-1">
            <span className="text-[12px] font-bold text-navy-900">12:35</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm mt-1 shrink-0 ring-4 ring-emerald-500/20"></div>
          <div className="flex-1 bg-emerald-50 rounded-xl border border-emerald-200 p-4 shadow-sm">
            <h4 className="font-bold text-emerald-900 text-[14px]">Order Ready</h4>
            <p className="text-[13px] text-emerald-700 mt-1">
              Kitchen taps "Ready". Counter POS alerts staff to hand over the food.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
