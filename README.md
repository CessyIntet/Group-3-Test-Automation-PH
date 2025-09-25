# Test Suite for Test Automation PH Brochure Website


## 🚐 About Test Automation PH

Test Automation PH is an enterprise that aims to provide Filipinos interested in Software Testing and Testing Automation a suite of resources to help in their learning journey.

The suite of resources shall include video lectures on test automation, a repository of test codes, blogs from testers who had undergone the same journey, and most importantly, Labs Maritest, which is a website comprising of various web elements, interactions, features and other prepared stuff that testers can use in practicing their automation skills.

Moreover, Test Automation PH aims to advance the profession of software testing and automation in the Philippines.

Test Automation PH is founded by regie2197.


## 📦 About this Repository

This repository consists of a test suite prepared by students of Code Blossom's 2025 Software Testing and Automation Course.

CessyIntet, mgc1282, and pazmiguela

It aims to test the Test Automation PH website with link, https://testautomationph.netlify.app/, which was created by hannahreah and EckaiKikz, students of Code Blossom's 2025 Fullstack Course during their June 2025 Hackathon.


## 📌 Features

* **End-to-End Coverage**

  * The test suites follows the user workflow throughout the sections of the  website.

* **Test Organization**

  * The test suite follows a Page Object Model, consisting of seven classes (`/pages` folder) representing the different sections of the website:
    1. Home
    2. Services
    3. Testimonials
    4. Blog
    5. About Us
    6. Contact Us
    7. Practice Now

  * The suite consists of the following test cases:
    1. homepage.spec.ts
    2. aboutus.spec.ts
    3. contactus.spec.ts
    4. practice-now-popup.spec.ts
    5. performance.spec.ts 
    6. labs-feature.spec.ts
    7. labs-perfomance.spec.ts
    8. labs-UIElements.spec.ts
    9. labs-advancedFeatures.spec.ts
    10. labs-api.spec.ts
    11.	labs-basicInteraction.spec.ts
    12.	labs-dataHandling.spec.ts


    These tests are further discussed below.

  * The tests are written with [Playwright](https://playwright.dev/).


## 🚀 Quick Start Guide

1. **Fork and Clone the Repository**

    Fork the repo on GitHub, then clone your fork locally

    git clone https://github.com/CessyIntet/Group-3-Test-Automation-PH.git


2. **Initialize the Project**

    If you are setting up locally for the first time, run:

    ```
    npm init -y
    npm init playwright@latest
    ```

3. **Install Dependencies**

  ```
  npm install
  ```

4. **Run Tests**
    ```sh
    npx playwright test
    ```


## 🧪 The Tests

### 1. homepage.spec.ts

Features tested: Home section, Services section, Testimonials, Blog section
Helpers used: Page Object Models (`HomeSection`, `ServicesSection`, `TestiSection`, `BlogSection`)

  1. Validate Home Section elements are visible
  2. Validate Services Section elements are visible
  3. Validate Testimonial Section elements are visible (3 testimonials checked)
  4. Validate Blog Section elements are visible (3 blogs checked + "All Articles" button)

### 2. aboutus.spec.ts

Features tested: About Us page content, navigation, redirections, visual/snapshot testing
Helpers used:

  Custom base (`../shared/base.ts`)
  `attachScreenshot` from `../shared/helpers.ts`
  Page Object (`AboutUsPage`)

  1. About Us page displays content & logo redirects to Home
  2. All navigation menu items visible
  3. Area snapshot for About Us content
  4. Visual regression test vs baseline screenshot
  5. Home link is clickable and redirects correctly
  6. Services menu item expands → links visible → redirects correctly
  7. Testimonials menu item redirects correctly
  8. Blog menu item redirects correctly


### 3. contactus.spec.ts

Features tested: Navigation, form visibility, submission, snapshot & visual testing
Helpers used:

  Page Object (`ContactUsPage`)
  `attachScreenshot` from `../shared/helpers.ts`
  Test data (`customers.json`)

  1. Navigation menu items visible
  2. Contact Us page form elements are visible
  3. Snapshot test for Contact Us page structure
  4. Visual regression test vs baseline screenshot
  5. Contact Us form submission (bug annotation: redirects to 404)

### 4. practice-now-popup.spec.ts

Features tested: Labs entry, sidebar, theme toggle
Helpers used: `takeScreenshot` from `../shared/labs-helpers`

  1. Practice Now popup → lands to Labs site correctly
  2. Verify all practice options visible
  3. Sidebar collapse/expand works
  4. Toggle between light/dark themes


### 5. performance.spec.ts

Features tested: Performance and accessibility audits for main site
Helpers used: `runLighthouseWithCustomConfig` from `../shared/lighthouse-helper`

  1. Run Lighthouse audit and attach full HTML + score summary

### 6. labs-feature.spec.ts

Features tested: Sidebar groups (Basic Interactions, Data Handling, UI Elements, Advanced Features)
Helpers used: Page Object (`labsFeaturePage`)

  1. Expand Basic Interactions submenu (validate all items)
  2. Expand Data Handling submenu (validate all items)
  3. Expand UI Elements submenu (validate all items)
  4. Expand Advanced Features submenu (validate all items)

### 7. labs-performance.spec.ts

Features tested: Labs site performance audits
Helpers used: `runLighthouseWithCustomConfig` from `../shared/labs-lighthouse-helpers`

  1. Run Lighthouse audit for Labs site using custom YAML config and attach report + summary


### 8. labs-UIElements.spec.ts

Features tested: Submenus under "UI Elements"
Helpers used: Page Object (`labsFeaturePage`)
Tests:

  1. Navigate to Modals and Popups → verify under construction
  2. Navigate to Drag and Drop → verify under construction
  3. Navigate to Tooltips → verify under construction
  4. Navigate to Tabs and Accordions → verify under construction
  5. Navigate to Alerts and Notifications → verify under construction


### 9. labs-advancedFeatures.spec.ts

Features tested: Submenus under "Advanced Features"
Helpers used: Page Object (`labsFeaturePage`)
Tests:

  1. Navigate to Advanced Forms → verify under construction
  2. Navigate to E-commerce Workflows → verify under construction
  3. Navigate to ERP Workflows → verify under construction


### 10. labs-api.spec.ts

Features tested: Pokémon API, Todo API, API performance, data validation, error handling
Helpers used: Playwright’s `request` fixture

  Pokémon API
    1. Fetch single Pokémon (Bulbasaur)
    2. Fetch paginated Pokémon list
    3. Handle invalid Pokémon ID
    4. Fetch Pokémon types
  Todo API
    5. Create a new todo item
    6. Fetch all todos
    7. Update a todo item
    8. Delete a todo item
    9. Handle invalid todo ID
  Performance
    10. Validate API responds within time limits
    11. Handle concurrent requests
  Data Validation
    12. Validate user data structure
    13. Validate post + comments structure
  Error Handling
    14. Handle malformed requests
    15. Handle network timeouts gracefully
    16. Reliable timeout test with delayed endpoint


### 11.	labs-basicInteraction.spec.ts

Features tested: Login, Registration, Buttons, Dropdowns, Checkboxes/Radio
Helpers used:

  `takeScreenshot`
  `testHTML5Dropdown`
  `testMultipleDropdownOptions` (from `../shared/labs-helpers`)

  1. Navigate to Login Form → verify inputs/buttons
  2. Navigate to Registration Form → verify inputs & submit
  3. Exploratory: Submit Registration Form → observe behavior
  4. Navigate to Button Interactions → under construction
  5. Navigate to Dropdowns and Selectors → verify HTML5 + custom dropdowns
  6. Navigate to Checkboxes & Radio Buttons → under construction


### 12.	labs-dataHandling.spec.ts

Features tested: Dynamic table, API interactions, file upload, database testing, form validation
Helpers used:

  `takeScreenshot`
  Page Object (`labsFeaturePage`)

  1. Interact with Pokémon Data Table pagination (10, 25, 50, 100 per page + page navigation)
  2. Search for "eevee" in Pokémon table
  3. Filter table for "fire" type Pokémon
  4. Navigate to API Interactions → test Todo functionality (still under development)
  5. Navigate to File Upload → under construction
  6. Navigate to Database Testing → under construction
  7. Navigate to Form Validation → under construction