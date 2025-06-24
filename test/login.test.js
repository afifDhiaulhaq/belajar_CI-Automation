const { test } = require('@playwright/test');
const LoginPage = require('../page/Loginpage').default;

test('Login dengan credential benar', async ({ page }) => {
  try {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login('admin','nimda');
    await loginpage.isLoginSuccessful();
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
});

test('Login dengan username dan password kosong', async ({ page }) => {
  try {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login('','');
    await loginpage.isLoginFiled();
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
});
