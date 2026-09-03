import { Container, Button, SectionHead, Eyebrow } from './Primitives'
import { Icon } from './Icon'
import { INDUSTRY_SOLUTIONS } from '../data/industrySolutions'
import {
  MATRIX_COLUMNS,
  INDUSTRY_CAPABILITIES_MAP,
  INDUSTRY_VALUE_PROPS,
} from '../data/productIndustries'
import { VERIFIED_BRAND_LOGOS } from '../data/proofData'
import { IndustrySolutionCard } from './IndustrySolutionCard'
import { trackEvent } from '../lib/analytics'

export function SolutionsHubPage() {
  const solutions = Object.values(INDUSTRY_SOLUTIONS)

  return (
    <div className="pt-24 pb-20 sm:pt-28 sm:pb-28">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade" />
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-kaaty-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-navy-500/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Industry Solutions</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-.03em] text-navy">
              Purpose-Built For Every <span className="gradient-text">Food Business Model</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-navy-500">
              From multi-station dining rooms to high-rush espresso bars, multi-brand cloud
              kitchens, and institutional dining halls — discover how Kaaty configures to your exact
              operational workflow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="a" href="/demo?source=solutions_hub" size="lg" icon="arrow-right">
                Book a Tailored Demo
              </Button>
              <Button as="a" href="/pricing" size="lg" variant="outline">
                Compare Plans
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Primary UX: Industry Cards Grid ── */}
      <section id="industry-cards" className="py-12 sm:py-16">
        <Container>
          <SectionHead
            eyebrow="Industry Solutions"
            title={
              <>
                Built for <span className="gradient-text">Every Food Business</span>
              </>
            }
            sub="Select your business model to explore tailored workflows, station configurations, and recommended product modules."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((sol) => (
              <IndustrySolutionCard
                key={sol.slug}
                slug={sol.slug}
                name={sol.name}
                badge={sol.badge}
                icon={sol.icon}
                valueProp={INDUSTRY_VALUE_PROPS[sol.slug] || sol.tagline}
                capabilities={INDUSTRY_CAPABILITIES_MAP[sol.slug] || []}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Secondary UX: Detailed Comparison Matrix ── */}
      <section
        id="industry-comparison"
        className="border-y border-navy-100 bg-navy-50/40 py-20 sm:py-24"
      >
        <Container>
          <SectionHead
            eyebrow="Capability Breakdown"
            title={
              <>
                Compare Kaaty by <span className="gradient-text">Industry</span>
              </>
            }
            sub="See which core modules power each food business model — from single-counter billing to multi-vendor campus dining."
          />

          {/* Mobile scroll hint */}
          <div className="mt-8 flex items-center justify-end gap-1.5 text-[12px] font-medium text-navy-400 sm:hidden">
            <Icon name="arrow-right" size={13} className="text-kaaty-500 animate-pulse" />
            <span>Scroll horizontally to compare modules</span>
          </div>

          <div className="mt-4 sm:mt-12 relative rounded-2xl border border-navy-200/80 bg-white shadow-soft overflow-hidden">
            <div
              className="overflow-x-auto touch-pan-x"
              onScroll={() => {
                trackEvent('industry_comparison_interaction', {
                  cta_text: 'Table Horizontal Scroll',
                })
              }}
            >
              <table
                className="w-full min-w-[740px] border-collapse text-left"
                aria-label="Kaaty capability comparison across food industries"
              >
                <thead>
                  <tr className="border-b border-navy-200 bg-navy-50/70">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-navy-50/95 backdrop-blur-xs p-4 font-display text-[13.5px] font-bold text-navy shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]"
                    >
                      Industry Vertical
                    </th>
                    {MATRIX_COLUMNS.map((col) => (
                      <th
                        key={col.key}
                        scope="col"
                        className="p-4 text-center font-display text-[13px] font-bold text-navy-700"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {solutions.map((sol) => {
                    const activeCaps = INDUSTRY_CAPABILITIES_MAP[sol.slug] || []
                    return (
                      <tr key={sol.slug} className="hover:bg-navy-50/40 transition-colors">
                        {/* Sticky Industry Name Cell */}
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-white p-4 font-display text-[14px] font-bold text-navy shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]"
                        >
                          <a
                            href={`/solutions/${sol.slug}`}
                            className="group flex items-center gap-2.5 text-navy hover:text-kaaty-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaaty-500 rounded"
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600 transition-colors group-hover:bg-kaaty-500 group-hover:text-white">
                              <Icon name={sol.icon} size={15} />
                            </span>
                            <span className="truncate">{sol.name}</span>
                          </a>
                        </th>

                        {/* Capability Checkmark Cells */}
                        {MATRIX_COLUMNS.map((col) => {
                          const hasCap = activeCaps.includes(col.label)
                          return (
                            <td key={col.key} className="p-4 text-center">
                              {hasCap ? (
                                <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-200/60 mx-auto">
                                  <Icon name="check" size={13} strokeWidth={3} />
                                  <span className="sr-only">
                                    {col.label} supported in {sol.name}
                                  </span>
                                </span>
                              ) : (
                                <span className="text-navy-300 font-medium select-none">—</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Verified Brands ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <p className="text-[13.5px] font-semibold uppercase tracking-wider text-navy-400">
              Trusted by food businesses & institutions
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {VERIFIED_BRAND_LOGOS.map((b) => (
                <div key={b.name} className="flex items-center gap-2 text-navy-600">
                  <Icon name={b.icon} size={20} className="text-kaaty-500" />
                  <span className="font-display text-[15px] font-bold">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Final CTA ── */}
      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-8 text-center text-white shadow-glow sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-kaaty-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-kaaty-600/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold tracking-tight">
                Not sure which setup fits your business?
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-navy-300">
                Talk to our solution architects. We will walk through your floor plan, order
                volumes, and hardware requirements to recommend the ideal configuration.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  as="a"
                  href="/demo?source=solutions_hub_bottom"
                  size="lg"
                  icon="arrow-right"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/919392365308"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="whatsapp"
                  icon="whatsapp"
                >
                  WhatsApp Specialist
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
