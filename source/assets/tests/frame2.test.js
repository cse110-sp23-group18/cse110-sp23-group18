import initFrameTwo from '../scripts/frame2.js';

document.body.innerHTML = `
  <div id="frame2-layout">
    <img id="teapot" src="" />
  </div>
  <div id="frame3-layout"></div>
  <div id="frame3-template"></div>
`;

jest.mock('html5-audio', () =>
    jest.fn().mockImplementation(() => ({
        src: '',
        preload: '',
        currentTime: 0,
        play: jest.fn(),
        pause: jest.fn(),
    }))
);

describe('initFrameTwo', () => {
    it('should change teapot image and play sound when clicked', () => {
        const teapotEle = document.getElementById('teapot');
        const boilSound = new Audio();

        initFrameTwo();

        // Simulate a click event on the teapot element
        teapotEle.click();

        // Assert that the teapot image is changed to the steaming gif
        expect(teapotEle.src).toBe('assets/images/gifs/teapotSteaming.gif');

        // Assert that the sound's currentTime is set to 0
        expect(boilSound.currentTime).toBe(0);

        // Assert that the sound's play method is called
        expect(boilSound.play).toHaveBeenCalled();

        // Fast-forward 5000 milliseconds to simulate the passage of time
        jest.advanceTimersByTime(5000);

        // Assert that the sound's pause method is called
        expect(boilSound.pause).toHaveBeenCalled();

        // Assert that the layout elements are updated correctly
        const thisLayout = document.getElementById('frame2-layout');
        const nextLayout = document.getElementById('frame3-layout');
        expect(thisLayout.style.display).toBe('none');
        expect(thisLayout.innerHTML).toBe('');
        expect(nextLayout.innerHTML).toBe('');
        expect(nextLayout.style.display).toBe('block');
    });
});
