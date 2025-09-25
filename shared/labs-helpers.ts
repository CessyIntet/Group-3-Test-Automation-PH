import { Page, TestInfo, expect } from '@playwright/test';

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

/**
 * Test a single dropdown option selection
 */
export async function testDropdownOption(
    page: Page,
    toggleSelector: string,
    optionSelector: string,
    selectedSelector: string
) {
    await page.locator(toggleSelector).click();
    await page.locator(optionSelector).click();
    await expect(page.locator(selectedSelector)).toBeVisible();
}

/**
 * Test multiple dropdown options using a loop
 */
export async function testMultipleDropdownOptions(
    page: Page,
    options: string[],
    toggleTestId: string,
    optionTestIdPrefix: string,
    selectedTestId: string
) {
    for (const option of options) {
        await page.getByTestId(toggleTestId).click();
        await page.getByTestId(`${optionTestIdPrefix}${option}`).click();
        await expect(page.getByTestId(selectedTestId)).toBeVisible();
    }
}

/**
 * Test HTML5 select dropdown with multiple options
 */
export async function testHTML5Dropdown(
    page: Page,
    selectTestId: string,
    selectedTestId: string,
    options: string[]
) {
    for (const option of options) {
        await page.getByTestId(selectTestId).selectOption(option);
        await expect(page.getByTestId(selectedTestId)).toBeVisible();
        await expect(page.getByTestId(selectedTestId)).toContainText(`Selected: ${option}`);
    }
}