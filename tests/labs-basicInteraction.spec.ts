import { test, expect } from '../shared/labs-base'
import { takeScreenshot, testHTML5Dropdown, testMultipleDropdownOptions } from '../shared/labs-helpers';

const labs_registration_form_submit = '/screenshots/registration-form-submit';

test.describe('Basic Interactions Submenus ', async () => {
  test.beforeEach(async ({ labsFeaturePage }) => {
    await labsFeaturePage.goto();
  });

  test('Navigate to Login Form Submenu page', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-login-form').click();

    await expect(page.getByRole('heading', { name: 'Login Form' })).toBeVisible();

    await page.getByTestId('email-input').click();
    await expect(page.getByTestId('email-input')).toBeVisible();
    await page.getByTestId('password-input').click();
    await expect(page.getByTestId('password-input')).toBeVisible();

    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('login-button')).toBeVisible();
    // Note: Login wasn't tried as registration form is not functional yet
  });

  test('Navigate to Registration Form submenu page', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-registration-form').click();

    await expect(page.getByRole('heading', { name: 'Registration Form' })).toBeVisible();

    await page.getByTestId('input-name').click();
    await expect(page.getByTestId('input-name')).toBeVisible();
    await page.getByTestId('input-email').click();
    await expect(page.getByTestId('input-email')).toBeVisible();
    await page.getByTestId('input-password').click();
    await expect(page.getByTestId('input-password')).toBeVisible();

    await page.getByTestId('submit-button').click();
    await takeScreenshot(page, testInfo, 'registration-form-submit');
  });

  test('EXPLORATORY: Registration Form - What happens after submission?', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-registration-form').click();

    await expect(page.getByRole('heading', { name: 'Registration Form' })).toBeVisible();

    // NOTE: Testing what happens when we submit the form
    await page.getByTestId('input-name').fill('Test User');
    await page.getByTestId('input-email').fill('testuser@example.com');
    await page.getByTestId('input-password').fill('password123');
    await page.getByTestId('input-confirm-password').fill('password123');

    console.log('📝 NOTE: Submitting form to see what happens...');
    await page.getByTestId('submit-button').click();
    
    await page.waitForTimeout(1000);

    // Check what actually happened
    const hasSuccessMessage = await page.getByText('success', { exact: false }).isVisible().catch(() => false);
    const hasErrorMessage = await page.getByText('error', { exact: false }).isVisible().catch(() => false);
    const nameFieldCleared = await page.getByTestId('input-name').inputValue() === '';
    
    console.log(`Success message: ${hasSuccessMessage}`);
    console.log(`Error message: ${hasErrorMessage}`);
    console.log(`Form cleared: ${nameFieldCleared}`);
    
    // NOTE: Form submission behavior is not fully implemented yet
    console.log('📝 NOTE: Registration form functionality appears incomplete');
    
    await takeScreenshot(page, testInfo, 'registration-after-submit');
  });

  test('Navigate to Button Interactions submenu page', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-button-interactions').click();

    await expect(page.getByRole('heading', { name: 'Button Interactions' })).toBeVisible();

    //Note: Page is under construction for future implementation
    await expect(page.getByText('Page under construction')).toBeVisible();
  });

  test('Navigate to Dropdowns and Selectors submenu page', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-dropdowns-selectors').click();

    await expect(page.getByRole('heading', { name: 'Dropdowns and Selectors' })).toBeVisible();

    // Validate HTML5 Select Dropdown options
    await expect(page.getByRole('heading', { name: 'HTML5 Select Dropdown' })).toBeVisible();
    await expect(page.getByText('Choose a fruit:')).toBeVisible();

    // Test all HTML5 dropdown options using helper
    const html5Options = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];
    await testHTML5Dropdown(page, 'html5-dropdown', 'html5-selected', html5Options);

    // Validate Custom Non-semantic Dropdown options
    await expect(page.getByRole('heading', { name: 'Custom Dropdown (Non-semantic)' })).toBeVisible();

    // Test all custom dropdown options using helper
    const customOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];
    await testMultipleDropdownOptions(
      page,
      customOptions,
      'custom-dropdown-toggle',
      'custom-dropdown-option-',
      'custom-selected'
    );
  });

  test('Navigate to Checkboxes and Radio Buttons page', async ({ labsFeaturePage, page }, testInfo) => {
    await labsFeaturePage.verifyBasicInteractionsGroupVisibility();
    await page.getByTestId('sidebar-group-title-basic-interactions').click();
    await page.getByTestId('sidebar-item-checkboxes-radio-buttons').click();

    await expect(page.getByRole('heading', { name: 'Checkboxes and Radio Buttons' })).toBeVisible();

    // Note: Page is under construction for future implementation
    await expect(page.getByText('Page under construction')).toBeVisible();
  });
});

