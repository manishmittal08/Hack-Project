import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { HomePage } from '../../pages/HomePage.js';
import { FreeListingPage } from '../../pages/FreeListingPage.js';

let homePage, freeListingPage;
let searchBoxStyles, inputCssDetails;


// ---------------- STEP 1 ----------------

Given('I open the Justdial homepage', async function () {

    homePage = new HomePage(this.page);
    freeListingPage = new FreeListingPage(this.page);

    console.log("Opening Justdial...");
    await homePage.open();

    await this.page.waitForTimeout(3000);
    await homePage.handleBanner();
    await this.page.waitForTimeout(1000);
});


// ---------------- STEP 2 ----------------

Then('I should see correct page title and logo', async function () {

    await expect(this.page).toHaveTitle(/justdial/i);
    await expect(homePage.logo).toBeVisible({timeout: 5000});
});


// ---------------- STEP 3 ----------------

When('I validate search box UI properties', async function () {

    await expect(homePage.searchBox).toBeVisible({timeout: 5000});
    await expect(homePage.searchBox).toBeEditable({timeout: 5000});

    searchBoxStyles = await homePage.searchBox.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
            width: styles.width,
            height: styles.height,
            borderRadius: styles.borderRadius,
            borderStyle: styles.borderStyle
        };
    });

    console.log("Search Box Styles:", searchBoxStyles);
});


// ---------------- STEP 4 ----------------

Then('search box CSS properties should be valid', async function () {

    expect(searchBoxStyles.width).toBeDefined();
    expect(parseInt(searchBoxStyles.height)).toBeGreaterThan(0);
});


// ---------------- STEP 5 ----------------

When('I navigate to free listing form', async function () {

    await homePage.clickFreeListing();

    await this.page.waitForTimeout(4000);
});


// ---------------- STEP 6 ----------------

Then('I should validate form input and error UI', async function () {

    await expect(freeListingPage.mobileInput).toBeVisible();

    inputCssDetails = await freeListingPage.mobileInput.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
            fontSize: computed.fontSize,
            fontWeight: computed.fontWeight,
            fontFamily: computed.fontFamily,
            padding: computed.padding
        };
    });

    console.log("Input CSS:", inputCssDetails);

    expect(inputCssDetails.fontSize).toContain('px');

    // Invalid input
    await freeListingPage.enterMobileNumber("12345");
    await this.page.waitForTimeout(500);
    await freeListingPage.submitForm();

    await this.page.waitForTimeout(2000);

    await expect(freeListingPage.errorTextMsg).toBeVisible({timeout: 5000});

    const errorColor = await freeListingPage.errorTextMsg.evaluate(
        el => window.getComputedStyle(el).color
    );

    console.log("Error Color:", errorColor);

    expect(errorColor).toBeDefined();

    await expect(freeListingPage.startNowButton).toBeVisible({timeout: 5000});
    await expect(freeListingPage.startNowButton).toBeEnabled({timeout: 5000});
});