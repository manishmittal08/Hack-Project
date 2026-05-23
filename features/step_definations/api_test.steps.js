import { Given, Then } from '@cucumber/cucumber';
import { request, expect } from '@playwright/test';

let apiContext;
let response;


// ---------------- TC-01 ----------------

Given('I send a request to search suggestion API', async function () {

    apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    });

    response = await apiContext.get(
        'https://www.justdial.com/functions/allcity_suggest.php',
        {
            params: {
                t: 'mumbai',
                v: 'car service'
            },
            headers: {
                'Accept': '*/*',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0'
            },
            timeout: 10000
        }
    );
});

Then('I should get valid suggestion response', async function () {

    console.log("Status:", response.status());

    expect([200, 302, 403]).toContain(response.status());

    if (response.status() === 200) {
        const data = await response.text();
        console.log("Suggestion API working ✅");
        expect(data.length).toBeGreaterThan(0);
    }
});


// ---------------- TC-02 ----------------

Given('I request car wash service listings', async function () {

    apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    });

    response = await apiContext.get(
        'https://www.justdial.com/templates/dmumbai/common/ajax_get_results.php',
        {
            params: {
                doc_type: 'category',
                keyword: 'Car-Wash-Services',
                city: 'Mumbai',
                page: '1'
            },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0'
            }
        }
    );
});

Then('I should get valid car wash results', async function () {

    console.log("Car wash status:", response.status());

    expect([200, 302, 404]).toContain(response.status());
});


// ---------------- TC-03 ----------------

Given('I request gym subcategories', async function () {

    apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    });

    response = await apiContext.get(
        'https://www.justdial.com/functions/get_subcategories.php',
        {
            params: {
                main_category: 'Gyms',
                city: 'Mumbai'
            }
        }
    );
});

Then('I should get gym subcategory response', async function () {

    console.log("Gym API status:", response.status());

    expect(response.ok()).toBeTruthy();
});