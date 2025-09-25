
import { test, expect } from '../shared/base.ts';


const ABOUTUS_SCREENSHOT = 'aboutus-screenshot.png';

test.describe('Footer UI Tests in About Us Page', { tag: [ '@UI-Tests', "@Happy-Path"] }, () => {
    test.beforeEach(async ({ AboutUsPage }) => {
        await AboutUsPage.navigateTo();
    });

    test('Check visibility of footer elements in "About Us" page', async ({ page }) => {


        await test.step('Verify if the footer heading is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Test Automation PH' })).toBeVisible();
        });

        await test.step('Verify if footer paragpraph is visible', async () => {    
            await expect(page.getByText('Empowering software testers')).toBeVisible();
        });

        await test.step('Verify if Quick links heading of footer is visible', async () => {
            await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible();
        
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('listitem').filter({ hasText: 'Home' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
        });
        
        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Home' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Testimonials' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Blog' })).toBeVisible();
        });

        await test.step('Verify if the heading: "Contact" is visible', async () => {
            await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Test Automation PH email address" is visible', async () => {
            await expect(page.getByText('info@testautomationph.com')).toBeVisible();
        });

        await test.step('Verify if the footer element: "Contact number" is visible', async () => {
            await expect(page.getByText('+63 (2) 123-')).toBeVisible();
        });

        await test.step('Verify if the footer element: "Address" is visible', async () => {
            await expect(page.getByText('123 Tech StreetMakati City,')).toBeVisible();
        });
    });


    

    test('Test area snapshot of footer section in "About Us" page', async ({ AboutUsPage, page }) => {

            // For checking first if the page is loaded

            await test.step('Verify if Navigation Menu is visible', async () => {
                await AboutUsPage.VerifyNavigationMenuItems();
            });

            // Snapshot test for the main content area of the About Us page
            await test.step('Test area snapshot of footer section', async () => {
                await expect(page.getByRole('contentinfo')).toMatchAriaSnapshot(`
                    - contentinfo:
                    - heading "Test Automation PH" [level=3]
                    - paragraph: Empowering software testers and organizations with comprehensive test automation solutions to ensure application quality and reliability through automated testing processes.
                    - heading "Quick Links" [level=4]
                    - list:
                        - listitem:
                        - link "Home":
                            - /url: /
                        - listitem:
                        - link "Services":
                            - /url: /#services
                        - listitem:
                        - link "Testimonials":
                            - /url: /#testimonials
                        - listitem:
                        - link "Blog":
                            - /url: /#blog
                    - heading "Contact" [level=4]
                    - list:
                        - listitem: info@testautomationph.com
                        - listitem: /\\+\\d+ \\(2\\) \\d+-\\d+/
                        - listitem: /\\d+ Tech Street Makati City, Metro Manila \\d+/
                    - paragraph: /© \\d+ \\/ Powered by Test Forge IT Consultancy in partnership with Code Blossom/
                    `);

            });

    });




});



test.describe('Footer UI Tests in Contact Us Page', { tag: [ '@UI-Tests', "@Happy-Path"] }, () => {
    test.beforeEach(async ({ ContactUsPage }) => {
        await ContactUsPage.navigateToContactUs();
    });

    test('Check visibility of footer elements in "Contact Us" page', async ({ page }) => {


        
        await test.step('Verify if the footer heading is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Test Automation PH' })).toBeVisible();
        });

        await test.step('Verify if footer paragpraph is visible', async () => {    
            await expect(page.getByText('Empowering software testers')).toBeVisible();
        });

        await test.step('Verify if Quick links heading of footer is visible', async () => {
            await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible();
        
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('listitem').filter({ hasText: 'Home' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
        });
        
        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Home' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Testimonials' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Home" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Blog' })).toBeVisible();
        });

        await test.step('Verify if the heading: "Contact" is visible', async () => {
            await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Contact' })).toBeVisible();
        });

        await test.step('Verify if the footer element: "Test Automation PH email address" is visible', async () => {
            await expect(page.getByText('info@testautomationph.com')).toBeVisible();
        });

        await test.step('Verify if the footer element: "Contact number" is visible', async () => {
            await expect(page.getByText('+63 (2) 123-')).toBeVisible();
        });

        await test.step('Verify if the footer element: "Address" is visible', async () => {
            await expect(page.getByText('123 Tech StreetMakati City,')).toBeVisible();
        });
    });


    

    test('Test area snapshot of footer section in "Contact Us" page', async ({ ContactUsPage, page }) => {

            // For checking first if the page is loaded

            await test.step('Verify if Navigation Menu is visible', async () => {
                await ContactUsPage.VerifyNavigationMenuItems();
            });

            // Snapshot test for the main content area of the About Us page
            await test.step('Test area snapshot of footer section', async () => {
               await expect(page.getByRole('contentinfo')).toMatchAriaSnapshot(`
                - contentinfo:
                - heading "Test Automation PH" [level=3]
                - paragraph: Empowering software testers and organizations with comprehensive test automation solutions to ensure application quality and reliability through automated testing processes.
                - heading "Quick Links" [level=4]
                - list:
                    - listitem:
                    - link "Home":
                        - /url: /
                    - listitem:
                    - link "Services":
                        - /url: /#services
                    - listitem:
                    - link "Testimonials":
                        - /url: /#testimonials
                    - listitem:
                    - link "Blog":
                        - /url: /#blog
                - heading "Contact" [level=4]
                - list:
                    - listitem: info@testautomationph.com
                    - listitem: /\\+\\d+ \\(2\\) \\d+-\\d+/
                    - listitem: /\\d+ Tech Street Makati City, Metro Manila \\d+/
                - paragraph: /© \\d+ \\/ Powered by Test Forge IT Consultancy in partnership with Code Blossom/
                `);

            });

    });




});