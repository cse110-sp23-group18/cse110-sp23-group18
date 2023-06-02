/**
 * @summary This file provides the scripting for the second frame of the file.
 * This includes providing transitions to the next frame (frame 3)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Grant Cheng (May 29, 2023)
 */

/**
 * The initialization function that runs when the window loads
 */
function init() {
    const teapotEle = document.getElementById('teapot');

    teapotEle.addEventListener('click', () => {
        teapotEle.src = 'assets/images/gifs/teapotSteaming.gif';
        setTimeout(() => {
            window.location.href = './frame3.html';
        }, 5000);
    });
}

window.addEventListener('DOMContentLoaded', init);
