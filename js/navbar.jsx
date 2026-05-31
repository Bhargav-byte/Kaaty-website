/* ============================================================
   Kaaty — Enterprise navbar + grouped mega menus (v2)
   ============================================================ */

const MENU_PRODUCTS = [
  { group: 'Restaurant Operations', items: [
    { name: 'Kaaty POS', slug: 'pos', icon: 'monitor', desc: 'Peak-hour billing engine.' },
    { name: 'Kaaty KDS', slug: 'kds', icon: 'chef-hat', desc: 'Visual kitchen display.' },
    { name: 'Token Board', slug: 'token-board', icon: 'tv', desc: 'Live status displays.' },
  ] },
  { group: 'Customer Experience', items: [
    { name: 'Mobile App', slug: 'mobile-app', icon: 'smartphone', desc: 'Branded ordering app.' },
    { name: 'QR Ordering', slug: 'qr-ordering', icon: 'qr-code', desc: 'Scan-to-order dining.' },
    { name: 'Self Ordering Kiosk', slug: 'kiosk', icon: 'scan-line', desc: 'Line-busting terminals.' },
  ] },
  { group: 'Business Management', items: [
    { name: 'Business App', slug: 'business', icon: 'layout-dashboard', desc: 'Owner command centre.' },
    { name: 'Vendor App', slug: 'vendor', icon: 'store', desc: 'Mobile POS for stalls.' },
    { name: 'Inventory Management', slug: 'business', icon: 'package', desc: 'Stock & costing control.' },
  ] },
];

const MENU_SOLUTIONS = [
  { name: 'College Canteens', slug: 'college-canteens', icon: 'graduation-cap' },
  { name: 'Restaurants', slug: 'restaurants', icon: 'utensils-crossed' },
  { name: 'Cafes', slug: 'cafes', icon: 'coffee' },
  { name: 'Food Courts', slug: 'food-courts', icon: 'store' },
  { name: 'Cloud Kitchens', slug: 'cloud-kitchens', icon: 'cloud' },
  { name: 'Hotels', slug: 'hotels', icon: 'bed-double' },
  { name: 'Bakeries', slug: 'bakeries', icon: 'croissant' },
  { name: 'Ice Cream Parlours', slug: 'ice-cream-parlours', icon: 'ice-cream-cone' },
];

const MENU_INTEGRATIONS = [
  { group: 'Payments', icon: 'credit-card', items: [{ name: 'Easebuzz', slug: 'easebuzz' }, { name: 'Razorpay', slug: 'razorpay' }, { name: 'PhonePe', slug: 'phonepe' }] },
  { group: 'Hardware', icon: 'printer', items: [{ name: 'Pine Labs', slug: 'pine-labs' }, { name: 'Thermal Printers', slug: 'thermal-printers' }] },
  { group: 'Marketplaces', icon: 'shopping-bag', items: [{ name: 'Swiggy', slug: 'swiggy' }, { name: 'Zomato', slug: 'zomato' }, { name: 'ONDC', slug: 'ondc' }] },
];

const MENU_RESOURCES = [
  { name: 'Documentation', icon: 'book-open', desc: 'Guides, setup & API references.' },
  { name: 'Case Studies', icon: 'award', desc: 'Real deployments & outcomes.' },
  { name: 'Blog', icon: 'newspaper', desc: 'Product news & F&B playbooks.' },
];

function ItemLink({ href, icon, name, desc }) {
  return (
    <a href={href} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-kaaty-50">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={icon} size={17} /></span>
      <span className="min-w-0"><span className="block text-[13.5px] font-semibold text-navy">{name}</span>{desc && <span className="mt-0.5 block text-[12px] leading-snug text-navy-500">{desc}</span>}</span>
    </a>
  );
}

