const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:3000';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  const sets = [
    { name: 'fp-desktop-1440', w: 1440, h: 900 },
    { name: 'fp-tablet-1024', w: 1024, h: 768 },
    { name: 'fp-tablet-900', w: 900, h: 1100 },
    { name: 'fp-tablet-768', w: 768, h: 1100 },
    { name: 'fp-mobile-375', w: 375, h: 812 },
  ];
  for (const s of sets) {
    await page.setViewportSize({ width: s.w, height: s.h });
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    // Trigger reveals by scrolling through
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), (h * i) / steps);
      await page.waitForTimeout(250);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(800);
    await page.screenshot({ path: `/tmp/${s.name}.png`, fullPage: true });
    console.log(`✓ /tmp/${s.name}.png`);
  }
  await browser.close();
})();
