import { test, expect } from '@playwright/test';

test('Verify the error message in wingify free trail', async ({ page }) => {

    await page.goto('https://www.wingify.com/free-trial');
    await page.title().then(title => { 
        expect(title).toBe("Wingify");
    
    const description = page.locator("//h1[contains(text,'Hi 👋 Let's get you started')]");
    const  message = page.locator("//p[contains(@class,'js-description')]");
    console.log(description);
    console.log(message);
    });
});
