import { Page, Locator } from '@playwright/test';

export class TestiSection {

  public readonly page: Page

  public readonly linkTesti: Locator;
  public readonly hdgTesti: Locator;
  public readonly textTestiDesc: Locator;
  
  public readonly txtT1Stars: Locator;
  public readonly txtT1: Locator;
  public readonly hdgT1Name: Locator;
  public readonly txtT1Pos: Locator;
  public readonly txtT1Comp: Locator;

  public readonly txtT2Stars: Locator;
  public readonly txtT2: Locator;
  public readonly hdgT2Name: Locator;
  public readonly txtT2Pos: Locator;
  public readonly txtT2Comp: Locator;

  public readonly txtT3Stars: Locator;
  public readonly txtT3: Locator;
  public readonly hdgT3Name: Locator;
  public readonly txtT3Pos: Locator;
  public readonly txtT3Comp: Locator;

constructor (page: Page) {
  this.page = page
  this.linkTesti = page.getByRole('navigation').getByRole('link', { name: 'Testimonials' })
  this.hdgTesti = page.getByRole('heading', { name: 'What Our Students & Clients' })
  this.textTestiDesc = page.getByText('Hear from professionals who')
  
  this.txtT1Stars = page.getByText('★★★★★').first()
  this.txtT1 = page.getByText('"The Selenium WebDriver')
  this.hdgT1Name = page.getByRole('heading', { name: 'Roger Scott' })
  this.txtT1Pos = page.getByText('QA Automation Engineer')
  this.txtT1Comp = page.getByText('Globe Telecom')

  this.txtT2Stars = page.getByText('★★★★★').nth(1)
  this.txtT2 = page.getByText('"Our team\'s productivity')
  this.hdgT2Name = page.getByRole('heading', { name: 'Hans Lim' })
  this.txtT2Pos = page.getByText('Lead QA Engineer')
  this.txtT2Comp = page.getByText('Ayala Land')

  this.txtT3Stars = page.getByText('★★★★★').nth(2)
  this.txtT3 = page.getByText('"From zero automation')
  this.hdgT3Name = page.getByRole('heading', { name: 'Rea Reyes' })
  this.txtT3Pos = page.getByText('Senior Test Automation')
  this.txtT3Comp = page.getByText('Metrobank')
}

  async navigateToTestiSection(): Promise<void> {
    await this.page.goto('https://testautomationph.netlify.app/');
    await this.linkTesti.click();
  }

}