/**
 * @jest-environment jsdom
 */

import { prediction, PREDICTIONS } from '../scripts/frame5.js';

describe('prediction', () => {
    let predictionTxtEl;
    let predictPicEl;
    let revealLayerEl;

    beforeEach(() => {
        jest.resetModules();

        // Mock the necessary global objects
        global.document = {
            body: document.createElement('body'),
            querySelector: jest.fn().mockImplementation((selector) => {
                if (selector === '#prediction-txt') {
                    return predictionTxtEl;
                }
                if (selector === '#prediction-img') {
                    return predictPicEl;
                }
                if (selector === '#reveal-layer') {
                    return revealLayerEl;
                }

                return null;
            }),
        };

        document.body.innerHTML = `
            <div class='prediction'>
                <div class='image-layers'>
                    <img id="prediction-img" class="image-predict" src="" />
                    <img id='overlay-layer' class="image-overlay" src="assets/images/teacup/teacupTransparent.png" />
                    <img id='reveal-layer' class="image-overlay" src="assets/images/teacup/teacupFull.png" />
                </div>
                <h2 id="prediction-txt"></h2>
                <h2>
                    <a href="#" title="Start New Fortune" id="restart">Get New Fortune</a>
                </h2>
            </div>
        `;

        predictionTxtEl = document.querySelector('#prediction-txt');
        predictPicEl = document.querySelector('#prediction-img');
        revealLayerEl = document.querySelector('#reveal-layer');
    });

    test('should update the prediction text and image elements with a prediction from PREDICTIONS', () => {
        prediction();

        // Verify that the prediction text and image elements are updated correctly
        expect(
            PREDICTIONS.some((pred) => {
                const imgSrc = `http://localhost/${pred.picture.slice(2)}`;
                return (
                    pred.text === predictionTxtEl.innerHTML &&
                    imgSrc === predictPicEl.src
                );
            })
        ).toBe(true);
    });
});
