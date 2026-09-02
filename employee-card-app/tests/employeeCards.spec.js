import { test, expect } from '@playwright/test';

test('Verify Employee Profile Cards implementation', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Verify page heading
  await expect(page.locator('h1')).toHaveText('Employee Profile Cards');

  // 2. Verify four employee cards
  const cards = page.locator('.employee-card');
  await expect(cards).toHaveCount(4);

  // 3. Verify employee name
  await expect(page.locator('.employee-name').first())
    .toHaveText('Aarav Sharma');

  // 4. Verify Employee ID
  await expect(page.locator('.employee-id').first())
    .toContainText('EMP101');

  // 5. Verify Department
  await expect(page.locator('.employee-dept').first())
    .toContainText('Engineering');

  // 6. Verify Designation
  await expect(page.locator('.employee-desig').first())
    .toContainText('Full Stack Developer');

  // 7. Verify Salary
  await expect(page.locator('.employee-salary').first())
    .toContainText('₹85,000');
});