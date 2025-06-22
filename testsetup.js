import { test as base } from '@playwright/test';

export const test = base.extend({
  browser: async ({ browser }, use) => {
    await use(browser);
  },

  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});
