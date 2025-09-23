import { Page, Locator } from '@playwright/test'

export class BlogSection {
    
  public readonly page: Page;

  public readonly linkBlog: Locator;
  public readonly hdgLatestTA: Locator;
  public readonly txtStayUpdated: Locator;
  
  public readonly txtB1Date: Locator;
  public readonly txtB1ReadTime: Locator;
  public readonly hdgB1: Locator;
  public readonly txtB1: Locator;
  public readonly txtB1Auth: Locator;
  
  public readonly txtB2Date: Locator;
  public readonly txtB2ReadTime: Locator;
  public readonly hdgB2: Locator;
  public readonly txtB2: Locator;
  public readonly txtB2Auth: Locator;
  
  public readonly txtB3Ddate: Locator;
  public readonly txtB3ReadTime: Locator;
  public readonly hdgB3: Locator;
  public readonly txtB3: Locator;
  public readonly txtB3Auth: Locator;

  public readonly buttonAllArticles: Locator;
  
constructor(page: Page) {

  this.page = page
  this.linkBlog = page.getByRole('navigation').getByRole('link', { name: 'Blog' })
  this.hdgLatestTA = page.getByRole('heading', { name: 'Latest Test Automation' })
  this.txtStayUpdated = page.getByText('Stay updated with the latest')
  
  this.txtB1Date = page.getByText('📅 January 20,')
  this.txtB1ReadTime = page.getByText('• 8 min read')
  this.hdgB1 = page.getByRole('heading', { name: 'Getting Started with Selenium' })
  this.txtB1 = page.getByText('Learn the fundamentals of')
  this.txtB1Auth = page.getByText('👤 By John Smith')
  
  this.txtB2Date = page.getByText('📅 March 18,')
  this.txtB2ReadTime = page.getByText('• 12 min read')
  this.hdgB2 = page.getByRole('heading', { name: 'API Testing with Postman:' })
  this.txtB2 = page.getByText('Master API test automation')
  this.txtB2Auth = page.getByText('👤 By Jane Cross')
  
  this.txtB3Ddate = page.getByText('📅 May 15,')
  this.txtB3ReadTime = page.getByText('• 10 min read')
  this.hdgB3 = page.getByRole('heading', { name: 'Building Robust Test' })
  this.txtB3 = page.getByText('Discover how to structure')
  this.txtB3Auth = page.getByText('👤 By Russell Reeves')

  this.buttonAllArticles = page.getByRole('button', { name: 'View All Articles' })
}

async navigateToBlog(): Promise<void> {
  await this.page.goto('https://testautomationph.netlify.app/');
  await this.linkBlog.click();
}
}