import { query, mutation, internalMutation } from './_generated/server'
import { v } from 'convex/values'
import { requireSuperAdmin } from './auth'

/* ── Public query (read-only, no PII) ────────────────────────────────────── */

export const get = query({
  handler: async (ctx) => {
    const testimonials = await ctx.db.query('testimonials').collect()
    const sorted = [...testimonials].sort((a, b) => a.order - b.order)

    return Promise.all(
      sorted.map(async (t) => {
        return {
          ...t,
          authorImageUrl: t.authorImageId ? await ctx.storage.getUrl(t.authorImageId) : null,
          brandImageUrl: t.brandImageId ? await ctx.storage.getUrl(t.brandImageId) : null,
        }
      })
    )
  },
})

/* ── Internal seed (CLI / server migration only) ─────────────────────────── */

export const seed = internalMutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query('testimonials').collect()
    if (existing.length > 0) return

    const testimonials = [
      {
        brand: "Sam's Pizza",
        icon: 'pizza',
        quote:
          'Kaaty has been our POS across 90+ outlets for over two years. For a large chain like us, it is the single data bridge between every outlet and the owner. Kudos to the team!',
        name: 'Jolly Christian',
        role: 'General Manager',
        order: 1,
      },
      {
        brand: 'United Farmers',
        icon: 'wheat',
        quote:
          'Kaaty helps me manage inventory levels and food costs. I track sales and expenses in real time, which helps me make informed purchasing decisions and reduce waste across the board.',
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

/* ── Authenticated Admin Mutations (Callable by Authenticated Admins from Browser) ── */

export const update = mutation({
  args: {
    id: v.id('testimonials'),
    brand: v.optional(v.string()),
    icon: v.optional(v.string()),
    quote: v.optional(v.string()),
    name: v.optional(v.string()),
    role: v.optional(v.string()),
    order: v.optional(v.number()),
    authorImageId: v.optional(v.union(v.id('_storage'), v.null())),
    brandImageId: v.optional(v.union(v.id('_storage'), v.null())),
  },
  handler: async (ctx, args) => {
    await requireSuperAdmin(ctx)
    const { id, ...updates } = args
    const patchData: Record<string, unknown> = { ...updates }
    if (patchData.authorImageId === null) patchData.authorImageId = undefined
    if (patchData.brandImageId === null) patchData.brandImageId = undefined
    await ctx.db.patch(id, patchData)
  },
})

export const add = mutation({
  args: {
    brand: v.string(),
    icon: v.string(),
    quote: v.string(),
    name: v.string(),
    role: v.string(),
    order: v.number(),
    authorImageId: v.optional(v.id('_storage')),
    brandImageId: v.optional(v.id('_storage')),
  },
  handler: async (ctx, args) => {
    await requireSuperAdmin(ctx)
    return await ctx.db.insert('testimonials', args)
  },
})

export const remove = mutation({
  args: {
    id: v.id('testimonials'),
  },
  handler: async (ctx, args) => {
    await requireSuperAdmin(ctx)
    await ctx.db.delete(args.id)
  },
})
