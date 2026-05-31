/* ============================================================
   Kaaty — Hero with live multi-device dashboard mockup
   ============================================================ */

function StatusDot({ color }) {
  return <span className="relative flex h-2 w-2"><span className={`absolute inline-flex h-full w-full animate-pulseDot rounded-full ${color}`} /><span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} /></span>;
}

/* ---- POS tablet ---- */
function POSDevice() {
  const rows = [
    { n: 'Chicken Biryani', q: 2, p: '₹360' },
    { n: 'Paneer Tikka', q: 1, p: '₹240' },
    { n: 'Masala Dosa', q: 3, p: '₹270' },
    { n: 'Cold Coffee', q: 2, p: '₹180' },
  ];
  return (
    <div className="w-[340px] overflow-hidden rounded-[22px] border border-navy-200/70 bg-white shadow-lift ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-navy-100 bg-navy-50/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-kaaty-500 text-white"><Icon name="monitor" size={14} /></span>
          <span className="font-display text-[13px] font-bold text-navy">Kaaty POS</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10.5px] font-bold text-emerald-600"><StatusDot color="bg-emerald-500" /> Live</span>
      </div>
      <div className="px-4 py-3">
        <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-navy-400">
          <span>Table 7 · Dine-in</span><span>Order #1042</span>
        </div>
        <div className="space-y-1.5">
          {rows.map((r) => (
            <div key={r.n} className="flex items-center justify-between rounded-lg bg-navy-50/60 px-3 py-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white text-[11px] font-bold text-kaaty-600 ring-1 ring-navy-100">{r.q}</span>
                <span className="text-[13px] font-medium text-navy-800">{r.n}</span>
              </div>
              <span className="text-[13px] font-semibold text-navy">{r.p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-navy-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-medium text-navy-500">Total</span>
          <span className="font-display text-[18px] font-extrabold text-navy">₹1,050</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button className="rounded-lg bg-navy-50 py-2 text-[11.5px] font-semibold text-navy-700">Hold</button>
          <button className="rounded-lg bg-navy-50 py-2 text-[11.5px] font-semibold text-navy-700">Split</button>
          <button className="rounded-lg bg-kaaty-500 py-2 text-[11.5px] font-bold text-white">Pay UPI</button>
        </div>
      </div>
    </div>
  );
}

/* ---- KDS panel ---- */
function KDSDevice() {
  const tickets = [
    { id: '#1042', t: '02:14', items: ['2× Biryani', '1× Paneer Tikka'], state: 'Preparing', tone: 'amber' },
    { id: '#1041', t: '00:38', items: ['3× Masala Dosa'], state: 'Ready', tone: 'emerald' },
  ];
  const tones = { amber: 'bg-amber-100 text-amber-700', emerald: 'bg-emerald-100 text-emerald-700' };
  return (
    <div className="w-[256px] overflow-hidden rounded-[18px] border border-navy-800 bg-navy-900 shadow-lift">
      <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-kaaty-500 text-white"><Icon name="chef-hat" size={13} /></span>
          <span className="font-display text-[12px] font-bold text-white">Kitchen Display</span>
        </div>
        <span className="text-[10px] font-bold text-navy-300">STATION 1</span>
      </div>
      <div className="space-y-2 p-3">
        {tickets.map((t) => (
          <div key={t.id} className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-[13px] font-bold text-white">{t.id}</span>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${tones[t.tone]}`}>{t.state}</span>
            </div>
            <ul className="space-y-1">
              {t.items.map((i) => <li key={i} className="flex items-center gap-1.5 text-[12px] text-navy-200"><Icon name="dot" size={14} className="text-kaaty-400" />{i}</li>)}
            </ul>
            <div className="mt-2 flex items-center gap-1 text-[10.5px] font-semibold text-navy-400"><Icon name="timer" size={12} /> {t.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Phone tracker ---- */
function PhoneDevice() {
  return (
    <div className="w-[176px] overflow-hidden rounded-[28px] border-[5px] border-navy-900 bg-white shadow-lift">
      <div className="relative bg-gradient-to-b from-kaaty-500 to-kaaty-600 px-4 pb-6 pt-5 text-white">
        <div className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-white/40" />
        <div className="mt-1 text-[10.5px] font-medium text-white/80">Order ready in</div>
        <div className="font-display text-[26px] font-extrabold leading-none">04:30</div>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20"><Icon name="bell" size={13} /></span>
          <span className="text-[11px] font-semibold">Token #1042</span>
        </div>
      </div>
      <div className="space-y-2.5 px-4 py-4">
        {[['Order placed', true], ['Preparing', true], ['Ready for pickup', false]].map(([s, done], i) => (
          <div key={s} className="flex items-center gap-2.5">
            <span className={`grid h-5 w-5 place-items-center rounded-full ${done ? 'bg-emerald-500 text-white' : 'bg-navy-100 text-navy-400'}`}><Icon name={done ? 'check' : 'circle'} size={12} /></span>
            <span className={`text-[11.5px] font-medium ${done ? 'text-navy-800' : 'text-navy-400'}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] sm:pt-[132px]">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-kaaty-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8%] top-40 h-[380px] w-[380px] rounded-full bg-kaaty-300/10 blur-3xl" />

      <Container className="relative pb-20 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-8">
          {/* left copy */}
          <div className="max-w-xl">
            <div className="reveal in inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-semibold text-navy-700 backdrop-blur">
              <span className="flex h-5 items-center gap-1 rounded-full bg-kaaty-500 px-2 text-[10.5px] font-bold uppercase tracking-wide text-white">New</span>
              The food-business OS
              <Icon name="arrow-right" size={13} className="text-kaaty-500" />
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.6vw,4.1rem)] font-extrabold leading-[1.02] tracking-[-.035em] text-navy">
              The Complete <span className="gradient-text">Operating System</span> For Modern Food Businesses
            </h1>

            <p className="mt-6 max-w-lg text-[clamp(1.02rem,1.5vw,1.2rem)] leading-relaxed text-navy-500">
              From billing and kitchen operations to customer ordering, QR menus, kiosks, vendor management and analytics — Kaaty brings everything together in one unified platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#/demo" size="lg" icon="arrow-right">Book Free Demo</Button>
              <Button size="lg" variant="outline" icon="play" onClick={() => { const el = document.getElementById('products'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' }); }}>Watch Product Tour</Button>
            </div>

            <div className="mt-8 flex items-start gap-2.5 text-[13.5px] text-navy-500">
              <Icon name="check-circle-2" size={18} className="mt-0.5 shrink-0 text-kaaty-500" />
              <span>One unified platform for <span className="font-semibold text-navy-700">Restaurants, Cafés, Food Courts, Cloud Kitchens,</span> and <span className="font-semibold text-navy-700">College Canteens.</span></span>
            </div>
          </div>

          {/* right mockup */}
          <div className="relative">
            <div className="relative mx-auto flex min-h-[440px] max-w-[520px] items-center justify-center">
              <div className="absolute right-2 top-2 animate-floaty">
                <POSDevice />
              </div>
              <div className="absolute bottom-4 left-0 animate-floaty2">
                <KDSDevice />
              </div>
              <div className="absolute bottom-0 right-6 z-10 animate-floaty" style={{ animationDelay: '1.2s' }}>
                <PhoneDevice />
              </div>
              {/* sync badge */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 rounded-full bg-navy-900 px-3.5 py-2 text-white shadow-lift">
                  <Icon name="refresh-cw" size={14} className="text-kaaty-400" />
                  <span className="text-[11.5px] font-bold">Synced · real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, StatusDot });
