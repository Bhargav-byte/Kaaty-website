import { useState, useEffect, useRef } from "react";
import {
  ChevronDown, Menu, X, ArrowRight, Play, Check, Star,
  Zap, Monitor, Smartphone, BarChart3, Users, Package,
  QrCode, Tablet, Tv, ShieldCheck, ChevronRight,
  MapPin, Phone, Mail, Linkedin, Instagram, Twitter,
  UtensilsCrossed, Coffee, Building2, Truck, Cake,
  IceCream, Hotel, GraduationCap, Network, Plus, Minus,
  Globe, CreditCard, Printer, ScanBarcode, BookOpen,
  FileText, Headphones, ChevronUp
} from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────────
const NAV_PRODUCTS = [
  { name: "Kaaty POS", desc: "Fast counter billing for peak hours", icon: Monitor },
  { name: "Kaaty KDS", desc: "Icon-driven kitchen display system", icon: Tv },
  { name: "Kaaty Mobile App", desc: "Pre-orders & live order tracking", icon: Smartphone },
  { name: "Kaaty Business", desc: "Multi-outlet owner dashboard", icon: BarChart3 },
  { name: "Kaaty Vendor", desc: "Lightweight mobile POS for stalls", icon: Tablet },
  { name: "QR Ordering", desc: "Scan-to-order table management", icon: QrCode },
  { name: "Self Ordering Kiosk", desc: "Touchscreen line-busting interface", icon: Monitor },
  { name: "Token Display Board", desc: "Live dual-state TV status system", icon: Tv },
  { name: "Inventory Management", desc: "Automated stock & ingredient alerts", icon: Package },
  { name: "CRM & Loyalty", desc: "Retention tools & reward tracking", icon: Users },
];

const NAV_SOLUTIONS = [
  "Restaurant & Fine Dine", "Café & Quick Service (QSR)", "Food Court & Mess Services",
  "College Canteen & Campus Ecosystems", "Cloud Kitchen Chains", "Bakery & Confectionery",
  "Ice Cream & Dessert Parlors", "Hotel Dining Rooms", "Franchise Enterprise Networks",
];

const NAV_INTEGRATIONS = {
  "Payment Gateways": ["Easebuzz", "Razorpay", "PhonePe", "Cashfree", "Paytm"],
  "POS Hardware": ["Pine Labs EPOS", "Thermal Printers", "Barcode Scanners", "Kitchen Printers"],
  "Marketplace": ["Swiggy", "Zomato", "ONDC"],
  "Accounting": ["Tally", "Zoho Books"],
};

const TRUST_LOGOS = [
  "KG Reddy College", "CMR Group of Institutions", "MLR Institute of Technology",
  "MGIT", "St. Peter's Engineering", "G Fried Chicken",
];

const VALUE_CARDS = [
  { icon: Zap, title: "High-Velocity POS Billing", desc: "Run frictionless checkouts, split tabs, and track cross-counter revenue during the most intense peak hours." },
  { icon: Tv, title: "Visual Kitchen Displays", desc: "Instantly push new items from front counter or customer phones to specific cooking stations." },
  { icon: QrCode, title: "Frictionless QR Ordering", desc: "Let customers self-order directly from tables, instantly growing ticket value while cutting staff overhead." },
  { icon: Smartphone, title: "Native Mobile Ordering", desc: "Provide custom pre-ordering with live updates to entirely eliminate customer lines." },
  { icon: Monitor, title: "Smart Token Displays", desc: "Clear front-of-house crowding with dual-stage TV tracking synced to live kitchen operations." },
  { icon: Package, title: "Predictive Inventory", desc: "Maintain precise control over raw ingredients with automated safety stock thresholds and alerts." },
  { icon: Network, title: "Multi-Vendor Management", desc: "Centralize separate operators and franchise counters under one unified parent ledger." },
  { icon: BarChart3, title: "Real-Time Owner Insights", desc: "Access precise performance trends, margins, and sales reports right from your mobile device." },
  { icon: ShieldCheck, title: "Anti-Fraud Payment Auto", desc: "Eliminate fake screenshot scams with automated, real-time UPI payment ledger confirmations." },
];

