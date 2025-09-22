import { Page, Locator } from '@playwright/test'

export class HomeSection {
    public readonly page: Page;
    public readonly linkLogo: Locator;
    public readonly linkHome: Locator;
    public readonly headingWelcome: Locator;
    public readonly headingBest: Locator;
    public readonly textTransform: Locator;
    public readonly buttonStartAutomating: Locator;
    public readonly buttonViewServices: Locator;

    constructor(page: Page) {

        this.page = page;
        this.linkLogo = page.getByRole('link', { name: 'Test Automation PH Logo Test' });
        this.linkHome = page.getByRole('navigation').getByRole('link', { name: 'Home' });
        this.headingWelcome = page.getByRole('heading', { name: 'Welcome to Test Automation PH' });
        this.headingBest = page.getByRole('heading', { name: 'Best Software Testing Online' });
        this.textTransform = page.getByText('Transform your application');
        this.buttonStartAutomating = page.getByRole('button', { name: 'Start Automating' });
        this.buttonViewServices = page.getByRole('button', { name: 'View Our Services' });
}
    async navigateToHomeSection(): Promise<void> {
        await this.page.goto('https://testautomationph.netlify.app/');
    }

    async clickLogo(): Promise<void> {
        await this.linkLogo.click();
    }

    async clickHome(): Promise<void> {
        await this.linkHome.click();
    }

    async clickStartAutomating(): Promise<void> {
        await this.buttonStartAutomating.click();
    }

    async clickViewServices(): Promise<void> {
        await this.buttonViewServices.click();
    }

}