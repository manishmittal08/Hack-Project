// import {test,request,expect} from "@playwright/test";
// import { ENV } from '../config/env.js';
// import { config } from "node:process";

// test.only('Justdial API Testing Example', async ({ request }) => {

//   // API URL
//   const response = await request.get(ENV.BASE_URL);

//   // Print Status Code
//   console.log('Status Code:', response.status());

//   // Print Status Text
//   console.log('Status Text:', response.statusText());

//   // Assertions
//   expect(response.status()).toBe(200);
//   expect(response.ok()).toBeTruthy();

//   // Get Response Body as Text
//   const responseText = await response.text();

//   console.log("test passed");
  

//  // console.log('Response Body:', responseText);

// });