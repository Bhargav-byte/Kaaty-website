/* ============================================================
   Kaaty — Shared content blocks (reused across home + child pages)
   ============================================================ */

/* ---------------- Brand logo band ---------------- */
function LogoBand({ heading, logos }) {
  return (
    <section className="py-14">
      <Container>
        {heading && <p className="mb-9 text-center text-[13px] font-semibold uppercase tracking-[.18em] text-navy-400">{heading}</p>}
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div key={l.name} className="group flex items-center justify-center gap-2.5 grayscale transition-all duration-300 hover:grayscale-0">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-100 text-navy-500 transition-colors group-hover:bg-kaaty-500 group-hover:text-white"><Icon name={l.icon} size={17} /></span>
              <span className="font-display text-[13.5px] font-bold leading-tight text-navy-400 transition-colors group-hover:text-navy">{l.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Floating visual (themed mock cluster) ---------------- */
function HeroVisual({ kind = 'pos', tone = 'kaaty' }) {
  return (
    <div className="relative mx-auto flex min-h-[380px] max-w-[460px] items-center justify-center sm:min-h-[420px]">
      <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-kaaty-100/70 to-kaaty-50/30 blur-2xl" />
      <div className="relative z-10 w-full">
        <MockPanel kind={kind} />
      </div>
      <div className="absolute -right-3 -top-4 z-20 animate-floaty rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600"><Icon name="trending-up" size={16} /></span>
          <div><div className="font-display text-[14px] font-extrabold leading-none text-navy">+24%</div><div className="text-[10.5px] text-navy-400">avg. ticket</div></div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-3 z-20 animate-floaty2 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-lift">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-kaaty-50 text-kaaty-600"><Icon name="zap" size={16} /></span>
          <div><div className="font-display text-[14px] font-extrabold leading-none text-navy">Real-time</div><div className="text-[10.5px] text-navy-400">counter ↔ kitchen</div></div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Sub-page hero ---------------- */
function SubHero({ eyebrow, title, sub, cta = 'Take a Free Demo', visual = 'pos' }) {
  return (
    <section className="relative overflow-hidden pt-[120px] sm:pt-[136px]">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[460px] w-[460px] rounded-full bg-kaaty-500/10 blur-3xl" />
      <Container className="relative pb-16 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kaaty-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[.12em] text-kaaty-700 ring-1 ring-inset ring-kaaty-100">
              <span className="h-1.5 w-1.5 rounded-full bg-kaaty-500" />{eyebrow}
            </span>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-.03em] text-navy">{title}</h1>
            <p className="mt-5 max-w-lg text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-navy-500">{sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">{cta}</Button>
              <Button as="a" href="#/pricing" size="lg" variant="outline">View Pricing</Button>
            </div>
          </div>
          <div><HeroVisual kind={visual} /></div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Alternating feature rows ---------------- */
function FeatureRows({ rows }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="space-y-20 sm:space-y-24">
          {rows.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={r.title} className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? 'lg:order-2' : ''}>
                  <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold leading-[1.08] tracking-[-.02em] text-navy">{r.title}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-navy-500">{r.desc}</p>
                  <ul className="mt-6 space-y-3.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-kaaty-50 text-kaaty-600"><Icon name="check" size={14} strokeWidth={3} /></span>
                        <span className="text-[14.5px] leading-relaxed text-navy-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={flip ? 'lg:order-1' : ''}><MockPanel kind={r.mock} /></div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { brand: 'Sam\'s Pizza', icon: 'pizza', quote: 'Kaaty has been our POS across 90+ outlets for over two years. For a large chain like us, it\'s the single data bridge between every outlet and the owner. Kudos to the team!', name: 'Jolly Christian', role: 'General Manager' },
  { brand: 'United Farmers', icon: 'wheat', quote: 'Kaaty helps me manage inventory levels and food costs. I track sales and expenses in real time, which helps me make informed purchasing decisions and reduce waste across the board.', name: 'Jaipratap Singh', role: 'Managing Director' },
];

function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <h2 className="text-center font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold tracking-[-.02em] text-navy">
          Real Restaurants · Real Results · <span className="gradient-text">Real Stories</span>
        </h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="reveal rounded-2xl border border-navy-100 bg-white p-7 shadow-soft sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 text-kaaty-600 ring-1 ring-inset ring-kaaty-100"><Icon name={t.icon} size={20} /></span>
                <span className="font-display text-[16px] font-extrabold text-navy">{t.brand}</span>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-navy-600">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-100 text-navy-500"><Icon name="user" size={20} /></span>
                <span><span className="block font-display text-[14.5px] font-bold text-navy">{t.name}</span><span className="block text-[13px] text-navy-400">{t.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Schedule a free demo (form) ---------------- */
function DemoForm() {
  const [form, setForm] = React.useState({ name: '', business: '', phone: '', email: '', type: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState({});
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 1;
    if (!form.business.trim()) er.business = 1;
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) er.phone = 1;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 1;
    if (!form.type) er.type = 1;
    setErr(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  const field = (k, label, type = 'text', ph = '') => (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">{label} <span className="text-kaaty-500">*</span></span>
      <input type={type} value={form[k]} onChange={set(k)} placeholder={ph}
        className={`h-11 w-full rounded-xl border bg-navy-50/50 px-3.5 text-[14px] text-navy outline-none transition-all placeholder:text-navy-300 focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10 ${err[k] ? 'border-red-300 ring-2 ring-red-100' : 'border-navy-200'}`} />
    </label>
  );
  const BTYPES = ['Restaurant', 'Café / QSR', 'Food Court', 'Cloud Kitchen', 'College Canteen', 'Hotel', 'Bakery', 'Ice Cream Parlour', 'Other'];
  return (
    <section id="demo-form" className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-.025em] text-navy">Schedule a <span className="gradient-text">free demo</span></h2>
            <p className="mt-3 text-[15.5px] text-navy-500">Get in touch with our team to clarify your queries and see Kaaty in action for your outlet.</p>
            {sent ? (
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"><Icon name="check" size={24} strokeWidth={3} /></span>
                <div><div className="font-display text-[17px] font-bold text-navy">Thanks, {form.name.split(' ')[0]}!</div><div className="text-[14px] text-navy-600">Our team will reach out shortly to schedule your demo.</div></div>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">{field('name', 'Name', 'text', 'Your full name')}{field('business', 'Business Name', 'text', 'Outlet / brand name')}</div>
                <div className="grid gap-4 sm:grid-cols-2">{field('phone', 'Phone', 'tel', '+91 …')}{field('email', 'Email', 'email', 'you@business.com')}</div>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">Business Type <span className="text-kaaty-500">*</span></span>
                  <select value={form.type} onChange={set('type')} className={`h-11 w-full rounded-xl border bg-navy-50/50 px-3 text-[14px] text-navy outline-none transition-all focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10 ${err.type ? 'border-red-300 ring-2 ring-red-100' : 'border-navy-200'}`}>
                    <option value="">Select your business type…</option>
                    {BTYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-navy-700">Message</span>
                  <textarea value={form.message} onChange={set('message')} rows={3} placeholder="Tell us a little about what you need…" className="w-full rounded-xl border border-navy-200 bg-navy-50/50 px-3.5 py-2.5 text-[14px] text-navy outline-none transition-all placeholder:text-navy-300 focus:border-kaaty-400 focus:bg-white focus:ring-4 focus:ring-kaaty-500/10" />
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 text-[12.5px] text-navy-400"><span className="grid h-5 w-5 place-items-center rounded bg-navy-100"><Icon name="shield-check" size={13} className="text-navy-500" /></span> Protected — we never share your details.</div>
                <Button as="button" size="lg" icon="arrow-right">Submit</Button>
              </form>
            )}
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-navy-100 bg-white p-8 shadow-soft">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-kaaty-100/70 blur-2xl" />
              <div className="relative space-y-4">
                {[['phone-call', 'Talk to a specialist', 'Walkthrough tailored to your outlet type'], ['calendar', 'Pick a time that works', 'Live 1:1 demo, no commitment'], ['rocket', 'Go live fast', 'Code-free onboarding & data import']].map(([ic, h, d]) => (
                  <div key={h} className="flex items-start gap-3.5 rounded-2xl bg-navy-50/60 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kaaty-500 text-white"><Icon name={ic} size={20} /></span>
                    <div><div className="font-display text-[15px] font-bold text-navy">{h}</div><div className="text-[13px] text-navy-500">{d}</div></div>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl bg-navy-900 p-5 text-white">
                  <div><div className="text-[12px] text-navy-300">Prefer to call?</div><div className="font-display text-[18px] font-extrabold">+91 90000 00000</div></div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-kaaty-500"><Icon name="phone" size={18} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { LogoBand, HeroVisual, SubHero, FeatureRows, Testimonials, DemoForm });
