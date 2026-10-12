# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable3.spec.js >> WebTable TestCase
- Location: tests\WebTable3.spec.js:3:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('#footer-links').filter({ hasText: 'Privacy Policy' })
Expected: "#privacy-policy"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" locator('#footer-links').filter({ hasText: 'Privacy Policy' }) with timeout 5000ms
  - waiting for locator('#footer-links').filter({ hasText: 'Privacy Policy' })
    12 × locator resolved to <footer id="footer-links" class="footer-strip">…</footer>
       - unexpected value "null"

```

```yaml
- heading "The Testing Academy" [level=3]
- paragraph:
  - text: A public practice page from
  - strong: The Testing Academy
  - text: for learning multiple element filtering, link collection, footer-link traversal, and targeted clicks.
- heading "Information" [level=4]
- link "About Us":
  - /url: "#about-us"
- link "Delivery Information":
  - /url: "#delivery-information"
- link "Privacy Policy":
  - /url: "#privacy-policy"
- link "Terms & Conditions":
  - /url: "#terms-conditions"
- heading "Customer Service" [level=4]
- link "Contact Us":
  - /url: "#contact-us"
- link "Returns":
  - /url: "#returns-footer"
- link "Site Map":
  - /url: "#site-map"
- link "Brands":
  - /url: "#brands"
- heading "Extras" [level=4]
- link "Gift Certificates":
  - /url: "#gift-certificates"
- link "Affiliate":
  - /url: "#affiliate"
- link "Specials":
  - /url: "#specials"
- link "Support Center":
  - /url: "#support-center"
- heading "My Account" [level=4]
- link "My Account":
  - /url: "#footer-my-account"
- link "Order History":
  - /url: "#footer-order-history"
- link "Wish List":
  - /url: "#footer-wish-list"
- link "Newsletter":
  - /url: "#footer-newsletter"
```

# Test source

```ts
  1  | import {test, expect, testinfo} from '@playwright/test';
  2  | 
  3  | test('WebTable TestCase', async ({ page }, testinfo) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  5  | 
  6  |     const forgetPasswordLink = await page.locator('a.list-group-item')
  7  |          .filter({hasText: 'Forgotten Password '});
  8  |     await forgetPasswordLink.click();
  9  | 
  10 |     const privacyPolicy = await page.locator('#footer-links')
  11 |     .filter({hasText: 'Privacy Policy'});
  12 | 
> 13 |     await expect(privacyPolicy).toHaveAttribute('href', '#privacy-policy');
     |                                 ^ Error: expect(locator).toHaveAttribute(expected) failed
  14 | 
  15 | }
  16 | );
```