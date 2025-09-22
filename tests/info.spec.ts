//tests for About Us Page

import { test, expect } from '../shared/base';
import { attachScreenshot } from '../shared/helpers.ts';
// import users from '../../test-data/users.json';

// Screenshot file names
const ABOUTUS_SCREENSHOT = 'aboutus-screenshot.png';
const ABOUTUS_NAVMENU_SCREENSHOT = 'aboutus-navmenu-screenshot.png';
const ABOUTUS_HOMEPAGE_SCREENSHOT = 'aboutus-homepage-screenshot.png';
const ABOUTUS_SERVICES_SCREENSHOT = 'aboutus-services-screenshot.png';
const ABOUTUS_TESTIMONIALS_SCREENSHOT = 'aboutus-testi-screenshot.png';
const ABOUTUS_BLOG_SCREENSHOT = 'aboutus-blog-screenshot.png';


test.describe('About Us Page UI tests from Home Page link', { tag: [ '@UI-Tests', "@Happy-Path"] }, () => {
  // users.forEach((user) => {
    test.beforeEach(async ({ AboutUsPage }) => {
      await AboutUsPage.navigateTo();
      });

            
      test('About Us page displays content and logo redirects to Home', async ({ page }, testInfo) => {

        
        await test.step('Verify if link is correct ', async () => {
          await expect(page).toHaveURL('https://testautomationph.netlify.app/about_us');
        });

        await test.step('Verify content (header, vision, and offers) are visible', async () => {
          await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
          await expect(page.getByText("Get to Know Us")).toBeVisible();
          await expect(page.getByText("Our Mission")).toBeVisible();
          await expect(page.getByText("What We Offer")).toBeVisible();
        });

        await test.step('Verify if the logo is visible', async () => {
          await expect(page.getByRole('link', { name: 'Test Automation PH Logo Test' })).toBeVisible();
        });

        await test.step('Attach screenshot of "About Us" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_SCREENSHOT);
          });
        
      });

      test('Check that all navigation menu items are visible', async ({ page }, testInfo) => {
    
        //checking of navigation menu items
        await test.step('Verify if Home link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Home' })).toBeVisible();
        });

        await test.step('Verify if Services link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Services' })).toBeVisible();
        });

        await test.step('Verify if Testimonials link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Testimonials' })).toBeVisible();
        });

        await test.step('Verify if Blog link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Blog' })).toBeVisible();
        });

        await test.step('Verify if About Us link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'About Us' })).toBeVisible();
        });

        await test.step('Verify if Contact Us link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact Us' })).toBeVisible();
        });

        await test.step('Verify if Practice Now button is visible', async () => {
          await expect(page.getByRole('button', { name: 'Practice Now' })).toBeVisible();
        });

        await test.step('Attach screenshot of "About Us" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_NAVMENU_SCREENSHOT);
          });
        
      });


      test('test area snapshot for "About Us Page"', async ({ AboutUsPage, page }) => {

        // For checking first if the page is loaded
        await test.step('Verify if Navigation Menu is visible', async () => {
          await AboutUsPage.VerifyNavigationMenuItems();
        });

        // Snapshot test for the main content area of the About Us page
        await test.step('Test area snapshot', async () => {
          await expect(page.locator('#about')).toMatchAriaSnapshot(`
            - heading "Get to Know Us" [level=2]
            - paragraph: Test Automation PH is a dedicated community and training hub for aspiring and experienced software testers in the Philippines. We provide high-quality test automation services, hands-on training, and real-world project experience to help individuals and businesses improve their software quality, delivery speed, and testing efficiency.
            - heading "Our Mission" [level=3]
            - paragraph: To empower Filipino QA professionals and organizations through expert-led automation training, practical tools, and mentorship—making test automation accessible, impactful, and career-defining.
            - heading "What We Offer" [level=3]
            - list:
              - listitem: ✔️ Testing-as-a-Service (TaaS)
              - listitem: ✔️ Individual & Corporate Training Programs
              - listitem: ✔️ Real Project Experience & Mentorship
              - listitem: ✔️ Community Support & Career Guidance
            `);

          });
      });

      test('Visual testing for "About Us Page"',{tag: "@Happy-Path"}, async ({ AboutUsPage, page }, testInfo) => {
        
        // For checking first if the page is loaded
        await test.step('Check if the About Us page has been loaded', async () => {
            await AboutUsPage.VerifyNavigationMenuItems();
        });

        await test.step('Verify About Us Page UI matches baseline screenshot', async () => {
            await expect(page).toHaveScreenshot('AboutUs-Page.png', {
                maxDiffPixels: 100,
                threshold: 0.50,
                    animations: 'disabled',
    
                });
    
                
            });

        });

      test('Check that Home link is clickable, and redirects correctly', async ({ AboutUsPage, page }, testInfo) => {

         // For checking first if the page is loaded
        await test.step('Verify if Navigation Menu is visible', async () => {
          await AboutUsPage.VerifyNavigationMenuItems();
        });

        await test.step('Click "Home"', async () => {
          await AboutUsPage.HomeLink.click();
        });

        await test.step('Verify if "Home link" is working', async () => {
          await expect(page.getByRole('heading', { name: 'Welcome to Test Automation PH' })).toBeVisible();
          await expect(page).toHaveURL('https://testautomationph.netlify.app');
        });

         await test.step('Attach screenshot of "Home" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_HOMEPAGE_SCREENSHOT);
          });


      });

      test('Check that Menu item - "Services" is clickable, redirects correctly', async ({ AboutUsPage, page }, testInfo) => {

         // For checking first if the page is loaded
        await test.step('Verify if Navigation Menu is visible', async () => {
          await AboutUsPage.VerifyNavigationMenuItems();
        });

        await test.step('Click "Services"', async () => {
          await AboutUsPage.ServicesLink.click();
        });

        await test.step('Verify if "Services" dropdown shows the 3 content', async () => {
          await expect(page.getByRole('link', { name: 'Testing-As-A-Service' })).toBeVisible();
          await expect(page.getByRole('link', { name: 'Individual Training' })).toBeVisible();
          await expect(page.getByRole('link', { name: 'Corporate Training' })).toBeVisible();

        });

        await test.step('Click "Testing-As-A-Service"', async () => {
          await AboutUsPage.TestingAsAServiceLink.click(); //to select Testing-As-A-Service link
        });


        await test.step('Verify  visibility of "Services" URL and Header', async () => {
          await expect(page).toHaveURL('https://testautomationph.netlify.app/#services');
          await expect(page.getByRole('heading', { name: 'The Services We Provide' })).toBeVisible()
        });

        // can remove since this is already covered in other test
        await test.step('Verify visiblity of "Services" sections', async () => {
          await expect(page.locator('section#testing-services')).toBeVisible();
          await expect(page.locator('section#corporate-training')).toBeVisible();
          await expect(page.locator('section#individual-training')).toBeVisible();
        });

         await test.step('Attach screenshot of "Services" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_SERVICES_SCREENSHOT);
          });


      });

      
      test('Check that Menu item - "Testimonials" is clickable and redirects correctly', async ({ AboutUsPage, page }, testInfo) => {

         // For checking first if the page is loaded
        await test.step('Verify if Navigation Menu is visible', async () => {
          await AboutUsPage.VerifyNavigationMenuItems();
        });

        await test.step('Click "Testimonials"', async () => {
           await AboutUsPage.TestimonialsLink.click();
        });

        await test.step('Verify Testimonials URL and Header', async () => {
       
            await expect(page).toHaveURL('https://testautomationph.netlify.app/#testimonials');
            
            // can remove since this is already covered in other test
            await expect(page.getByRole('heading', { name: 'What Our Students & Clients Say' })).toBeVisible()
          });

          await test.step('Attach screenshot of "Testimonials" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_TESTIMONIALS_SCREENSHOT);
          });

      });

      test('Check that Menu item - "Blog" is clickable, redirects correctly', async ({ AboutUsPage, page }, testInfo) => {

         // For checking first if the page is loaded
        await test.step('Verify if Navigation Menu is visible', async () => {
          await AboutUsPage.VerifyNavigationMenuItems();
        });

        await test.step('Click "Testimonials"', async () => {

          await AboutUsPage.BlogLink.click();
        });

        await test.step('Verify "Blog" URL and Header', async () => {
          await expect(page).toHaveURL('https://testautomationph.netlify.app/#blog');

          // can remove since this is already covered in other test
          await expect(page.getByRole('heading', { name: 'Latest Test Automation' })).toBeVisible();
        });

         await test.step('Attach screenshot of "Blog" page', async () => {
            await attachScreenshot(page, testInfo, ABOUTUS_BLOG_SCREENSHOT);
          });


      });

  });

