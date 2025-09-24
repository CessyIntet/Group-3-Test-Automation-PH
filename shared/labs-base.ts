import { test as base, Page } from '@playwright/test';
import { LabsFeaturePage } from '../pages/LabsFeaturePage';

type MyFixtures = {
    labsFeaturePage: LabsFeaturePage;
};

export const test = base.extend<{
    labsFeaturePage: LabsFeaturePage;
}>({
    labsFeaturePage: async ({ page }: { page: Page }, use: (value: LabsFeaturePage) => Promise<void>) => {
        await use(new LabsFeaturePage(page));
    },
});

export { expect } from '@playwright/test';