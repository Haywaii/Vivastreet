import { test, expect } from '@playwright/test';
import { SearchPage } from '../page/searchPage';
import { AdPage } from '../page/adPage';
import { Helper } from '../utils/Helper';
import {} from '../utils/myFixture';
import AxeBuilder from '@axe-core/playwright';

test.describe('Aviva Search Tests', () => {
  let searchPage: SearchPage;
  let adPage: AdPage;
  let helper: Helper;
  let startTime;
  let loadTime: any;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    adPage = new AdPage(page);
    helper = new Helper (page);
    startTime = Date.now();
    await helper.goToVivaSite(page);
    await helper.acceptCookies(page);
    await searchPage.performanceSearchHomePageDefault();
    await searchPage.navigateToAdDetailsPage(0);
    loadTime = Date.now() - startTime;
  });

  test.afterEach(async ({ page }) => {
    helper = new Helper (page);
    await helper.clearAllBrowserData(page);
  });

    /** PERFORMANCE **/
    test('PF1 - ShouldLoadAdPageFastEnough', async ({ page }) => {
      expect(loadTime).toBeLessThan(5000);
    });

    /** POSITIVE TEST SCENARIOS **/
    test('PTS1 - ValidateAdPageContent', async ({ page}) => {
        adPage.isAdFavouriteButtonVisible();
        adPage.isAdDescriptionSectionVisible();
        adPage.isAdPhotosSectionVisible();
        adPage.isAdDetailsVisible();
        adPage.isAdSimilarSuggestionSectionVisible();
        adPage.isAdPriceVisible();
        adPage.isAdTagSectionVisible();
        adPage.isAdPhoneNumberVisible();
        adPage.isAdEmailButtonVisible();
        adPage.isAdPosterNameVisible();  
    });  

   /** ACCESSIBILITY TEST **/
    test('Checka11yAdPage', (async ({ page}, testInfo) => { 
        const accessibilityScanResults = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

        await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
        });
        expect(accessibilityScanResults.violations).toEqual([]);
    }));
});