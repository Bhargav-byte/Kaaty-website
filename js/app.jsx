/* ============================================================
   Kaaty — App root + hash router (v2)
   ============================================================ */

function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="fixed inset-x-0 top-0 z-[70] h-[3px]"><div className="h-full bg-kaaty-500 transition-[width] duration-150" style={{ width: `${p}%` }} /></div>;
}

/* ---------------- Home ---------------- */
function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProductEcosystem />
      <WhyKaaty />
      <IndustrySolutions />
      <IntegrationsSection />
      <CustomSolutions />
      <Testimonials />
      <FAQ />
      <DemoForm />
    </>
  );
}

/* ---------------- Contact / Demo ---------------- */
function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[136px] sm:pt-[152px]">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <Container className="relative pb-2 text-center">
          <Eyebrow className="mx-auto">Book a demo</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">See Kaaty in action for <span className="gradient-text">your business</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] text-navy-500">A live, no-commitment walkthrough tailored to how you operate. Fill the form and our team will reach out.</p>
        </Container>
      </section>
      <DemoForm />
    </>
  );
}

/* ---------------- Router ---------------- */
function useRoute() {
  const [route, setRoute] = React.useState(() => location.hash || '#/');
  React.useEffect(() => {
    const on = () => setRoute(location.hash || '#/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

function renderRoute(route) {
  const path = route.replace(/^#\/?/, '').replace(/\/$/, '');
  const seg = path.split('/').filter(Boolean);
  if (seg.length === 0) return <Home />;
  if (seg[0] === 'pricing') return <PricingPage />;
  if (seg[0] === 'resources') return <ResourcesPage />;
  if (seg[0] === 'about') return <AboutPage />;
  if (seg[0] === 'demo') return <ContactPage />;
  if (seg[0] === 'products' && seg[1]) return <ProductPage slug={seg[1]} />;
  if (seg[0] === 'solutions' && seg[1]) return <SolutionPage slug={seg[1]} />;
  if (seg[0] === 'integrations' && seg[1]) return <IntegrationPage slug={seg[1]} />;
  return <NotFound />;
}

function App() {
  const route = useRoute();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [route]);
  useReveal();
  React.useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
      });
    }, 60);
    return () => clearTimeout(t);
  }, [route]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main key={route}>{renderRoute(route)}</main>
      <FinalCTA />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
