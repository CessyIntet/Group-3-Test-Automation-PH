import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import * as fs from "fs";
import * as yaml from "js-yaml";

type LighthouseConfig = {
    output: 'html' | 'json' | 'csv';
    onlyCategories: string[];
    logLevel: 'info' | 'error' | 'silent' | 'warn' | 'verbose';
    thresholds?: Record<string, number>;
    reportPath?: string;
};

function loadConfig(configPath: string): LighthouseConfig {
    const ext = configPath.split('.').pop();
    const filecontent = fs.readFileSync(configPath, 'utf-8');

    if (ext === 'json') {
        return JSON.parse(filecontent);
    } else if (ext === 'yaml' || ext === 'yml') {
        return yaml.load(filecontent) as LighthouseConfig;
    } else {
        throw new Error(`Unsupported config file: ${configPath}`);
    }
}

export async function runLighthouseWithCustomConfig(
    url: string,
    configPath = 'lighthouse.config.yml'
) {
    const config = loadConfig(configPath);
    const chrome = await launch({ chromeFlags: ['--headless'] });

    const options = {
        output: config.output,
        onlyCategories: config.onlyCategories,
        logLevel: config.logLevel,
        port: chrome.port,
    };
    const result = await lighthouse(url, options);

    const reportPath = config.reportPath || `lighthouse-report/labs-custom-lighthouse-report.html`;
    if (result?.report) {
        const reportContent = Array.isArray(result.report) ? result.report.join('') : result.report;
        fs.writeFileSync(reportPath, reportContent);
        console.log(`Lighthouse report saved to ${reportPath}`);
    }
    chrome.kill();

    if (config.thresholds && result) {
        for (const category in config.thresholds) {
            const score = result.lhr.categories?.[category]?.score ?? 0;
            const expected = config.thresholds[category];
            if (score < expected) {
                console.warn(`❌ ${category} score ${score} is below the threshold of ${expected}`);
            } else {
                console.log(`✅ ${category} score ${score} meets the threshold of ${expected}`);
            }
        }
    }
    return result ? result.lhr : undefined;
}