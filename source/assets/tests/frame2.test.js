/**
 * @jest-environment jsdom
 */

import initFrameTwo from '../scripts/frame2.js';
import initFrameThree from '../scripts/frame3.js';

// prevents an HTMLMediaElement error
window.HTMLMediaElement.prototype.play = () => {
    /* do nothing */
};
window.HTMLMediaElement.prototype.pause = () => {
    /* do nothing */
};

jest.useFakeTimers(); // to control setTimeout and setInterval

describe('initFrameTwo', () => {
    let teapotEle;
    let thisLayout;
    let nextLayout;
    let nextTemplate;

    beforeEach(() => {
        jest.resetModules();

        document.body.innerHTML = `
            <img id='teapot' src='assets/images/teapot.png'>
            <div id='frame2-layout'>
                Frame 2 content
            </div>
            <div id='frame3-layout' style='display:none;'>
                Frame 3 content
            </div>
            <template id='frame3-template'>
                Frame 3 template
            </template>
            <img id='teapotImage' src='assets/images/teapotImage.png'>
        `;

        teapotEle = document.getElementById('teapot');
        thisLayout = document.getElementById('frame2-layout');
        nextLayout = document.getElementById('frame3-layout');
        nextTemplate = document.getElementById('frame3-template');
        initFrameTwo();
    });

    test('should add event listener to teapot element', () => {
        const clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        teapotEle.dispatchEvent(clickEvent);

        // Check if src has changed after clicking
        expect(teapotEle.src).toContain('teapotSteaming.gif');
    });

    test('should change layouts after 5000ms', () => {
        const clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        teapotEle.dispatchEvent(clickEvent);

        // Fast-forward until all timers have been executed
        jest.runAllTimers();

        expect(thisLayout.style.display).toBe('none');
        expect(nextLayout.innerHTML).toBe(nextTemplate.innerHTML);
        expect(nextLayout.style.display).toBe('block');
    });
});
