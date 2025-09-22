import { test, expect } from '../shared/base';

test.describe('Sidebar Functionality', () => {

    test.beforeEach(async ({ labsFeaturePage }) => {
            await labsFeaturePage.goto();
        });

    test('Should be able to see all the basic interaction options and chevron arrow rotates when submenu is expanded', async ({ page, labsFeaturePage }) => {
        // ARRANGE
        await labsFeaturePage.verifyBasicInteractionsGroupVisibility();

        //ACT
        await labsFeaturePage.clickBasicInteractions();

        // ASSERT
        await expect(page.getByTestId('sidebar-item-login-form')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-registration-form')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-button-interactions')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-dropdowns-selectors')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-checkboxes-radio-buttons')).toBeVisible();
    });

    test('Should be able to see all the data handling options when expanded', async ({ page, labsFeaturePage }) => {
        // ARRANGE
        await labsFeaturePage.verifyDataHandlingGroupVisibility();

        // ACT
        await labsFeaturePage.clickDataHandling();

        // ASSERT
        await expect(page.getByTestId('sidebar-item-dynamic-table')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-api-interactions')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-file-upload')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-database-testing')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-form-validation')).toBeVisible();
    });

    test('Should be able to see all the UI elements when expanded', async ({ page, labsFeaturePage }) => {
        // ARRANGE
        await labsFeaturePage.verifyUIElementsGroupVisibility();

        // ACT
        await labsFeaturePage.clickUIElements();

        // ASSERT
        await expect(page.getByTestId('sidebar-item-modals-popups')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-drag-drop')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-tooltips')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-tabs-accordions')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-alerts-notifications')).toBeVisible();
    });

    test('Should be able to see all the advanced features when expanded', async ({ page, labsFeaturePage }) => {
        // ARRANGE
        await labsFeaturePage.verifyAdvancedFeaturesGroupVisibility();

        // ACT
        await labsFeaturePage.clickAdvancedFeatures();

        // ASSERT
        await expect(page.getByTestId('sidebar-item-advanced-forms')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-ecom-workflows')).toBeVisible();
        await expect(page.getByTestId('sidebar-item-erp-workflows')).toBeVisible();
    });
});