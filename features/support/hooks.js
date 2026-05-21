// const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
// const { chromium } = require('playwright-extra');
// const stealth = require('puppeteer-extra-plugin-stealth');

// chromium.use(stealth());

// setDefaultTimeout(120 * 1000); // ✅ 2 mins (long flow)

// Before(async function () {
//     const path = require('path');

//     const userDataDir = path.join(process.cwd(), 'jd_reliable_session');

//     this.context = await chromium.launchPersistentContext(userDataDir, {
//         headless: false,
//         viewport: { width: 1366, height: 768 },
//         userAgent:
//             'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
//         args: ['--disable-blink-features=AutomationControlled']
//     });

//     this.page = this.context.pages()[0] || await this.context.newPage();

//     // ✅ Popup handler
//     this.page.on('popup', async () => {
//         try {
//             await this.page.getByLabel("May be later").click().catch(() => {});
//             await this.page.locator("button").nth(5).click().catch(() => {});
//         } catch (e) {}
//     });
// });

// After(async function () {
//     await this.context.close();
// });
// ``

import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

setDefaultTimeout(120 * 1000);

Before(async function () {
    const path = await import('path');

    const userDataDir = path.join(process.cwd(), 'jd_reliable_session');

    this.context = await chromium.launchPersistentContext(userDataDir, {
        headless: false
    });

    this.page = this.context.pages()[0] || await this.context.newPage();
});

After(async function () {
    await this.context.close();
});
