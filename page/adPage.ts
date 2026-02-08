import { Page } from '@playwright/test';
import { adLocators } from '../locators/adLocators';

export class AdPage {
     protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isAdFavouriteButtonVisible() {
        return await this.page.locator(adLocators.AD_ADD_FAVORITES_BUTTON).isVisible();
    }

    async isAdDescriptionSectionVisible() {
        return await this.page.locator(adLocators.AD_DESCRIPTION_SECTION).isVisible();
    }

    async isAdDetailsVisible() {
        return await this.page.locator(adLocators.AD_DETAILS_SECTION).isVisible();
    }

    async isAdSimilarSuggestionVisible() {
        return await this.page.locator(adLocators.AD_SIMILAR_SUGGESTION_SECTION).isVisible();
    }

    async isAdPriceVisible() {
        return await this.page.locator(adLocators.AD_PRICE).isVisible();
    }

     async isAdTagVisible() {
        return await this.page.locator(adLocators.AD_TAGS_SECTION).isVisible();
    }

    async isAdPhoneNumberVisible() {
        return await this.page.locator(adLocators.AD_PHONE_NUMBER).getByText('See Phone Number').isVisible();
    }
    async isAdEmailButtonVisible() {
        return await this.page.locator(adLocators.AD_EMAIL_BUTTON).isVisible();
    }

    async isAdPosterNameVisible() {
        return await this.page.locator(adLocators.AD_POSTER_NAME).isVisible();
    }

    async isAdPhotosSectionVisible() {
        return await this.page.locator(adLocators.AD_PHOTOS_SECTION).isVisible();
    }
}