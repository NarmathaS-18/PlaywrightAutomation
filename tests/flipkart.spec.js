import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/report.js';

test('Verify search functionality in flipkart', async ({ page }, testInfo) => {
    await page.goto('https://www.flipkart.com/');
    await takeScreenshot(page, testInfo, 'Flipkart Home Page');

    const closeButton = page.getByRole('button', { name: /✕|Close/ }).first();
    if (await closeButton.isVisible().catch(() => false)) {
        await closeButton.click();
    }

    const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();
    await searchBox.fill('DSLR Camera');
    await page.getByRole('button', { name: 'Search' }).click();

    await page.waitForURL(/\/search/i, { timeout: 20000 });
    await takeScreenshot(page, testInfo, 'Search Results');

    const productLink = page.locator('a[href*="/p/"]').first();
    await expect(productLink).toBeVisible({ timeout: 20000 });

    const popupPromise = page.waitForEvent('popup').catch(() => null);
    await productLink.click();

    const productPage = await popupPromise;
    const targetPage = productPage ?? page;

    await expect(targetPage.locator('body')).toContainText(/DSLR|Camera|camera/i, { timeout: 30000 });
    await takeScreenshot(targetPage, testInfo, 'Product Page');

    const titleText = await targetPage.locator('h1, h2, h3').filter({ hasText: /DSLR|Camera|camera/i }).first()
        .innerText()
        .catch(() => 'Product title not found');
    console.log(`Product Title: ${titleText}`);

    const priceText = await targetPage.locator('div._30jeq3, span._30jeq3, div._1vC4OE').first().innerText().catch(() => 'Price not found');
    console.log(`Price: ${priceText}`);

    await takeScreenshot(targetPage, testInfo, 'Product Page with Price');
});


