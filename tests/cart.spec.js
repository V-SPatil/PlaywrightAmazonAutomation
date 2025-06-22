import { test, expect } from '../testsetup.js';

test('Add product to cart and validate cart count', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('pen drive');
  await page.keyboard.press('Enter');
  const product = page.locator('.s-main-slot .s-result-item h2 a').first();
  await product.click();
  await page.click('#add-to-cart-button');
  await expect(page.locator('#nav-cart-count')).toHaveText(/\d+/);
});

test('Remove item from cart and validate empty state', async ({ page }) => {
  await page.goto('https://www.amazon.in/gp/cart/view.html');
  const deleteBtn = page.locator('[value="Delete"]');
  if (await deleteBtn.isVisible()) {
    await deleteBtn.click();
    await expect(page.locator('text=Your Amazon Cart is empty')).toBeVisible();
  }
});
