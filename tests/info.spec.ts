//tests for About Us Page

import { test, expect } from '../shared/base';
// import { attachScreenshot } from '../../shared/helpers.ts';
// import users from '../../test-data/users.json';

// Screenshot file names
// const ABOUTUS_SCREENSHOT = 'aboutus-screenshot.png';

test.describe('About Us Page UI tests', { tag: [ '@UI-Tests', "@Happy-Path"] }, () => {
  // users.forEach((user) => {
    test.beforeEach(async ({ AboutUsPage }) => {
      await AboutUsPage.navigateTo();
      });

            
      test('Verify About Us Page contains logo and click redirects to Home', async ({ page }) => {
    
        await expect(page).toHaveURL('https://testautomationph.netlify.app/about_us');

        await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Test Automation PH Logo Test' })).toBeVisible();
        
      });

      test('Check that all navigation menu items are visible', async ({ page }) => {
    
        //checking of navigation menu items
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Services ▼' })).toBeVisible();
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Testimonials' })).toBeVisible();
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Blog' })).toBeVisible();
        await expect(page.getByRole('navigation').getByRole('link', { name: 'About Us' })).toBeVisible();
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact Us' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Practice Now' })).toBeVisible();
        
      });

      test.only('Check that Home link is clickable, and redirect correctly', async ({ AboutUsPage, page }) => {

        await AboutUsPage.VerifyNavigationMenuItems();

        await AboutUsPage.HomeLink.click();
        await expect(page.getByRole('heading', { name: 'Welcome to Test Automation PH' })).toBeVisible();
        await expect(page).toHaveURL('https://testautomationph.netlify.app');
      });

      test('Check that Menu item - "Services" is clickable, redirects correctly and displays all services', async ({ AboutUsPage, page }) => {

        await AboutUsPage.VerifyNavigationMenuItems();

        await AboutUsPage.ServicesLink.click();
        await expect(page.getByRole('link', { name: 'Testing-As-A-Service' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Individual Training' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Corporate Training' })).toBeVisible();

        await AboutUsPage.TestingAsAServiceLink.click(); //to select Testing-As-A-Service link

        await expect(page).toHaveURL('https://testautomationph.netlify.app/#services');
        await expect(page.getByRole('heading', { name: 'The Services We Provide' })).toBeVisible()
        await expect(page.getByRole('heading', { name: 'Testing-As-A-Service' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Corporate Training' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Individual Training' })).toBeVisible();


      });


});