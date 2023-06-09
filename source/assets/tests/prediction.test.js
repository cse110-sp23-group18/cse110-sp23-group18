/**
 * @jest-environment jsdom
 */

import {
    prediction,
    PREDICTIONS,
    allFramesReached,
} from '../scripts/frame5.js';

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = String(value);
    }

    removeItem(key) {
        delete this.store[key];
    }
}

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

        global.localStorage = new LocalStorageMock();

        document.body.innerHTML = `
            <div class='prediction'>
                <div class='image-layers'>
                    <img id="prediction-img" class="image-predict" src="" />
                    <img id='overlay-layer' class="image-overlay" src="assets/images/teacup/teacupTransparent.png" />
                    <img id='reveal-layer' class="image-overlay" src="assets/images/teacup/teacupFull.png" />
                </div>
                <h2 id="prediction-txt"></h2>
            </div>

            <h2>
                <a href="index.html" title="Start New Fortune" id="restart">Get New Fortune</a>
            </h2>
        `;

        predictionTxtEl = document.querySelector('#prediction-txt');
        predictPicEl = document.querySelector('#prediction-img');
        revealLayerEl = document.querySelector('#reveal-layer');
    });

    // test('should not set prediction text and image if all frames are not reached', () => {
    //     localStorage.setItem('index', 'false'); // Simulate frames not reached

    //     prediction();

    //     expect(predictionTxtEl.innerHTML).toBe('');
    //     expect(predictPicEl.src).toBe('');
    // });

    test('should update the prediction text and image elements with a prediction from PREDICTIONS', () => {
        localStorage.setItem('index', 'true');
        localStorage.setItem('frame1', 'true');
        localStorage.setItem('frame2', 'true');
        localStorage.setItem('frame3', 'true');
        localStorage.setItem('frame4', 'true');

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

describe('allFramesReached', () => {
    test('should return true if all frames are reached', () => {
        localStorage.setItem('index', 'true');
        localStorage.setItem('frame1', 'true');
        localStorage.setItem('frame2', 'true');
        localStorage.setItem('frame3', 'true');
        localStorage.setItem('frame4', 'true');

        const result = allFramesReached();

        expect(result).toBe(true);
    });

    test('should return false if any frame is not reached', () => {
        localStorage.setItem('index', 'true');
        localStorage.setItem('frame1', 'true');
        localStorage.setItem('frame2', 'true');
        localStorage.setItem('frame3', 'true');
        localStorage.setItem('frame4', 'false'); // Simulate frame not reached

        const result = allFramesReached();

        expect(result).toBe(false);
    });
});
