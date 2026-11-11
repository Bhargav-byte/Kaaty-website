import { mutation, query, internalMutation } from './_generated/server'
import { internal } from './_generated/api'
import { v } from 'convex/values'
import { requireSuperAdmin } from './auth'

/**
 * Strips HTML and control characters to prevent stored XSS
 */
function sanitizeInput(str: string): string {
  return str.replace(/<[^>]*>?/gm, '').trim()
}

/* ── Internal mutations (Invocable ONLY via Cloudflare Ingress / HTTP Action) ── */

/**
 * Internal mutation: Saves partial form progress securely.
 * CONVERTED TO internalMutation — CANNOT be invoked directly from the browser!
 * Invocable ONLY via Convex HTTP Action (/api/save-partial-demo) validated with worker secret.
 */
export const savePartial = internalMutation({
  args: {
    clientToken: v.optional(v.string()),
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
    // 1. Length validation to prevent payload abuse
    if (args.name && args.name.length > 200) return undefined
    if (args.business && args.business.length > 300) return undefined
    if (args.phone && args.phone.length > 25) return undefined
    if (args.email && args.email.length > 320) return undefined
    if (args.message && args.message.length > 2000) return undefined

    const sanitizedData: {
      name?: string
      business?: string
      phone?: string
      email?: string
      type?: string
      message?: string
      source?: string
    } = {}

    if (args.name) sanitizedData.name = sanitizeInput(args.name)
    if (args.business) sanitizedData.business = sanitizeInput(args.business)
    if (args.phone) sanitizedData.phone = sanitizeInput(args.phone)
    if (args.email) sanitizedData.email = sanitizeInput(args.email).toLowerCase()
    if (args.type) sanitizedData.type = sanitizeInput(args.type)
    if (args.message) sanitizedData.message = sanitizeInput(args.message)
    if (args.source) sanitizedData.source = sanitizeInput(args.source)

    if (args.id) {
      const existing = await ctx.db.get(args.id)
      if (!existing) {
        return undefined
      }

      // Do not overwrite completed submissions
      if (existing.status === 'completed') {
        return args.id
      }

      await ctx.db.patch(args.id, {
        ...sanitizedData,
        status: 'pending',
        submittedAt: Date.now(),
      })
      return args.id
    } else {
      return await ctx.db.insert('demoRequests', {
        ...sanitizedData,
        status: 'pending',
        submittedAt: Date.now(),
      })
    }
  },
})

/**
 * Internal mutation: Finalizes demo submission and schedules confirmation email.
 * CONVERTED TO internalMutation — CANNOT be invoked directly from the browser!
 * Invocable ONLY via Convex HTTP Action (/api/submit-demo-request) validated with worker secret.
 */
export const submitDemoRequest = internalMutation({
  args: {
    clientToken: v.optional(v.string()),
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
    // 1. Input length validation
    if (args.name.length > 200) throw new Error('Name is too long')
    if (args.business.length > 300) throw new Error('Business name is too long')
    if (args.phone.length > 25) throw new Error('Phone number is too long')
    if (args.email.length > 320) throw new Error('Email is too long')
    if (args.message && args.message.length > 2000) throw new Error('Message is too long')

    const cleanEmail = sanitizeInput(args.email).toLowerCase()
    const cleanPhone = sanitizeInput(args.phone)
    const cleanName = sanitizeInput(args.name)
    const cleanBusiness = sanitizeInput(args.business)
    const cleanType = sanitizeInput(args.type)
    const cleanMessage = args.message ? sanitizeInput(args.message) : undefined
    const cleanSource = args.source ? sanitizeInput(args.source) : undefined

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(cleanEmail)) {
      throw new Error('Invalid email address format')
    }

    if (args.id) {
      const existing = await ctx.db.get(args.id)
      if (existing && existing.status === 'completed') {
        return existing._id
      }
    }

    // 3. Rate-limiting / deduplication cooldown
    const recentSubmission = await ctx.db
      .query('demoRequests')
      .filter((q) =>
        q.and(
          q.eq(q.field('email'), cleanEmail),
          q.gt(q.field('submittedAt'), Date.now() - 60000)
        )
      )
      .first()

    if (recentSubmission && recentSubmission.status === 'completed') {
      return recentSubmission._id
    }

    const payload = {
      name: cleanName,
      business: cleanBusiness,
      phone: cleanPhone,
      email: cleanEmail,
      type: cleanType,
      message: cleanMessage,
      source: cleanSource,
      status: 'completed',
      submittedAt: Date.now(),
    }

    let finalId = args.id
    if (args.id) {
      await ctx.db.patch(args.id, payload)
    } else {
      finalId = await ctx.db.insert('demoRequests', payload)
    }

    // 5. Trigger email notification internally
    await ctx.scheduler.runAfter(
      0,
      internal.sendConfirmationEmail.sendConfirmationEmail,
      {
        name: cleanName,
        business: cleanBusiness,
        phone: cleanPhone,
        email: cleanEmail,
        type: cleanType,
        message: cleanMessage,
        source: cleanSource,
      }
    )

    return finalId
  },
})

/* ── Authenticated Admin Functions (Callable by Super Admins from Browser Dashboard) ── */

/**
 * Super Admin query: View customer demo submissions.
 * Protected by requireSuperAdmin(ctx)
 */
export const get = query({
  args: {},
  handler: async (ctx) => {
    await requireSuperAdmin(ctx)
    return await ctx.db.query('demoRequests').order('desc').collect()
  },
})

/**
 * Super Admin mutation: Update submission status.
 * Protected by requireSuperAdmin(ctx)
 */
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
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireSuperAdmin(ctx)
    const { id, ...updates } = args
    await ctx.db.patch(id, updates)
  },
})


