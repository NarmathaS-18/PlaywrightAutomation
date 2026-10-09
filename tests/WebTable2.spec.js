import { test, expect, testinfo } from '@playwright/test';

test ('Find a person in a webtable', async ({ page }, testinfo) => {
    await page.goto('https://awesomeqa.com/webtable.html');

    
    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

for (let i=2; i<=rows; i++){
    for (let j=1; j<=cols; j++){
        const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
         const data = await page.locator(dynamicPath).innerText();

         if( data.includes('Helen Bennett')){
            const country = await page.locator(`${dynamicPath}/following-sibling::td`).innerText();
        
         console.log(`Helen Bennett is from ${country}`);

         //await page.pause();
         }
        }
    }

});