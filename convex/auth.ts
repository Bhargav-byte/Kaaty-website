import type { QueryCtx, MutationCtx } from './_generated/server'
import type { Id } from './_generated/dataModel'

export type UserRole = 'admin' | 'super_admin'

export interface AuthenticatedUser {
  _id: Id<'users'>
  tokenIdentifier: string
  name?: string
  email?: string
  role: UserRole
}

/**
 * Resolves the authenticated user from the request context using Convex Auth.
 * Returns null if the caller is unauthenticated.
 * Never trusts client-supplied credentials; resolves strictly from verified JWT token.
 */
export async function getAuthenticatedUser(
  ctx: QueryCtx | MutationCtx
): Promise<AuthenticatedUser | null> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    return null
  }

  const user = await ctx.db
    .query('users')
    .withIndex('by_token', (q) => q.eq('tokenIdentifier', identity.tokenIdentifier))
    .unique()

  if (!user) {
    return null
  }

  return {
    _id: user._id,
    tokenIdentifier: user.tokenIdentifier,
    name: user.name,
    email: user.email,
    role: (user.role as UserRole) || 'admin',
  }
}

/**
 * Enforces that the caller is authenticated.
 * Throws an explicit error if unauthenticated.
 */
export async function requireAuthenticatedUser(
  ctx: QueryCtx | MutationCtx
): Promise<AuthenticatedUser> {
  const user = await getAuthenticatedUser(ctx)
  if (!user) {
    throw new Error('Unauthorized: Authentication required')
  }
  return user
}

/**
 * Enforces that the caller has admin privileges ('admin' or 'super_admin').
 */
export async function requireAdmin(
  ctx: QueryCtx | MutationCtx
): Promise<AuthenticatedUser> {
  const user = await requireAuthenticatedUser(ctx)
  if (user.role !== 'admin' && user.role !== 'super_admin') {
    throw new Error('Forbidden: Administrative privileges required')
  }
  return user
}

/**
 * Enforces that the caller has super_admin privileges for website CMS.
 */
export async function requireSuperAdmin(
  ctx: QueryCtx | MutationCtx
): Promise<AuthenticatedUser> {
  const user = await requireAuthenticatedUser(ctx)
  if (user.role !== 'super_admin') {
    throw new Error('Forbidden: Super Administrator privileges required')
  }
  return user
}
