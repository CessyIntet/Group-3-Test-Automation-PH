import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../shared/labs-helpers';

const labs_landing_page_screenshot = '/screenshots/labs-landing-page';
const practice_options_screenshot = '/screenshots/practice-options';
const dark_mode_screenshot = '/screenshots/dark-mode';


test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationph.netlify.app/');
});

test('Should be able to open the Practice Now popup and successfully landed to Test Automation PH Labs', async ({ page }, testInfo) => {
    // ARRANGE
    await expect(page.getByRole('button', { name: 'Practice Now' })).toBeVisible();

    // ACT - wait for the popup to open
    const pagePromise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Practice Now' }).click();
    const page1Promise = await pagePromise;

    // ASSERT - in the new tab, verify if landed to the correct URL
    await expect(page1Promise).toHaveURL('https://labs.testautomationph.com/');
    await expect(page1Promise.getByRole('heading', { name: 'Test Automation PH Labs' })).toBeVisible();
    await takeScreenshot(page, testInfo, 'labs_landing_page_screenshot');
});

test('Should be able to see all the practice options', async ({ page }, testInfo) => {
    // ARRANGE
    await page.goto('https://labs.testautomationph.com/');
    await expect(page.getByText('You can practice your Cypress')).toContainText('You can practice your Cypress');
    await expect(page.getByText('CypressModern web testing for')).toBeVisible();
    await expect(page.getByText('PlaywrightReliable end-to-end')).toBeVisible();
    await expect(page.getByText('SeleniumWeb testing with the')).toBeVisible();

    // ACT
    await takeScreenshot(page, testInfo, 'practice_options_screenshot');
});

test('Should be able to check if the Sidebar button is collapsible', async ({ page }) => {
    // ARRANGE
    await page.goto('https://labs.testautomationph.com/');
    await expect(page.getByTestId('sidebar-title')).toBeVisible();
    await expect(page.getByTestId('sidebar-logo-link')).toBeVisible();
    await expect(page.getByTestId('sidebar-collapse-button')).toBeVisible();

    // ACT & ASSERT
    await page.getByTestId('sidebar-collapse-button').click();
    await expect(page.getByTestId('sidebar-title')).not.toBeVisible();
    await page.getByTestId('sidebar-collapse-button').click();
});

test('Should be able to toggle the theme', async ({ page }, testInfo) => {
    // ARRANGE
    await page.goto('https://labs.testautomationph.com/');
    await expect(page.getByTestId('sidebar-theme-label')).toBeVisible();
    await expect(page.getByTestId('sidebar-theme-toggle')).toBeVisible();

    // ACT
    await page.getByTestId('sidebar-theme-toggle').click();

    // ASSERT
    await expect(page.getByTestId('sidebar-theme-toggle')).toBeVisible(); // icon should changed to moon icon
    await takeScreenshot(page, testInfo, 'dark_mode_screenshot');   // should capture the dark mode
});