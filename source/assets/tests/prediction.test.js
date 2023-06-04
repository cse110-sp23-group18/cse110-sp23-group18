/**
 * @jest-environment jsdom
 */

const {
    prediction,
    PREDICTIONS,
    allFramesReached,
} = require('../scripts/prediction');

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

                return null;
            }),
        };

        global.localStorage = new LocalStorageMock();

        document.body.innerHTML = `
            <div class="prediction">
            <h2 id="prediction-txt"></h2>
            <img id="prediction-img" />
            </div>
            <a href="index.html" title="Start New Fortune" id="restart"></a>
        `;

        predictionTxtEl = document.querySelector('#prediction-txt');
        predictPicEl = document.querySelector('#prediction-img');
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
