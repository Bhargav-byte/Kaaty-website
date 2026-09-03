import { mutation, query } from './_generated/server'
import { api } from './_generated/api'
import { v } from 'convex/values'

export const savePartial = mutation({
  args: {
    id: v.optional(v.id('demoRequests')),
    name: v.optional(v.string()),
    business: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    type: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args
    if (id) {
      const existing = await ctx.db.get(id)
      if (existing && existing.status === 'completed') return id
      await ctx.db.patch(id, { ...data, status: 'pending', submittedAt: Date.now() })
      return id
    } else {
      return await ctx.db.insert('demoRequests', {
        ...data,
        status: 'pending',
        submittedAt: Date.now(),
      })
    }
  },
})

export const submitDemoRequest = mutation({
  args: {
    id: v.optional(v.id('demoRequests')),
    name: v.string(),
    business: v.string(),
    phone: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args
    let finalId = id

    if (id) {
      await ctx.db.patch(id, {
        ...data,
        status: 'completed',
        submittedAt: Date.now(),
      })
    } else {
      finalId = await ctx.db.insert('demoRequests', {
        ...data,
        status: 'completed',
        submittedAt: Date.now(),
      })
    }

    // Automatically trigger email confirmation in the background
    await ctx.scheduler.runAfter(0, api.sendConfirmationEmail.sendConfirmationEmail, data)

    return finalId
  },
})

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query('demoRequests').order('desc').collect()
  },
})

export const update = mutation({
  args: {
    id: v.id('demoRequests'),
    name: v.optional(v.string()),
    business: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    type: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.optional(v.string()),
    submittedAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})