const PRODUCTS = [
  {
    tag: "POS", title: "Fast Billing Built For Peak Hours", icon: Monitor,
    features: ["High-speed counter checkouts with minimal taps", "Verify offline cash and digital UPI sales instantly", "Print automated itemized order tokens", "Track inventory changes in real time", "Maintain unified logs for online and walk-up orders"],
    cta: "Explore POS",
  },
  {
    tag: "KDS", title: "Kitchen Management Without Chaos", icon: Tv,
    features: ["Organize cross-channel queues on icon-based display", "Update order milestones with single-tap controls", "Optimize multi-station coordination during rush", "Route menu items to designated prep stations instantly"],
    cta: "Explore KDS",
  },
  {
    tag: "Mobile App", title: "Let Customers Order Before They Arrive", icon: Smartphone,
    features: ["Responsive digital menus for mobile browsing", "Real-time automated order stage tracking", "Push notifications the moment orders are ready", "Secure digital payments via modern payment rails"],
    cta: "Explore Mobile App",
  },
  {
    tag: "Business", title: "Complete Control For Owners", icon: BarChart3,
    features: ["Track sales velocity and margin trends instantly", "Automate vendor settlements and payouts", "Manage multi-outlet menus concurrently", "Generate real-time revenue statements anywhere"],
    cta: "Explore Business App",
  },
  {
    tag: "Vendor", title: "Mobile POS For Small Vendors", icon: Tablet,
    features: ["Full digital checkout without expensive hardware", "Process billing from any Android or iOS device", "Monitor ingredient depletion on a lightweight interface", "Launch new stalls with rapid, code-free onboarding"],
    cta: "Explore Vendor App",
  },
  {
    tag: "QR Ordering", title: "Scan. Order. Enjoy.", icon: QrCode,
    features: ["Orders placed directly from tables using QR codes", "Eliminate lines and counter crowding at peaks", "Drive higher ticket values via smart upsell recs", "Maximize efficiency by reducing manual table ordering"],
    cta: "Explore QR Ordering",
  },
  {
    tag: "Kiosk", title: "Reduce Queue Time By 80%", icon: Monitor,
    features: ["Deploy self-service terminals for guest throughput", "Boost ticket sizes with automated cross-promotions", "Rapid card and digital payments via integrated hardware", "Faster, error-free service during high-volume periods"],
    cta: "Explore Kiosks",
  },
];

const INTEGRATIONS = [
  { name: "Swiggy", color: "#FC8019" }, { name: "Zomato", color: "#E23744" },
  { name: "ONDC", color: "#1B4F72" }, { name: "Razorpay", color: "#2D81FF" },
  { name: "Easebuzz", color: "#6B46C1" }, { name: "PhonePe", color: "#5F259F" },
  { name: "Pine Labs", color: "#005A9C" }, { name: "Tally", color: "#0047AB" },
  { name: "Zoho Books", color: "#E42527" }, { name: "WhatsApp", color: "#25D366" },
  { name: "Google Business", color: "#4285F4" },
];

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Fine Dine" }, { icon: Coffee, label: "Cafés & QSR" },
  { icon: Building2, label: "Food Courts" }, { icon: Truck, label: "Cloud Kitchens" },
  { icon: Cake, label: "Bakeries" }, { icon: IceCream, label: "Dessert Parlors" },
  { icon: Hotel, label: "Hotel Dining" }, { icon: GraduationCap, label: "Canteens" },
  { icon: Network, label: "Franchise Chains" }, { icon: Users, label: "Institutional Mess" },
];

