import { Page, expect } from '@playwright/test';
import { searchLocators } from '../locators/searchLocators';

export class SearchPage {
     protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async selectCategoryOptions(selectSelector: string, optionText: string) {
        await this.page.selectOption(selectSelector, { label: optionText});
    }


    async performSearchHomePageDefault() {
        await this.page.getByRole('button', { name: searchLocators.SEARCH_BUTTON_HOMEPAGE}).click();
        await this.page.waitForLoadState();
    }

    async performSearchHomePage(category: string, location: string) {
        await this.selectCategoryOptions(searchLocators.CATEGORY_DROPDOWN_HOMEPAGE_SEARCHPAGE, category);
        await this.page.selectOption(searchLocators.LOCATION_DROPDOWN_HOMEPAGE, {label: location});
        await this.page.getByRole('button', { name: searchLocators.SEARCH_BUTTON_HOMEPAGE }).click();
        await this.page.waitForLoadState();
    }

    async performAdvancedSearch(searchKeyword: string, category: string, location:string, milesRadius: string, minPrice: string, maxPrice: string) { 
        await this.page.locator(searchLocators.KEYWORD_INPUT_SEARCHPAGE).fill(searchKeyword);
        if (category.length > 3){
            await this.selectCategoryOptions(searchLocators.CATEGORY_DROPDOWN_HOMEPAGE_SEARCHPAGE, category);
        }
        await this.page.locator(searchLocators.LOCATION_DROPDOWN_SEARCHPAGE).fill(location);
        await this.page.locator(searchLocators.RADIUS_SELECT_SEARCHPAGE).selectOption(milesRadius);
        if(await this.page.locator(searchLocators.MIN_PRICE_INPUT_SEARCHPAGE).isVisible() && await this.page.locator(searchLocators.MAX_PRICE_INPUT_SEARCHPAGE).isVisible()) {
            await this.page.locator(searchLocators.MIN_PRICE_INPUT_SEARCHPAGE).fill(minPrice);
            await this.page.locator(searchLocators.MAX_PRICE_INPUT_SEARCHPAGE).fill(maxPrice);
        }
        await this.page.locator(searchLocators.SEARCH_BUTTON_ADVANCED_SEARCH).click();
        await this.page.waitForLoadState();
    }


    async calculateSearchResults(): Promise<number> {
        const searchResultsList = this.page.locator(searchLocators.LIST_SEARCH_RESULTS)
        return await searchResultsList.count();;
    }

    async validateSearchResults(resultNumnberToReach: number) {
        const searchResultNumber = await this.calculateSearchResults();
        expect(searchResultNumber).toBeGreaterThan(resultNumnberToReach);
    }

    async navigateToAdDetailsPage(adIndex: number) {
        const searchResultsList = this.page.locator(searchLocators.LIST_SEARCH_RESULTS);
        const adLink = searchResultsList.nth(adIndex).locator('a');
        await adLink.click();
        await this.page.waitForLoadState();
    }

    async isAlertButtonVisible() {
        return await this.page.locator(searchLocators.SEARCH_ALERT_CREATION_BUTTON).isVisible();
    }
    
    async isEmptyResultMessageVisible() {
        return await this.page.locator(searchLocators.SEARCH_ALERT_CREATION_BUTTON).isVisible();
    }

    async getEmptyResultMessage() {
        return await this.page.locator(searchLocators.NO_RESULT_MESSAGE).textContent();
    }
}