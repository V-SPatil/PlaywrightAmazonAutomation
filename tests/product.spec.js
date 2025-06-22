import { test, expect } from '../testsetup.js';

test('Click first product and validate detail page', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('usb cable');
  await page.keyboard.press('Enter');
  const firstProduct = page.locator('.s-main-slot .s-result-item h2 a').first();
  await firstProduct.click();
  await expect(page).toHaveURL(/gp\/product/);
});

test('Validate product image zoom feature', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('laptop');
  await page.keyboard.press('Enter');
  const firstProduct = page.locator('.s-main-slot .s-result-item h2 a').first();
  await firstProduct.click();
  await expect(page.locator('#imgTagWrapperId')).toBeVisible();
});
