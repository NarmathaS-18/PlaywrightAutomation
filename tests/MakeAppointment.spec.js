import { test, expect, testInfo } from '@playwright/test';
import { takeScreenshot } from '../utils/report.js';

test('Make Appointment', async ({ page }, testInfo) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await takeScreenshot(page, testInfo, 'Home Page');

    const title = await page.title();
    console.log('Page Title:', title);
    expect(title).toBe('CURA Healthcare Service');

    await page.getByRole('link', { name: 'Make Appointment' }).click();

    await takeScreenshot(page, testInfo, 'LoginPage');

    await page.getByLabel('Username').fill('John Doe');
    await page.getByLabel('Password').fill('ThisIsNotAPassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');

    await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();

    await page.getByRole('radio', { name: 'Medicaid' }).check();

    //await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill('10/10/2026');

    await page.locator('.input-group-addon').click();
    await page.getByRole('columnheader', { name: '»' }).click();
    await page.getByRole('cell', { name: '10' }).click();


    await page.getByPlaceholder('Comment').fill('This is a test comment.');

    await page.getByRole('button', { name: 'Book Appointment' }).click();

    await takeScreenshot(page, testInfo, 'AppointmentFormFilled');

    await page.pause();

});