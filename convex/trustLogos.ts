import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const get = query({
  handler: async (ctx) => {
    const logos = await ctx.db.query('trustLogos').collect()
    // Sort by order since Convex query().order() doesn't sort by arbitrary fields without indexes
    return [...logos].sort((a, b) => a.order - b.order)
  },
})

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query('trustLogos').collect()
    if (existing.length > 0) return
    const logos = [
      { name: 'KG Reddy College', icon: 'graduation-cap', order: 1 },
      { name: 'Siddhartha Institution', icon: 'book-open', order: 2 },
      { name: 'KL University', icon: 'building-2', order: 3 },
      { name: 'MLR Institution', icon: 'landmark', order: 4 },
      { name: 'CMR Groups', icon: 'library', order: 5 },
    ]
    for (const logo of logos) {
      await ctx.db.insert('trustLogos', logo)
    }
  },
})

export const update = mutation({
  args: {
    id: v.id('trustLogos'),
    name: v.optional(v.string()),
    icon: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})
