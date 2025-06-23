import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorAlert = page.locator('div[class="alert alert-danger alert-dismissible show fade"]');
  }

  async goto() {
    await this.page.goto('https://xocietyfragrance.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginSuccessful() {
    await expect(this.page).toHaveURL('https://xocietyfragrance.com/dashboard');
  }

  async isLoginFiled(){
    await expect(this.errorAlert).toBeVisible();
  }
}

export default LoginPage;