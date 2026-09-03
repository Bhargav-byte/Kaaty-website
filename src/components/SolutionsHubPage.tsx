import { Container, Button, SectionHead, Eyebrow } from './Primitives'
import { Icon } from './Icon'
import { INDUSTRY_SOLUTIONS } from '../data/industrySolutions'
import { VERIFIED_BRAND_LOGOS } from '../data/proofData'

const MATRIX_COLUMNS = [
  { key: 'pos', label: 'POS Billing' },
  { key: 'kds', label: 'KDS System' },
  { key: 'qr', label: 'QR Ordering' },
  { key: 'kiosk', label: 'Kiosks' },
  { key: 'token', label: 'Token Board' },
  { key: 'vendor', label: 'Multi-Vendor' },
  { key: 'wallet', label: 'Campus Wallets' },
  { key: 'analytics', label: 'Analytics' },
]

const MATRIX_CAPABILITIES: Record<string, string[]> = {
  restaurants: ['pos', 'kds', 'qr', 'analytics'],
  cafes: ['pos', 'kds', 'qr', 'token', 'analytics'],
  'cloud-kitchens': ['pos', 'kds', 'token', 'analytics'],
  'food-courts': ['pos', 'token', 'kiosk', 'vendor', 'analytics'],
  'college-canteens': ['pos', 'qr', 'token', 'vendor', 'wallet', 'analytics'],
  hotels: ['pos', 'kds', 'qr', 'analytics'],
  bakeries: ['pos', 'kds', 'analytics'],
  'ice-cream-parlours': ['pos', 'kiosk', 'token', 'analytics'],
}

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

      {/* ── 2. Industry Cards Grid ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHead
            eyebrow="Target Verticals"
            title={
              <>
                Select your <span className="gradient-text">business category</span>
              </>
            }
            sub="Explore dedicated workflows, recommended product modules, and operational answers built for your outlet type."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((sol) => (
              <a
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                      <Icon name={sol.icon} size={22} />
                    </span>
                    <span className="rounded-full bg-kaaty-50 px-2.5 py-1 text-[11px] font-semibold text-kaaty-700">
                      {sol.badge}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-[18px] font-bold text-navy">{sol.name}</h2>
                  <p className="mt-1 text-[13px] font-medium text-navy-400">{sol.tagline}</p>

                  <div className="mt-4 space-y-2 border-t border-navy-100/70 pt-4">
                    {sol.painPoints.slice(0, 2).map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12.5px] text-navy-600">
                        <Icon
                          name="check-circle-2"
                          size={14}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />
                        <span className="line-clamp-2">{p.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Modules Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {sol.recommendedProducts.map((p) => (
                      <span
                        key={p.slug}
                        className="rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-medium text-navy-600"
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-navy-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-kaaty-600 transition-colors group-hover:text-kaaty-700">
                    Explore {sol.name}{' '}
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Capability Matrix ── */}
      <section className="border-y border-navy-100 bg-navy-50/40 py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Capability Breakdown"
            title={
              <>
                How Kaaty adapts to <span className="gradient-text">every operation</span>
              </>
            }
            sub="No two food businesses operate the same way. You only activate the modules relevant to your concept."
          />

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-navy-200 bg-white">
                  <th className="p-4 font-display text-[14px] font-bold text-navy">
                    Industry Vertical
                  </th>
                  {MATRIX_COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      className="p-4 text-center font-display text-[13px] font-bold text-navy-700"
                    >
                      {col.label}
                    </th>
                  ))}
                  <th className="p-4 text-right font-display text-[13px] font-bold text-navy-700">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100 bg-white">
                {solutions.map((sol) => {
                  const caps = MATRIX_CAPABILITIES[sol.slug] || []
                  return (
                    <tr key={sol.slug} className="hover:bg-navy-50/50 transition-colors">
                      <td className="p-4 font-display text-[14px] font-bold text-navy">
                        <div className="flex items-center gap-2.5">
                          <Icon name={sol.icon} size={18} className="text-kaaty-500" />
                          <span>{sol.name}</span>
                        </div>
                      </td>
                      {MATRIX_COLUMNS.map((col) => {
                        const hasCap = caps.includes(col.key)
                        return (
                          <td key={col.key} className="p-4 text-center">
                            {hasCap ? (
                              <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600 mx-auto">
                                <Icon name="check" size={14} strokeWidth={3} />
                              </span>
                            ) : (
                              <span className="text-navy-300">—</span>
                            )}
                          </td>
                        )
                      })}
                      <td className="p-4 text-right">
                        <a
                          href={`/solutions/${sol.slug}`}
                          className="inline-flex items-center gap-1 text-[13px] font-semibold text-kaaty-600 hover:text-kaaty-700"
                        >
                          View <Icon name="arrow-right" size={13} />
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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
