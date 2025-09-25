import { test, expect } from '../shared/labs-base'

test.describe('UI Element Submenus', async () => {

    test.beforeEach(async ({ labsFeaturePage }) => {
        await labsFeaturePage.goto();
    });

    test('Navigate the Modals and Popups Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyUIElementsGroupVisibility();
        await page.getByTestId('sidebar-group-title-ui-elements').click();
        await page.getByTestId('sidebar-item-modals-popups').click();

        await expect(page.getByRole('heading', { name: 'Modals and Popups' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the Drag and Drop Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyUIElementsGroupVisibility();
        await page.getByTestId('sidebar-group-title-ui-elements').click();
        await page.getByTestId('sidebar-item-drag-drop').click();

        await expect(page.getByRole('heading', { name: 'Drag and Drop' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the Tooltips Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyUIElementsGroupVisibility();
        await page.getByTestId('sidebar-group-title-ui-elements').click();
        await page.getByTestId('sidebar-item-tooltips').click();

        await expect(page.getByRole('heading', { name: 'Tooltips' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the Tabs and Accordions Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyUIElementsGroupVisibility();
        await page.getByTestId('sidebar-group-title-ui-elements').click();
        await page.getByTestId('sidebar-item-tabs-accordions').click();

        await expect(page.getByRole('heading', { name: 'Tabs and Accordions' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the Alerts and Notifications Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyUIElementsGroupVisibility();
        await page.getByTestId('sidebar-group-title-ui-elements').click();
        await page.getByTestId('sidebar-item-alerts-notifications').click();

        await expect(page.getByRole('heading', { name: 'Alerts and Notifications' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });
});



