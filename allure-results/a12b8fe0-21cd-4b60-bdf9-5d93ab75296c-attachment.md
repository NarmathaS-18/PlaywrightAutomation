# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MakeAppointment.spec.js >> Make Appointment
- Location: tests\MakeAppointment.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'next' })

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - link "" [ref=f2e2] [cursor=pointer]:
    - /url: "#"
  - navigation [ref=f2e4]:
    - list [ref=f2e5]:
      - link "" [ref=f2e6] [cursor=pointer]:
        - /url: "#"
      - listitem [ref=f2e8]:
        - link "CURA Healthcare" [ref=f2e9] [cursor=pointer]:
          - /url: ./
      - listitem [ref=f2e10]:
        - link "Home" [ref=f2e11] [cursor=pointer]:
          - /url: ./
      - listitem [ref=f2e12]:
        - link "History" [ref=f2e13] [cursor=pointer]:
          - /url: history.php#history
      - listitem [ref=f2e14]:
        - link "Profile" [ref=f2e15] [cursor=pointer]:
          - /url: profile.php#profile
      - listitem [ref=f2e16]:
        - link "Logout" [ref=f2e17] [cursor=pointer]:
          - /url: authenticate.php?logout
  - banner [ref=f2e18]:
    - generic [ref=f2e19]:
      - heading "CURA Healthcare Service" [level=1] [ref=f2e20]
      - heading "We Care About Your Health" [level=3] [ref=f2e21]
      - link "Make Appointment" [ref=f2e22] [cursor=pointer]:
        - /url: ./index.php#appointment
  - generic [ref=f2e25]:
    - generic [ref=f2e26]:
      - heading "Make Appointment" [level=2] [ref=f2e27]
      - separator [ref=f2e28]
    - generic [ref=f2e29]:
      - generic [ref=f2e30]:
        - generic [ref=f2e31]: Facility
        - combobox "Facility" [ref=f2e33]:
          - option "Tokyo CURA Healthcare Center"
          - option "Hongkong CURA Healthcare Center"
          - option "Seoul CURA Healthcare Center" [selected]
      - generic [ref=f2e36] [cursor=pointer]:
        - checkbox "Apply for hospital readmission" [checked] [ref=f2e37]
        - text: Apply for hospital readmission
      - generic [ref=f2e38]:
        - generic [ref=f2e39]: Healthcare Program
        - generic [ref=f2e40]:
          - generic [ref=f2e41] [cursor=pointer]:
            - radio "Medicare" [ref=f2e42]
            - text: Medicare
          - generic [ref=f2e43] [cursor=pointer]:
            - radio "Medicaid" [checked] [ref=f2e44]
            - text: Medicaid
          - generic [ref=f2e45] [cursor=pointer]:
            - radio "None" [ref=f2e46]
            - text: None
      - generic [ref=f2e47]:
        - generic [ref=f2e48]: Visit Date (Required)
        - generic [ref=f2e50]:
          - textbox "Visit Date (Required)" [ref=f2e51]:
            - /placeholder: dd/mm/yyyy
          - generic [ref=f2e52]: 
      - generic [ref=f2e54]:
        - generic [ref=f2e55]: Comment
        - textbox "Comment" [ref=f2e57]
      - button "Book Appointment" [ref=f2e60] [cursor=pointer]
  - contentinfo [ref=f2e61]:
    - generic [ref=f2e64]:
      - heading [level=4] [ref=f2e65]:
        - strong [ref=f2e66]: CURA Healthcare Service
      - paragraph [ref=f2e67]: Atlanta 550 Pharr Road NE Suite 525Atlanta, GA 30305
      - list [ref=f2e68]:
        - listitem [ref=f2e69]:
          - generic [ref=f2e70]: 
          - text: (678) 813-1KMS
        - listitem [ref=f2e71]:
          - generic [ref=f2e72]: 
          - link "info@katalon.com" [ref=f2e73] [cursor=pointer]:
            - /url: mailto:info@katalon.com
      - list [ref=f2e74]:
        - listitem [ref=f2e75]:
          - link "" [ref=f2e76] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e78]:
          - link "" [ref=f2e79] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e81]:
          - link "" [ref=f2e82] [cursor=pointer]:
            - /url: "#"
      - separator [ref=f2e84]
      - paragraph [ref=f2e85]: Copyright © CURA Healthcare Service 2026
    - link "" [ref=f2e86] [cursor=pointer]:
      - /url: "#top"
  - table [ref=f2e90]:
    - rowgroup [ref=f2e91]:
      - row
      - row [ref=f2e92]:
        - columnheader "«" [ref=f2e93] [cursor=pointer]
        - columnheader "October 2026" [ref=f2e94] [cursor=pointer]
        - columnheader "»" [ref=f2e95] [cursor=pointer]
      - row [ref=f2e96]:
        - columnheader "Su" [ref=f2e97]
        - columnheader "Mo" [ref=f2e98]
        - columnheader "Tu" [ref=f2e99]
        - columnheader "We" [ref=f2e100]
        - columnheader "Th" [ref=f2e101]
        - columnheader "Fr" [ref=f2e102]
        - columnheader "Sa" [ref=f2e103]
    - rowgroup [ref=f2e104]:
      - row [ref=f2e105]:
        - cell "27" [ref=f2e106]
        - cell "28" [ref=f2e107]
        - cell "29" [ref=f2e108]
        - cell "30" [ref=f2e109]
        - cell "1" [ref=f2e110]
        - cell "2" [ref=f2e111]
        - cell "3" [ref=f2e112]
      - row [ref=f2e113]:
        - cell "4" [ref=f2e114]
        - cell "5" [ref=f2e115]
        - cell "6" [ref=f2e116]
        - cell "7" [ref=f2e117]
        - cell "8" [ref=f2e118]
        - cell "9" [ref=f2e119]
        - cell "10" [ref=f2e120]
      - row [ref=f2e121]:
        - cell "11" [ref=f2e122]
        - cell "12" [ref=f2e123]
        - cell "13" [ref=f2e124]
        - cell "14" [ref=f2e125]
        - cell "15" [ref=f2e126]
        - cell "16" [ref=f2e127]
        - cell "17" [ref=f2e128]
      - row [ref=f2e129]:
        - cell "18" [ref=f2e130]
        - cell "19" [ref=f2e131]
        - cell "20" [ref=f2e132]
        - cell "21" [ref=f2e133]
        - cell "22" [ref=f2e134]
        - cell "23" [ref=f2e135]
        - cell "24" [ref=f2e136]
      - row [ref=f2e137]:
        - cell "25" [ref=f2e138]
        - cell "26" [ref=f2e139]
        - cell "27" [ref=f2e140]
        - cell "28" [ref=f2e141]
        - cell "29" [ref=f2e142]
        - cell "30" [ref=f2e143]
        - cell "31" [ref=f2e144]
      - row [ref=f2e145]:
        - cell "1" [ref=f2e146]
        - cell "2" [ref=f2e147]
        - cell "3" [ref=f2e148]
        - cell "4" [ref=f2e149]
        - cell "5" [ref=f2e150]
        - cell "6" [ref=f2e151]
        - cell "7" [ref=f2e152]
    - rowgroup:
      - row
      - row
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
> 31 |     await page.getByRole('button', { name: 'next'}).click();
     |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |     await page.getByRole('gridcell', { name: '10'}).click();
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