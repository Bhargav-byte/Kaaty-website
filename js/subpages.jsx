/* ============================================================
   Kaaty — Child page templates: Product, Solution, Integration, Resources
   ============================================================ */

const BRAND_LOGOS = [
  { name: 'Sam\'s Pizza', icon: 'pizza' }, { name: 'United Farmers', icon: 'wheat' },
  { name: 'KG Reddy College', icon: 'graduation-cap' }, { name: 'CMR Group', icon: 'building-2' },
  { name: 'G Fried Chicken', icon: 'drumstick' }, { name: 'MLR Institute', icon: 'school' },
];

/* ---------------- Local accordion ---------------- */
function Accordion({ items, heading = 'Frequently asked questions' }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="FAQ" title={heading} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
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

/* ---------------- Benefits strip ---------------- */
function BenefitStrip({ benefits, heading = 'Why teams love it' }) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="Benefits" title={heading} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-3.5 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name={b.icon} size={20} /></span>
              <span className="font-display text-[14.5px] font-bold leading-tight text-navy">{b.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Mini value grid ---------------- */
function MiniValueGrid({ heading = 'Everything else, included', items }) {
  const data = items || [
    { icon: 'shield-check', title: 'Anti-fraud UPI', desc: 'Real-time payment confirmations end fake-screenshot scams.' },
    { icon: 'printer', title: 'Hardware ready', desc: 'Pine Labs, thermal & kitchen printers work out of the box.' },
    { icon: 'refresh-cw', title: 'Always in sync', desc: 'Counter, kitchen and customer apps update in real time.' },
    { icon: 'headphones', title: 'Dedicated support', desc: 'Onboarding, data import and a team that picks up the phone.' },
  ];
  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="More than a POS" title={heading} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((c) => (
            <div key={c.title} className="reveal rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name={c.icon} size={20} /></span>
              <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Product page ---------------- */
function ProductPage({ slug }) {
  const d = PRODUCTS[slug];
  if (!d) return <NotFound />;
  return (
    <>
      <SubHero eyebrow={d.group} title={d.title} sub={d.sub} visual={d.visual} />
      <LogoBand heading="Powering food businesses & institutions everywhere" logos={BRAND_LOGOS} />
      <FeatureRows rows={d.features} />
      <BenefitStrip benefits={d.benefits} heading={`Built into ${d.name}`} />
      <Testimonials />
      <Accordion items={SHARED_BENEFIT_FAQS} />
      <DemoForm />
    </>
  );
}

/* ---------------- Solution page ---------------- */
function SolutionPage({ slug }) {
  const d = SOLUTIONS[slug];
  if (!d) return <NotFound />;
  return (
    <>
      <SubHero eyebrow={d.name} title={d.title} sub={d.sub} visual={d.visual} />
      <LogoBand heading={`Trusted by leading ${d.name.toLowerCase()}`} logos={BRAND_LOGOS} />
      <FeatureRows rows={d.rows} />
      <MiniValueGrid heading={`Built for ${d.name}, ready for everything`} />
      <Testimonials />
      <DemoForm />
    </>
  );
}

/* ---------------- Integration page ---------------- */
function IntegrationPage({ slug }) {
  const d = INTEGRATION_PAGES[slug];
  if (!d) return <NotFound />;
  const related = INTEGRATION_GROUPS.find((g) => g.label === d.category).items.filter((s) => s !== slug);
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100"><span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />{d.category} Integration</span>
            <div className="mx-auto mt-7 grid h-20 w-20 place-items-center rounded-3xl text-white shadow-lift" style={{ background: d.dot }}><Icon name={d.icon} size={36} /></div>
            <h1 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">{d.title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-navy-500">{d.sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">Book a Demo</Button>
              <Button as="a" href="#/integrations/easebuzz" size="lg" variant="outline">All Integrations</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {d.what.map((w, i) => (
            <div key={i} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name="check" size={20} strokeWidth={2.6} /></span>
              <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700">{w}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow="Get connected" title={<>Live in <span className="gradient-text">three simple steps</span></>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[['Connect', `Link your ${d.name} account inside Kaaty in a few clicks.`], ['Configure', 'Map outlets, payment modes or menus — we guide you through it.'], ['Go live', 'Start transacting with everything reconciled automatically.']].map(([t, dd], i) => (
              <div key={t} className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
                <span className="font-display text-[40px] font-extrabold leading-none text-kaaty-200">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[18px] font-bold text-navy">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{dd}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-100 bg-navy-50/40 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-[22px] font-extrabold text-navy">More {d.category.toLowerCase()} integrations</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((s) => (
                <a key={s} href={`#/integrations/${s}`} className="flex items-center gap-2.5 rounded-full border border-navy-100 bg-white px-5 py-3 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="grid h-8 w-8 place-items-center rounded-full text-white" style={{ background: INTEGRATION_PAGES[s].dot }}><Icon name={INTEGRATION_PAGES[s].icon} size={15} /></span>
                  <span className="text-[14.5px] font-semibold text-navy-800">{INTEGRATION_PAGES[s].name}</span>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}
      <DemoForm />
    </>
  );
}

/* ---------------- Resources ---------------- */
const RESOURCE_CARDS = [
  { icon: 'book-open', t: 'Documentation', d: 'Setup guides, API references and how-tos.' },
  { icon: 'award', t: 'Case Studies', d: 'Real deployments and the results they drove.' },
  { icon: 'newspaper', t: 'Blog', d: 'Product news and F&B operations playbooks.' },
  { icon: 'life-buoy', t: 'Help Center', d: 'Answers, troubleshooting and best practices.' },
  { icon: 'code', t: 'API & Webhooks', d: 'Build on top of Kaaty with our developer tools.' },
  { icon: 'users', t: 'Community', d: 'Join other operators scaling with Kaaty.' },
];

function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-6 text-center">
          <Eyebrow className="mx-auto">Resources</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">Resources to help you <span className="gradient-text">grow</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">Everything you need to get the most out of Kaaty — from first setup to scaling your chain.</p>
        </Container>
      </section>
      <Container className="pb-24 pt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CARDS.map((c) => (
            <a key={c.t} href="#/demo" className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"><Icon name={c.icon} size={22} /></span>
              <h3 className="mt-5 font-display text-[18px] font-bold text-navy">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{c.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600">Explore <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
            </a>
          ))}
        </div>
      </Container>
      <DemoForm />
    </>
  );
}

function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center pt-24 text-center">
      <Container>
        <div className="font-display text-[80px] font-extrabold text-kaaty-500">404</div>
        <p className="mt-2 text-navy-500">That page doesn't exist yet.</p>
        <div className="mt-6"><Button as="a" href="#/" icon="arrow-left">Back home</Button></div>
      </Container>
    </section>
  );
}

Object.assign(window, { ProductPage, SolutionPage, IntegrationPage, ResourcesPage, NotFound, MiniValueGrid, Accordion, BenefitStrip });