const PLANS = [
  {
    name: "Starter", badge: null, color: "border-gray-200",
    target: "Small cafes and individual food venues",
    features: ["Core Billing POS", "Basic Inventory", "80+ Report Layouts", "Local Offline Operations"],
    cta: "Book A Demo", ctaStyle: "outline",
  },
  {
    name: "Growth", badge: "Most Popular", color: "border-orange-500",
    target: "High-volume restaurants, food courts & canteens",
    features: ["All Starter Features", "Visual KDS Panels", "QR Table Ordering", "Anti-Fraud UPI Sync", "Pine Labs Integration", "Smart TV Token Display"],
    cta: "Book A Demo", ctaStyle: "filled",
  },
  {
    name: "Enterprise", badge: null, color: "border-gray-800",
    target: "Campuses, dining halls & multi-location chains",
    features: ["All Growth Features", "White-Label Mobile Apps", "Custom Feature Engineering", "Closed-Loop Wallet Systems", "24/7 Dedicated Support"],
    cta: "Contact Enterprise Sales", ctaStyle: "dark",
  },
];

const FAQS = [
  { q: "Can Kaaty work for standalone restaurants?", a: "Absolutely. While robust enough for complex multi-vendor canteens, Kaaty's core gives restaurants an all-in-one POS, visual KDS, and instant QR table ordering right out of the box." },
  { q: "Does it integrate with Pine Labs hardware?", a: "Yes. Kaaty features deep native integration with Pine Labs Android POS terminals — handle card payments, look up mobile orders, and print receipts from one device." },
  { q: "Can I use only the POS without the full ecosystem?", a: "You have complete flexibility. Start with fast counter billing and add modules like QR ordering or KDS as your business grows — no forced bundles." },
  { q: "Will you build custom features for my business?", a: "Yes. This is exactly where Kaaty stands apart. Our engineering team builds bespoke workflows, specialized dashboards, and campus integrations tailored to your specific needs." },
  { q: "Do you provide brand-customized customer websites?", a: "Yes. For enterprise and custom tiers, we design and build modern white-label ordering websites and native app packages that put your brand front and center." },
  { q: "Can Kaaty manage multiple branches from one screen?", a: "Yes. The Kaaty Business app gives owners live data sync, automated multi-outlet sales aggregation, and simplified menu management across your entire chain." },
];

