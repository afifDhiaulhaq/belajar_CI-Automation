import { test } from '@playwright/test';
import LoginPage from '../page/Loginpage';
import HomeCMSpage from '../page/HomeCMSpage';
import attachScreenshot from '../Utils/Screeshoot';


async function setup(page) {
  const loginPage = new LoginPage(page);
  const homeCMSPage = new HomeCMSpage(page);
  await loginPage.goto();
  await loginPage.login('admin', 'nimda');
  await homeCMSPage.goto();
  return homeCMSPage;
}

test('update tittle dan description benner', async ({page},testInfo) =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.updateTittleDescription('demodemo ','demodemo');
    await homeCMSpage.isUpdateTittleDescriptionSuccessful('Banner information has been updated!');
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
})

test('update tittle empty', async ({page},testInfo)  =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.updateTittleDescription('','demodemo');
    await homeCMSpage.isTittleEmpty('The title field is required.')
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
})
test('update description empty', async ({page},testInfo)  =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.updateTittleDescription('demo','');
    await homeCMSpage.isDescriptionEmpty('The description field is required.')
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
})
test('update tittle and description empty', async ({page},testInfo)  =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.updateTittleDescription('','');
    await homeCMSpage.isTittleEmpty('The title field is required.')
    await homeCMSpage.isDescriptionEmpty('The description field is required.')
  } catch (error) {
     await attachScreenshot(page, testInfo);
    throw error;
  }
})
test('Upload image banner', async ({page},testInfo) =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.uploadImageBanner();
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
})
test('Upload video banner', async ({page},testInfo) =>{
  try {
    const homeCMSpage = await setup(page);
    await homeCMSpage.uploadVideoBanner();
  } catch (error) {
    await attachScreenshot(page, testInfo);
    throw error;
  }
})