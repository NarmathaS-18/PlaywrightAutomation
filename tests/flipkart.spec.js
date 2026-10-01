import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/report.js';

test('Verify search functionality in flipkart', async ({ page }, testInfo) => {

    await page.goto('https://www.flipkart.com/');

    await takeScreenshot(page, testInfo, 'Flipkart Home Page');

    //await captureScreen(page, testInfo, 'Home Page');

    const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();
    await page.getByRole('button', { name: '✕' }).click();

    await searchBox.fill('DSLR Camera');
    await page.getByRole('button', { name: 'Search' }).click();

    //await captureScreen(page, testInfo, 'Search Results');

    await takeScreenshot(page, testInfo, 'Search Results');

    await expect(page).toHaveURL(/search/i);

    const newPagePromise = page.waitForEvent('popup');

    const firstLaptop = await page.locator('.jIjQ8S').first();
    await firstLaptop.click();

    const productPage = await newPagePromise;

    await takeScreenshot(productPage, testInfo, 'Product Page');

    //await captureScreen(page, testInfo, 'Product');

    const firstLaptopTitle = await productPage.getByRole('heading').first().innerText();
    console.log(`First Laptop Title: ${firstLaptopTitle}`);

    const Price = await productPage.locator('text=/₹[0-9,]+/').first().innerText();

    console.log(`Price: ${Price}`);

    await takeScreenshot(productPage, testInfo, 'Product Page with Price');


    // await captureScreen(productPage, testInfo, 'Product Page with Price');

    await productPage.pause();

});

