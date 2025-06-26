import { expect } from '@playwright/test';
const path = require('path');


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
    this.imageBannerTab = page.locator('button:has-text(" Banner Image ")');
    this.changeButton = page.getByRole('button', { name: 'Change' });
    this.videoBannerTab = page.locator('button:has-text(" Banner Video ")');
    this.inputImageFile = page.locator('input[name="image_input"]');
    this.inputVideoFile = page.locator('input[name="video_input"]');
    
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

  async uploadImageBanner(){
    const filePath = path.resolve(__dirname, 'image.png');
    await this.imageBannerTab.click();
    await expect(this.changeButton).toBeVisible();
    await this.changeButton.click();
    await this.inputImageFile.setInputFiles(filePath);
    await expect(this.saveButton).toBeVisible();
    await this.saveButton.click();
    await this.okButtonPopup.click();
  }

  async uploadVideoBanner(){
    const filePath = path.resolve(__dirname, 'video.mp4');
    await this.videoBannerTab.click();
    await expect(this.changeButton).toBeVisible();
    await this.changeButton.click();
    await this.inputVideoFile.setInputFiles(filePath);
    // await expect(this.saveButton).toBeVisible();
    await this.saveButton.click({ timeout: 10000 });
    await this.okButtonPopup.click();
  }




}

export default HomeCMSPage;