import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/report.js';

test('Verify QA Profile Form Save', async ({page}, testInfo) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await takeScreenshot(page, testInfo, 'QA Profile Form Page');

    await page.getByTestId('first-name').fill('Narmatha');
    await page.getByTestId('last-name').fill('S');
    await page.getByRole('radio', { name: 'Female' }).check();

    await takeScreenshot(page, testInfo, 'Personal Information Filled');
    
    await page.getByLabel('Years of Experience').selectOption('4');
    await page.getByLabel('Date').fill('2026-10-02');
    await page.getByRole('radio', { name: 'Automation Tester'}).check();

    for(const tools of ['UFT', 'Selenium WebDriver']){
        await page.getByRole('checkbox', { name: tools }).check();
    }
    for(const continents of ['Asia', 'Europe', 'North America']){
        await page.getByRole('checkbox', { name: continents }).click();
    }
    await page.getByRole('tab', { name: 'Switch Commands'}) .click();
    await expect(page.locator('#selenium-tab-panel')).toContainText('Switch commands');

    await page.getByTestId('upload-image').setInputFiles('tests/test-data/download.jfif');
    await page.getByTestId('download-file').click();

    await takeScreenshot(page, testInfo, 'QA Profile Form Filled');

    await page.pause();

});