import {test, expect, testinfo} from '@playwright/test';

test('WebTable TestCase', async ({ page }, testinfo) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const forgetPasswordLink = await page.locator('a.list-group-item')
         .filter({hasText: 'Forgotten Password '});
    await forgetPasswordLink.click();

    const privacyPolicy = await page.locator('footer a')
    .filter({hasText: 'Privacy Policy'});

    await expect(privacyPolicy).toHaveAttribute('href', '#privacy-policy');

}
);