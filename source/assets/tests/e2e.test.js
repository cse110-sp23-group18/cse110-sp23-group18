/**
 * @jest-environment puppeteer
 */

describe('Basic user flow for Website', () => {
    const BASE_LINK = 'http://127.0.0.1:5500/source'; // test locally
    // const BASE_LINK = 'https://dev--apollo18-tealeaves.netlify.app'; // test dev

    // First, visit the tasseography website
    beforeAll(async () => {
        // await page.goto('https://apollo18-tealeaves.netlify.app'); // test prod
        await page.goto(`${BASE_LINK}/`);
    });

    // Check that index.html and index.js are functioning correctly
    it('Landing Page', async () => {});

    it('Test the first frame of the app', async () => {});

    it('Test the second frame of the app', async () => {});

    it('Test the third frame of the app', async () => {});

    it('Test the fourth frame of the app', async () => {});

    it('Test the fifth frame of the app', async () => {});

    it('Test going back to the home page from the fifth frame', async () => {});
});
