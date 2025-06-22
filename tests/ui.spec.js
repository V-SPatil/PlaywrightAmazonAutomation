import { test, expect } from '../base.test.js';

test('Apply sort by Price: Low to High', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('books');
  await page.keyboard.press('Enter');
  await page.selectOption('select[name="s"]', 'price-asc-rank');
  await expect(page.locator('.s-main-slot')).toBeVisible();
});

test('Filter products by brand', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('earphones');
  await page.keyboard.press('Enter');
  await page.locator('span.a-size-base:has-text("boAt")').click();
  await expect(page.locator('.s-main-slot')).toBeVisible();
});
