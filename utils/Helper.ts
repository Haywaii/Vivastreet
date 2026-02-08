import { Page, expect } from '@playwright/test';

export async function clearAllBrowserData(page: Page) {
  const context = page.context();
  await context.clearCookies();
  await page.evaluate(() => localStorage.clear());
  await page.evaluate(() => sessionStorage.clear());
}

export async function acceptCookies(page: Page) {
    await page.click("id=onetrust-reject-all-handler");
    await page.waitForLoadState();
}

export async function goToVivaSite(page: Page) {
    await page.goto('https://www.vivastreet.co.uk/');
    await page.waitForLoadState();
}