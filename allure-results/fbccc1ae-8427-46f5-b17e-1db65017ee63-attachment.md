# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable2.spec.js >> Find a person in a webtable
- Location: tests\WebTable2.spec.js:3:5

# Error details

```
ReferenceError: i is not defined
```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
```

# Test source

```ts
  1  | import { test, expect, testinfo } from '@playwright/test';
  2  | 
  3  | test ('Find a person in a webtable', async ({ page }, testinfo) => {
  4  |     await page.goto('https://awesomeqa.com/webtable.html');
  5  | 
  6  |     
  7  |     const firstPart = "//table[@id='customers']/tbody/tr[";
  8  |     const secondPart = "]/td[";
  9  |     const thirdPart = "]";
  10 | 
  11 | const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
  12 | const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
  13 | 
> 14 | for (i=2; i<=rows; i++){
     |       ^ ReferenceError: i is not defined
  15 |     for (j=1; j<=cols; j++){
  16 |         const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
  17 |          const data = await page.locator(dynamicPath).innerText();
  18 | 
  19 |          if( data.includes('Helen Bennett')){
  20 |             const country = await page.locator(`${dynamicPath}/following-sibling::td`).innerText();
  21 |         
  22 |          console.log(`Helen Bennett is from ${country}`);
  23 | 
  24 |          await page.pause();
  25 |          }
  26 |         }
  27 |     }
  28 | 
  29 | });
```