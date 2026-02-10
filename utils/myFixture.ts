import { test as base } from '@playwright/test';
import { Helper } from './Helper';

type MyFixtures = {
  helper: Helper;
};

// Extend base test by providing "helper".
export const test = base.extend<MyFixtures>({
  helper: async ({ page }, use) => {
    // Set up the fixture.
    const helperFixture = new Helper(page);
    await helperFixture.goToVivaSite(page);
    await helperFixture.acceptCookies(page);
    await helperFixture.clearAllBrowserData(page);
    helperFixture.getRandomSearchCategory();
    helperFixture.getRandomSearchLocation();

    // Use the fixture
    await use(helperFixture);
  }
});

export { expect } from '@playwright/test';