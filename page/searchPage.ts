import { Page, expect } from '@playwright/test';
import { searchLocators } from '../locators/searchLocators';

export class SearchPage {
     protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performanceSearchHomePageDefault() {
        await this.page.getByRole('button', { name: searchLocators.SEARCH_BUTTON_HOMEPAGE}).click();
        await this.page.waitForLoadState();
    }

    async performSearchHomePage(categoryGroup: string, category: string, location: string) {
        await this.selectOptionFromOptgroupByText(this.page, searchLocators.CATEGORY_DROPDOWN_HOMEPAGE_SEARCHPAGE, categoryGroup, category);
        await this.page.locator(searchLocators.LOCATION_DROPDOWN_HOMEPAGE).click();
        await this.page.locator(searchLocators.LOCATION_DROPDOWN_HOMEPAGE).selectOption(location);
        await this.page.locator(searchLocators.SEARCH_BUTTON_HOMEPAGE).click();
        await this.page.waitForLoadState();
    }

    async performanceAdvancedSearch(searchKeyword: string, category: string, location:string, milesRadius: string, minPrice: string, maxPrice: string) { 
        await this.page.locator(searchLocators.KEYWORD_INPUT_SEARCHPAGE).fill(searchKeyword);
        //await this.selectOptionFromOptgroupByText(this.page, searchLocators.CATEGORY_DROPDOWN_HOMEPAGE_SEARCHPAGE, '', category);
        await this.page.locator(searchLocators.LOCATION_DROPDOWN_SEARCHPAGE).fill(location);
        await this.page.locator(searchLocators.RADIUS_SELECT_SEARCHPAGE).selectOption(milesRadius);
        if(await this.page.locator(searchLocators.MIN_PRICE_INPUT_SEARCHPAGE).isVisible() && await this.page.locator(searchLocators.MAX_PRICE_INPUT_SEARCHPAGE).isVisible()) {
            await this.page.locator(searchLocators.MIN_PRICE_INPUT_SEARCHPAGE).fill(minPrice);
            await this.page.locator(searchLocators.MAX_PRICE_INPUT_SEARCHPAGE).fill(maxPrice);
        }
        await this.page.locator(searchLocators.SEARCH_BUTTON_SEARCHPAGE).click();
        await this.page.waitForLoadState();
    }


    async calculateSearchResults(): Promise<number> {
        const searchResultsList = this.page.locator(searchLocators.LIST_SEARCH_RESULTS)
        return await searchResultsList.count();;
    }

    async validateSearchResults() {
        const searchResultNumber = await this.calculateSearchResults();
        expect(searchResultNumber).toBeGreaterThan(1);
    }

    async navigateToAdDetailsPage(adIndex: number) {
        const searchResultsList = this.page.locator(searchLocators.LIST_SEARCH_RESULTS);
        const adLink = searchResultsList.nth(adIndex).locator('a');
        await adLink.click();
        await this.page.waitForLoadState();
    }


    async selectOptionFromOptgroupByText(page: any, selectSelector: string, optgroupLabel: string, optionText: string): Promise<void> {
        const selectElement = page.locator(selectSelector).first();
        await selectElement.waitFor({ state: 'visible' });
        await selectElement.click();

        let optionSelector: string;
        if (optgroupLabel && optionText) {
            optionSelector = `${selectSelector} optgroup[label="${optgroupLabel}"] option:has-text("${optionText}")`;
            await page.selectOption(optionSelector , { label: optionText });
        } else {
            //await page.getByText('-- Vehicles --').nth(1).click();
            //await page.locator(`${selectSelector} optgroup[label="${optgroupLabel}"]`).click();
            optionSelector = `${selectSelector} optgroup:has-text("${optgroupLabel}")`;
            await page.selectOption(optionSelector , { label: optgroupLabel });
        }
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