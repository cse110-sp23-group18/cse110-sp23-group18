/**
 * @jest-environment puppeteer
 */

describe('Basic user flow for Website', () => {
    // const BASE_LINK = 'http://127.0.0.1:5500/source'; // test locally
    const BASE_LINK = 'https://dev--apollo18-tealeaves.netlify.app'; // test dev

    // First, visit the tasseography website
    beforeAll(async () => {
        // await page.goto('https://apollo18-tealeaves.netlify.app'); // test prod
        await page.goto(`${BASE_LINK}/`);
    });

    it('Test the landing frame of the app', async () => {
        // Wait for the page to load (wait for 1 sec)
        await page.waitForTimeout(1000);

        // Click on the start button
        await page.click('.start-button');

        // Check that the new page has loaded
        const landingLayout = await page.$('#landing-layout');
        const landingLayoutProp = await landingLayout.getProperty('innerHTML');
        const landingLayoutInner = await landingLayoutProp.jsonValue();

        const frame1Layout = await page.$('#frame1-layout');
        const frame1LayoutProp = await frame1Layout.getProperty('innerHTML');
        const frame1LayoutInner = await frame1LayoutProp.jsonValue();

        expect(landingLayoutInner.trim()).toBe('');
        expect(frame1LayoutInner.trim()).toBeTruthy();
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
        await page.waitForTimeout(3000);

        // Check that the new page has loaded
        const frame1Layout = await page.$('#frame1-layout');
        const frame1LayoutProp = await frame1Layout.getProperty('innerHTML');
        const frame1LayoutInner = await frame1LayoutProp.jsonValue();

        const frame2Layout = await page.$('#frame2-layout');
        const frame2LayoutProp = await frame2Layout.getProperty('innerHTML');
        const frame2LayoutInner = await frame2LayoutProp.jsonValue();

        expect(frame1LayoutInner.trim()).toBe('');
        expect(frame2LayoutInner.trim()).toBeTruthy();
    }, 5000);

    it('Test the second frame of the app', async () => {
        // Click on the kettle
        // Wait for 5 seconds
        // Check that the new frame has loaded
        const teapotEl = await page.$('#teapot');
        await teapotEl.click();

        await page.waitForTimeout(7000);

        // Check that the new page has loaded
        const frame2Layout = await page.$('#frame2-layout');
        const frame2LayoutProp = await frame2Layout.getProperty('innerHTML');
        const frame2LayoutInner = await frame2LayoutProp.jsonValue();

        const frame3Layout = await page.$('#frame3-layout');
        const frame3LayoutProp = await frame3Layout.getProperty('innerHTML');
        const frame3LayoutInner = await frame3LayoutProp.jsonValue();

        expect(frame2LayoutInner.trim()).toBe('');
        expect(frame3LayoutInner.trim()).toBeTruthy();
    }, 10000);

    it('Test the third frame of the app', async () => {
        // Click on the kettle
        // Wait for a few seconds
        // Check that the new frame has loaded
        const teapotEl = await page.$('#teapotImage');
        await teapotEl.click();

        await page.waitForTimeout(8000);

        // Check that the new page has loaded
        const frame3Layout = await page.$('#frame3-layout');
        const frame3LayoutProp = await frame3Layout.getProperty('innerHTML');
        const frame3LayoutInner = await frame3LayoutProp.jsonValue();

        const frame4Layout = await page.$('#frame4-layout');
        const frame4LayoutProp = await frame4Layout.getProperty('innerHTML');
        const frame4LayoutInner = await frame4LayoutProp.jsonValue();

        expect(frame3LayoutInner.trim()).toBe('');
        expect(frame4LayoutInner.trim()).toBeTruthy();
    }, 10000);

    it('Test the fourth frame of the app', async () => {
        // Click on the teacup
        // Wait for a few seconds
        // Check that the new frame has loaded
        const teacupEl = await page.$('#teacup');
        await teacupEl.click();

        await page.waitForTimeout(3000);

        // Check that the new page has loaded
        const frame4Layout = await page.$('#frame4-layout');
        const frame4LayoutProp = await frame4Layout.getProperty('innerHTML');
        const frame4LayoutInner = await frame4LayoutProp.jsonValue();

        const frame5Layout = await page.$('#frame5-layout');
        const frame5LayoutProp = await frame5Layout.getProperty('innerHTML');
        const frame5LayoutInner = await frame5LayoutProp.jsonValue();

        expect(frame4LayoutInner.trim()).toBe('');
        expect(frame5LayoutInner.trim()).toBeTruthy();
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
        await page.click('#restart');
    });
});
