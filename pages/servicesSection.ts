import { Page, Locator } from '@playwright/test';

export class ServicesSection {
    
    public readonly page: Page;

    public readonly buttonServices: Locator;
    public readonly linkTAAS: Locator;
    public readonly linkCorpTrg: Locator;

    public readonly hdgServicesWP: Locator;
    public readonly textAboutTAPH: Locator;
  
    public readonly imgTAAS: Locator;
    public readonly hdgTAAS: Locator;
    public readonly textTAASDesc: Locator;
  
    public readonly imgCT: Locator;
    public readonly hdgCT: Locator;
    public readonly textCTDesc: Locator;

    public readonly imgIT: Locator;
    public readonly hdgIT: Locator;
    public readonly textITDesc: Locator;


constructor (page: Page) {
    
    this.page = page;

    this.buttonServices = page.getByRole('button', { name: 'Services ▼' });
    this.linkTAAS = page.getByRole('link', { name: 'Testing-As-A-Service' });
    this.linkCorpTrg = page.getByRole('link', { name: 'Corporate Training' });

    this.hdgServicesWP = page.getByRole('heading', { name: 'The Services We Provide' });
    this.textAboutTAPH = page.getByText('At Test Automation PH, we');
  
    this.imgTAAS = page.getByRole('img', { name: 'Testing-As-A-Service' });
    this.hdgTAAS = page.getByRole('heading', { name: 'Testing-As-A-Service' });
    this.textTAASDesc = page.getByText('We offer a scalable and on-');
  
    this.imgCT = page.getByRole('img', { name: 'Corporate Training and' });
    this.hdgCT = page.getByRole('heading', { name: 'Corporate Training' });
    this.textCTDesc = page.getByText('We empower your teams with');

    this.imgIT = page.getByRole('img', { name: 'Individual Training and' });
    this.hdgIT = page.getByRole('heading', { name: 'Individual Training' });
    this.textITDesc = page.getByText('We designed our Test');
    }

    async navigateToServicesSection(): Promise<void> {
        await this.page.goto('https://testautomationph.netlify.app/');
        await this.buttonServices.click();
        await this.linkTAAS.click();
    }
};