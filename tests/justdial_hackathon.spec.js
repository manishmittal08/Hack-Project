import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import path from 'path';
import { HomePage } from '../pages/HomePage.js';
import { FreeListingPage } from '../pages/FreeListingPage.js';
import { CarWashPage } from '../pages/CarWashPage.js';
import { FitnessPage } from '../pages/FitnessPage.js';

chromium.use(stealth());

test('Justdial - Continuous Integrated E2E POM Flow', async () => {
    const userDataDir = path.join(process.cwd(), 'jd_reliable_session');

    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        viewport: { width: 1366, height: 768 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        args: ['--disable-blink-features=AutomationControlled']
    });

    const page = context.pages()[0] || await context.newPage();

    // Initialize Page Objects
    const homePage = new HomePage(page);
    const freeListingPage = new FreeListingPage(page);
    const carWashPage = new CarWashPage(page);
    const fitnessPage = new FitnessPage(page);

    // Global Popup Manager
    page.on("popup", async () => {
        try {
            await page.getByLabel("May be later").click().catch(() => {});
            await page.locator("button").nth(5).click().catch(() => {});
        } catch(e) {}
    });

    // ---------------------------------------------------------------------
    // PART 2: FREE LISTING FLOW
    // ---------------------------------------------------------------------
    console.log("Navigating to Justdial Base Portal...");
    await homePage.open();
    // await page.waitForTimeout(1000); // ⏱️ Wait for the landing page elements to completely settle
    await expect(page).toHaveTitle(/justdial/i);
    await homePage.handleBanner();
    // await page.waitForTimeout(500); // ⏱️ Wait for banner close transitions to finish

    console.log("Executing Step 2: Interactive Free Listing Submissions...");
    await homePage.clickFreeListing();
    // await page.waitForTimeout(1000); // ⏱️ Wait for the free listing script chunks to fully hydrate

    // Generate test data layout matching bounds
    const firstDigit = Math.floor(Math.random() * 5) + 1; 
    const remainingDigits = Math.floor(Math.random() * 1000000000); 
    const random_number = (firstDigit * 1000000000 + remainingDigits).toString();

    await freeListingPage.enterMobileNumber(random_number);
    // await page.waitForTimeout(500); // ⏱️ Small natural human delay after typing
    await freeListingPage.submitForm();
    
    // await page.waitForTimeout(500); // ⏱️ Wait for the form processing layout to change
    await expect(page).toHaveURL(/justdial\.com/);

    const errorMsgText = await freeListingPage.getErrorMessage();
    console.log('Number validation error message captured:', errorMsgText.trim());
    expect(errorMsgText).not.toBe('result message did not appear');
    expect(errorMsgText.trim().length).toBeGreaterThan(0);

    // Go back using your precise application button sequences
    await freeListingPage.navigateBack();
    await page.waitForTimeout(1500); // ⏱️ Give the home page ample time to re-render from cache

    // ---------------------------------------------------------------------
    // PART 1: CAR WASH DATA SCRAPER
    // ---------------------------------------------------------------------
    console.log("\nExecuting Step 1: Car Service Scraper Loop...");
    await homePage.searchCategory('Car Service', 'Car Service Centres Category');
   // await page.waitForTimeout(1000); // ⏱️ Wait for the category listing layouts to fully display
    
    await carWashPage.applyFilters();
    //await page.waitForTimeout(1000); // ⏱️ Wait for final filtered search DOM mutations to stop
    
    const services = await carWashPage.extractTopListings(5);

    console.log('--- Displaying 5 Top Rated Car Wash Services ---');
    services.forEach((service, index) => {
        console.log(`${index + 1}. Business Name: ${service.name}`);
        console.log(`   Rating Profile: ${service.rating} ★ (${service.votes} Votes)`);
        console.log(`   Phone Number: ${service.phone}`);
        console.log('--------------------------------------------------');
    });
    expect(services.length).toBeGreaterThan(0);

    // ---------------------------------------------------------------------
    // PART 3: FITNESS GYM DROPDOWN PARSER
    // ---------------------------------------------------------------------
    console.log("\nExecuting Step 3: Gym Option Dataset Extraction...");
    await homePage.clickLogo();
    //await page.waitForTimeout(1000); // ⏱️ Wait for redirect and cleanup back to home portal
    
    await homePage.searchCategory('Gym', 'Gyms near me');
    //await page.waitForTimeout(1000); // ⏱️ Wait for the Gym listing template view to fill
    
    await fitnessPage.expandGymSubMenu();
    //await page.waitForTimeout(500); // ⏱️ Wait for dropdown open sliding animation to rest
    
    const subMenuOptions = await fitnessPage.getSubMenuOptions();

    console.log('----- Sub-menu Items Extracted under Gym -----');
    console.log(subMenuOptions);
    expect(subMenuOptions.length).toBeGreaterThan(0);

    // Wrap execution context cleanly
    //await page.waitForTimeout(500); // Final cooldown delay
    //wait context.close();
});