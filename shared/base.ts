import { test as base, request } from '@playwright/test';
import { AboutUsPage } from '../pages/AboutUsPage';
import { ContactUsPage } from '../pages/ContactUsPage';
// import { RegistrationPage } from '@pages/registration.page';
// import { APIModel } from '@pages/api.model';
// import { FakeStoreAPI } from '@pages/api-fake-store.model';

type MyFixtures = {
  AboutUsPage: AboutUsPage;
  ContactUsPage: ContactUsPage;
//   loginPage: LoginPage;
//   registrationPage: RegistrationPage;
//   apiJsonPlaceholder: APIModel;
//   fakeStoreAPI: FakeStoreAPI;
};

export const test = base.extend<MyFixtures>({
  AboutUsPage: async ({ page }, use) => {
    await use(new AboutUsPage(page));
  },
  ContactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
//   loginPage: async ({ page }, use) => {
//     await use(new LoginPage(page));
//   },
//   registrationPage: async ({ page }, use) => {
//     await use(new RegistrationPage(page));
//   },
//   apiJsonPlaceholder: async ({}, use) => {
//     const requestContext = await request.newContext({
//       baseURL: 'https://jsonplaceholder.typicode.com',
//     });
//     const apiModel = new APIModel(requestContext);
//     await use(apiModel);
//     await requestContext.dispose();
//   },
//   fakeStoreAPI: async ({}, use) => {
//     const requestContext = await request.newContext({
//       baseURL: 'https://fakestoreapi.com',
//     });
//     const fakeStore = new FakeStoreAPI(requestContext);
//     await use(fakeStore);
//     await requestContext.dispose();
//   },
});

export { expect } from '@playwright/test';