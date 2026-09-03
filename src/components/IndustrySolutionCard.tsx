import { Icon } from './Icon'
import { trackEvent } from '../lib/analytics'

export type IndustrySolutionCardProps = {
  slug: string
  name: string
  badge?: string
  icon: string
  valueProp: string
  capabilities: string[]
}

export function IndustrySolutionCard({
  slug,
  name,
  badge,
  icon,
  valueProp,
  capabilities,
}: IndustrySolutionCardProps) {
  const handleClick = () => {
    trackEvent('industry_card_click', {
      industry: slug,
      cta_text: `Explore ${name} Solution`,
      cta_target: `/solutions/${slug}`,
    })
  }

  return (
    <div
      data-testid={`industry-card-${slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-kaaty-200 hover:shadow-lift"
    >
      <div>
        {/* Top bar: Icon & Badge */}
        <div className="flex items-center justify-between gap-3">
          <span
            aria-hidden="true"
            className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors duration-300 group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500"
          >
            <Icon name={icon} size={22} />
          </span>
          {badge && (
            <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-semibold text-navy-600 transition-colors group-hover:bg-kaaty-50 group-hover:text-kaaty-700">
              {badge}
            </span>
          )}
        </div>

        {/* Industry Title */}
        <h3 className="mt-5 font-display text-[18px] font-bold text-navy">{name}</h3>

        {/* Value Proposition */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-navy-600 line-clamp-3">{valueProp}</p>

        {/* Verified Capability Chips */}
        <div className="mt-5 pt-4 border-t border-navy-100/70">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-navy-400">
            Core Modules
          </div>
          <div className="flex flex-wrap gap-1.5" aria-label={`Verified modules for ${name}`}>
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center rounded-md bg-navy-50/80 px-2.5 py-1 text-[11.5px] font-semibold text-navy-700 ring-1 ring-inset ring-navy-200/50"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Solution CTA */}
      <div className="mt-6 border-t border-navy-100 pt-4">
        <a
          href={`/solutions/${slug}`}
          onClick={handleClick}
          aria-label={`Explore ${name} Solution`}
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-kaaty-600 transition-colors group-hover:text-kaaty-700 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaaty-500"
        >
          <span>Explore Solution</span>
          <Icon
            name="arrow-right"
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  )
}
