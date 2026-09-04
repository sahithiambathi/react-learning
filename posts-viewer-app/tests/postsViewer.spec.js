import { test, expect } from '@playwright/test'; 
 
test.describe('React Exercise 4: Posts Viewer Verification', () => { 
  test.beforeEach(async ({ page }) => { 
    await page.goto('http://localhost:5173'); 
  }); 
 
  // 1. Verify heading 
  test('1. Verify heading', async ({ page }) => { 
    const heading = page.locator('h1.posts-heading'); 
    await expect(heading).toHaveText('Posts Viewer'); 
  }); 
 
  // 2. Table visible 
  test('2. Table visible', async ({ page }) => { 
    const table = page.locator('table.posts-table'); 
    await expect(table).toBeVisible(); 
  }); 
 
  // 3. Three headers 
  test('3. Three headers', async ({ page }) => { 
    const headers = page.locator('table.posts-table th'); 
    await expect(headers).toHaveCount(3); 
    await expect(headers.nth(0)).toHaveText('Post ID'); 
    await expect(headers.nth(1)).toHaveText('Title'); 
    await expect(headers.nth(2)).toHaveText('Description'); 
  }); 
 
  // 4. Posts loaded 
  test('4. Posts loaded', async ({ page }) => { 
    const rows = page.locator('tbody tr.post-row'); 
    await expect(rows.first()).toBeVisible(); 
  }); 
 
  // 5. First ID 
  test('5. First ID', async ({ page }) => { 
    const firstId = page.locator('.post-id').first(); 
    await expect(firstId).toHaveText('1'); 
  }); 
 
 
 
  // 6. First title 
  test('6. First title', async ({ page }) => { 
    const firstTitle = page.locator('.post-title').first(); 
    await expect(firstTitle).not.toBeEmpty(); 
  }); 
 
  // 7. 100 rows displayed 
  test('7. 100 rows displayed', async ({ page }) => { 
    const rows = page.locator('tbody tr.post-row'); 
    await expect(rows).toHaveCount(100); 
  }); 
}); 