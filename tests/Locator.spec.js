//const { test, expect } = require("@playwright/test");

import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
         
    await page.locator('id=login2').click();
    await page.fill('#loginusername', 'Dunphy');
    await page.fill("input[id='loginpassword']", 'dunphy');
    await page.click("//button[text()='Log in']");

   const logoutlink = await page.locator('id=logout2');

   await expect(logoutlink).toBeVisible();

   await page.close();

});
