import assert from 'node:assert'
import {
  requireAuthenticatedUser,
  requireAdmin,
  requireSuperAdmin,
} from '../convex/auth.ts'
import {
  savePartial,
  submitDemoRequest,
  get as getDemoRequests,
  update as updateDemoRequest,
} from '../convex/demoRequests.ts'
import {
  update as updateCollegeLogo,
  add as addCollegeLogo,
} from '../convex/collegeLogos.ts'
import {
  update as updateIntegration,
} from '../convex/integrations.ts'
import {
  update as updateTestimonial,
} from '../convex/testimonials.ts'

console.log('Running Kaaty Company Website Security Test Suite...\n')

function createMockCtx({
  identity = null,
  user = null,
  demoRequests = [],
  logos = [],
  integrations = [],
  testimonials = [],
}) {
  const dbDemoRequests = [...demoRequests]
  const dbLogos = [...logos]
  const dbIntegrations = [...integrations]
  const dbTestimonials = [...testimonials]

  return {
    auth: {
      getUserIdentity: async () => identity,
    },
    db: {
      query: (table) => ({
        order: () => ({
          collect: async () => {
            if (table === 'demoRequests') return dbDemoRequests
            if (table === 'collegeLogos') return dbLogos
            if (table === 'integrations') return dbIntegrations
            if (table === 'testimonials') return dbTestimonials
            return []
          },
        }),
        withIndex: (indexName, filterFn) => ({
          unique: async () => user,
        }),
        filter: () => ({
          first: async () => null,
          collect: async () => [],
        }),
      }),
      get: async (id) => {
        const demo = dbDemoRequests.find((it) => it._id === id)
        if (demo) return demo
        const logo = dbLogos.find((it) => it._id === id)
        if (logo) return logo
        const integ = dbIntegrations.find((it) => it._id === id)
        if (integ) return integ
        const testm = dbTestimonials.find((it) => it._id === id)
        if (testm) return testm
        return null
      },
      patch: async (id, data) => {
        const demo = dbDemoRequests.find((it) => it._id === id)
        if (demo) Object.assign(demo, data)
        const logo = dbLogos.find((it) => it._id === id)
        if (logo) Object.assign(logo, data)
        return { _id: id, ...data }
      },
      insert: async (table, data) => {
        const newId = `id_${table}_${Date.now()}`
        if (table === 'demoRequests') dbDemoRequests.push({ _id: newId, ...data })
        if (table === 'collegeLogos') dbLogos.push({ _id: newId, ...data })
        return newId
      },
    },
    scheduler: {
      runAfter: async () => {},
    },
  }
}

