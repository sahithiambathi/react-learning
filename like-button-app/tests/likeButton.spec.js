import { test, expect } from '@playwright/test';

test('Verify Like Button Application', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Verify page heading
  await expect(page.locator('h1'))
    .toHaveText('Like Button Application');

  // 2. Verify initial likes count
  await expect(page.locator('.count-value'))
    .toHaveText('0');

  // 3. Click Like button
  await page.getByRole('button', { name: 'Like' }).click();

  // 4. Verify likes increased to 1
  await expect(page.locator('.count-value'))
    .toHaveText('1');

  // 5. Click Like again
  await page.getByRole('button', { name: 'Like' }).click();

  // 6. Verify likes increased to 2
  await expect(page.locator('.count-value'))
    .toHaveText('2');

  // 7. Click Reset
  await page.getByRole('button', { name: 'Reset' }).click();

  // 8. Verify likes reset to 0
  await expect(page.locator('.count-value'))
    .toHaveText('0');
});