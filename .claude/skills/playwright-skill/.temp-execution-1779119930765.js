const { chromium } = require('playwright');
const TARGET = 'http://localhost:3000/events/astoria-maritime';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await (await browser.newContext()).newPage();
  for (const vp of [
    { name: 'detail-desktop', w: 1440, h: 900 },
    { name: 'detail-tablet', w: 900, h: 1100 },
    { name: 'detail-mobile', w: 375, h: 812 },
  ]) {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto(TARGET, { waitUntil: 'networkidle' });
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let i = 1; i <= 10; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), (h * i) / 10);
      await page.waitForTimeout(200);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/${vp.name}.png`, fullPage: true });
    console.log(`✓ /tmp/${vp.name}.png`);
  }
  await browser.close();
})();
