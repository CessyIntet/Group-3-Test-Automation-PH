import { expect, Page } from '@playwright/test';

export class LabsFeaturePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://labs.testautomationph.com/');
    }

    async verifyBasicInteractionsGroupVisibility() {
        await expect(this.page.getByTestId('sidebar-group-title-basic-interactions')).toBeVisible();
        await expect(this.page.getByTestId('sidebar-group-chevron-basic-interactions')).toBeVisible();
    }

    async verifyDataHandlingGroupVisibility() {
        await expect(this.page.getByTestId('sidebar-group-title-data-handling')).toBeVisible();
        await expect(this.page.getByTestId('sidebar-group-chevron-data-handling')).toBeVisible();
    }

    async verifyUIElementsGroupVisibility() {
        await expect(this.page.getByTestId('sidebar-group-title-ui-elements')).toBeVisible();
        await expect(this.page.getByTestId('sidebar-group-chevron-ui-elements')).toBeVisible();
    }

    async verifyAdvancedFeaturesGroupVisibility() {
        await expect(this.page.getByTestId('sidebar-group-title-advanced-features')).toBeVisible();
        await expect(this.page.getByTestId('sidebar-group-chevron-advanced-features')).toBeVisible();
    }

    async clickBasicInteractions() {
        await this.page.getByTestId('sidebar-group-title-basic-interactions').click();
        await expect(this.page.getByTestId('sidebar-group-chevron-basic-interactions')).toHaveClass(/rotate-180/);
    }

    async clickDataHandling() {
        await this.page.getByTestId('sidebar-group-header-data-handling').click();
        await expect(this.page.getByTestId('sidebar-group-chevron-data-handling')).toHaveClass(/rotate-180/);
    }

    async clickUIElements() {
        await this.page.getByTestId('sidebar-group-title-ui-elements').click();
        await expect(this.page.getByTestId('sidebar-group-chevron-ui-elements')).toHaveClass(/rotate-180/);
    }

    async clickAdvancedFeatures() {
        await this.page.getByTestId('sidebar-group-title-advanced-features').click();
        await expect(this.page.getByTestId('sidebar-group-chevron-advanced-features')).toHaveClass(/rotate-180/);
    }
}