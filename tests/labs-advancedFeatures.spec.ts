import { test, expect } from '../shared/labs-base'

test.describe('Advanced Features Submenus', async () => {

    test.beforeEach(async ({ labsFeaturePage }) => {
        await labsFeaturePage.goto();
    });
    test('Navigate the Advanced Forms Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyAdvancedFeaturesGroupVisibility();
        await page.getByTestId('sidebar-group-title-advanced-features').click();
        await page.getByTestId('sidebar-item-advanced-forms').click();

        await expect(page.getByRole('heading', { name: 'Advanced Forms' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the E-com Workflows Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyAdvancedFeaturesGroupVisibility();
        await page.getByTestId('sidebar-group-title-advanced-features').click();
        await page.getByTestId('sidebar-item-ecom-workflows').click();

        await expect(page.getByRole('heading', { name: 'E-commerce Workflows' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });

    test('Navigate the ERP Workflows Submenu', async ({ labsFeaturePage, page }) => {
        await labsFeaturePage.verifyAdvancedFeaturesGroupVisibility();
        await page.getByTestId('sidebar-group-title-advanced-features').click();
        await page.getByTestId('sidebar-item-erp-workflows').click();

        await expect(page.getByRole('heading', { name: 'ERP Workflows' })).toBeVisible();

        // Note: Page is under construction for future implementation
        await expect(page.getByText('Page under construction')).toBeVisible();
    });
});