async function runTests() {
  let passed = 0
  let total = 0

  async function test(name, fn) {
    total++
    try {
      await fn()
      console.log(`[PASS] ${name}`)
      passed++
    } catch (err) {
      console.error(`[FAIL] ${name}:`, err.message)
    }
  }

  // 1. Unauthenticated user calls protected auth helper -> DENIED
  await test('TEST 1: Unauthenticated user calls requireAuthenticatedUser -> DENIED', async () => {
    const ctx = createMockCtx({ identity: null })
    await assert.rejects(
      async () => await requireAuthenticatedUser(ctx),
      /Unauthorized: Authentication required/
    )
  })

  // 2. Unauthenticated user calls demoRequests:get -> DENIED
  await test('TEST 2: Unauthenticated user calls demoRequests:get -> DENIED', async () => {
    const ctx = createMockCtx({ identity: null })
    await assert.rejects(
      async () => await getDemoRequests._handler(ctx, {}),
      /Unauthorized: Authentication required/
    )
  })

  // 3. Unauthenticated user calls collegeLogos:update -> DENIED
  await test('TEST 3: Unauthenticated user calls collegeLogos:update -> DENIED', async () => {
    const ctx = createMockCtx({ identity: null })
    await assert.rejects(
      async () => await updateCollegeLogo._handler(ctx, { id: 'logo_1', name: 'Hacked' }),
      /Unauthorized: Authentication required/
    )
  })

  // 4. Unauthenticated user calls integrations:update -> DENIED
  await test('TEST 4: Unauthenticated user calls integrations:update -> DENIED', async () => {
    const ctx = createMockCtx({ identity: null })
    await assert.rejects(
      async () => await updateIntegration._handler(ctx, { id: 'integ_1', name: 'Hacked' }),
      /Unauthorized: Authentication required/
    )
  })

  // 5. Unauthenticated user calls testimonials:update -> DENIED
  await test('TEST 5: Unauthenticated user calls testimonials:update -> DENIED', async () => {
    const ctx = createMockCtx({ identity: null })
    await assert.rejects(
      async () => await updateTestimonial._handler(ctx, { id: 'testm_1', name: 'Hacked' }),
      /Unauthorized: Authentication required/
    )
  })

  // 6. Super Admin calls demoRequests:get -> ALLOWED
  await test('TEST 6: Super Admin calls demoRequests:get -> ALLOWED', async () => {
    const superAdmin = {
      _id: 'admin_1',
      tokenIdentifier: 'auth0|admin_1',
      role: 'super_admin',
    }
    const ctx = createMockCtx({
      identity: { tokenIdentifier: 'auth0|admin_1' },
      user: superAdmin,
      demoRequests: [{ _id: 'd1', name: 'Lead 1', email: 'lead@test.com' }],
    })
    const res = await getDemoRequests._handler(ctx, {})
    assert.strictEqual(Array.isArray(res), true)
  })

  // 7. Super Admin modifies college logo -> ALLOWED
  await test('TEST 7: Super Admin modifies college logo -> ALLOWED', async () => {
    const superAdmin = {
      _id: 'admin_1',
      tokenIdentifier: 'auth0|admin_1',
      role: 'super_admin',
    }
    const ctx = createMockCtx({
      identity: { tokenIdentifier: 'auth0|admin_1' },
      user: superAdmin,
      logos: [{ _id: 'logo_1', name: 'KG Reddy', order: 1 }],
    })
    await updateCollegeLogo._handler(ctx, { id: 'logo_1', name: 'KG Reddy Updated' })
    const updated = await ctx.db.get('logo_1')
    assert.strictEqual(updated.name, 'KG Reddy Updated')
  })

  // 8. Arbitrary demoRequest ID tampering without matching clientToken -> REJECTED
  await test('TEST 8: Overwriting demoRequest with mismatched clientToken -> REJECTED', async () => {
    const ctx = createMockCtx({
      demoRequests: [
        {
          _id: 'demo_123',
          name: 'Real Lead',
          clientToken: 'token_original_abc',
          status: 'pending',
        },
      ],
    })
    await assert.rejects(
      async () =>
        await savePartial._handler(ctx, {
          id: 'demo_123',
          clientToken: 'token_forged_xyz',
          name: 'Hacker Overwrite',
        }),
      /Unauthorized: Client token mismatch/
    )
  })

  // 9. Legitimate user updates own demoRequest with matching clientToken -> ALLOWED
  await test('TEST 9: Updating demoRequest with matching clientToken -> ALLOWED', async () => {
    const myToken = 'token_valid_123'
    const ctx = createMockCtx({
      demoRequests: [
        {
          _id: 'demo_123',
          name: 'Pooja',
          clientToken: myToken,
          status: 'pending',
        },
      ],
    })
    const res = await savePartial._handler(ctx, {
      id: 'demo_123',
      clientToken: myToken,
      name: 'Pooja Updated',
    })
    assert.strictEqual(res, 'demo_123')
  })

  // 10. submitDemoRequest cannot be called without valid clientToken -> REJECTED
  await test('TEST 10: Finalizing demoRequest with mismatched clientToken -> REJECTED', async () => {
    const ctx = createMockCtx({
      demoRequests: [
        {
          _id: 'demo_123',
          name: 'Real Lead',
          email: 'lead@test.com',
          clientToken: 'token_original_abc',
          status: 'pending',
        },
      ],
    })
    await assert.rejects(
      async () =>
        await submitDemoRequest._handler(ctx, {
          id: 'demo_123',
          clientToken: 'token_forged_xyz',
          name: 'Real Lead',
          business: 'Biz',
          phone: '+91 9999999999',
          email: 'lead@test.com',
          type: 'Restaurant',
        }),
      /Unauthorized: Client token mismatch/
    )
  })

  console.log(`\nAll ${passed}/${total} security tests executed successfully!`)
}

runTests().catch(console.error)
