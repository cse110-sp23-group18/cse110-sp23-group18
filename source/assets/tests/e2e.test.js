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

    // Check that
    it('Test the landing frame of the app', async () => {
        await page.waitForTimeout(1000);
        // Click on the start button

        // Test for if the background music is playing
        // Check that the new page has loaded

        await page.click('.start-button')

        // const landingSelector = '#landing-layout'
        // const frame1Selector = '#frame1-layout'

        // const landingLayout = await page.$(landingSelector);
        // const frame1Layout = await page.$(frame1Selector)

        // const layoutInner = await page.$eval(element => element.textContent, landingLayout);
        // const frame1Inner = await page.$eval(element => element.textContent, frame1Layout);

        // expect(layoutInner.trim()).toBe('');
        // expect(frame1Inner.trim()).toBeTruthy();
    }, 5000);

    it('Test the first frame of the app', async () => {
        // Click on the green tea jar
        // Click on the confirmation
        // Wait for a few seconds
        // Check that the new frame has loaded

        const greenTeaJar = await page.$('.teajar-green');
        await greenTeaJar.click();

        const confirmation = await page.$('#next');

        expect(confirmation).toBeTruthy();

        await confirmation.click();
        await page.waitForTimeout(3000)
    }, 5000);

    it('Test the second frame of the app', async () => {
        // Click on the kettle
        // Wait for 5 seconds
        // Check that the new frame has loaded
        const teapotEl = await page.$('#teapot');
        await teapotEl.click();

        await page.waitForTimeout(7000)
    }, 10000);

    it('Test the third frame of the app', async () => {
        // Click on the kettle
        // Wait for a few seconds
        // Check that the new frame has loaded
        const teapotEl = await page.$('#teapotImage');
        await teapotEl.click();

        await page.waitForTimeout(8000);
    }, 10000);

    it('Test the fourth frame of the app', async () => {
        // Click on the teacup
        // Wait for a few seconds
        // Check that the new frame has loaded
        const teacupEl = await page.$('#teacup');
        await teacupEl.click();

        await page.waitForTimeout(3000);
    }, 5000);

    it('Test the fifth frame of the app', async () => {
        // Wait for a few seconds
        // Ensure that the page elements look correct
        await page.waitForTimeout(4000);
        
        const predictionTxtEl = await page.$('#prediction-txt');
        expect(predictionTxtEl).toBeTruthy();   
    }, 5000);

    it('Test going back to the home page from the fifth frame', async () => {
        // Click on the new fortune button
        // Wait for the page to reload
        // Ensure that you are on the langing page now
        await page.click('#restart')
    });
});
