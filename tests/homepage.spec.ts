import { test, expect } from '@playwright/test';
import { HomeSection } from '../pages/homeSection';
import { ServicesSection } from '../pages/servicesSection';
import { TestiSection } from '../pages/testimonialsSection';
import { BlogSection } from '../pages/blogSection';

// Test for HomeSection
test('Validate that Home Section elements are visible', async ({ page }) => {
  const home = new HomeSection(page);
  await home.navigateToHomeSection();

  await expect(home.linkLogo).toBeVisible();
  await expect(home.linkHome).toBeVisible();
  await expect(home.headingWelcome).toBeVisible();
  await expect(home.headingBest).toBeVisible();
  await expect(home.textTransform).toBeVisible();
  await expect(home.buttonStartAutomating).toBeVisible();
  await expect(home.buttonViewServices).toBeVisible();
});

// Test for ServicesSection
test('Validate that Services Section elements are visible', async ({ page }) => {
  const services = new ServicesSection(page);
  await services.navigateToServicesSection();

  await expect(services.hdgServicesWP).toBeVisible();
  await expect(services.textAboutTAPH).toBeVisible();
  await expect(services.imgTAAS).toBeVisible();
  await expect(services.hdgTAAS).toBeVisible();
  await expect(services.textTAASDesc).toBeVisible();
  await expect(services.imgCT).toBeVisible();
  await expect(services.hdgCT).toBeVisible();
  await expect(services.textCTDesc).toBeVisible();
  await expect(services.imgIT).toBeVisible();
  await expect(services.hdgIT).toBeVisible();
  await expect(services.textITDesc).toBeVisible();
});

// Test for TestiSection
test('Validate that Testimonial Section elements are visible', async ({ page }) => {
  const testi = new TestiSection(page);
  await testi.navigateToTestiSection();

  await expect(testi.hdgTesti).toBeVisible();
  await expect(testi.textTestiDesc).toBeVisible();

  // Testimonial 1
  await expect(testi.txtT1Stars).toBeVisible();
  await expect(testi.txtT1).toBeVisible();
  await expect(testi.hdgT1Name).toBeVisible();
  await expect(testi.txtT1Pos).toBeVisible();
  await expect(testi.txtT1Comp).toBeVisible();

  // Testimonial 2
  await expect(testi.txtT2Stars).toBeVisible();
  await expect(testi.txtT2).toBeVisible();
  await expect(testi.hdgT2Name).toBeVisible();
  await expect(testi.txtT2Pos).toBeVisible();
  await expect(testi.txtT2Comp).toBeVisible();

  // Testimonial 3
  await expect(testi.txtT3Stars).toBeVisible();
  await expect(testi.txtT3).toBeVisible();
  await expect(testi.hdgT3Name).toBeVisible();
  await expect(testi.txtT3Pos).toBeVisible();
  await expect(testi.txtT3Comp).toBeVisible();
});

// Test for BlogSection
test('Validate that Blog Section elements are visible', async ({ page }) => {
  const blog = new BlogSection(page);
  await blog.navigateToBlog();

  await expect(blog.hdgLatestTA).toBeVisible();
  await expect(blog.txtStayUpdated).toBeVisible();

  // Blog 1
  await expect(blog.txtB1Date).toBeVisible();
  await expect(blog.txtB1ReadTime).toBeVisible();
  await expect(blog.hdgB1).toBeVisible();
  await expect(blog.txtB1).toBeVisible();
  await expect(blog.txtB1Auth).toBeVisible();

  // Blog 2
  await expect(blog.txtB2Date).toBeVisible();
  await expect(blog.txtB2ReadTime).toBeVisible();
  await expect(blog.hdgB2).toBeVisible();
  await expect(blog.txtB2).toBeVisible();
  await expect(blog.txtB2Auth).toBeVisible();

  // Blog 3
  await expect(blog.txtB3Date).toBeVisible(); // fixed typo
  await expect(blog.txtB3ReadTime).toBeVisible();
  await expect(blog.hdgB3).toBeVisible();
  await expect(blog.txtB3).toBeVisible();
  await expect(blog.txtB3Auth).toBeVisible();

  await expect(blog.buttonAllArticles).toBeVisible();
});

// Navigation tests for BlogSection
test.describe('Validate that featured blogs lead to full-text when clicked', () => {
  let blog: BlogSection;

  test.beforeEach(async ({ page }) => {
    blog = new BlogSection(page);
    await blog.navigateToBlog();
  });

  test.skip('Blog 1 Navigation', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'issue',
      description: 'hyperlinks dont lead to full blog text',
    });

    await blog.hdgB1.click();
    await expect(page).toHaveURL(/.*\/blog\/.*/);
  });

  test.skip('Blog 2 Navigation', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'issue',
      description: 'hyperlinks dont lead to full blog text',
    });

    await blog.hdgB2.click();
    await expect(page).toHaveURL(/.*\/blog\/.*/);
  });

  test.skip('Blog 3 Navigation', async ({ page }, testInfo) => {
    testInfo.annotations.push({
      type: 'issue',
      description: 'hyperlinks dont lead to full blog text',
    });

    await blog.hdgB3.click();
    await expect(page).toHaveURL(/.*\/blog\/.*/);
  });
});