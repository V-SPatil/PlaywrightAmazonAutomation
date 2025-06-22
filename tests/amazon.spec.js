import {test,expect} from '@playwright/test';

test('Search for product using search bar', async ({ page }) => {
    await page.goto('https://www.amazon.in');
    await page.locator('#twotabsearchtextbox').fill('wireless mouse');
    await page.keyboard.press('Enter');
    await expect(page.locator('.s-main-slot')).toBeVisible();
    });     