import { test, expect } from '@playwright/test';

test('Example Login Test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'demo@demo.com');
  await page.fill('#loginpassword', 'demo');
  await page.click('button[onclick="logIn()"]');
  await expect(page.locator('#logout2')).toBeVisible();
});
