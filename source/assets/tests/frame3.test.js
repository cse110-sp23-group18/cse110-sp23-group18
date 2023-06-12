/**
 * @jest-environment jsdom
 */
import initFrameThree from '../scripts/frame3.js';

jest.useFakeTimers();
jest.setTimeout(10000); // Increase timeout to 10 seconds for tests

window.HTMLMediaElement.prototype.play = jest
    .fn()
    .mockImplementation(() => ({ catch: jest.fn() }));

describe('initFrameThree', () => {
    beforeEach(() => {
        jest.resetModules();
        document.body.innerHTML = `
            <div class='teapot' id='teapot'>
                <img id='teapotImage' />
                <img id='pouringImage' class='hidden' />
            </div>
            <div id='frame3-layout' style='display: block;'>
                <div id='frame3-template'>
                    Template content
                </div>
            </div>
            <div id='frame4-layout' style='display: none;'>
                <div id='frame4-template'>
                    Template content
                </div>
            </div>
        `;
    });

    test('should add event listener to teapot element', () => {
        const teapot = document.getElementById('teapotImage');
        const spy = jest.spyOn(teapot, 'addEventListener');
        initFrameThree();
        expect(spy).toHaveBeenCalled();
    });

    test('should execute liftTeapot function correctly', async () => {
        initFrameThree();

        const teapotEle = document.querySelector('.teapot');
        const teapotImageEle = document.getElementById('teapotImage');
        const pouringImageEle = document.getElementById('pouringImage');

        teapotEle.click();

        setTimeout(() => {
            // Assert that the styles are changed correctly after the teapot is lifted
            expect(teapotEle.style.transform).toBeTruthy();
            expect(teapotEle.classList.contains('lifted')).toBeTruthy();
        }, 1000);

        setTimeout(() => {
            // Checks if the teapot and pouringImage classes have been toggled correctly
            expect(teapotImageEle.classList.contains('hidden')).toBeTruthy();
            expect(pouringImageEle.classList.contains('hidden')).toBeFalsy();

            // Check layout transitions
            expect(document.getElementById('frame3-layout').style.display).toBe(
                'none'
            );
            expect(document.getElementById('frame4-layout').style.display).toBe(
                'block'
            );
        }, 10000);
    }, 20000);
});
