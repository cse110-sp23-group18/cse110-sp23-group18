/**
 * @summary This file provides the scripting for the second frame of the file.
 * This includes providing transitions to the next frame (frame-3)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */

const boilSound = new Audio();
boilSound.src = './assets/audios/boiling_water.mp3';
boilSound.preload = 'auto';
/**
 * The initialization function that runs when the window loads
 * The gif runs, and then frame 2 is changed to visited in localStorage
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */
function init() {
    const teapotEle = document.getElementById('teapot');

    teapotEle.addEventListener('click', () => {
        teapotEle.src = 'assets/images/gifs/teapotSteaming.gif';

        boilSound.currentTime = 0; // Reset the audio to start from the beginning
        boilSound.play();
        // linkEle.style.display = 'inline';
        setTimeout(() => {
            window.location.href = './frame3.html';
        }, 5000);

        localStorage.setItem('frame2', 'true');
    });
}

window.addEventListener('DOMContentLoaded', init);
