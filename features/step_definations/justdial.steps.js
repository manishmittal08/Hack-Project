
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { HomePage } from '../../pages/HomePage.js';
import { FreeListingPage } from '../../pages/FreeListingPage.js';
import { CarWashPage } from '../../pages/CarWashPage.js';
import { FitnessPage } from '../../pages/FitnessPage.js';

let homePage, freeListingPage, carWashPage, fitnessPage;
let services, subMenuOptions;

Given('I launch the Justdial application', async function () {

    const page = this.page;

    homePage = new HomePage(page);
    freeListingPage = new FreeListingPage(page);
    carWashPage = new CarWashPage(page);
    fitnessPage = new FitnessPage(page);

    console.log("Navigating to Justdial...");
    await homePage.open();

    await expect(page).toHaveTitle(/justdial/i);
    await this.page.waitForTimeout(3000);

    await homePage.handleBanner();
    await this.page.waitForTimeout(1000);
});


// ------------------ FREE LISTING FLOW ------------------

When('I perform free listing flow', async function () {
    console.log("Executing Free Listing Flow...");
    if (typeof homePage.dismissRandomOverlays === 'function') {
        await homePage.dismissRandomOverlays();
    }

    await homePage.clickFreeListing();

    const firstDigit = Math.floor(Math.random() * 5) + 1;
    const remainingDigits = Math.floor(Math.random() * 1000000000);
    const randomNumber = (firstDigit * 1000000000 + remainingDigits).toString();

    this.generatedNumber = randomNumber;

    await freeListingPage.enterMobileNumber(randomNumber);
    await this.page.waitForTimeout(500);
    await freeListingPage.submitForm();

    await expect(this.page).toHaveURL(/justdial\.com/);
});

Then('I validate mobile number error', async function () {
    await this.page.waitForTimeout(1000);
    const errorMsg = await freeListingPage.getErrorMessage();

    console.log("Validation message:", errorMsg);

    expect(errorMsg.trim().length).toBeGreaterThan(0);

    await freeListingPage.navigateBack();
    await this.page.waitForTimeout(2000);
});


// ------------------ CAR SERVICE FLOW ------------------

When('I extract car service data', async function () {
    console.log("Extracting Car Services...");
    if (typeof homePage.dismissRandomOverlays === 'function') {
        await homePage.dismissRandomOverlays();
    }

    await homePage.searchCategory('Car Service', 'Car Service Centres Category');
    await this.page.waitForTimeout(2000);
    await carWashPage.applyFilters();
    await this.page.waitForTimeout(2000);

    services = await carWashPage.extractTopListings(5);
});

Then('I should get top car services', async function () {

    console.log("Car Services Data:");
    
    services.forEach((s, i) => {
        console.log(`${i + 1}. ${s.name} | ${s.rating}★ | ${s.phone}`);
    });

    expect(services.length).toBeGreaterThan(0);
});


// ------------------ FITNESS FLOW ------------------

When('I extract gym dropdown data', async function () {

    console.log("Extracting Gym Data...");

    await homePage.clickLogo();
    await this.page.waitForTimeout(2000); 

    if (typeof homePage.dismissRandomOverlays === 'function') {
        await homePage.dismissRandomOverlays();
    }

    await homePage.searchCategory('Gym', 'Gyms near me');
    await this.page.waitForTimeout(2000);
    await fitnessPage.expandGymSubMenu();
    await this.page.waitForTimeout(2000);

    subMenuOptions = await fitnessPage.getSubMenuOptions();
});

Then('I should get gym submenu options', async function () {

    console.log("Gym Options:");
    console.log(subMenuOptions);

    expect(subMenuOptions.length).toBeGreaterThan(0);
});