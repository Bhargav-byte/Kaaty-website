import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

import type { Id } from './_generated/dataModel'

export const get = query({
  handler: async (ctx) => {
    const logos = await ctx.db.query('collegeLogos').collect()
    const sorted = logos.sort((a, b) => a.order - b.order)
    return Promise.all(
      sorted.map(async (it) => {
        if (it.icon.length > 20 && !it.icon.includes('-')) {
          try {
            return { ...it, imageUrl: await ctx.storage.getUrl(it.icon as Id<'_storage'>) }
          } catch {
            return it
          }
        }
        return it
      })
    )
  },
})

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query('collegeLogos').collect()
    if (existing.length > 0) return
    const logos = [
      { name: 'KG Reddy College', icon: 'graduation-cap', order: 1 },
      { name: 'Siddhartha Institution', icon: 'book-open', order: 2 },
      { name: 'KL University', icon: 'building-2', order: 3 },
      { name: 'MLR Institution', icon: 'landmark', order: 4 },
      { name: 'CMR Groups', icon: 'library', order: 5 },
    ]
    for (const logo of logos) {
      await ctx.db.insert('collegeLogos', logo)
    }
  },
})

export const update = mutation({
  args: {
    id: v.id('collegeLogos'),
    name: v.optional(v.string()),
    icon: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})

export const add = mutation({
  args: {
    name: v.string(),
    icon: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('collegeLogos', args)
  },
})

export const remove = mutation({
  args: {
    id: v.id('collegeLogos'),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})
