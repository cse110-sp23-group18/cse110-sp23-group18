// import initFrameTwo from '../scripts/frame2.js';

// document.body.innerHTML = `
//   <div id="frame2-layout">
//     <img id="teapot" src="" />
//   </div>
//   <div id="frame3-layout"></div>
//   <div id="frame3-template"></div>
// `;

// jest.mock('../audios/boiling_water.mp3', () => {
//   return jest.fn().mockImplementation(() => ({
//     src: '',
//     preload: '',
//     currentTime: 0,
//     play: jest.fn(),
//     pause: jest.fn()
//   }));
// });

// describe('initFrameTwo', () => {
//   it('should change teapot image and play sound when clicked', () => {
//     const teapotEle = document.getElementById('teapot');
//     const boilSound = new Audio();
//     // boilSound.src = './assets/audios/boiling_water.mp3';
//     // boilSound.preload = 'auto';
//     initFrameTwo();

//     // Simulate a click event on the teapot element
//     teapotEle.click();

//     // Assert that the teapot image is changed to the steaming gif
//     expect(teapotEle.src).toBe('http://localhost/assets/images/gifs/teapotSteaming.gif');

//     // Assert that the sound's currentTime is set to 0
//     expect(boilSound.currentTime).toBe(0);

//     // Assert that the sound's play method is called
//     expect(boilSound.play).toHaveBeenCalled();

//     // Fast-forward 5000 milliseconds to simulate the passage of time
//     jest.advanceTimersByTime(5000);

//     // Assert that the sound's pause method is called
//     expect(boilSound.pause).toHaveBeenCalled();

//     // Assert that the layout elements are updated correctly
//     const thisLayout = document.getElementById('frame2-layout');
//     const nextLayout = document.getElementById('frame3-layout');
//     expect(thisLayout.style.display).toBe('none');
//     expect(thisLayout.innerHTML).toBe('');
//     expect(nextLayout.innerHTML).toBe('');
//     expect(nextLayout.style.display).toBe('block');
//   });
// });

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
            view: window,
            bubbles: true,
            cancelable: true,
        });

        teapotEle.dispatchEvent(clickEvent);

        // Check if src has changed after clicking
        expect(teapotEle.src).toContain('teapotSteaming.gif');
    });

    test('should change layouts after 5000ms', () => {
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        teapotEle.dispatchEvent(clickEvent);

        // Fast-forward until all timers have been executed
        jest.runAllTimers();

        expect(thisLayout.style.display).toBe('none');
        expect(nextLayout.innerHTML).toBe(nextTemplate.innerHTML);
        expect(nextLayout.style.display).toBe('block');
    });
});
