//tests for About Us Page

import { test, expect } from '@playwright/test';

test('Verify About Us Page contains logo and click redirects to Home', async ({ page }) => {
  await page.goto('https://testautomationph.netlify.app/');
  await page.getByRole('link', { name: 'About Us' }).click();
  await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Test Automation PH Logo Test' })).toBeVisible();
  await page.getByRole('link', { name: 'Test Automation PH Logo Test' }).click();
  await expect(page).toHaveURL('https://testautomationph.netlify.app/');
});

test('Check that all navigation menu items are clickable, and redirect correctly', async ({ page }) => {
  await page.goto('https://testautomationph.netlify.app/');
  await page.getByRole('link', { name: 'About Us' }).click();

  //checking of navigation menu items
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Services ▼' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Testimonials' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'About Us' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Practice Now' })).toBeVisible();

  //clicking of navigation menu items

  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to Test Automation PH' })).toBeVisible();
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('button', { name: 'Services ▼' }).click();
  await expect(page.getByRole('link', { name: 'Testing-As-A-Service' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Individual Training' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Corporate Training' })).toBeVisible();
  await page.getByRole('link', { name: 'Testing-As-A-Service' }).click();
  await expect(page.getByRole('heading', { name: 'The Services We Provide' })).toBeVisible();
  await page.getByRole('heading', { name: 'Testing-As-A-Service' }).click();
  await expect(page.getByRole('heading', { name: 'Testing-As-A-Service' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Corporate Training' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Individual Training' })).toBeVisible();
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Testimonials' }).click();
  await expect(page.getByRole('heading', { name: 'What Our Students & Clients' })).toBeVisible();
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Latest Test Automation' })).toBeVisible();
});