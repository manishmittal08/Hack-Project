export class BasePage {
    constructor(page) {
        this.page = page;
        this.maybeLaterBtn = page.getByLabel("May be later");
        this.genericModalClose = page.locator('span[class*="close"], div[class*="modal"] .close').first();
    }

    async dismissRandomOverlays() {
        try {
            // Use a short, non-blocking polling timeout to check if the modal is actively visible
            if (await this.maybeLaterBtn.isVisible({ timeout: 1500 })) {
                console.log(" Random overlay detected on current viewport. Dismissing...");
                await this.maybeLaterBtn.click();
                await this.page.waitForTimeout(500); // ⏱️ Wait for animation fade
            } else if (await this.genericModalClose.isVisible({ timeout: 500 })) {
                await this.genericModalClose.click();
            }
        } catch (error) {
            // Silently swallow errors so the primary script execution continues uninterrupted
        }
    }
}