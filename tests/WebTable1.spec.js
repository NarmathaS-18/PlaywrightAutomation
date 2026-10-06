import {  test,  expect,  testInfo } from '@playwright/test';


test('Print data from a webtable', async ({ page }, testInfo) => {

await page.goto('https://awesomeqa.com/webtable1.html');
const rows = await page.locator('table[summary="Sample Table"] tbody tr');
const rowCount = await rows.count();

console.log("Row count:", rowCount);

for(let i=0;i<rowCount;i++){
      
      const rowsData = await rows.nth(i).locator('td').allInnerTexts();
      console.log(`Row ${i + 1}:`, rowsData);
}
      await page.pause();

});