/**
 * @summary This file provides the scripting for the second frame of the file.
 * This includes providing transitions to the next frame (frame-3)
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Grant Cheng (June 9, 2023)
 */

import initFrameThree from './frame3.js';

const boilSound = new Audio();
boilSound.src = './assets/audios/boiling_water.mp3';
boilSound.preload = 'auto';

/**
 * The initialization function that runs when the window loads
 * The gif runs
 * @lastmodifiedby Shuyi Han (June 8, 2023)
 */
export default function initFrameTwo() {
    const teapotEle = document.getElementById('teapot');

    teapotEle.addEventListener('click', () => {
        // Change the teapot image to the steaming gif
        teapotEle.src = 'assets/images/gifs/teapotSteaming.gif';
        boilSound.currentTime = 0;

        // Play the boiling sound effect
        boilSound.play();
        setTimeout(() => {
            boilSound.pause();

            const thisLayout = document.getElementById('frame2-layout');
            const nextLayout = document.getElementById('frame3-layout');
            const nextTemplate = document.getElementById('frame3-template');

            thisLayout.style.display = 'none';
            thisLayout.innerHTML = '';
            nextLayout.innerHTML = nextTemplate.innerHTML;
            nextLayout.style.display = 'block';
            initFrameThree();
        }, 5000);
    });
}
