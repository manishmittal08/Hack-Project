import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.searchBox = page.getByRole('combobox', { name: 'Search' });
        this.bannerClose = page.locator('span[aria-label="Close Banner"]').first();
        this.freeListingAnchor = page.locator('#header_freelisting a');
        this.logo = page.getByAltText('Justdial Logo');
    }

    async open() {
        await this.page.setExtraHTTPHeaders({ 'Referer': 'https://www.google.com/' });
        await this.page.goto('https://www.justdial.com/', { waitUntil: 'domcontentloaded' });
        console.log("Checking for immediate popups on Home Page landing...");
        await this.dismissRandomOverlays();
    }

    async handleBanner() {
        await this.dismissRandomOverlays();
        if (await this.bannerClose.isVisible({ timeout: 10000 })) {
            await this.bannerClose.click();
        }
    }

    async clickFreeListing() {
        await this.dismissRandomOverlays();
        await this.freeListingAnchor.evaluate(el => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
        await this.freeListingAnchor.hover();
        await this.page.waitForTimeout(500); 
        await this.freeListingAnchor.click({ force: true });
        await this.dismissRandomOverlays();
        console.log("Navigation triggered via click");
    }

    async searchCategory(keyword, optionName) {
        await this.dismissRandomOverlays();
        await this.searchBox.click();
        await this.searchBox.pressSequentially(keyword, { delay: 200 });
        await this.page.waitForTimeout(500);
        await this.page.getByRole('option', { name: optionName }).locator('a').click();
        await this.page.waitForTimeout(500);
    }

    async clickLogo() {
        await this.logo.click();
        await this.page.waitForTimeout(500);
    }
}