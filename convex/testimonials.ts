import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const get = query({
  handler: async (ctx) => {
    const testimonials = await ctx.db.query('testimonials').collect()
    return [...testimonials].sort((a, b) => a.order - b.order)
  },
})

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query('testimonials').collect()
    if (existing.length > 0) return

    const testimonials = [
      {
        brand: "Sam's Pizza",
        icon: 'pizza',
        quote: 'Kaaty has been our POS across 90+ outlets for over two years. For a large chain like us, it is the single data bridge between every outlet and the owner. Kudos to the team!',
        name: 'Jolly Christian',
        role: 'General Manager',
        order: 1,
      },
      {
        brand: 'United Farmers',
        icon: 'wheat',
        quote: 'Kaaty helps me manage inventory levels and food costs. I track sales and expenses in real time, which helps me make informed purchasing decisions and reduce waste across the board.',
        name: 'Jaipratap Singh',
        role: 'Managing Director',
        order: 2,
      },
    ]

    for (const item of testimonials) {
      await ctx.db.insert('testimonials', item)
    }
  },
})

export const update = mutation({
  args: {
    id: v.id('testimonials'),
    brand: v.optional(v.string()),
    icon: v.optional(v.string()),
    quote: v.optional(v.string()),
    name: v.optional(v.string()),
    role: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})
