# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MakeAppointment.spec.js >> Make Appointment
- Location: tests\MakeAppointment.spec.js:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'next' })

```

# Test source

```ts
  1  | import { test, expect, testInfo } from '@playwright/test';
  2  | import { takeScreenshot } from '../utils/report.js';
  3  | 
  4  | test('Make Appointment', async ({ page }, testInfo) => {
  5  |     await page.goto('https://katalon-demo-cura.herokuapp.com/');
  6  | 
  7  |     await takeScreenshot(page, testInfo, 'Home Page');
  8  | 
  9  |     const title = await page.title();
  10 |     console.log('Page Title:', title);
  11 |     expect(title).toBe('CURA Healthcare Service');
  12 | 
  13 |     await page.getByRole('link', { name: 'Make Appointment' }).click();
  14 | 
  15 |     await takeScreenshot(page, testInfo, 'LoginPage');
  16 | 
  17 |     await page.getByLabel('Username').fill('John Doe');
  18 |     await page.getByLabel('Password').fill('ThisIsNotAPassword');
  19 | 
  20 |     await page.getByRole('button', { name: 'Login' }).click();
  21 | 
  22 |     await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');
  23 | 
  24 |     await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  25 | 
  26 |     await page.getByRole('radio', { name: 'Medicaid' }).check();
  27 | 
  28 |     //await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill('10/10/2026');
  29 | 
  30 |     await page.locator('.input-group-addon').click();
> 31 |     await page.getByRole('columnheader', { name: '»' }).click();
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  32 |     await page.getByRole('cell', { name: '10' }).click();
  33 | 
  34 | 
  35 |     await page.getByPlaceholder('Comment').fill('This is a test comment.');
  36 | 
  37 |     await page.getByRole('button', { name: 'Book Appointment' }).click();
  38 | 
  39 |     await takeScreenshot(page, testInfo, 'AppointmentFormFilled');
  40 | 
  41 |     await page.pause();
  42 | 
  43 | });
```