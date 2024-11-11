const puppeteer = require('puppeteer');

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function checkConsoleLogForProof(url, proofString = 'xss!!!', timeout = 2000) {
    const browser = await puppeteer.launch(
        {
            executablePath: '/usr/bin/google-chrome',
            args: ['--disable-web-security', '--no-sandbox'],
        }
    );
    const page = await browser.newPage();

    // Create a variable to track if proofString is logged
    let proofFound = false;

    // Listen for console events on the page
    page.on('console', (msg) => {
        if (msg.text().includes(proofString)) {
            proofFound = true;
        }
    });

    // Visit the provided URL
    await page.goto(url);

    // Wait for the specified timeout to ensure console logs are captured
    await sleep(timeout);

    // Close the browser
    await browser.close();

    return proofFound;
}

module.exports = {checkConsoleLogForProof}