import { test } from '@playwright/test';
import { SearchPage } from '../page/searchPage';
import { AdPage } from '../page/adPage';
import { goToVivaSite, clearAllBrowserData, acceptCookies } from '../utils/Helper';

test.describe('Aviva Search Tests', () => {
  let searchPage: SearchPage;
  let adPage: AdPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    adPage = new AdPage(page);
    await goToVivaSite(page);
    await acceptCookies(page);
    await searchPage.performanceSearchHomePageDefault();
    await searchPage.navigateToAdDetailsPage(0);
  });

  test.afterEach(async ({ page }) => {
    await clearAllBrowserData(page);
  });

  /** POSITIVE TEST SCENARIOS **/
  test('PTS1 - ValidateAdPageContent', async ({ page}) => {
    adPage.isAdFavouriteButtonVisible();
    adPage.isAdDescriptionSectionVisible();
    adPage.isAdDetailsVisible();
    adPage.isAdSimilarSuggestionVisible();
    adPage.isAdPriceVisible();
    adPage.isAdTagVisible();
    adPage.isAdPhoneNumberVisible();
    adPage.isAdEmailButtonVisible();
    adPage.isAdPosterNameVisible();
    adPage.isAdPhotosSectionVisible();
  });  

});