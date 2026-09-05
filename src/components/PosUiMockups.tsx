import { Icon } from './Icon'

export function ExpressBillingUi() {
  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-xl"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="bg-navy-50 border-b border-navy-100 px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-navy-900 text-[14px]">Current Order</span>
        <span className="text-navy-400 text-[12px] font-mono">#1042</span>
      </div>

      {/* Items */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <span className="font-bold text-navy-900 text-[14px]">2</span>
            <div>
              <p className="font-bold text-navy-900 text-[14px]">Classic Burger</p>
              <p className="text-[12px] text-navy-500 mt-0.5">+ Extra Cheese (₹40)</p>
            </div>
          </div>
          <span className="font-bold text-navy-900 text-[14px]">₹540</span>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <span className="font-bold text-navy-900 text-[14px]">1</span>
            <div>
              <p className="font-bold text-navy-900 text-[14px]">Iced Latte</p>
              <p className="text-[12px] text-navy-500 mt-0.5">+ Almond Milk (₹40)</p>
            </div>
          </div>
          <span className="font-bold text-navy-900 text-[14px]">₹220</span>
        </div>
      </div>

      {/* Totals */}
      <div className="bg-navy-50 p-4 border-t border-navy-100 space-y-2">
        <div className="flex justify-between text-[13px] text-navy-600">
          <span>Subtotal</span>
          <span>₹760</span>
        </div>
        <div className="flex justify-between text-[13px] text-navy-600">
          <span>Taxes (5%)</span>
          <span>₹38</span>
        </div>
        <div className="mt-3 pt-3 border-t border-navy-200 flex justify-between items-center">
          <span className="font-bold text-navy-900 text-[16px]">Total</span>
          <span className="font-display font-extrabold text-navy-900 text-[20px]">₹798</span>
        </div>
      </div>

      {/* Pay Button */}
      <div className="p-4 bg-white">
        <div className="w-full bg-kaaty-500 rounded-xl py-3 flex justify-center items-center gap-2 text-white font-bold shadow-md shadow-kaaty-500/20">
          <Icon name="credit-card" size={18} />
          <span>Pay ₹798</span>
        </div>
      </div>
    </div>
  )
}

export function UpiConfirmationUi() {
  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-navy-700 bg-navy-800 shadow-2xl relative"
      aria-hidden="true"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative p-8 text-center flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
          <Icon name="check-circle-2" size={32} className="text-emerald-400" />
        </div>

        {/* Content */}
        <h3 className="font-display text-[24px] font-bold text-white mb-1">₹798.00</h3>
        <p className="text-emerald-400 font-bold text-[14px] mb-6 tracking-wide uppercase">
          UPI Payment Verified
        </p>

        <div className="w-full bg-navy-900/50 rounded-xl p-4 border border-navy-700/50">
          <p className="text-[13px] text-navy-300 mb-1">Confirmed in the POS ledger</p>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-navy-700/50">
            <span className="text-[12px] text-navy-400">Ref No:</span>
            <span className="text-[12px] font-mono text-navy-200">TXN-84920194</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-[12px] text-navy-400">Time:</span>
            <span className="text-[12px] font-mono text-navy-200">14:02:45</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TableLayoutUi() {
  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-navy-200 bg-navy-50 shadow-xl p-6"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-navy-900 text-[15px]">Floor 1</span>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-kaaty-500"></span>
            <span className="text-[11px] font-medium text-navy-500 uppercase">Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white border border-navy-200"></span>
            <span className="text-[11px] font-medium text-navy-500 uppercase">Vacant</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Table 1 - Active */}
        <div className="bg-kaaty-50 border border-kaaty-200 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-kaaty-500"></div>
          <span className="font-bold text-kaaty-900 text-[18px]">T1</span>
          <span className="text-[12px] font-medium text-kaaty-700 mt-1">₹1,240</span>
          <div className="mt-2 text-[10px] bg-white text-kaaty-600 px-2 py-0.5 rounded-full border border-kaaty-100">
            3 Guests
          </div>
        </div>

        {/* Table 2 - Vacant */}
        <div className="bg-white border border-navy-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="font-bold text-navy-300 text-[18px]">T2</span>
          <span className="text-[12px] font-medium text-navy-300 mt-1">Vacant</span>
        </div>

        {/* Table 3 - Vacant */}
        <div className="bg-white border border-navy-200 rounded-xl p-4 flex flex-col items-center justify-center">
          <span className="font-bold text-navy-300 text-[18px]">T3</span>
          <span className="text-[12px] font-medium text-navy-300 mt-1">Vacant</span>
        </div>

        {/* Table 4 - Active (Split) */}
        <div className="bg-kaaty-50 border border-kaaty-200 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-kaaty-500"></div>
          <span className="font-bold text-kaaty-900 text-[18px]">T4</span>
          <span className="text-[12px] font-medium text-kaaty-700 mt-1">₹890</span>
          <div className="mt-2 text-[10px] bg-white text-kaaty-600 px-2 py-0.5 rounded-full border border-kaaty-100 flex items-center gap-1">
            <span className="font-medium text-kaaty-500 text-[10px] uppercase">Split Check</span>
          </div>
        </div>
      </div>
    </div>
  )
}