function ProductsMenu() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {MENU_PRODUCTS.map((col) => (
        <div key={col.group}>
          <div className="mb-1.5 px-2.5 text-[11px] font-bold uppercase tracking-wider text-navy-400">{col.group}</div>
          <div className="flex flex-col gap-0.5">
            {col.items.map((it) => <ItemLink key={it.name} href={`#/products/${it.slug}`} {...it} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="grid grid-cols-2 gap-1 p-3">
      {MENU_SOLUTIONS.map((s) => (
        <a key={s.slug} href={`#/solutions/${s.slug}`} className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-kaaty-50">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={s.icon} size={16} /></span>
          <span className="text-[14px] font-medium text-navy-800">{s.name}</span>
        </a>
      ))}
    </div>
  );
}

function IntegrationsMenu() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {MENU_INTEGRATIONS.map((c) => (
        <div key={c.group}>
          <div className="mb-2 flex items-center gap-2 px-1"><Icon name={c.icon} size={15} className="text-kaaty-500" /><span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">{c.group}</span></div>
          <ul className="space-y-0.5">
            {c.items.map((i) => <li key={i.slug}><a href={`#/integrations/${i.slug}`} className="block rounded-lg px-2.5 py-1.5 text-[13.5px] font-medium text-navy-700 transition-colors hover:bg-kaaty-50 hover:text-kaaty-700">{i.name}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="flex flex-col gap-1 p-3">
      {MENU_RESOURCES.map((r) => <ItemLink key={r.name} href="#/resources" {...r} />)}
    </div>
  );
}

const MENUS = {
  Products: { width: 'w-[720px]', render: ProductsMenu },
  Solutions: { width: 'w-[520px]', render: SolutionsMenu },
  Integrations: { width: 'w-[600px]', render: IntegrationsMenu },
  Resources: { width: 'w-[360px]', render: ResourcesMenu },
};

function Logo({ light = false }) {
  return (
    <a href="#/" className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-kaaty-500 shadow-[0_8px_18px_-6px_rgba(255,107,0,.7)]"><Icon name="utensils" size={19} className="text-white" strokeWidth={2.4} /></span>
      <span className={`font-display text-[22px] font-extrabold tracking-[-.03em] ${light ? 'text-white' : 'text-navy'}`}>Kaaty</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  const [mAcc, setMAcc] = React.useState(null);
  const closeT = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);
  React.useEffect(() => {
    const close = () => { setMobile(false); setOpen(null); };
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  const enter = (k) => { clearTimeout(closeT.current); setOpen(k); };
  const leave = () => { closeT.current = setTimeout(() => setOpen(null), 120); };
  const dropdowns = ['Products', 'Solutions', 'Integrations'];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`border-b transition-all duration-300 ${scrolled ? 'border-navy-200/70 bg-white/85 backdrop-blur-xl shadow-[0_6px_24px_-16px_rgba(16,24,40,.3)]' : 'border-transparent bg-transparent'}`}>
        <Container className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" onMouseLeave={leave}>
            {dropdowns.map((k) => (
              <div key={k} onMouseEnter={() => enter(k)} className="relative">
                <button className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${open === k ? 'text-kaaty-600' : 'text-navy-800 hover:text-kaaty-600'}`}>
                  {k}<Icon name="chevron-down" size={15} className={`transition-transform duration-200 ${open === k ? 'rotate-180 text-kaaty-500' : 'text-navy-400'}`} />
                </button>
              </div>
            ))}
            <a href="#/pricing" className="rounded-lg px-3.5 py-2 text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-kaaty-600">Pricing</a>
            <div onMouseEnter={() => enter('Resources')} className="relative">
              <button className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-semibold transition-colors ${open === 'Resources' ? 'text-kaaty-600' : 'text-navy-800 hover:text-kaaty-600'}`}>
                Resources<Icon name="chevron-down" size={15} className={`transition-transform duration-200 ${open === 'Resources' ? 'rotate-180 text-kaaty-500' : 'text-navy-400'}`} />
              </button>
            </div>
            <a href="#/about" className="rounded-lg px-3.5 py-2 text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-kaaty-600">About Us</a>

            {open && MENUS[open] && (
              <div onMouseEnter={() => enter(open)} className={`menu-enter absolute left-1/2 top-[58px] -translate-x-1/2 ${MENUS[open].width} max-w-[94vw] overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lift`}>
                {React.createElement(MENUS[open].render)}
                <div className="flex items-center justify-between gap-3 border-t border-navy-100 bg-navy-50/60 px-5 py-3">
                  <span className="text-[12.5px] font-medium text-navy-500">The complete operating system for food businesses.</span>
                  <a href="#/demo" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-kaaty-600 hover:text-kaaty-700">Book a demo <Icon name="arrow-right" size={14} /></a>
                </div>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href="#/demo" className="hidden text-[14.5px] font-semibold text-navy-800 transition-colors hover:text-kaaty-600 lg:block">Sign in</a>
            <Button as="a" href="#/demo" size="md" icon="arrow-right" className="hidden sm:inline-flex">Book Demo</Button>
            <button onClick={() => setMobile(true)} className="grid h-10 w-10 place-items-center rounded-xl text-navy ring-1 ring-inset ring-navy-200 lg:hidden" aria-label="Open menu"><Icon name="menu" size={20} /></button>
          </div>
        </Container>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm" onClick={() => setMobile(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
              <Logo />
              <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-xl text-navy ring-1 ring-inset ring-navy-200"><Icon name="x" size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {['Products', 'Solutions', 'Integrations', 'Resources'].map((k) => (
                <div key={k} className="border-b border-navy-100">
                  <button onClick={() => setMAcc(mAcc === k ? null : k)} className="flex w-full items-center justify-between py-3.5 text-[16px] font-bold text-navy">{k}<Icon name={mAcc === k ? 'minus' : 'plus'} size={18} className="text-kaaty-500" /></button>
                  {mAcc === k && (
                    <div className="pb-3">
                      {k === 'Products' && MENU_PRODUCTS.map((col) => <div key={col.group} className="mb-2"><div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-400">{col.group}</div>{col.items.map((it) => <a key={it.name} href={`#/products/${it.slug}`} className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"><Icon name={it.icon} size={16} className="text-kaaty-500" />{it.name}</a>)}</div>)}
                      {k === 'Solutions' && MENU_SOLUTIONS.map((s) => <a key={s.slug} href={`#/solutions/${s.slug}`} className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"><Icon name={s.icon} size={16} className="text-kaaty-500" />{s.name}</a>)}
                      {k === 'Integrations' && MENU_INTEGRATIONS.map((c) => <div key={c.group} className="px-2 py-1.5"><div className="text-[11px] font-bold uppercase tracking-wider text-navy-400">{c.group}</div><div className="mt-1 flex flex-wrap gap-1.5">{c.items.map((i) => <a key={i.slug} href={`#/integrations/${i.slug}`} className="rounded-md bg-navy-50 px-2 py-1 text-[12.5px] text-navy-700">{i.name}</a>)}</div></div>)}
                      {k === 'Resources' && MENU_RESOURCES.map((r) => <a key={r.name} href="#/resources" className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-navy-700"><Icon name={r.icon} size={16} className="text-kaaty-500" />{r.name}</a>)}
                    </div>
                  )}
                </div>
              ))}
              <a href="#/pricing" className="block border-b border-navy-100 py-3.5 text-[16px] font-bold text-navy">Pricing</a>
              <a href="#/about" className="block border-b border-navy-100 py-3.5 text-[16px] font-bold text-navy">About Us</a>
            </div>
            <div className="border-t border-navy-100 p-4"><Button as="a" href="#/demo" size="lg" icon="arrow-right" className="w-full">Book Demo</Button></div>
          </div>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Navbar, Logo });
