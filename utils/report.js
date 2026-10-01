//Take and attach a screenshot to the allure report
export async function takeScreenshot(page, testInfo, name) {
    await testInfo.attach(name, {
        body: await page.screenshot({
            fullPage: true,
        }),
        contentType: 'image/png',
    });
}

//Add a text message to the allure report
export async function addTextAttachment(testInfo, message) {
    await testInfo.attach('Step Details', {
        body: Buffer.from(message),
        contentType: 'text/plain',
    });
}
//Capture screenshot and add step information together
export async function reportStep(page, testInfo, stepName) {
    
    await addStep(testInfo, stepName);

    await takeScreenshot(
        page, 
        testInfo, 
        `${stepName} - Screenshot`
    );
}