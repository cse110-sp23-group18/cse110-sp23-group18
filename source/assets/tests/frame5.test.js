/**
 * @jest-environment jsdom
 */

import { prediction, PREDICTIONS } from '../scripts/frame5.js';

describe('prediction', () => {
    let predictionTxtEl;
    let predictPicEl;

    beforeEach(() => {
        jest.resetModules();

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
    });

    test('should update the prediction text and image elements with a prediction from PREDICTIONS', async () => {
        prediction();

        await new Promise((resolve) => {
            setTimeout(() => {
                // Verify that the prediction text and image elements are updated correctly
                expect(
                    PREDICTIONS.some((pred) => {
                        return (
                            pred.text === predictionTxtEl.innerHTML &&
                            predictPicEl.src.includes(pred.picture.slice(2))
                        );
                    })
                ).toBe(true);

                resolve();
            }, 3500);
        });
    });
});
