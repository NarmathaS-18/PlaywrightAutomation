import { test, expect } from '@playwright/test';

test('WebTable Testcase', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/webtable');

  const row = page.locator('tr').filter({ hasText: 'Rohan Mehta' }).first();
  await expect(row).toBeVisible();
  await row.locator('input').check();

  await page.waitForTimeout(5000);
});
