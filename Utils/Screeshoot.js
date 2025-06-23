
async function attachScreenshot(page, testInfo) {
    try {
        const screenshot = await page.screenshot();
        await testInfo.attach('screenshot', {
        body: screenshot,
        contentType: 'image/png',
        });
    } catch (e) {
        console.error('Gagal ambil screenshot:', e);
    }
}

export default attachScreenshot;