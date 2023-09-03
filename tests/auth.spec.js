const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization',  () => {
    test('Sign in with existing credentials', async ({page}) => {
      await page.goto('https://coding.pasv.us/user/login')

      await page.locator('#normal_login_email').fill('kharatova1994@gmail.com')
      await page.locator('#normal_login_password').fill('A12345678v')
      await page.locator('button[type="submit"]').click()

      await expect(page.locator('.ant-avatar-square')).toBeVisible()
    })
})

