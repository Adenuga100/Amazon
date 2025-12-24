import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('White shirt');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  // await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('#a-autoid-2-announce').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
});