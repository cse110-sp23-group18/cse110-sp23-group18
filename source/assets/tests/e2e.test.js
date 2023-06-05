/**
 * @jest-environment puppeteer
 */

describe('Basic user flow for Website', () => {
    // const BASE_LINK = 'http://127.0.0.1:5500/source' // test locally
    const BASE_LINK = 'https://dev--apollo18-tealeaves.netlify.app/source'; // test dev

    // First, visit the tasseography website
    beforeAll(async () => {
        // await page.goto('https://apollo18-tealeaves.netlify.app'); // test prod
        await page.goto(`${BASE_LINK}/index.html`);
    });

    // Check that index.html and index.js are functioning correctly
    it('Landing Page', async () => {
        console.log('Checking to make sure localStorage is set correctly');

        // Find all relevant items in local storage and test them
        const localStorageArray = [
            'index',
            'frame1',
            'frame2',
            'frame3',
            'frame4',
        ];
        let localStorage = await page.evaluate(() => ({
            ...window.localStorage,
        }));
        const numVisited = localStorageArray.filter(
            (page) => localStorage[page] === 'true'
        ).length;

        // Expect none of the pages to be visited thus far
        expect(numVisited).toBe(0);

        await page.waitForNavigation();
        const nextLink = await page.$('.start-button');
        await nextLink.click();

        localStorage = await page.evaluate(() => ({ ...window.localStorage }));

        expect(localStorage.index).toBe('true');

        const url = page.url();

        console.log(url)
    });

    it('Test the first frame of the app', async () => { });

    it('Test the second frame of the app', async () => { });

    it('Test the third frame of the app', async () => { });

    it('Test the fourth frame of the app', async () => { });

    it('Test the fifth frame of the app', async () => { });

    it('Test going back to the home page from the fifth frame', async () => { });
});
