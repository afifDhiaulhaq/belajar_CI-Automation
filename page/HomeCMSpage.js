import { expect } from '@playwright/test';

class HomeCMSPage {
  constructor(page) {
    this.page = page;
    this.updateButton = page.locator('button:has-text("Update")');
    this.tittleInput = page.locator('input[name="title"]');
    this.descriptionInput = page.locator('input[name="description"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.okButtonPopup = page.locator('button[class="swal2-confirm btn btn-primary"]');
    this.successMessage = page.locator('#swal2-title');
    this.tittleMessage = page.locator('.invalid-feedback').first();
    this.descriptionMessage = page.locator('.invalid-feedback').last();
  }
  async goto() {
    await this.page.goto('https://xocietyfragrance.com/dashboard');
  }

  async updateTittleDescription(tittle,desc){
    await this.updateButton.click();
    await this.tittleInput.fill(tittle);
    await this.descriptionInput.fill(desc);  
    await this.saveButton.click();
    await this.okButtonPopup.click();
  }

  async isUpdateTittleDescriptionSuccessful(message){
    await expect(this.successMessage).toHaveText(message);
  }
  async isTittleEmpty(message){
    await expect(this.tittleMessage).toHaveText(message);
  }
  async isDescriptionEmpty(message){
    await expect(this.descriptionMessage).toHaveText(message);
  }


}

export default HomeCMSPage;