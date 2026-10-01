import { test, expect } from '@playwright/test';

test('Verify search functionality in flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();
    await page.getByRole('button', { name: '✕' }).click();

    await searchBox.fill('DSLR Camera');
    await page.getByRole('button', { name: 'Search' }).click();

    await expect(page).toHaveURL(/search/i);

    /*const laptop = await page.locator("//div[@class='UCc1lI']").first().waitFor();
    await laptop.click();*/
    const newPagePromise = page.waitForEvent('popup');

    const firstLaptop = await page.locator('.jIjQ8S').first();
    await firstLaptop.click();

    const productPage = await newPagePromise;

    const firstLaptopTitle = await productPage.getByRole('heading').first().innerText();
    console.log(`First Laptop Title: ${firstLaptopTitle}`);

    const Price = await productPage.locator('text=/₹[0-9,]+/').first().innerText();

    console.log(`Price: ${Price}`);



    await productPage.pause();

});


