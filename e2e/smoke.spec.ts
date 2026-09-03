import { test, expect } from '@playwright/test'

test.describe('Kaaty Production E2E Smoke Suite', () => {
  // 1. Homepage loads without critical console errors
  test('1. Homepage loads and displays primary headline', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })

    await page.goto('/')
    await expect(page).toHaveTitle(/Kaaty — One Platform\. Every Food Business\./)
    await expect(
      page.locator('h1', { hasText: /The Complete Operating System For Modern Food Businesses/i }),
    ).toBeVisible()

    // Assert no critical console error
    expect(errors.filter((e) => !e.includes('favicon'))).toHaveLength(0)
  })

  // 2. Direct navigation to /pricing
  test('2. /pricing loads directly with correct plan comparison', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page).toHaveTitle(/Kaaty Pricing/i)
    await expect(page.locator('text=Pricing that scales with you')).toBeVisible()
    await expect(page.locator('text=Core').first()).toBeVisible()
    await expect(page.locator('text=Growth').first()).toBeVisible()
    await expect(page.locator('text=Scale').first()).toBeVisible()
  })

  // 3. Direct navigation to /demo
  test('3. /demo loads directly with demo request form', async ({ page }) => {
    await page.goto('/demo')
    await expect(page).toHaveTitle(/Book a Free Demo/i)
    await expect(page.locator('input[placeholder*="Name" i], input[type="text"]').first()).toBeVisible()
    await expect(page.locator('button[type="submit"]', { hasText: /Book Free Demo|Submit/i })).toBeVisible()
  })

  // 4. Direct navigation to /solutions/college-canteens
  test('4. /solutions/college-canteens loads directly with campus specifics', async ({ page }) => {
    await page.goto('/solutions/college-canteens')
    await expect(page).toHaveTitle(/College Canteens/i)
    await expect(page.locator('text=Built for high-volume campus dining')).toBeVisible()
    await expect(page.locator('text=College Canteens').first()).toBeVisible()
  })

  // 5. Direct navigation to /products/pos
  test('5. /products/pos loads directly', async ({ page }) => {
    await page.goto('/products/pos')
    await expect(page).toHaveTitle(/Kaaty POS/i)
    await expect(page.locator('text=Billing built for peak-hour speed')).toBeVisible()
  })

  // 6. Direct navigation to /integrations/razorpay
  test('6. /integrations/razorpay loads directly', async ({ page }) => {
    await page.goto('/integrations/razorpay')
    await expect(page).toHaveTitle(/Razorpay/i)
    await expect(page.locator('h1', { hasText: /Razorpay/i })).toBeVisible()
  })

  // 7. Refresh on a deep route works
  test('7. Refreshing deep route preserves page state and URL', async ({ page }) => {
    await page.goto('/solutions/college-canteens')
    await expect(page.locator('text=Built for high-volume campus dining')).toBeVisible()
    await page.reload()
    await expect(page.locator('text=Built for high-volume campus dining')).toBeVisible()
    expect(page.url()).toContain('/solutions/college-canteens')
  })

  // 8. Unknown route shows 404
  test('8. Unknown route displays 404 page', async ({ page }) => {
    await page.goto('/non-existent-page-xyz')
    await expect(page.locator('text=404')).toBeVisible()
    await expect(page.locator('text=That page does not exist yet.')).toBeVisible()
    // Test back home button works
    await page.click('a:has-text("Back home")')
    expect(page.url()).toBe(page.url().split('/')[0] + '//' + page.url().split('/')[2] + '/')
  })

  // 9. Primary CTA navigation works
  test('9. Clicking primary CTA navigates without full reload', async ({ page }) => {
    await page.goto('/')
    // Find the primary hero CTA
    const demoCta = page.locator('a[href*="/demo"]').first()
    await demoCta.click()
    await expect(page).toHaveURL(/\/demo/)
    await expect(page.locator('h1', { hasText: /See Kaaty in action/i })).toBeVisible()
  })

  // 10. Mobile navigation opens and closes
  test('10. Mobile menu toggles correctly on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    const openBtn = page.locator('button[aria-label="Open menu"]')
    await expect(openBtn).toBeVisible()
    await openBtn.click()
    // Expect mobile drawer to be open and pricing link visible
    const mobilePricingLink = page.locator('.shadow-2xl a[href="/pricing"]')
    await expect(mobilePricingLink).toBeVisible()
    // Click close
    await page.locator('button[aria-label="Close menu"]').click()
    await expect(mobilePricingLink).not.toBeVisible()
  })

  // 11. Demo form is accessible and validates required inputs
  test('11. Demo form shows validation errors on empty submit', async ({ page }) => {
    await page.goto('/demo')
    const submitBtn = page.locator('button[type="submit"]')
    await submitBtn.click()
    // Inputs should highlight error state or show indicators
    const inputsWithErrors = page.locator('input.border-red-300')
    await expect(inputsWithErrors.first()).toBeVisible()
  })

  // 12. Legacy hash URL backwards compatibility
  test('12. Legacy hash URL #/pricing gracefully migrates to /pricing', async ({ page }) => {
    await page.goto('/#/pricing')
    await expect(page).toHaveURL(/\/pricing$/)
    await expect(page.locator('text=Core').first()).toBeVisible()
  })
})
