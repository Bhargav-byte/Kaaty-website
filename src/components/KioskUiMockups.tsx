import { useState, useEffect } from 'react'
import { Icon } from './Icon'
import { FOOD_ITEMS } from './PosUiMockups'

export function KioskInteractiveInterface() {
  const [activeStep, setActiveStep] = useState<
    'HOME' | 'MENU' | 'ITEM' | 'CART' | 'PAYMENT' | 'CONFIRMATION'
  >('HOME')
  const [selectedItem, setSelectedItem] = useState<(typeof FOOD_ITEMS)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('Menu')
  const [cart, setCart] = useState<{ item: (typeof FOOD_ITEMS)[0]; qty: number }[]>([])

  // Auto-progress demo states for idle users
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (activeStep === 'HOME') {
      timeout = setTimeout(() => setActiveStep('MENU'), 2500)
    } else if (activeStep === 'PAYMENT') {
      timeout = setTimeout(() => {
        setActiveStep('CONFIRMATION')
        setCart([])
      }, 2000)
    } else if (activeStep === 'CONFIRMATION') {
      timeout = setTimeout(() => setActiveStep('HOME'), 4000)
    }

    return () => clearTimeout(timeout)
  }, [activeStep])

  const addToCart = (item: (typeof FOOD_ITEMS)[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.name === item.name)
      if (existing) {
        return prev.map((i) => (i.item.name === item.name ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { item, qty: 1 }]
    })
    setActiveStep('MENU')
  }

  const cartTotal = cart.reduce((sum, i) => sum + parseFloat(i.item.price) * i.qty, 0)

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
      {/* Interactive Steps List (Left) */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
        <h3 className="font-display text-2xl font-bold text-navy">The Kiosk Experience</h3>
        <p className="text-navy-500">Tap through the flow to see how customers order.</p>

        <div className="relative border-l-2 border-navy-100 pl-6 space-y-8 mt-4">
          <StepButton
            active={activeStep === 'HOME' || activeStep === 'MENU'}
            title="1. Browse"
            desc="Visual menu attracts guests."
            onClick={() => setActiveStep('MENU')}
          />
          <StepButton
            active={activeStep === 'ITEM'}
            title="2. Select"
            desc="One tap to view details."
            onClick={() => {
              setSelectedItem(FOOD_ITEMS[0])
              setActiveStep('ITEM')
            }}
          />
          <StepButton
            active={activeStep === 'CART'}
            title="3. Cart"
            desc="Review items and modifiers."
            onClick={() => setActiveStep('CART')}
          />
          <StepButton
            active={activeStep === 'PAYMENT'}
            title="4. Pay"
            desc="Secure self-checkout."
            onClick={() => setActiveStep('PAYMENT')}
          />
          <StepButton
            active={activeStep === 'CONFIRMATION'}
            title="5. Confirmation"
            desc="Token issued to customer."
            onClick={() => setActiveStep('CONFIRMATION')}
          />
        </div>
      </div>

      {/* Actual Mockup Screen (Right) */}
      <div className="w-full lg:w-2/3 flex justify-center">
        <div className="relative w-full max-w-[400px] aspect-[9/16] bg-navy-900 rounded-[2rem] p-3 shadow-2xl border border-navy-700/50 select-none overflow-hidden flex flex-col">
          {/* Inner Screen */}
          <div className="flex-1 bg-gray-50 rounded-[1.5rem] overflow-hidden flex flex-col relative">
            {/* Header */}
            {activeStep !== 'HOME' && (
              <div className="bg-white px-5 py-4 flex items-center justify-between shadow-sm z-10 relative">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    K
                  </div>
                  <span className="font-bold text-navy text-sm">Kaaty Cafe</span>
                </div>
                {activeStep !== 'CONFIRMATION' && (
                  <button
                    onClick={() => setActiveStep('HOME')}
                    className="text-navy-400 text-xs flex items-center gap-1 font-medium bg-gray-100 px-3 py-1.5 rounded-full"
                  >
                    <Icon name="x" size={14} /> Cancel
                  </button>
                )}
              </div>
            )}

            {/* SCREEN STATES */}
            <div
              className={`flex-1 relative overflow-y-auto overflow-x-hidden bg-gray-50 hide-scrollbar ${activeStep === 'MENU' ? 'pb-24' : ''}`}
            >
              {/* HOME SCREEN */}
              {activeStep === 'HOME' && (
                <div
                  className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-end pb-12 cursor-pointer transition-transform hover:scale-105 duration-700"
                  style={{
                    backgroundImage:
                      'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(/images/kiosk-hero.jpg)',
                  }}
                  onClick={() => setActiveStep('MENU')}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-white font-display font-bold text-4xl mb-2">Hungry?</h2>
                    <p className="text-white/80 text-lg">Tap to start your order</p>
                  </div>
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                    <Icon name="pointer" size={32} className="text-white" />
                  </div>
                </div>
              )}

              {/* MENU SCREEN */}
              {activeStep === 'MENU' && (
                <div className="absolute inset-0 flex bg-gray-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  {/* Left Sidebar Categories */}
                  <div className="w-[72px] bg-white border-r border-gray-100 flex flex-col py-3 shrink-0 overflow-y-auto hide-scrollbar z-10 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
                    {[
                      { name: 'Menu', icon: 'layout-dashboard' },
                      { name: 'Burgers', icon: 'utensils' },
                      { name: 'Sides', icon: 'drumstick' },
                      { name: 'Drinks', icon: 'coffee' },
                    ].map((cat) => (
                      <button
                        key={cat.name}
                        onClick={(e) => {
                          e.stopPropagation() // prevent bubbling to the wrapper click which goes to ITEM
                          setActiveCategory(cat.name)
                        }}
                        className={`mx-2 mb-2 aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-colors ${
                          activeCategory === cat.name
                            ? 'bg-navy text-white shadow-md'
                            : 'bg-transparent text-navy-500 hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <Icon name={cat.icon as any} size={18} />
                        <span className="text-[9px] font-bold tracking-tight">{cat.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Right Main Content */}
                  <div className="flex-1 p-3 overflow-y-auto hide-scrollbar pb-24 relative">
                    <div className="grid grid-cols-2 gap-3">
                      {FOOD_ITEMS.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer active:scale-95 transition-transform"
                          onClick={() => {
                            setSelectedItem(item)
                            setActiveStep('ITEM')
                          }}
                        >
                          <div className="aspect-square bg-gray-100 relative">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <h4 className="font-bold text-navy text-xs leading-tight mb-1 line-clamp-2 min-h-[32px]">
                              {item.name}
                            </h4>
                            <p className="text-orange-600 font-bold text-sm">₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ITEM DETAILS SCREEN */}
              {activeStep === 'ITEM' && selectedItem && (
                <div className="bg-white min-h-full animate-in slide-in-from-right duration-300 pb-28">
                  <div className="aspect-square relative">
                    <img
                      src={selectedItem.img}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setActiveStep('MENU')}
                      className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy shadow-sm"
                    >
                      <Icon name="arrow-left" size={20} />
                    </button>
                  </div>
                  <div className="p-5">
                    <h2 className="text-2xl font-bold text-navy mb-2">{selectedItem.name}</h2>
                    <p className="text-xl font-bold text-orange-600 mb-6">₹{selectedItem.price}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-navy mb-3">Make it a meal?</h4>
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src="/images/food/fries.jpg"
                                className="w-full h-full object-cover"
                                alt="Fries"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-navy text-sm">Add Fries & Drink</p>
                              <p className="text-navy-500 text-xs">+₹120</p>
                            </div>
                          </div>
                          <div className="w-6 h-6 border-2 border-gray-300 rounded text-transparent flex items-center justify-center">
                            <Icon name="check" size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CART SCREEN */}
              {activeStep === 'CART' && (
                <div className="p-5 animate-in slide-in-from-right duration-300 min-h-full bg-gray-50 flex flex-col pb-32">
                  <h2 className="text-xl font-bold text-navy mb-4">Your Order</h2>

                  {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <Icon name="shopping-cart" size={32} />
                      </div>
                      <h3 className="font-bold text-navy mb-2">Cart is empty</h3>
                      <p className="text-navy-500 text-sm mb-6">
                        Add items from the menu to get started.
                      </p>
                      <button
                        onClick={() => setActiveStep('MENU')}
                        className="bg-navy text-white px-6 py-3 rounded-full font-medium"
                      >
                        Browse Menu
                      </button>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1 space-y-4">
                        {cart.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3"
                          >
                            <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                              <img
                                src={item.item.img}
                                alt={item.item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-navy text-sm truncate">
                                {item.item.name}
                              </h4>
                              <p className="text-orange-600 font-bold text-sm">
                                ₹{item.item.price}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
                              <button className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-navy font-bold">
                                -
                              </button>
                              <span className="w-4 text-center text-sm font-bold">{item.qty}</span>
                              <button className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-navy font-bold">
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 bg-white p-4 rounded-xl shadow-sm space-y-2">
                        <div className="flex justify-between text-sm text-navy-500">
                          <span>Subtotal</span>
                          <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-navy-500">
                          <span>Taxes (5%)</span>
                          <span>₹{(cartTotal * 0.05).toFixed(2)}</span>
                        </div>
                        <div className="pt-2 mt-2 border-t border-gray-100 flex justify-between font-bold text-lg text-navy">
                          <span>Total</span>
                          <span>₹{(cartTotal * 1.05).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* PAYMENT SCREEN */}
              {activeStep === 'PAYMENT' && (
                <div className="p-5 animate-in slide-in-from-right duration-300 min-h-full bg-gray-50 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Icon name="credit-card" size={36} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Please Pay Below</h2>
                  <p className="text-navy-500 mb-8 max-w-[250px]">
                    Complete payment using the terminal below the screen.
                  </p>
                  <div className="bg-white px-8 py-4 rounded-2xl shadow-sm font-bold text-2xl text-navy border border-gray-200">
                    ₹{(cartTotal > 0 ? cartTotal * 1.05 : 261.45).toFixed(2)}
                  </div>
                </div>
              )}

              {/* CONFIRMATION SCREEN (With Receipt Animation) */}
              {activeStep === 'CONFIRMATION' && (
                <div className="min-h-full bg-orange-500 flex flex-col z-30 absolute inset-0">
                  <div className="p-5 animate-in fade-in duration-500 flex flex-col items-center text-center text-white pt-12 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 shadow-inner">
                      <Icon name="check" size={32} className="text-white drop-shadow" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-1">Order Placed!</h2>
                    <p className="text-white/90 text-sm mb-4">Please collect your receipt.</p>
                  </div>

                  {/* Receipt Slot & Paper Animation */}
                  <div className="flex-1 flex flex-col items-center w-full relative pt-2">
                    {/* The slot line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[6px] bg-black/40 rounded-full z-20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>

                    {/* The paper receipt emerging */}
                    <div className="w-full overflow-hidden flex justify-center pb-12 pt-[3px] absolute inset-0 z-10">
                      <div className="bg-white text-navy px-6 py-8 w-[220px] shadow-2xl animate-in slide-in-from-top-full duration-1000 fill-mode-forwards relative rounded-b-xl">
                        <p className="text-navy-400 font-bold text-[11px] uppercase mb-1 tracking-wider text-center">
                          Your Token No.
                        </p>
                        <p className="font-display font-bold text-6xl text-navy text-center mb-6">
                          42
                        </p>
                        <div className="border-t border-dashed border-gray-300 pt-4 flex flex-col gap-2">
                          <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                          <div className="h-1.5 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FLOATING ACTION BARS (Fixed relative to device, outside scroll) */}

            {/* Floating Menu Cart */}
            {activeStep === 'MENU' && cart.length > 0 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-20 animate-in slide-in-from-bottom-12 duration-300">
                <button
                  onClick={() => setActiveStep('CART')}
                  className="w-full bg-navy text-white rounded-xl shadow-2xl p-3 flex items-center justify-between hover:bg-navy-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      {cart.reduce((s, i) => s + i.qty, 0)}
                    </div>
                    <span className="font-medium text-sm">View Cart</span>
                  </div>
                  <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
                </button>
              </div>
            )}

            {/* Fixed Bottom Action for ITEM screen */}
            {activeStep === 'ITEM' && selectedItem && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-20 animate-in slide-in-from-bottom-12 duration-300">
                <button
                  onClick={() => addToCart(selectedItem)}
                  className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-orange-600 active:scale-95 transition-all flex justify-between items-center px-6"
                >
                  <span>Add to Cart</span>
                  <span>₹{selectedItem.price}</span>
                </button>
              </div>
            )}

            {/* Fixed Bottom Action for CART screen */}
            {activeStep === 'CART' && cart.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-20 animate-in slide-in-from-bottom-12 duration-300">
                <button
                  onClick={() => setActiveStep('PAYMENT')}
                  className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-orange-600 active:scale-95 transition-all flex justify-between items-center px-6"
                >
                  <span>Pay Now</span>
                  <span>₹{(cartTotal * 1.05).toFixed(2)}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function StepButton({
  active,
  title,
  desc,
  onClick,
}: {
  active: boolean
  title: string
  desc: string
  onClick: () => void
}) {
  return (
    <div className="relative cursor-pointer group" onClick={onClick}>
      <div
        className={`absolute -left-[35px] top-1 w-5 h-5 rounded-full border-4 ${active ? 'border-orange-500 bg-white' : 'border-navy-100 bg-navy-50 group-hover:border-navy-300'} transition-colors`}
      />
      <h4
        className={`text-lg font-bold mb-1 transition-colors ${active ? 'text-navy' : 'text-navy-400 group-hover:text-navy-600'}`}
      >
        {title}
      </h4>
      <p
        className={`text-sm transition-colors ${active ? 'text-navy-600' : 'text-navy-400 group-hover:text-navy-500'}`}
      >
        {desc}
      </p>
    </div>
  )
}
