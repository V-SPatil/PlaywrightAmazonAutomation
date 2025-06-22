import { test, expect } from '../testsetup.js';

test('Search for product using search bar', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('wireless mouse');
  await page.keyboard.press('Enter');
  await expect(page.locator('.s-main-slot')).toBeVisible();
});

test('Search for invalid product and validate message', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('asdkfhaskdfh');
  await page.keyboard.press('Enter');
  await expect(page.locator('text=did not match any products')).toBeVisible();
});

test('Monitor and validate search API response', async ({ page }) => {
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes('search') && resp.status() === 200),
    page.goto('https://www.amazon.in'),
    page.locator('#twotabsearchtextbox').fill('headphones'),
    page.keyboard.press('Enter'),
  ]);
  expect(response.status()).toBe(200);
});
