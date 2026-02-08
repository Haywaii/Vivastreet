import { test, expect } from '@playwright/test';
import { SearchPage } from '../page/searchPage';
import { SEARCH_CATEGORY_DATA, SEARCH_LOCATION_DATA, WRONG_DATA_TO_SEARCH, ERROR_MESSAGES } from '../utils/test-data';
import { goToVivaSite, clearAllBrowserData, acceptCookies } from '../utils/Helper';
import AxeBuilder from '@axe-core/playwright';


test.describe('Aviva Search Tests', () => {
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    await goToVivaSite(page);
    await acceptCookies(page);
  });

  test.afterEach(async ({ page }) => {
    await clearAllBrowserData(page);
  });

  /** POSITIVE TEST SCENARIOS **/
  test('PTS1 - ValidateSearchResult', async ({ page}) => {
    await searchPage.performanceSearchHomePageDefault();
    await searchPage.calculateSearchResults();
    await searchPage.validateSearchResults(1);
  });  

  test('PTS2 - ValidateAdvancedSearchResult', async ({ page}) => {
    await searchPage.performanceSearchHomePageDefault();
    await searchPage.performanceAdvancedSearch('BMW', '', '', '50', '100', '1000');
    await page.waitForLoadState();
    await searchPage.calculateSearchResults();
    await searchPage.validateSearchResults(10);
  }); 


  /** NEGATIVE TEST SCENARIOS **/
  test('NTS1 - ValidateEmptyAdvancedSearchResult', async ({ page}) => {
    await searchPage.performanceSearchHomePageDefault();
    await searchPage.performanceAdvancedSearch(WRONG_DATA_TO_SEARCH.keyword[0], '', '', '10', '100', '1000');
    await page.waitForLoadState();

    await searchPage.isAlertButtonVisible();
    const hasEmptyResultMessage = await searchPage.getEmptyResultMessage();
    expect(hasEmptyResultMessage).toContain(ERROR_MESSAGES.EMPTY_SEARCH_MESSAGE);

  });  

    /** ACCESSIBILITY TEST **/
  test('Checka11ySearchPage', (async ({ page}, testInfo) => { 
    await searchPage.performanceSearchHomePageDefault();
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