import { Page, TestInfo } from '@playwright/test';

export async function takeScreenshot(
    page: Page, 
    testInfo: TestInfo, 
    screenshotName: string
) {
    const screenshot = await page.screenshot({ fullPage: true });
    
    await testInfo.attach(screenshotName, {
        body: screenshot,
        contentType: 'image/png'
    });
}