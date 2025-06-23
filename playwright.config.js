// playwright.config.js
module.exports = {
  use: {
    baseURL: 'https://example.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  timeout: 30000,
  retries: 1,
  reporter: 'html'
};
