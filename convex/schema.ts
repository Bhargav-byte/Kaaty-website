import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  demoRequests: defineTable({
    name: v.string(),
    business: v.string(),
    phone: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.optional(v.string()),
    submittedAt: v.number(),
  }),
  trustLogos: defineTable({
    name: v.string(),
    icon: v.string(),
    order: v.number(),
  }),
  integrations: defineTable({
    name: v.string(),
    slug: v.string(),
    icon: v.string(),
    dot: v.string(),
    order: v.number(),
  }),
  testimonials: defineTable({
    brand: v.string(),
    icon: v.string(),
    quote: v.string(),
    name: v.string(),
    role: v.string(),
    order: v.number(),
  }),
})
