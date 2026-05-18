const { chromium } = require('playwright')
const TARGET = 'http://localhost:3000'
const ROUTES = [
  '/',
  '/about',
  '/events',
  '/events/astoria-maritime',
  '/volunteer',
  '/donate',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/this-route-does-not-exist',
]
;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await (await browser.newContext()).newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(`${page.url()}: ${m.text()}`))
  page.on('pageerror', (e) => errors.push(`${page.url()}: ${e.message}`))

  for (const path of ROUTES) {
    await page.setViewportSize({ width: 1280, height: 800 })
    const resp = await page.goto(TARGET + path, { waitUntil: 'networkidle', timeout: 30000 })
    const status = resp ? resp.status() : 'none'
    await page.waitForTimeout(300)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )
    const heroImg = await page.evaluate(() => {
      const img = document.querySelector('img')
      if (!img) return null
      const r = img.getBoundingClientRect()
      return { complete: img.complete, naturalWidth: img.naturalWidth, w: Math.round(r.width) }
    })
    console.log(
      `${path.padEnd(36)} status=${status} overflow=${overflow} firstImg=${
        heroImg ? `${heroImg.w}px loaded=${heroImg.complete}` : 'none'
      }`,
    )
  }

  console.log(`\nConsole errors: ${errors.length || 'none'}`)
  errors.slice(0, 10).forEach((e) => console.log(' -', e))
  await browser.close()
})()
