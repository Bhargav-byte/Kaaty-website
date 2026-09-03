import { Container, SectionHead } from './Primitives'
import { Icon } from './Icon'
import { PRODUCT_INDUSTRIES, type ProductIndustryRef } from '../data/productIndustries'

export type ProductIndustriesSectionProps = {
  productSlug: string
  productName: string
}

export function ProductIndustriesSection({
  productSlug,
  productName,
}: ProductIndustriesSectionProps) {
  const industries: ProductIndustryRef[] = PRODUCT_INDUSTRIES[productSlug] || []

  if (industries.length === 0) return null

  return (
    <section className="border-t border-navy-100 bg-navy-50/40 py-20 sm:py-24">
      <Container>
        <SectionHead
          eyebrow="Industry Fit"
          title={
            <>
              Who powers operations with <span className="gradient-text">{productName}</span>?
            </>
          }
          sub="See how different food businesses adapt this module to their specific front-of-house and kitchen workflows."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <a
              key={ind.industrySlug}
              href={`/solutions/${ind.industrySlug}`}
              className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-kaaty-200 hover:shadow-lift"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors group-hover:bg-kaaty-500 group-hover:text-white group-hover:ring-kaaty-500">
                    <Icon name={ind.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-navy">
                      {ind.industryName}
                    </h3>
                    <span className="text-[12px] font-medium text-navy-400">Industry Solution</span>
                  </div>
                </div>

                <p className="mt-4 text-[13px] leading-relaxed text-navy-600">{ind.useCase}</p>
              </div>

              <div className="mt-6 border-t border-navy-100 pt-3">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-kaaty-600 group-hover:text-kaaty-700">
                  Explore {ind.industryName} Workflow <Icon name="arrow-right" size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
