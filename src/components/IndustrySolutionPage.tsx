import React from 'react'
import { Container, Button, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { INDUSTRY_SOLUTIONS, type IndustrySolution } from '../data/industrySolutions'
import { VERIFIED_BRAND_LOGOS } from '../data/proofData'
import { trackEvent } from '../lib/analytics'

export type IndustrySolutionPageProps = {
  slug: string
}

export function IndustrySolutionPage({ slug }: IndustrySolutionPageProps) {
  const sol: IndustrySolution | undefined = INDUSTRY_SOLUTIONS[slug]
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  if (!sol) {
    return (
      <div className="grid min-h-[60vh] place-items-center pt-24 text-center">
        <Container>
          <div className="font-display text-[80px] font-extrabold text-kaaty-500">404</div>
          <p className="mt-2 text-navy-500">Industry solution not found.</p>
          <div className="mt-6">
            <Button as="a" href="/solutions" icon="arrow-left">
              Back to Solutions
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  const demoUrl = `/demo?industry=${sol.slug}&source=solution_page`

  return (
    <div className="pt-24 pb-20 sm:pt-28 sm:pb-28">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <div className="pointer-events-none absolute -top-24 right-[-5%] h-96 w-96 rounded-full bg-kaaty-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-5%] h-96 w-96 rounded-full bg-kaaty-300/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/80 px-3.5 py-1.5 text-[12.5px] font-semibold text-navy-700 backdrop-blur">
              <Icon name={sol.icon} size={15} className="text-kaaty-500" />
              <span>{sol.badge}</span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.1rem,4.2vw,4rem)] font-extrabold leading-[1.08] tracking-[-.03em] text-navy">
              {sol.heroHeadline}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-navy-500">
              {sol.heroSub}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="a" href={demoUrl} size="lg" icon="arrow-right">
                Book a {sol.name} Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const el = document.getElementById('workflow')
                  if (el) {
                    window.scrollTo({
                      top: el.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                See Order Workflow
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Operational Challenges & Solutions ── */}
      <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Operational Reality"
            title={
              <>
                Engineered for the daily hurdles of{' '}
                <span className="gradient-text">{sol.name}</span>
              </>
            }
            sub="Generic billing software fails when volume peaks. Here is how Kaaty eliminates friction across your floor and kitchen."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {sol.painPoints.map((pain, i) => {
              const solution = sol.solutions[i]
              return (
                <div
                  key={i}
                  className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:border-kaaty-200 hover:shadow-lift"
                >
                  <div>
                    {/* Pain Point Banner */}
                    <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
                      <div className="flex items-center gap-2 font-display text-[13.5px] font-bold text-red-700">
                        <Icon name="x" size={15} strokeWidth={2.5} className="text-red-500" />
                        The Problem
                      </div>
                      <h2 className="mt-1 text-[15px] font-bold text-navy-900">{pain.title}</h2>
                      <p className="mt-1 text-[13px] leading-relaxed text-navy-500">{pain.desc}</p>
                    </div>

                    {/* Kaaty Solution */}
                    {solution && (
                      <div className="mt-5">
                        <div className="flex items-center gap-2 font-display text-[13.5px] font-bold text-kaaty-600">
                          <Icon name="check-circle-2" size={15} className="text-emerald-500" />
                          The Kaaty Solution
                        </div>
                        <h3 className="mt-1 text-[15.5px] font-bold text-navy">{solution.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">
                          {solution.desc}
                        </p>

                        <ul className="mt-3.5 space-y-2 border-t border-navy-100 pt-3">
                          {solution.points.map((pt, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-[12.5px] text-navy-600"
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-kaaty-500" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. Operational Workflow ── */}
      <section id="workflow" className="py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Order Lifecycle"
            title={
              <>
                How an order flows through <span className="gradient-text">{sol.name}</span>
              </>
            }
            sub="From initial guest touchpoint to final ticket clearance, every second is optimized for accuracy."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sol.workflow.map((w) => (
              <div
                key={w.step}
                className="relative flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-kaaty-50 font-display text-[16px] font-extrabold text-kaaty-600 ring-1 ring-inset ring-kaaty-200">
                    {w.step}
                  </span>
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-navy-400">
                    Stage 0{w.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[16.5px] font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Recommended Products ── */}
      <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Recommended Stack"
            title={
              <>
                Modular tools for <span className="gradient-text">{sol.name}</span>
              </>
            }
            sub="You don't need a bloated system. Activate only the modules essential to your operational model."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sol.recommendedProducts.map((prod) => (
              <a
                key={prod.slug}
                href={`/products/${prod.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                    <Icon name={prod.icon} size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-[16.5px] font-bold text-navy">
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{prod.why}</p>
                </div>

                <div className="mt-6 border-t border-navy-100 pt-3">
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600 group-hover:text-kaaty-700">
                    View Product Module <Icon name="arrow-right" size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Key Operational Benefits ── */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Measurable Impact"
            title={
              <>
                What your team gains with <span className="gradient-text">Kaaty</span>
              </>
            }
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sol.benefits.map((b, i) => (
              <div key={i} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon name="check" size={18} strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{b.label}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Verified Brand Marquee ── */}
      <section className="border-t border-navy-100 bg-navy-50/30 py-14">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[13.5px] font-semibold uppercase tracking-wider text-navy-400">
              Trusted by operators across India
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {VERIFIED_BRAND_LOGOS.slice(0, 4).map((b) => (
                <div key={b.name} className="flex items-center gap-2 text-navy-600">
                  <Icon name={b.icon} size={18} className="text-kaaty-500" />
                  <span className="font-display text-[14px] font-bold">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. FAQ Accordion ── */}
      <section className="border-t border-navy-100 py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Questions & Answers"
            title={
              <>
                Frequently asked questions for <span className="gradient-text">{sol.name}</span>
              </>
            }
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {sol.faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen ? 'border-kaaty-200 shadow-soft' : 'border-navy-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (!isOpen) trackEvent('faq_expand', { faq_question: f.q })
                      setOpenFaq(isOpen ? null : i)
                    }}
                    className="flex w-full items-center justify-between p-5 text-left font-display text-[15.5px] font-bold text-navy hover:text-kaaty-600 transition-colors"
                  >
                    <span>{f.q}</span>
                    <Icon
                      name="chevron-down"
                      size={18}
                      className={`shrink-0 text-navy-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-kaaty-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-navy-100/70 bg-navy-50/30 p-5 text-[14px] leading-relaxed text-navy-600">
                      {f.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 8. Contextual Bottom CTA ── */}
      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-8 text-center text-white shadow-glow sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-kaaty-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-kaaty-600/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-block rounded-full bg-kaaty-500/20 px-3.5 py-1 text-[12.5px] font-bold uppercase tracking-wider text-kaaty-400">
                {sol.name} Deployment
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold tracking-tight">
                Experience Kaaty configured for your {sol.name.toLowerCase()}
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-navy-300">
                Book a customized live walkthrough. We will demonstrate table routing, KOT pacing,
                and reporting tailored specifically to your food business model.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button as="a" href={demoUrl} size="lg" icon="arrow-right">
                  Schedule Free {sol.name} Demo
                </Button>
                <Button as="a" href="/solutions" size="lg" variant="ghostLight">
                  Browse All Verticals
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
