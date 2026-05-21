import { BasePage } from './BasePage.js';

export class FreeListingPage extends BasePage {
    constructor(page) {
        super(page);
        this.mobileInput = page.locator(".entermobilenumber_input__eCrdc").first();
        this.startNowButton = page.locator(".entermobilenumber_innertext__sRcH7").first();
        this.errorTextMsg = page.locator(".entermobilenumber_error__text__uPM09");
        this.backBtn = page.locator(".secondarybutton span");
    }

    async enterMobileNumber(number) {
        await this.mobileInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.mobileInput.pressSequentially(number, { delay: 200 });
    }

    async submitForm() {
        await this.startNowButton.click();
    }

    async getErrorMessage() {
        try {
            await this.errorTextMsg.waitFor({ state: 'visible', timeout: 5000 });
            return await this.errorTextMsg.textContent();
        } catch (error) {
            return 'result message did not appear';
        }
    }

    async navigateBack() {
        await this.backBtn.click();
        await this.page.goBack();
        await this.page.waitForTimeout(500);
    }
}