import { BasePage } from './BasePage.js';

export class CarWashPage extends BasePage {
    constructor(page) {
        super(page);
        this.listings = page.locator('.resultbox_info');
    }

    async applyFilters() {
        // Ratings
        await this.page.getByRole('combobox', { name: 'Ratings' }).click();
        const ratingOption = this.page.getByRole('option', { name: 'Ratings 4.0+' }).first();
        await ratingOption.waitFor({ state: 'visible', timeout: 5000 });
        await ratingOption.click();
        await this.page.waitForTimeout(500);

        // Sort By
        await this.page.getByRole('combobox', { name: 'Sort by' }).click();
        await this.page.getByRole('option', { name: 'Distance' }).click();
        await this.page.waitForTimeout(500);

        // Top Rated
        await this.page.getByRole('combobox', { name: 'Top Rated' }).click();
        await this.page.waitForTimeout(500);
        
        await this.listings.first().waitFor({ state: 'visible', timeout: 30000 });
    }

    async extractTopListings(limit = 5) {
        const count = await this.listings.count();
        let results = [];
        let validCounter = 0;

        for (let i = 0; i < count && validCounter < limit; i++) {
            const card = this.listings.nth(i);
            await card.scrollIntoViewIfNeeded();

            const name = await card.locator('.resultbox_title_anchor').first().innerText();
            const ratingText = await card.locator('.resultbox_totalrate').first().innerText().catch(() => '0');
            const votesText = await card.locator('.resultbox_countrate').first().innerText().catch(() => '0');
            //await page.pause();

            const rating = parseFloat(ratingText);
            const votes = parseInt(votesText.replace(/[^0-9]/g, ''), 10) || 0;

            if (votes > 20) {
                const phoneEl = await card.locator('div.callbutton span.callcontent.callNowAnchor, span.callcontent.callNowAnchor, .callcontent.callNowAnchor, .callcontent, .contact-number, .call_now_action, [data-phone]').first();
                let phone = 'Contact info hidden';
                
                if (await phoneEl.count() > 0) {
                    phone = await phoneEl.getAttribute('data-phone');
                    if (!phone) {
                        phone = await phoneEl.innerText().catch(() => '');
                    }
                    phone = phone ? phone.trim() : '';
                    if (!phone || /^(show\s+)?number$/i.test(phone) || /show number/i.test(phone)) {
                        phone = 'Contact info hidden';
                    }
                }

                results.push({ name: name.trim(), rating, votes, phone });
                validCounter++;
            }
        }
        return results;
    }
}