import { mutation, internalQuery, internalMutation } from './_generated/server'
import { api } from './_generated/api'
import { v } from 'convex/values'

/* ── Public mutations (called from the website) ─────────────────────────── */

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
    // Input length limits to prevent abuse
    if (args.name && args.name.length > 200) return undefined
    if (args.business && args.business.length > 300) return undefined
    if (args.phone && args.phone.length > 25) return undefined
    if (args.email && args.email.length > 320) return undefined
    if (args.message && args.message.length > 2000) return undefined

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
    // Input validation
    if (args.name.length > 200) throw new Error('Name is too long')
    if (args.business.length > 300) throw new Error('Business name is too long')
    if (args.phone.length > 25) throw new Error('Phone number is too long')
    if (args.email.length > 320) throw new Error('Email is too long')
    if (args.message && args.message.length > 2000) throw new Error('Message is too long')

    // Basic email format check
    if (!args.email.includes('@') || !args.email.includes('.')) {
      throw new Error('Invalid email address')
    }

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

/* ── Internal functions (admin-only, NOT callable from the browser) ──────── */

export const get = internalQuery({
  handler: async (ctx) => {
    return await ctx.db.query('demoRequests').order('desc').collect()
  },
})

export const update = internalMutation({
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
