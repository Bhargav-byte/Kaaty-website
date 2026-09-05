import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  demoRequests: defineTable({
    name: v.optional(v.string()),
    business: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    type: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.optional(v.string()),
    status: v.optional(v.string()),
    submittedAt: v.number(),
  }),
  collegeLogos: defineTable({
    name: v.string(),
    icon: v.string(),
    order: v.number(),
  }),
  integrations: defineTable({
    name: v.string(),
    slug: v.string(),
    icon: v.string(),
    image: v.optional(v.string()),
    imageStorageId: v.optional(v.id('_storage')),
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
    authorImageId: v.optional(v.id('_storage')),
    brandImageId: v.optional(v.id('_storage')),
  }),
})
