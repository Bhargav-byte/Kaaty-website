/* ============================================================
   Kaaty — Sections B: Integrations · Industry Solutions · Custom Solutions
            · Pricing matrix · About · FAQ · Footer
   ============================================================ */

/* ---------------- Integrations (home) ---------------- */
function IntegrationsSection() {
  const all = Object.entries(INTEGRATION_PAGES).map(([slug, v]) => ({ slug, ...v }));
  const row = [...all, ...all];
  return (
    <section id="integrations" className="py-24 sm:py-28">
      <Container>
        <SectionHead eyebrow="Integrations" title={<>Connect with <span className="gradient-text">everything you need</span></>} sub="Sync your operations with India's leading payment gateways, hardware and delivery marketplaces." />
      </Container>
      <div className="marquee-wrap marquee-mask mt-12 overflow-hidden">
        <div className="marquee-track gap-4 pr-4">
          {row.map((it, i) => (
            <a key={i} href={`#/integrations/${it.slug}`} className="flex shrink-0 items-center gap-2.5 rounded-full border border-navy-100 bg-white px-5 py-3 shadow-soft transition-all duration-200 hover:border-kaaty-200 hover:shadow-lift">
              <span className="grid h-8 w-8 place-items-center rounded-full text-white" style={{ background: it.dot }}><Icon name={it.icon} size={15} /></span>
              <span className="whitespace-nowrap text-[14.5px] font-semibold text-navy-800">{it.name}</span>
            </a>
          ))}
        </div>
      </div>
      <Container>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {INTEGRATION_GROUPS.map((g) => (
            <div key={g.label} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name={g.icon} size={19} /></span><h3 className="font-display text-[16px] font-bold text-navy">{g.label}</h3></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <a key={s} href={`#/integrations/${s}`} className="rounded-lg bg-navy-50 px-3 py-1.5 text-[13px] font-medium text-navy-700 transition-colors hover:bg-kaaty-50 hover:text-kaaty-700">{INTEGRATION_PAGES[s].name}</a>)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Industry Solutions (home) ---------------- */
function IndustrySolutions() {
  const all = Object.entries(SOLUTIONS).map(([slug, v]) => ({ slug, ...v }));
  return (
    <section id="solutions" className="border-y border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead eyebrow="Industry solutions" title={<>Purpose-built for <span className="gradient-text">every food business model</span></>} sub="From a single espresso bar to a multi-outlet franchise — Kaaty adapts to exactly how you operate." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {all.map((s) => (
            <a key={s.slug} href={`#/solutions/${s.slug}`} className="reveal group flex flex-col items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={s.icon} size={22} /></span>
              <div>
                <h3 className="font-display text-[16.5px] font-bold text-navy">{s.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">Explore <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Custom Solutions (home, dark) ---------------- */
const CUSTOM_ITEMS = [
  { icon: 'globe', t: 'Restaurant Websites' }, { icon: 'palette', t: 'White-Label Apps' },
  { icon: 'database', t: 'ERP Integrations' }, { icon: 'file-text', t: 'Custom Reports' },
  { icon: 'code', t: 'API Integrations' }, { icon: 'wallet', t: 'Campus Wallet Systems' },
  { icon: 'store', t: 'Multi-Vendor Systems' },
];

function CustomSolutions() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[28px] bg-navy-950 p-8 shadow-glow ring-1 ring-kaaty-500/40 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-kaaty-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-kaaty-600/20 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow className="bg-white/10 text-kaaty-300 ring-white/10">Custom development</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-.025em] text-white">What You Ask. <span className="gradient-text">We Build.</span></h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy-300">Unlike rigid retail software that forces you to adapt, Kaaty offers an open, highly customizable feature pipeline. Tell us what your business needs — our engineering team builds it.</p>
              <div className="mt-8"><Button as="a" href="#/demo" size="lg" icon="arrow-right">Book an Engineering Consultation</Button></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {CUSTOM_ITEMS.map((e) => (
                <div key={e.t} className="flex items-center gap-3 rounded-xl bg-white/[.04] p-3.5 ring-1 ring-white/10 transition-colors hover:bg-white/[.08]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-kaaty-500/90 text-white"><Icon name={e.icon} size={17} /></span>
                  <span className="text-[13.5px] font-semibold leading-snug text-navy-100">{e.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Pricing (feature matrix) ---------------- */
const PLAN_COLS = [
  { key: 'core', name: 'Core', desc: 'Single outlets moving off paper books.', cta: 'Book A Demo', popular: false },
  { key: 'growth', name: 'Growth', desc: 'High-volume restaurants, courts & canteens.', cta: 'Book A Demo', popular: true },
  { key: 'scale', name: 'Scale', desc: 'Multi-outlet franchise chains & campuses.', cta: 'Contact Sales', popular: false },
];
const PRICE_FEATURES = [
  { name: 'Unlimited Users & Terminals', core: true, growth: true, scale: true },
  { name: 'Cloud + Offline Billing', core: true, growth: true, scale: true },
  { name: 'Inventory Module', core: true, growth: true, scale: true },
  { name: '80+ Live Reports', core: true, growth: true, scale: true },
  { name: 'In-built CRM & Loyalty', core: true, growth: true, scale: true },
  { name: 'Visual KDS Panels', core: false, growth: true, scale: true },
  { name: 'Scan & QR Table Ordering', core: false, growth: true, scale: true },
  { name: 'Anti-Fraud UPI Sync', core: false, growth: true, scale: true },
  { name: 'Smart TV Token Displays', core: false, growth: true, scale: true },
  { name: 'Pine Labs POS Integration', core: false, growth: true, scale: true },
  { name: 'White-Label Customer App', core: false, growth: false, scale: true },
  { name: 'Closed-Loop Student Wallets', core: false, growth: false, scale: true },
  { name: 'On-Demand Feature Engineering', core: false, growth: false, scale: true },
  { name: '24/7 Dedicated Support', core: false, growth: false, scale: true },
];

function Cell({ on }) {
  return on
    ? <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-kaaty-50 text-kaaty-600"><Icon name="check" size={14} strokeWidth={3} /></span>
    : <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-navy-50 text-navy-300"><Icon name="x" size={13} strokeWidth={2.5} /></span>;
}

function Pricing({ compact = false }) {
  const [showAll, setShowAll] = React.useState(false);
  const rows = showAll ? PRICE_FEATURES : PRICE_FEATURES.slice(0, 9);
  return (
    <section id="pricing" className={`border-y border-navy-100 bg-navy-50/40 ${compact ? 'pt-[128px] pb-24 sm:pt-[144px]' : 'py-24 sm:py-28'}`}>
      <Container>
        <SectionHead eyebrow="Plans & pricing" title={<>Pricing that <span className="gradient-text">scales with you</span></>} sub="A clear breakdown of what each plan offers. Prices are tailored to your outlets — book a demo for an exact, localized quote." />
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] border-b border-navy-100">
            <div className="hidden p-6 sm:block"><div className="font-display text-[18px] font-extrabold text-navy">Key Features</div><div className="mt-1 text-[12.5px] text-navy-400">What each plan includes</div></div>
            <div className="p-4 text-center sm:hidden"><div className="font-display text-[14px] font-bold text-navy">Plans</div></div>
            {PLAN_COLS.map((p) => (
              <div key={p.key} className={`relative p-4 text-center sm:p-6 ${p.popular ? 'bg-navy-900 text-white' : ''}`}>
                {p.popular && <span className="absolute right-2 top-2 rounded-full bg-kaaty-500 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-white">Popular</span>}
                <div className={`font-display text-[17px] font-extrabold sm:text-[20px] ${p.popular ? 'text-white' : 'text-navy'}`}>{p.name}</div>
                <div className={`mt-1 hidden text-[11.5px] leading-snug sm:block ${p.popular ? 'text-navy-300' : 'text-navy-400'}`}>{p.desc}</div>
                <a href="#/demo" className={`mt-3 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-[12px] font-bold transition-all ${p.popular ? 'bg-kaaty-500 text-white hover:bg-kaaty-400' : 'bg-white text-kaaty-700 ring-1 ring-inset ring-kaaty-200 hover:bg-kaaty-50'}`}>{p.cta}</a>
              </div>
            ))}
          </div>
          {rows.map((f, i) => (
            <div key={f.name} className={`grid grid-cols-[1.4fr_repeat(3,1fr)] items-center ${i % 2 ? 'bg-navy-50/40' : ''}`}>
              <div className="px-4 py-3.5 text-[12.5px] font-medium text-navy-700 sm:px-6 sm:text-[14px]">{f.name}</div>
              <div className="px-2 py-3.5"><Cell on={f.core} /></div>
              <div className="px-2 py-3.5"><Cell on={f.growth} /></div>
              <div className="px-2 py-3.5"><Cell on={f.scale} /></div>
            </div>
          ))}
          <button onClick={() => setShowAll((s) => !s)} className="flex w-full items-center justify-center gap-1.5 border-t border-navy-100 py-4 text-[13.5px] font-semibold text-kaaty-600 transition-colors hover:bg-kaaty-50">{showAll ? 'Show less' : 'Show all features'} <Icon name={showAll ? 'chevron-up' : 'chevron-down'} size={16} /></button>
        </div>
        <p className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-5 py-3.5 text-center text-[13px] text-navy-500 ring-1 ring-navy-100"><span className="font-semibold text-navy-700">Note:</span> Local pricing may vary based on your region &amp; currency. Contact us for accurate, localized rates.</p>
      </Container>
    </section>
  );
}

function PricingPage() { return (<><Pricing compact /><FAQ /><DemoForm /></>); }

/* ---------------- About ---------------- */
const STATS = [
  { v: '0 sec', l: 'Counter-to-kitchen sync', icon: 'refresh-cw' },
  { v: '80%', l: 'Less queue wait time', icon: 'timer' },
  { v: '100%', l: 'UPI fraud screenshots blocked', icon: 'shield-check' },
  { v: '15+', l: 'Connected products & modules', icon: 'layers' },
];

function AboutContent() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-.025em] text-navy">Built From Real <span className="gradient-text">Campus Problems</span></h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-navy-600">
              <p>Kaaty started inside high-volume college campuses to solve real operational stress: fake payment screenshots, long lines, and communication bottlenecks between the front counter and the kitchen.</p>
              <p>By building a real-time connected platform, we completely eliminated waiting times and secured revenue leakage points.</p>
              <p>Today, that same robust engine powers restaurants, cafés, multi-vendor food courts, hotels and educational institutions across the region — through a single, complete food-tech ecosystem.</p>
            </div>
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 px-5 py-3.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-white"><Icon name="building-2" size={17} /></span>
              <div><div className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">A product by</div><div className="font-display text-[15px] font-bold text-navy">Benvora Groups Private Limited</div></div>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div key={s.l} className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-soft ${i % 2 ? 'sm:mt-6' : ''}`}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name={s.icon} size={20} /></span>
                <div className="mt-4 font-display text-[clamp(1.7rem,3vw,2.2rem)] font-extrabold tracking-tight text-navy">{s.v}</div>
                <div className="mt-1 text-[13.5px] font-medium leading-snug text-navy-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-2 text-center">
          <Eyebrow className="mx-auto">About Kaaty</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">A complete food-tech ecosystem — <span className="gradient-text">not just billing software</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">We connect every part of a food business in real time, from the counter to the kitchen to the customer's phone.</p>
        </Container>
      </section>
      <AboutContent />
      <Testimonials />
      <DemoForm />
    </>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: 'Is Kaaty just a POS, or a full platform?', a: 'Kaaty is a complete food-business operating system. POS billing is one module — alongside KDS, mobile ordering, QR, kiosks, token boards, inventory, CRM, vendor management, analytics and custom development.' },
  { q: 'Can I start with one product and add more later?', a: 'Absolutely. Every module works standalone and snaps into the rest of the platform whenever you’re ready — no migration, no re-training.' },
  { q: 'Does it integrate with Pine Labs and payment gateways?', a: 'Yes. Kaaty has deep native Pine Labs integration plus Easebuzz, Razorpay, PhonePe, Cashfree and Paytm — with real-time, fraud-proof UPI confirmation.' },
  { q: 'Will you build custom features for my business?', a: 'Yes — this is where Kaaty stands apart. Our engineering team builds bespoke workflows, dashboards, websites, white-label apps and campus integrations tailored to you.' },
  { q: 'Can Kaaty manage multiple branches from one screen?', a: 'Yes. The Business App gives owners live multi-outlet aggregation, automated settlements and master menu management across your entire chain.' },
  { q: 'How quickly can we go live?', a: 'Most outlets go live the same week. We handle menu setup, data import and staff training so there’s zero downtime.' },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-24 sm:py-28">
      <Container>
        <SectionHead eyebrow="FAQ" title={<>Questions, <span className="gradient-text">answered</span></>} sub="Everything you need to know before booking a demo." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${isOpen ? 'border-kaaty-200 shadow-soft' : 'border-navy-100'}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6">
                  <span className="font-display text-[15.5px] font-bold text-navy sm:text-[17px]">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-kaaty-500 text-white' : 'bg-navy-50 text-navy-600'}`}><Icon name={isOpen ? 'minus' : 'plus'} size={17} /></span>
                </button>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-[14.5px] leading-relaxed text-navy-500 sm:px-6">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function FinalCTA() {
  const cols = [
    { h: 'Products', links: [['Kaaty POS', '#/products/pos'], ['Kaaty KDS', '#/products/kds'], ['Mobile App', '#/products/mobile-app'], ['Business App', '#/products/business'], ['QR Ordering', '#/products/qr-ordering'], ['Self Kiosk', '#/products/kiosk']] },
    { h: 'Solutions', links: [['Restaurants', '#/solutions/restaurants'], ['Cafes', '#/solutions/cafes'], ['College Canteens', '#/solutions/college-canteens'], ['Cloud Kitchens', '#/solutions/cloud-kitchens'], ['Hotels', '#/solutions/hotels']] },
    { h: 'Company', links: [['About Us', '#/about'], ['Pricing', '#/pricing'], ['Resources', '#/resources'], ['Book a Demo', '#/demo']] },
    { h: 'Integrations', links: [['Pine Labs', '#/integrations/pine-labs'], ['Razorpay', '#/integrations/razorpay'], ['Swiggy', '#/integrations/swiggy'], ['Zomato', '#/integrations/zomato'], ['ONDC', '#/integrations/ondc']] },
  ];
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(255,107,0,.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <Container className="relative">
        <div className="border-b border-white/10 py-20 text-center sm:py-24">
          <Eyebrow className="mx-auto bg-white/10 text-kaaty-300 ring-white/10">Get started</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em]">Ready To Modernize Your <span className="gradient-text">Food Business?</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-navy-300">Book your free custom demo today to minimize order friction, secure your revenue, and transform customer satisfaction.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="#/demo" size="lg" icon="arrow-right">Book Free Demo</Button>
            <Button as="a" href="#/demo" size="lg" variant="ghostLight" icon="phone">Talk To Sales Team</Button>
          </div>
        </div>
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-[14px] leading-relaxed text-navy-400">The complete operating system powering restaurants, cafés, food courts, cloud kitchens, hotels and college canteens.</p>
            <div className="mt-6 space-y-2.5 text-[13.5px] text-navy-300">
              <a href="mailto:support@kaaty.com" className="flex items-center gap-2.5 hover:text-white"><Icon name="mail" size={15} className="text-kaaty-400" /> support@kaaty.com</a>
              <a href="tel:+919000000000" className="flex items-center gap-2.5 hover:text-white"><Icon name="phone" size={15} className="text-kaaty-400" /> +91 90000 00000</a>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              {[['linkedin', '#'], ['instagram', '#'], ['twitter', '#']].map(([ic, h]) => <a key={ic} href={h} className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-navy-200 transition-colors hover:bg-kaaty-500 hover:text-white"><Icon name={ic} size={16} /></a>)}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="font-display text-[13px] font-bold uppercase tracking-wider text-navy-300">{c.h}</h4>
              <ul className="mt-4 space-y-2.5">{c.links.map(([l, href]) => <li key={l}><a href={href} className="text-[14px] text-navy-400 transition-colors hover:text-white">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-navy-400">© {new Date().getFullYear()} <span className="font-semibold text-navy-200">Benvora Groups Private Limited.</span> All rights reserved.</p>
          <div className="flex items-center gap-5 text-[13px] text-navy-400"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Security</a></div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { IntegrationsSection, IndustrySolutions, CustomSolutions, Pricing, PricingPage, AboutContent, AboutPage, FAQ, FinalCTA });
