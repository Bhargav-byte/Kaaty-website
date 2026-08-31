import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const get = query({
  handler: async (ctx) => {
    const integrations = await ctx.db.query('integrations').collect()
    const sorted = integrations.sort((a, b) => a.order - b.order)
    return Promise.all(
      sorted.map(async (it) => {
        if (it.imageStorageId) {
          return { ...it, image: await ctx.storage.getUrl(it.imageStorageId) }
        }
        return it
      })
    )
  },
})

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query('integrations').collect()
    if (existing.length > 0) return

    const integrations = [
      { name: 'Easebuzz', slug: 'easebuzz', icon: 'wallet', dot: '#5B2EE0', order: 1 },
      { name: 'Razorpay', slug: 'razorpay', icon: 'credit-card', dot: '#0C2451', order: 2 },
      { name: 'PhonePe', slug: 'phonepe', icon: 'smartphone', dot: '#5F259F', order: 3 },
      { name: 'Pine Labs', slug: 'pine-labs', icon: 'printer', dot: '#0B7F5B', order: 4 },
      { name: 'Thermal Printers', slug: 'thermal-printers', icon: 'printer', dot: '#475569', order: 5 },
      { name: 'Swiggy', slug: 'swiggy', icon: 'bike', dot: '#FC8019', order: 6, image: '/swiggy.png' },
      { name: 'Zomato', slug: 'zomato', icon: 'utensils', dot: '#E23744', order: 7, image: '/zomato.png' },
      { name: 'ONDC', slug: 'ondc', icon: 'network', dot: '#1F8A5B', order: 8, image: '/ondc.png' },
    ]

    for (const item of integrations) {
      await ctx.db.insert('integrations', item)
    }
  },
})

export const update = mutation({
  args: {
    id: v.id('integrations'),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    icon: v.optional(v.string()),
    image: v.optional(v.string()),
    imageStorageId: v.optional(v.id('_storage')),
    dot: v.optional(v.string()),
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
    slug: v.string(),
    icon: v.string(),
    image: v.optional(v.string()),
    imageStorageId: v.optional(v.id('_storage')),
    dot: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('integrations', args)
  },
})

export const remove = mutation({
  args: {
    id: v.id('integrations'),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl()
  },
})
