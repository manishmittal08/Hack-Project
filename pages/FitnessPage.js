import { BasePage } from './BasePage.js';

export class FitnessPage extends BasePage {
    constructor(page) {
        super(page);
        this.filterIcon = page.locator(".filter_drop_icon");
    }

    async expandGymSubMenu() {
        await this.filterIcon.nth(2).click();
        await this.page.waitForTimeout(500);
    }

    async getSubMenuOptions() {
        return await this.page.getByRole("option").allTextContents();
    }
}