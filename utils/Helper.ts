import { Page } from '@playwright/test';
import { SEARCH_CATEGORY_DATA, SEARCH_LOCATION_DATA } from '../utils/test-data';


export class Helper {
    protected readonly page: Page;  
    constructor(page: Page) {
        this.page = page;
    }

    async clearAllBrowserData(page: Page) {
        const context = page.context();
        await context.clearCookies();
        await page.evaluate(() => localStorage.clear());
        await page.evaluate(() => sessionStorage.clear());
    }

    async acceptCookies(page: Page) {
        await page.click("id=onetrust-reject-all-handler");
        await page.waitForLoadState();
    }

    async goToVivaSite(page: Page) {
        await page.goto('https://www.vivastreet.co.uk/');
        await page.waitForLoadState();
    }

    getRandomSearchCategory = (): string => {
        const categories = SEARCH_CATEGORY_DATA.category;
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    getRandomSearchLocation = (): string => {
        const categories = SEARCH_LOCATION_DATA.location;
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }
}


