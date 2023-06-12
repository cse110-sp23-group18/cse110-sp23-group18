/**
 * @summary This file provides the testing for the fourth frame of the file.
 *
 * @author Pramesh Kariyawasam (June 11, 2023)
 *
 */

import initFrameFour from '../scripts/frame4.js';
import initFrameFive from '../scripts/frame5.js';

// Prevents an HTMLMediaElement error
window.HTMLMediaElement.prototype.play = () => {
    // Do nothing
};

describe('initFrameFour', () => {
    let teacupImage;
    let frame4Layout;
    let frame5Layout;
    let frame5Template;
    let predictionTxtEl;
    let predictionImgEl;
    let revealLayerEl;
    let restartButton;

    beforeEach(() => {
        jest.resetModules();

        document.body.innerHTML = `
      <img id="teacup" />
      <div id="frame4-layout"></div>
      <div id="frame5-layout"></div>
      <template id="frame5-template">
        <p id="prediction-txt"></p>
        <img id="prediction-img" src="" />
        <div id="reveal-layer"></div>
        <button id="restart">Restart</button>
      </template>
    `;

        teacupImage = document.querySelector('#teacup');
        frame4Layout = document.querySelector('#frame4-layout');
        frame5Layout = document.querySelector('#frame5-layout');
        frame5Template = document.querySelector('#frame5-template');

        predictionTxtEl = document.querySelector('#prediction-txt');
        predictionImgEl = document.querySelector('#prediction-img');
        revealLayerEl = document.querySelector('#reveal-layer');
        restartButton = document.querySelector('#restart');
    });

    test('should add click event listener to teacup element and navigate to frame 5', () => {
        // Call the function
        initFrameFour();

        // Click the teacup image
        teacupImage.click();

        // Timeout needed to let the function's setTimeout complete
        setTimeout(() => {
            // Check that the layout and template have been updated correctly
            expect(frame4Layout.style.display).toBe('none');
            expect(frame4Layout.innerHTML).toBe('');
            expect(frame5Layout.innerHTML).toBe(frame5Template.innerHTML);
            expect(frame5Layout.style.display).toBe('flex');

            // Check that the prediction function has been called in frame5.js
            expect(initFrameFive).toHaveBeenCalled();

            // Check that the prediction elements have been populated correctly
            expect(predictionTxtEl.innerHTML).not.toBe('');
            expect(predictionImgEl.src).not.toBe('');
            expect(revealLayerEl.style.display).toBe('none');
            expect(restartButton.style.display).toBe('block');
        }, 1300);
    });
});