// ─── NAVBAR ───────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">kaaty</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {["Products", "Solutions", "Integrations"].map((item) => (
              <div key={item} className="relative" onMouseEnter={() => setOpenMenu(item)} onMouseLeave={() => setOpenMenu(null)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">
                  {item} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === item ? "rotate-180" : ""}`} />
                </button>
                {openMenu === item && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-in fade-in slide-in-from-top-2 duration-150" style={{ minWidth: item === "Products" ? 680 : item === "Integrations" ? 560 : 340 }}>
                    {item === "Products" && (
                      <div className="grid grid-cols-2 gap-2">
                        {NAV_PRODUCTS.map(p => (
                          <a key={p.name} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 group transition-colors">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                              <p.icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <div><div className="text-sm font-semibold text-gray-900 group-hover:text-orange-600">{p.name}</div><div className="text-xs text-gray-500 mt-0.5">{p.desc}</div></div>
                          </a>
                        ))}
                      </div>
                    )}
                    {item === "Solutions" && (
                      <div className="grid grid-cols-1 gap-1">
                        {NAV_SOLUTIONS.map(s => (
                          <a key={s} href="#" className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                            <ChevronRight className="w-3.5 h-3.5 text-orange-400" /> {s}
                          </a>
                        ))}
                      </div>
                    )}
                    {item === "Integrations" && (
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(NAV_INTEGRATIONS).map(([cat, items]) => (
                          <div key={cat}>
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{cat}</div>
                            {items.map(i => <a key={i} href="#" className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-orange-600 transition-colors">{i}</a>)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <a href="#pricing" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">Pricing</a>
            <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50">About Us</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden lg:block px-5 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200">
              Book Demo
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {["Products", "Solutions", "Integrations", "Pricing", "About Us"].map(item => (
            <a key={item} href="#" className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">{item}</a>
          ))}
          <button className="w-full mt-3 px-5 py-3 text-sm font-semibold text-white bg-orange-500 rounded-xl">Book Demo</button>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/60 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-6">
              <Zap className="w-3 h-3" /> India's Connected Food-Tech Platform
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6">
              One Platform.<br />
              <span className="text-orange-500">Every Food</span><br />
              Business.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
              Manage billing, kitchen operations, QR ordering, self-service kiosks, vendors, inventory, payments, and customer experience — all from a single platform.
            </p>
            <p className="text-sm font-medium text-gray-500 mb-8">Built for Restaurants, Cafés, Food Courts, Cloud Kitchens, and College Canteens.</p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 text-sm">
                Book Free Demo <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all text-sm">
                <Play className="w-4 h-4" /> Watch Product Tour
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-gray-100">
              {[["500+", "Food Businesses"], ["99.9%", "Uptime SLA"], ["10M+", "Orders Processed"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black text-gray-900">{n}</div>
                  <div className="text-xs text-gray-500 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[520px]">
              {/* Main tablet – POS */}
              <div className="absolute inset-0 left-4 top-4 bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                  <span className="text-white text-xs font-bold">Kaaty POS — Table 12</span>
                  <span className="text-green-400 text-xs font-semibold">● Live</span>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  {["Biryani ₹180", "Paneer ₹160", "Lassi ₹60", "Naan ₹40", "Dal Fry ₹120", "Raita ₹50"].map((item, i) => (
                    <div key={i} className="bg-gray-700 rounded-xl p-2.5 cursor-pointer hover:bg-orange-500 transition-colors">
                      <div className="w-6 h-6 bg-orange-400 rounded-lg mb-2 opacity-60" />
                      <div className="text-white text-[10px] font-semibold">{item.split(" ")[0]}</div>
                      <div className="text-orange-300 text-[10px]">{item.split(" ")[1]}</div>
                    </div>
                  ))}
                </div>
                <div className="mx-4 bg-gray-700 rounded-xl p-3">
                  <div className="flex justify-between text-xs text-gray-300 mb-1"><span>3 Items</span><span className="text-orange-400 font-bold">₹ 400</span></div>
                  <div className="w-full h-1.5 bg-gray-600 rounded-full"><div className="w-3/4 h-full bg-orange-500 rounded-full" /></div>
                </div>
                <div className="mx-4 mt-3 bg-orange-500 rounded-xl py-2.5 text-center">
                  <span className="text-white text-xs font-black">CONFIRM ORDER</span>
                </div>
              </div>

              {/* KDS Panel – floating right */}
              <div className="absolute right-0 top-8 w-48 bg-gray-900 rounded-2xl shadow-xl border-2 border-gray-700 overflow-hidden">
                <div className="bg-orange-500 px-3 py-2"><span className="text-white text-[10px] font-black">KITCHEN DISPLAY</span></div>
                <div className="p-2 space-y-1.5">
                  {[["#1042", "Biryani", "Ready", "green"], ["#1043", "Naan × 3", "Prep", "orange"], ["#1044", "Lassi", "Queue", "gray"]].map(([id, item, status, color]) => (
                    <div key={id} className="bg-gray-800 rounded-lg px-2 py-1.5 flex items-center justify-between">
                      <div><div className="text-orange-400 text-[9px] font-bold">{id}</div><div className="text-white text-[9px]">{item}</div></div>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${color === "green" ? "bg-green-500/20 text-green-400" : color === "orange" ? "bg-orange-500/20 text-orange-400" : "bg-gray-600 text-gray-400"}`}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile phone – bottom left */}
              <div className="absolute -bottom-4 left-0 w-32 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-orange-500 px-2 py-1.5 text-center"><span className="text-white text-[8px] font-black">Kaaty App</span></div>
                <div className="p-2">
                  <div className="text-[8px] font-semibold text-gray-600 mb-1">Order #1042</div>
                  <div className="space-y-1">
                    {[["Placed", true], ["Prep", true], ["Ready", false]].map(([s, done]) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <div className={`w-2.5 h-2.5 rounded-full flex items-center justify-center ${done ? "bg-orange-500" : "bg-gray-200"}`}>
                          {done && <Check className="w-1.5 h-1.5 text-white" />}
                        </div>
                        <span className={`text-[8px] ${done ? "text-gray-800 font-semibold" : "text-gray-400"}`}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 bg-orange-50 rounded-lg p-1.5 text-center">
                    <div className="text-orange-500 text-[8px] font-black">Token #42</div>
                    <div className="text-[7px] text-gray-500">Tap to track</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-16 right-2 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-gray-700">All systems live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRUST BANNER ─────────────────────────────────────────────────
function TrustBanner() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Growing Food Businesses & Premier Educational Institutions</p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {TRUST_LOGOS.map((logo) => (
            <div key={logo} className="px-5 py-3 bg-white rounded-xl border border-gray-200 text-sm font-semibold text-gray-400 hover:text-gray-700 hover:border-orange-200 hover:shadow-md transition-all duration-200 cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VALUE SECTION ────────────────────────────────────────────────
function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Platform Overview</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">More Than a POS</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Kaaty connects every part of your food business in real time — from the counter to the kitchen to your customer's phone.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUE_CARDS.map((card, i) => (
            <div key={i} className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <card.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────
function ProductSuite() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Products</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">The Complete Product Suite</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Every tool your food business needs — built to work together seamlessly.</p>
        </div>

        <div className="space-y-6">
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all duration-300`}>
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full mb-4">{product.tag}</div>
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">{product.title}</h3>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-orange-500" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 group">
                  {product.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className={`${idx % 2 !== 0 ? "lg:order-1" : ""} bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 flex items-center justify-center min-h-[220px]`}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-10 h-10 text-orange-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{product.tag} Interface</span>
                  <div className="mt-4 flex justify-center gap-2">
                    {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-orange-500 rounded-full opacity-60" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTEGRATIONS + INDUSTRIES ───────────────────────────────────
function EcosystemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Integrations */}
          <div>
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Ecosystem</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-3 mb-3">Connect With Everything You Need</h2>
            <p className="text-gray-500 mb-10 text-sm">Seamlessly sync your operations with India's leading digital distribution, accounting, and communication tools.</p>
            <div className="flex flex-wrap gap-3">
              {INTEGRATIONS.map(({ name, color }) => (
                <div key={name} className="px-4 py-2.5 bg-white border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:border-orange-200 hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-default">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Industries</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-3 mb-3">Built For Every Food Business Model</h2>
            <p className="text-gray-500 mb-10 text-sm">From single-stall vendors to enterprise franchise chains — Kaaty scales with you.</p>
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all duration-200 group cursor-default">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-orange-200 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CUSTOM ENGINEERING ──────────────────────────────────────────
function EngineeringPanel() {
  const capabilities = [
    "Fully Custom Operational Workflows", "Tailored Brand Websites",
    "White-Label Native Ordering Apps", "Specialized Internal Reports",
    "Advanced CRM & Loyalty Systems", "Legacy ERP & Enterprise Ledger Sync",
    "Closed-Loop Student Digital Wallets", "Campus-Specific ID Integrations",
    "Multi-Vendor Marketplace Deployments",
  ];
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #374151 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Custom Engineering</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-6">Need Something Unique? We Build It.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">Unlike traditional, rigid retail software that forces you to adapt your workflow to their platform, Kaaty offers an open, highly customizable feature pipeline. Tell us what your business requires, and our engineering team will build it.</p>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-400 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/20">
              Book an Engineering Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gray-900 rounded-3xl border border-orange-500/20 p-8" style={{ boxShadow: "0 0 40px rgba(255, 107, 0, 0.08)" }}>
            <div className="text-sm font-semibold text-orange-400 mb-6 uppercase tracking-wider">Capabilities</div>
            <div className="grid grid-cols-1 gap-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Check className="w-3 h-3 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-300 text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">Simple, Transparent Plans</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Start lean, scale smart. Every plan includes a free onboarding call with our team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`relative rounded-3xl border-2 ${plan.color} p-8 flex flex-col ${plan.badge ? "shadow-2xl shadow-orange-100 scale-105" : "bg-white"}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-xs font-black rounded-full shadow-lg">{plan.badge}</div>
              )}
              <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${plan.ctaStyle === "filled" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600"}`}>{plan.name}</div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.target}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.ctaStyle === "filled" ? "bg-orange-500" : "bg-gray-200"}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.ctaStyle === "filled" ? "text-white" : "text-gray-600"}`} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5
                ${plan.ctaStyle === "filled" ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
                  : plan.ctaStyle === "dark" ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "border-2 border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-6">Built From Real Campus Problems</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Kaaty started inside high-volume college campuses to solve real operational stress: fake payment screenshots, long queues, and communication breakdowns between the front counter and the kitchen.</p>
            <p className="text-gray-600 leading-relaxed mb-8">By building a real-time connected platform, we completely eliminated waiting times and secured revenue leakage points. Today, that same robust engine powers restaurants, cafés, multi-vendor food courts, and educational institutions across the region — through a single, complete food-tech ecosystem.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-black text-gray-900">Benvora Groups Private Limited</div>
                <div className="text-xs text-gray-500">Parent Company & Technology Partner</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[["500+", "Active Deployments", "orange"], ["10M+", "Orders Processed", "gray"], ["99.9%", "Platform Uptime", "orange"], ["6", "Product Modules", "gray"]].map(([val, label, color]) => (
              <div key={label} className={`p-6 rounded-2xl border ${color === "orange" ? "border-orange-200 bg-orange-50" : "border-gray-200 bg-white"}`}>
                <div className={`text-3xl font-black mb-1 ${color === "orange" ? "text-orange-500" : "text-gray-900"}`}>{val}</div>
                <div className="text-sm text-gray-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open === i ? "border-orange-200 shadow-md" : "border-gray-100"}`}>
              <button className="w-full flex items-center justify-between px-6 py-5 text-left group" onClick={() => setOpen(open === i ? null : i)}>
                <span className={`text-sm font-bold ${open === i ? "text-orange-600" : "text-gray-900"}`}>{faq.q}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${open === i ? "bg-orange-500" : "bg-gray-100 group-hover:bg-orange-100"}`}>
                  {open === i ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-gray-500 group-hover:text-orange-500" />}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA FOOTER ───────────────────────────────────────────────────
function CTAFooter() {
  return (
    <>
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fff7ed 0%, #fff 40%, #1f2937 100%)" }}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #374151 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Get Started</span>
          <h2 className="text-5xl lg:text-6xl font-black mt-3 mb-5 text-gray-900">Ready To Modernize<br /><span className="text-orange-500">Your Food Business?</span></h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10">Join the modern operations movement. Book your free custom demo today — minimize order friction, secure your revenue, and transform customer satisfaction.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-200 text-sm">
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all text-sm bg-white">
              Talk To Sales Team
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-lg">kaaty</span>
                <div className="text-gray-500 text-xs">Benvora Groups Private Limited</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="mailto:support@kaaty.in" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"><Mail className="w-3.5 h-3.5" /> support@kaaty.in</a>
              <a href="tel:+919999999999" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"><Phone className="w-3.5 h-3.5" /> +91 99999 99999</a>
            </div>

            <div className="flex items-center gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-gray-600">
            <span>© 2025 Benvora Groups Private Limited. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────
export default function KaatyLanding() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <ValueSection />
        <ProductSuite />
        <EcosystemSection />
        <EngineeringPanel />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <CTAFooter />
    </div>
  );
}
