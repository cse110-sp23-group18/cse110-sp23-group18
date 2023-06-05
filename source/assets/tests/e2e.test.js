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

    it('Test the first frame of the app', async () => {});

    it('Test the second frame of the app', async () => {});

    it('Test the third frame of the app', async () => {});

    it('Test the fourth frame of the app', async () => {});

    it('Test the fifth frame of the app', async () => {});

    it('Test going back to the home page from the fifth frame', async () => {});

    // // Check to make sure that all 20 <product-item> elements have data in them
    // it('Make sure <product-item> elements are populated', async () => {
    //     console.log('Checking to make sure <product-item> elements are populated...');
    //     // Start as true, if any don't have data, swap to false
    //     let allArePopulated = true;
    //     let data, plainValue;
    //     // Query select all of the <product-item> elements
    //     const prodItems = await page.$$('product-item');

    //     for (let i = 0; i < prodItems.length; i++) {
    //         console.log(`Checking product item ${i + 1}/${prodItems.length}`);
    //         // Grab the .data property of <product-items> to grab all of the json data stored inside
    //         data = await prodItems[i].getProperty('data');
    //         // Convert that property to JSON
    //         plainValue = await data.jsonValue();
    //         // Make sure the title, price, and image are populated in the JSON
    //         if (plainValue.title.length == 0) { allArePopulated = false; }
    //         if (plainValue.price.length == 0) { allArePopulated = false; }
    //         if (plainValue.image.length == 0) { allArePopulated = false; }
    //     }

    //     // Expect allArePopulated to still be true
    //     expect(allArePopulated).toBe(true);

    //     // TODO - Step 1
    //     // Right now this function is only checking the first <product-item> it found, make it so that
    //     // it checks every <product-item> it found

    // }, 10000);

    // // Check to make sure that when you click "Add to Cart" on the first <product-item> that
    // // the button swaps to "Remove from Cart"
    // it('Clicking the "Add to Cart" button should change button text', async () => {
    //     console.log('Checking the "Add to Cart" button...');
    //     // TODO - Step 2
    //     // Query a <product-item> element using puppeteer ( checkout page.$() and page.$$() in the docs )
    //     // Grab the shadowRoot of that element (it's a property), then query a button from that shadowRoot.
    //     // Once you have the button, you can click it and check the innerText property of the button.
    //     // Once you have the innerText property, use innerText.jsonValue() to get the text value of it
    //     const prodItem = await page.$('product-item');
    //     const shadowRoot = await prodItem.getProperty('shadowRoot');
    //     const button = await shadowRoot.$('button');
    //     await button.click();
    //     const buttonTextProp = await button.getProperty('innerText');
    //     const buttonText = await buttonTextProp.jsonValue();
    //     expect(buttonText).toBe('Remove from Cart');

    //     // Unclick button for the next part
    //     await button.click();
    // }, 2500);

    // // Check to make sure that after clicking "Add to Cart" on every <product-item> that the Cart
    // // number in the top right has been correctly updated
    // it('Checking number of items in cart on screen', async () => {
    //     console.log('Checking number of items in cart on screen...');
    //     // TODO - Step 3
    //     // Query select all of the <product-item> elements, then for every single product element
    //     // get the shadowRoot and query select the button inside, and click on it.
    //     // Check to see if the innerText of #cart-count is 20
    //     const prodItems = await page.$$('product-item');

    //     for (let i = 0; i < prodItems.length; i++) {
    //         console.log(`Clicking product item ${i + 1}/${prodItems.length}`);
    //         const item = prodItems[i];
    //         const shadowRoot = await item.getProperty('shadowRoot');
    //         const button = await shadowRoot.$('button');
    //         await button.click();
    //     }

    //     const cartCountEle = await page.$('#cart-count');
    //     const cartCountProp = await cartCountEle.getProperty('innerText');
    //     const cartCount = await cartCountProp.jsonValue();

    //     expect(cartCount).toBe('20');
    // }, 10000);

    // // Check to make sure that after you reload the page it remembers all of the items in your cart
    // it('Checking number of items in cart on screen after reload', async () => {
    //     console.log('Checking number of items in cart on screen after reload...');
    //     // TODO - Step 4
    //     // Reload the page, then select all of the <product-item> elements, and check every
    //     // element to make sure that all of their buttons say "Remove from Cart".
    //     // Also check to make sure that #cart-count is still 20
    //     let allInCart = true;

    //     await page.reload();

    //     const prodItems = await page.$$('product-item');

    //     for (let i = 0; i < prodItems.length; i++) {
    //         console.log(`Checking product item ${i + 1}/${prodItems.length}`);
    //         const item = prodItems[i];
    //         const shadowRoot = await item.getProperty('shadowRoot');
    //         const button = await shadowRoot.$('button');
    //         const buttonTextProp = await button.getProperty('innerText');
    //         const buttonText = await buttonTextProp.jsonValue();

    //         if (buttonText !== "Remove from Cart") allIncart = false;
    //     }

    //     expect(allInCart).toBe(true);

    //     const cartCountEle = await page.$('#cart-count');
    //     const cartCountProp = await cartCountEle.getProperty('innerText');
    //     const cartCount = await cartCountProp.jsonValue();

    //     expect(cartCount).toBe('20');
    // }, 10000);

    // // Check to make sure that the cart in localStorage is what you expect
    // it('Checking the localStorage to make sure cart is correct', async () => {
    //     // TODO - Step 5
    //     // At this point he item 'cart' in localStorage should be
    //     // '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]', check to make sure it is
    //     const cartStorage = await page.evaluate(() => window.localStorage.getItem("cart"))

    //     expect(cartStorage).toBe('[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]');
    // });

    // // Checking to make sure that if you remove all of the items from the cart that the cart
    // // number in the top right of the screen is 0
    // it('Checking number of items in cart on screen after removing from cart', async () => {
    //     console.log('Checking number of items in cart on screen...');
    //     // TODO - Step 6
    //     // Go through and click "Remove from Cart" on every single <product-item>, just like above.
    //     // Once you have, check to make sure that #cart-count is now 0
    //     const prodItems = await page.$$('product-item');

    //     for (let i = 0; i < prodItems.length; i++) {
    //         console.log(`Clicking product item ${i + 1}/${prodItems.length}`);
    //         const item = prodItems[i];
    //         const shadowRoot = await item.getProperty('shadowRoot');
    //         const button = await shadowRoot.$('button');
    //         await button.click();
    //     }

    //     const cartCountEle = await page.$('#cart-count');
    //     const cartCountProp = await cartCountEle.getProperty('innerText');
    //     const cartCount = await cartCountProp.jsonValue();

    //     expect(cartCount).toBe('0');
    // }, 10000);

    // // Checking to make sure that it remembers us removing everything from the cart
    // // after we refresh the page
    // it('Checking number of items in cart on screen after reload', async () => {
    //     console.log('Checking number of items in cart on screen after reload...');
    //     // TODO - Step 7
    //     // Reload the page once more, then go through each <product-item> to make sure that it has remembered nothing
    //     // is in the cart - do this by checking the text on the buttons so that they should say "Add to Cart".
    //     // Also check to make sure that #cart-count is still 0
    //     let noneInCart = true;

    //     await page.reload();

    //     const prodItems = await page.$$('product-item');

    //     for (let i = 0; i < prodItems.length; i++) {
    //         console.log(`Checking product item ${i + 1}/${prodItems.length}`);
    //         const item = prodItems[i];
    //         const shadowRoot = await item.getProperty('shadowRoot');
    //         const button = await shadowRoot.$('button');
    //         const buttonTextProp = await button.getProperty('innerText');
    //         const buttonText = await buttonTextProp.jsonValue();

    //         if (buttonText !== "Add to Cart") noneInCart = false;
    //     }

    //     expect(noneInCart).toBe(true);

    //     const cartCountEle = await page.$('#cart-count');
    //     const cartCountProp = await cartCountEle.getProperty('innerText');
    //     const cartCount = await cartCountProp.jsonValue();

    //     expect(cartCount).toBe('0');
    // }, 10000);

    // // Checking to make sure that localStorage for the cart is as we'd expect for the
    // // cart being empty
    // it('Checking the localStorage to make sure cart is correct', async () => {
    //     console.log('Checking the localStorage...');
    //     // TODO - Step 8
    //     // At this point he item 'cart' in localStorage should be '[]', check to make sure it is
    //     const cartStorage = await page.evaluate(() => window.localStorage.getItem("cart"))

    //     expect(cartStorage).toBe('[]');
    // });
});
