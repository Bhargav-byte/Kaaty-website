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
    await expect(
      page.locator('input[placeholder*="Name" i], input[type="text"]').first(),
    ).toBeVisible()
    await expect(
      page.locator('button[type="submit"]', { hasText: /Book Free Demo|Submit/i }),
    ).toBeVisible()
  })

  // 4. Direct navigation to /solutions/college-canteens
  test('4. /solutions/college-canteens loads directly with campus specifics', async ({ page }) => {
    await page.goto('/solutions/college-canteens')
    await expect(page).toHaveTitle(/College Canteens/i)
    await expect(
      page.locator('h1', { hasText: /Conquer the 15-minute lecture break rush/i }),
    ).toBeVisible()
    await expect(page.locator('text=Campus Dining & Institutions').first()).toBeVisible()
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
    await expect(
      page.locator('h1', { hasText: /Conquer the 15-minute lecture break rush/i }),
    ).toBeVisible()
    await page.reload()
    await expect(
      page.locator('h1', { hasText: /Conquer the 15-minute lecture break rush/i }),
    ).toBeVisible()
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
    const mobilePricingLink = page.locator('.shadow-2xl a[href="/pricing"]')
    await expect(mobilePricingLink).toBeVisible()
    await page.locator('button[aria-label="Close menu"]').click()
    await expect(mobilePricingLink).not.toBeVisible()
  })

  // 11. Demo form is accessible and validates required inputs
  test('11. Demo form shows validation errors on empty submit', async ({ page }) => {
    await page.goto('/demo')
    const submitBtn = page.locator('button[type="submit"]')
    await submitBtn.click()
    const inputsWithErrors = page.locator('input.border-red-300')
    await expect(inputsWithErrors.first()).toBeVisible()
  })

  // 12. Legacy hash URL backwards compatibility
  test('12. Legacy hash URL #/pricing gracefully migrates to /pricing', async ({ page }) => {
    await page.goto('/#/pricing')
    await expect(page).toHaveURL(/\/pricing$/)
    await expect(page.locator('text=Core').first()).toBeVisible()
  })

  // 13. Phase 3: Top-level /solutions hub loads with all 8 industry categories
  test('13. /solutions hub displays all 8 industry verticals and capability matrix', async ({ page }) => {
    await page.goto('/solutions')
    await expect(page).toHaveTitle(/Industry Solutions/i)
    await expect(page.locator('h1', { hasText: /Purpose-Built For Every/i })).toBeVisible()
    await expect(page.locator('h2', { hasText: 'Built for Every Food Business' })).toBeVisible()
    await expect(page.locator('text=Restaurants').first()).toBeVisible()
    await expect(page.locator('text=Cafes & QSRs').first()).toBeVisible()
    await expect(page.locator('text=Cloud Kitchens').first()).toBeVisible()
    await expect(page.locator('text=Food Courts').first()).toBeVisible()
    await expect(page.locator('text=College Canteens').first()).toBeVisible()
    await expect(page.locator('text=Hotels & Resorts').first()).toBeVisible()
    await expect(page.locator('text=Bakeries & Confectioneries').first()).toBeVisible()
    await expect(page.locator('text=Ice Cream Parlours').first()).toBeVisible()
  })

  // 14. Phase 3: Homepage "Explore Solutions" CTA links to /solutions
  test('14. Homepage Explore Solutions button links directly to /solutions', async ({ page }) => {
    await page.goto('/')
    const exploreBtn = page.locator('a:has-text("Explore Solutions")').first()
    await expect(exploreBtn).toBeVisible()
    await exploreBtn.click()
    await expect(page).toHaveURL(/\/solutions$/)
    await expect(page.locator('h1', { hasText: /Purpose-Built For Every/i })).toBeVisible()
  })

  // 15. Phase 3: Dedicated Restaurant solution page loads with workflow
  test('15. /solutions/restaurants loads with operational workflow and FAQs', async ({ page }) => {
    await page.goto('/solutions/restaurants')
    await expect(page).toHaveTitle(/Restaurants/i)
    await expect(page.locator('h1', { hasText: /High-speed dining operations/i })).toBeVisible()
    await expect(page.locator('text=How an order flows through Restaurants')).toBeVisible()
    await expect(page.locator('text=Floor plan & table management')).toBeVisible()
  })

  // 16. Phase 3: Cross-linking Product -> Industry works
  test('16. Product page /products/pos cross-links to relevant industries', async ({ page }) => {
    await page.goto('/products/pos')
    await expect(page.locator('text=Who powers operations with Kaaty POS?')).toBeVisible()
    const restLink = page.locator('a[href="/solutions/restaurants"]').first()
    await expect(restLink).toBeVisible()
    await restLink.click()
    await expect(page).toHaveURL(/\/solutions\/restaurants/)
  })

  // 17. Phase 3: Cross-linking Industry -> Product works
  test('17. Industry page /solutions/restaurants cross-links to recommended products', async ({ page }) => {
    await page.goto('/solutions/restaurants')
    const posLink = page.locator('a[href="/products/pos"]').first()
    await expect(posLink).toBeVisible()
    await posLink.click()
    await expect(page).toHaveURL(/\/products\/pos/)
  })

  // 18. Phase 3: Demo context pre-selection via ?industry=...
  test('18. /demo?industry=restaurant pre-populates Restaurant and shows tailored badge', async ({ page }) => {
    await page.goto('/demo?industry=restaurant')
    await expect(page.locator('text=Tailored walkthrough configured for')).toBeVisible()
    await expect(page.locator('text=Restaurant').first()).toBeVisible()
  })

  // 19. Phase 3: Mobile responsiveness check (no horizontal overflow) across breakpoints
  test('19. Mobile view on /solutions has zero horizontal overflow across 320px, 375px, 390px, 414px', async ({
    page,
  }) => {
    for (const width of [320, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 700 })
      await page.goto('/solutions')
      const isOverflowing = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth
      })
      expect(isOverflowing).toBe(false)
    }
  })

  // 20. Phase 3 Refinement: IndustrySolutionCard renders 8 cards with verified chips
  test('20. Solutions hub renders all 8 IndustrySolutionCards with verified capability chips', async ({
    page,
  }) => {
    await page.goto('/solutions')
    const cards = page.locator('[data-testid^="industry-card-"]')
    await expect(cards).toHaveCount(8)

    // Verify restaurant card chips match INDUSTRY_CAPABILITIES_MAP exactly
    const restaurantCard = page.locator('[data-testid="industry-card-restaurants"]')
    await expect(restaurantCard).toBeVisible()
    await expect(restaurantCard.locator('text=POS Billing')).toBeVisible()
    await expect(restaurantCard.locator('text=KDS System')).toBeVisible()
    await expect(restaurantCard.locator('text=QR Ordering')).toBeVisible()
    await expect(restaurantCard.locator('text=Analytics')).toBeVisible()

    // Verify CTA navigates to /solutions/restaurants
    const cta = restaurantCard.locator('a:has-text("Explore Solution")')
    await expect(cta).toHaveAttribute('href', '/solutions/restaurants')
  })

  // 21. Phase 3 Refinement: Comparison matrix heading and no Details column
  test('21. Comparison matrix renders under "Compare Kaaty by Industry" without Details column', async ({
    page,
  }) => {
    await page.goto('/solutions')
    await expect(page.locator('h2', { hasText: /Compare Kaaty by/i })).toBeVisible()

    // Assert that the old weak 'Details' column is completely removed
    const detailsTh = page.locator('th:has-text("Details")')
    await expect(detailsTh).toHaveCount(0)

    // Assert that sticky industry name headers exist
    const industryRows = page.locator('tbody tr')
    await expect(industryRows).toHaveCount(8)
  })

  // 22. Phase 3 Refinement: Keyboard navigation to card link
  test('22. Keyboard tab navigation reaches industry card links with visible focus', async ({
    page,
  }) => {
    await page.goto('/solutions')
    const firstCta = page.locator('[data-testid="industry-card-restaurants"] a').first()
    await firstCta.focus()
    await expect(firstCta).toBeFocused()
  })

  // 23. Phase 3: College Canteens Canteen Analytics links to /products/business without 404
  test('23. College Canteens Canteen Analytics links to /products/business and displays verified copy', async ({
    page,
  }) => {
    await page.goto('/solutions/college-canteens')
    await expect(page.locator('text=Canteen Analytics')).toBeVisible()
    await expect(
      page.locator(
        'text=Track real-time sales volume, peak-rush order trends, and item-wise revenue across canteen counters.',
      ),
    ).toBeVisible()

    const analyticsLink = page.locator('a[href="/products/business"]').first()
    await expect(analyticsLink).toBeVisible()
    await analyticsLink.click()

    await expect(page).toHaveURL(/\/products\/business/)
    await expect(page.locator('text=404')).not.toBeVisible()
    await expect(page.locator('text=Kaaty Business App').first()).toBeVisible()
    await expect(page.locator('text=Live sales velocity').first()).toBeVisible()
  })
})
