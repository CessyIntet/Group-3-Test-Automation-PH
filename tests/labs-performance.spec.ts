import { test } from '@playwright/test';
import { runLighthouseWithCustomConfig } from '../shared/labs-lighthouse-helpers';
import * as fs from 'fs';

test('Customer Lighthouse config', async ({ }, testInfo) => {
    const url = 'https://labs.testautomationph.com/';
    const result = await runLighthouseWithCustomConfig(url, 'lighthouse.config.marianne.yml');

    const reportPath = 'lighthouse-report/labs-custom-lighthouse-report.html';
    if (fs.existsSync(reportPath)) {
        const reportContent = fs.readFileSync(reportPath);
        await testInfo.attach('Lighthouse Report', {
            body: reportContent,
            contentType: 'text/html',
        });
    }

    if (result && result.categories) {
        const summary = Object.entries(result.categories)
            .map(([cat, val]) => `${cat}: ${(val as { score: number }).score}`)
            .join('\n');
        await testInfo.attach('Lighthouse Scores Summary', {
            body: Buffer.from(summary),
            contentType: 'text/plain',
        });
    }
});