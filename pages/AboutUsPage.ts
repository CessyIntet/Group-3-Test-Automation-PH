import { Page, Locator, expect } from '@playwright/test';

export class AboutUsPage {

   readonly AboutUsLink: Locator;
   readonly HomeLink: Locator;
   readonly ServicesLink: Locator;
   readonly TestingAsAServiceLink: Locator;
   readonly TestimonialsLink: Locator;
   readonly BlogLink: Locator;
    readonly ContactUsLink: Locator;
    readonly PracticeNowLink: Locator;

  // Locators

    constructor(public readonly page: Page) {
    // -> Initialize locators

     this.AboutUsLink = page.getByRole('navigation').getByRole('link', { name: 'About Us' });
     this.HomeLink = page.getByRole('navigation').getByRole('link', { name: 'Home' });
     this.ServicesLink = page.getByRole('button', { name: 'Services ▼' });
     this.TestingAsAServiceLink = page.getByRole('link', { name: 'Testing-As-A-Service' });
     this.TestimonialsLink = page.getByRole('navigation').getByRole('link', { name: 'Testimonials' });
     this.BlogLink = page.getByRole('navigation').getByRole('link', { name: 'Blog' });
     this.ContactUsLink = page.getByRole('navigation').getByRole('link', { name: 'Contact Us' }); 
      this.PracticeNowLink = page.getByRole('button', { name: 'Practice Now' });

     }

  // methods

   async navigateTo(): Promise<void> {
    await this.page.goto('https://testautomationph.netlify.app/');
     await this.AboutUsLink.click();
  }

  async VerifyNavigationMenuItems(): Promise<void> {
    await expect(this.HomeLink).toBeVisible();
    await expect(this.ServicesLink).toBeVisible();
    await expect(this.TestimonialsLink).toBeVisible();
    await expect(this.BlogLink).toBeVisible();
    await expect(this.AboutUsLink).toBeVisible();
    await expect(this.ContactUsLink).toBeVisible();
    await expect(this.PracticeNowLink).toBeVisible();
  }


}
