   // ---------------- Contact Us Page Tests ----------------


import { ContactUsPage } from '../pages/ContactUsPage.ts';
import { test, expect } from '../shared/base.ts';
import { attachScreenshot } from '../shared/helpers.ts';
import users from '../test-data/customers.json';

// Screenshot file names
const CONTACTUS_NAVMENU_SCREENSHOT = 'contactus-navmenu-screenshot.png';
const CONTACTUS_FORM_SCREENSHOT = 'contactus-form-screenshot.png';
const CONTACTUS_FORM_FILLED_SCREENSHOT = 'contactus-form-filled-screenshot.png';
const CONTACTUS_FORM_SUBMITTED_SCREENSHOT = 'contactus-form-submitted-screenshot.png';



test.describe('"Contact Us" Page UI tests from Home Page link', { tag: [ '@UI-Tests', "@Happy-Path"] }, () => {
//   users.forEach((user) => {
    test.beforeEach(async ({ ContactUsPage }) => {
      await ContactUsPage.navigateToContactUs();
      });

       test('Check that all navigation menu items are visible', async ({ page }, testInfo) => {
        // test.setTimeout(  90000);
    
        //checking of navigation menu items
        await test.step('Verify if Home link is visible', async () => {
          await expect(page.getByRole('navigation').getByRole('link', { name: 'Home' })).toBeVisible();
        });

        await test.step('Verify if Services link is visible', async () => {
          await expect(page.getByRole('button', { name: 'Services' })).toBeVisible();
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
            await attachScreenshot(page, testInfo, CONTACTUS_NAVMENU_SCREENSHOT);
          });
        
      });


        test('"Contact Us" page displays all form elements correctly', async ({ ContactUsPage, page }, testInfo) => {

          await test.step('Verify if Navigation Menu is visible', async () => {
            await ContactUsPage.VerifyNavigationMenuItems();
          });

          await test.step('Verify if Headers and paragraph are visible', async () => {
  

            await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible();
            await expect(page.getByText('We\'re here to help! Whether')).toBeVisible();

          });

          await test.step('Verify if textbox "Your Name" is visible', async () => {
          
            await expect(page.getByRole('textbox', { name: 'Your Name' })).toBeVisible();
          });

          await test.step('Verify if textbox "Your Email" is visible', async () => {

            await expect(page.getByRole('textbox', { name: 'Your Email' })).toBeVisible();
          
          });

          await test.step('Verify if textbox "Subject" is visible', async () => {
            await expect(page.getByRole('textbox', { name: 'Subject' })).toBeVisible();
          });
          
          await test.step('Verify if textbox "Your Message" is visible', async () => {
            await expect(page.getByRole('textbox', { name: 'Your Message' })).toBeVisible();
          });

          await test.step('Verify if "Send Message" button is visible', async () => {

            await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();

          });

          await test.step('Attach screenshot of "Contact Us" form', async () => {
            await attachScreenshot(page, testInfo, CONTACTUS_FORM_SCREENSHOT);
          });


      });

      test('Test area snapshot for "Contact Us" page', async ({ ContactUsPage, page }) => {

        await test.step('Verify if Navigation Menu is visible', async () => {
            await ContactUsPage.VerifyNavigationMenuItems();
          });

       
        await expect(page.locator('#contact')).toMatchAriaSnapshot(`
          - heading "Get in Touch" [level=2]
          - paragraph: We're here to help! Whether you're looking for training, services, or just want to say hello, fill out the form below and we’ll get back to you as soon as possible.
          - textbox "Your Name"
          - textbox "Your Email"
          - textbox "Subject"
          - textbox "Your Message"
          - button "Send Message"
          `);
      });

      test('Visual testing for "Contact Us Page"', async ({ ContactUsPage, page }, testInfo) => {
              
              // For checking first if the page is loaded
              await test.step('Check if the Contact Us page has been loaded', async () => {
                  await ContactUsPage.VerifyNavigationMenuItems();
              });

              await test.step('Verify Contact Us Page UI matches baseline screenshot', async () => {
                  await expect(page).toHaveScreenshot('ContactUs-Page.png', {
                      maxDiffPixels: 100,
                      threshold: 0.50,
                          animations: 'disabled',
          
                      });
          
                      
                  });

                });

        test('"Contact Us" form can submit successfully', { tag: "@Functional" }, async ({ ContactUsPage, page }, testInfo) => {

            testInfo.annotations.push({
                type: 'Bug',
                description: 'Redirects to a 404 error page upon clicking the Send Message button after filling out the form.',
                });

                // Select the 2nd customer data
                const user = users[1];

                // For checking first if the page is loaded
                    await test.step('Check if the Contact Us page has been loaded', async () => {
                        await ContactUsPage.VerifyNavigationMenuItems();
                    });

                    await test.step('Check if the Contact Us page form is visible', async () => {
                        await ContactUsPage.verifyContactUsFormElements();
                    });

                    await test.step('Input Name', async () => {
                        await ContactUsPage.YourNameTextBox.fill(user.Name);
                    });

                    await test.step('Input email address', async () => {
                        await ContactUsPage.YourEmailTextBox.fill(user.Email);
                    });

                    await test.step('Input Subject', async () => {
                        await ContactUsPage.SubjectTextBox.fill(user.Subject);
                    });

                    await test.step('Input Message', async () => {
                        await ContactUsPage.YourMessageTextBox.fill(user.Message);
                    });

                     await test.step('Attach screenshot of form with filled data', async () => {
                        await attachScreenshot(page, testInfo, CONTACTUS_FORM_FILLED_SCREENSHOT);
                    });

                    await test.step('Click Send Message button', async () => {
                        await ContactUsPage.SendMessageButton.click();
                    });

                    await test.step('Wait for success message', async () => {
                        await page.waitForSelector('.success-message');
                    });

                    await test.step('Attach screenshot of form successfully submitted', async () => {
                        await attachScreenshot(page, testInfo, CONTACTUS_FORM_SUBMITTED_SCREENSHOT);
                    });

            });

 });
