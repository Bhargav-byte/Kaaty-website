/* ============================================================
   Kaaty — Home sections A: Trust marquee · Product Ecosystem · Why Kaaty
   (also hosts MockPanel used across the app)
   ============================================================ */

/* ---------------- Device mock panel (shared) ---------------- */
function MockPanel({ kind }) {
  const headers = {
    pos: ['Kaaty POS', 'monitor'], kds: ['Kitchen Display', 'chef-hat'], phone: ['Mobile App', 'smartphone'],
    business: ['Owner Dashboard', 'layout-dashboard'], vendor: ['Vendor POS', 'store'], qr: ['QR Ordering', 'qr-code'], kiosk: ['Self Kiosk', 'scan-line'],
  };
  const [label, ic] = headers[kind] || ['Kaaty', 'utensils'];
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-navy-800 bg-navy-900 p-6 shadow-lift">
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-kaaty-500/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-kaaty-500 text-white"><Icon name={ic} size={17} /></span>
            <span className="font-display text-[14px] font-bold text-white">{label}</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-bold text-navy-200"><StatusDot color="bg-emerald-400" /> Live</span>
        </div>
        <div className="mt-5">{renderMockBody(kind)}</div>
      </div>
    </div>
  );
}

function renderMockBody(kind) {
  if (kind === 'pos' || kind === 'vendor') {
    return (
      <div className="space-y-2">
        {[['2× Chicken Biryani', '₹360'], ['1× Paneer Tikka', '₹240'], ['3× Masala Dosa', '₹270']].map(([n, p]) => (
          <div key={n} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <span className="text-[13px] font-medium text-navy-100">{n}</span><span className="text-[13px] font-bold text-white">{p}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-kaaty-500/15 px-4 py-3 ring-1 ring-kaaty-500/40">
          <span className="text-[13px] font-bold text-kaaty-300">Total</span><span className="font-display text-[16px] font-extrabold text-white">₹870</span>
        </div>
      </div>
    );
  }
  if (kind === 'kds' || kind === 'kiosk') {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {[['#1042', 'Preparing', 'bg-amber-400'], ['#1041', 'Ready', 'bg-emerald-400'], ['#1040', 'Preparing', 'bg-amber-400'], ['#1039', 'New', 'bg-kaaty-400']].map(([id, st, dot]) => (
          <div key={id} className="rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10">
            <div className="flex items-center justify-between"><span className="font-display text-[13px] font-bold text-white">{id}</span><span className={`h-2.5 w-2.5 rounded-full ${dot}`} /></div>
            <div className="mt-2 text-[11.5px] font-semibold text-navy-300">{st}</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10"><div className={`h-full rounded-full ${dot}`} style={{ width: st === 'Ready' ? '100%' : st === 'New' ? '20%' : '65%' }} /></div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'phone') {
    return (
      <div className="mx-auto w-[170px] rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-[11px] text-navy-300">Order ready in</div>
        <div className="font-display text-[28px] font-extrabold text-white">04:30</div>
        <div className="mt-4 space-y-2.5">
          {[['Order placed', true], ['Preparing', true], ['Ready', false]].map(([s, d]) => (
            <div key={s} className="flex items-center gap-2.5"><span className={`grid h-5 w-5 place-items-center rounded-full ${d ? 'bg-emerald-500 text-white' : 'bg-white/10 text-navy-400'}`}><Icon name={d ? 'check' : 'circle'} size={11} /></span><span className={`text-[11.5px] ${d ? 'text-white' : 'text-navy-400'}`}>{s}</span></div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'qr') {
    return (
      <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-white"><Icon name="qr-code" size={64} className="text-navy-900" /></div>
        <div>
          <div className="font-display text-[14px] font-bold text-white">Table 7</div>
          <div className="mt-1 text-[12px] text-navy-300">Scan to view menu &amp; order instantly.</div>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-kaaty-500/20 px-2.5 py-1 text-[11px] font-bold text-kaaty-300"><Icon name="trending-up" size={12} /> +18% ticket value</div>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2.5">
        {[['Today', '₹84,200'], ['Orders', '312']].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"><div className="text-[11px] text-navy-300">{k}</div><div className="font-display text-[18px] font-extrabold text-white">{v}</div></div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="flex items-end justify-between gap-1.5" style={{ height: 72 }}>
          {[40, 62, 48, 78, 56, 90, 70].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-kaaty-600 to-kaaty-400" style={{ height: `${h}%` }} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Trusted-by marquee ---------------- */
const TRUST_LOGOS = [
  { name: 'KG Reddy College', icon: 'graduation-cap' }, { name: 'CMR Group', icon: 'building-2' },
  { name: 'MLR Institute', icon: 'school' }, { name: 'MGIT', icon: 'landmark' },
  { name: "St. Peter's", icon: 'book-open-check' }, { name: 'G Fried Chicken', icon: 'drumstick' },
  { name: "Sam's Pizza", icon: 'pizza' }, { name: 'United Farmers', icon: 'wheat' },
];

function TrustMarquee() {
  const row = [...TRUST_LOGOS, ...TRUST_LOGOS];
  return (
    <section className="border-y border-navy-100 bg-navy-50/50 py-12">
      <Container>
        <p className="text-center text-[13px] font-semibold uppercase tracking-[.18em] text-navy-400">Trusted by growing food businesses &amp; premier institutions</p>
      </Container>
      <div className="marquee-wrap marquee-mask mt-8 overflow-hidden">
        <div className="marquee-track gap-10 pr-10">
          {row.map((l, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2.5 grayscale transition-all duration-300 hover:grayscale-0">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-200/60 text-navy-500"><Icon name={l.icon} size={19} /></span>
              <span className="whitespace-nowrap font-display text-[15px] font-bold text-navy-400">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product Ecosystem ---------------- */
const ECOSYSTEM_CARDS = [
  { slug: 'pos', name: 'Kaaty POS', icon: 'monitor', blurb: 'Peak-hour billing with offline reliability and fraud-proof UPI.' },
  { slug: 'kds', name: 'Kaaty KDS', icon: 'chef-hat', blurb: 'Visual kitchen display that routes every item to the right station.' },
  { slug: 'mobile-app', name: 'Mobile App', icon: 'smartphone', blurb: 'Your branded ordering app with live tracking and notifications.' },
  { slug: 'business', name: 'Business App', icon: 'layout-dashboard', blurb: 'Live multi-outlet analytics and settlements in your pocket.' },
  { slug: 'vendor', name: 'Vendor App', icon: 'store', blurb: 'A full mobile POS for stalls — no expensive hardware needed.' },
  { slug: 'qr-ordering', name: 'QR Ordering', icon: 'qr-code', blurb: 'Scan-to-order dining that lifts ticket value and clears lines.' },
  { slug: 'kiosk', name: 'Self Kiosk', icon: 'scan-line', blurb: 'Line-busting self-service terminals that grow average orders.' },
  { slug: 'token-board', name: 'Token Board', icon: 'tv', blurb: 'Live, kitchen-synced token displays that clear the crowd.' },
];

function ProductEcosystem() {
  return (
    <section id="products" className="py-24 sm:py-28">
      <Container>
        <SectionHead eyebrow="One connected ecosystem" title={<>Every tool your food business runs on, <span className="gradient-text">in one platform</span></>} sub="Start with one product and add the rest as you grow — everything shares the same data, in real time." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_CARDS.map((c) => (
            <a key={c.slug} href={`#/products/${c.slug}`} className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-kaaty-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={c.icon} size={22} /></span>
              <h3 className="relative mt-5 font-display text-[18px] font-bold text-navy">{c.name}</h3>
              <p className="relative mt-2 flex-1 text-[13.5px] leading-relaxed text-navy-500">{c.blurb}</p>
              <span className="relative mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">Learn more <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Why Kaaty ---------------- */
const WHY_CARDS = [
  { icon: 'refresh-cw', title: 'Real-Time Operations', desc: 'Counter, kitchen, customer apps and back office stay in sync the instant anything changes.' },
  { icon: 'shield-check', title: 'Fraud-Proof Payments', desc: 'Real-time UPI ledger confirmations end fake-screenshot scams and revenue leakage for good.' },
  { icon: 'printer', title: 'Pine Labs Integration', desc: 'Deep, native integration with Pine Labs smart terminals — billing, cards and receipts in one device.' },
  { icon: 'store', title: 'Multi-Vendor Management', desc: 'Centralise dozens of stalls, brands and franchise counters under one connected parent ledger.' },
  { icon: 'code', title: 'Custom Development', desc: 'An open feature pipeline — our engineering team builds the workflows your business actually needs.' },
  { icon: 'cpu', title: 'Works On Any Hardware', desc: 'Run on any Android or desktop device, with thermal, kitchen and Bluetooth printers supported.' },
];

function WhyKaaty() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead eyebrow="Why Kaaty" title={<>More than a POS — <span className="gradient-text">an operating system</span></>} sub="The reasons growing food businesses and institutions standardise on Kaaty." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((c, i) => (
            <div key={c.title} className="reveal group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={c.icon} size={22} /></span>
              <h3 className="mt-5 font-display text-[18px] font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { MockPanel, TrustMarquee, ProductEcosystem, WhyKaaty });
