import { chromium } from 'playwright';

const SCRATCHPAD = 'C:/Users/jayde/AppData/Local/Temp/claude/C--WINDOWS-system32/348eb2f7-1930-41c4-9e7a-5b0563bd7f9a/scratchpad';
const BASE = 'http://localhost:5200';

const browser = await chromium.launch({ headless: true, channel: 'msedge' });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

async function shot(url, name, scrollY = 0) {
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1400);
  if (scrollY) await page.evaluate(y => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${SCRATCHPAD}/${name}.png` });
  console.log(`✓ ${name}`);
}

// Home — hero, then stats+services section
await shot('/', 'home_hero');
await shot('/', 'home_services', 1600);
await shot('/', 'home_quote', 3400);

// About
await shot('/about', 'about_header');
await shot('/about', 'about_team', 1100);

// Services
await shot('/services', 'services_top');
await shot('/services', 'services_detail', 900);

// Contact
await shot('/contact', 'contact');

await browser.close();
console.log('Done');
