// const puppeteer = require('puppeteer');
//
// (async () => {
//     // Launch the browser
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//
//     // Navigate to the webpage
//     await page.goto('http://example.com');
//
//     // Wait for the page to load
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     // Click the button at the top right of the page
//     await page.click('button.top-right-button-selector'); // replace with your button's CSS selector
//
//     // Wait for the overlay window to appear
//     await page.waitForSelector('.overlay-window-selector'); // replace with your overlay window's CSS selector
//
//     // Fill the username and password fields character by character
//     const username = 'your-username';
//     const password = 'your-password';
//
//     for (let i = 0; i < username.length; i++) {
//         await page.type('.username-input-selector', username[i]); // replace with your username input's CSS selector
//         await page.waitForTimeout(100); // wait 100ms between each character
//     }
//
//     for (let i = 0; i < password.length; i++) {
//         await page.type('.password-input-selector', password[i]); // replace with your password input's CSS selector
//         await page.waitForTimeout(100); // wait 100ms between each character
//     }
//
//     // Wait a few seconds
//     await page.waitForTimeout(3000); // wait 3 seconds
//
//     // Press the Enter key
//     await page.keyboard.press('Enter');
//
//     // Close the browser
//     await browser.close();
// })();