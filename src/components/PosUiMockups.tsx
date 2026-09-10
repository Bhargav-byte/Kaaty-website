import { Icon } from './Icon'

// CSS Mockup for Token/Order Workflow
export function TokenWorkflowUi() {
  return (
    <div
      className="w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-xl flex flex-col"
      aria-hidden="true"
    >
      <div className="bg-white border-b border-navy-100 p-4">
        <div className="w-full bg-kaaty-500 rounded-xl py-2.5 flex justify-center items-center text-white font-bold text-[14px]">
          Order Status
        </div>
      </div>
      <div className="p-3 bg-navy-50/50 flex-1 space-y-2">
        <div className="bg-white rounded-lg border border-navy-100 p-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-[18px] text-kaaty-500">92</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold tracking-wider">
              PREPARING
            </span>
          </div>
          <Icon name="play" size={14} className="text-navy-300" />
        </div>
        <div className="bg-white rounded-lg border border-navy-100 p-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-[18px] text-kaaty-500">91</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wider">
              READY
            </span>
          </div>
          <Icon name="play" size={14} className="text-navy-300" />
        </div>
        <div className="bg-white rounded-lg border border-navy-100 p-3 flex justify-between items-center shadow-sm opacity-60">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-[18px] text-kaaty-500">90</span>
            <span className="px-2 py-0.5 rounded-full bg-navy-100 text-navy-600 text-[10px] font-bold tracking-wider">
              DELIVERED
            </span>
          </div>
          <Icon name="check" size={14} className="text-navy-300" />
        </div>
      </div>
    </div>
  )
}

// CSS Mockup for Payment Experience
export function PaymentExperienceUi() {
  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-xl"
      aria-hidden="true"
    >
      <div className="bg-navy-50 border-b border-navy-100 px-5 py-4 flex justify-between items-center">
        <span className="font-bold text-navy-900 text-[15px]">Select Payment</span>
        <span className="text-navy-400 text-[13px] font-mono">Total: ₹240</span>
      </div>

      <div className="p-5 space-y-3">
        <button className="w-full flex items-center justify-between p-3 rounded-xl border-2 border-kaaty-500 bg-kaaty-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-kaaty-600">
              <Icon name="smartphone-nfc" size={16} />
            </div>
            <span className="font-bold text-navy-900">UPI / QR Code</span>
          </div>
          <Icon name="check-circle-2" size={20} className="text-kaaty-500" />
        </button>

        <button className="w-full flex items-center justify-between p-3 rounded-xl border border-navy-200 bg-white hover:bg-navy-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-navy-50 text-navy-600 flex items-center justify-center">
              <Icon name="banknote" size={16} />
            </div>
            <span className="font-bold text-navy-700">Cash</span>
          </div>
        </button>
      </div>

      <div className="px-5 pb-5 pt-2">
        <div className="w-full bg-kaaty-500 rounded-xl py-3.5 flex justify-center items-center gap-2 text-white font-bold shadow-md shadow-kaaty-500/20">
          <span>Confirm ₹240 (UPI)</span>
        </div>
      </div>
    </div>
  )
}

// Visual for Timeline
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
            <h4 className="font-bold text-navy-900 text-[14px]">Order Received</h4>
            <p className="text-[13px] text-navy-600 mt-1">
              Cashier enters 4 items into POS. Payment confirmed via UPI.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-14 shrink-0 text-right pt-1">
            <span className="text-[12px] font-bold text-navy-900">12:31</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-white border-2 border-navy-300 mt-1 shrink-0"></div>
          <div className="flex-1 bg-white rounded-xl border border-navy-100 p-4 shadow-sm">
            <h4 className="font-bold text-navy-900 text-[14px]">Routed to KDS</h4>
            <p className="text-[13px] text-navy-600 mt-1">
              Token #92 appears instantly on Kitchen Display.
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
              Kitchen taps "Ready". Counter staff and Token Board update instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
