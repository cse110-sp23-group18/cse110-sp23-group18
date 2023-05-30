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
    const linkEle = document.getElementById('next');

    teapotEle.addEventListener('click', () => {
        teapotEle.src = 'assets/images/gifs/teapotSteaming.gif';
        linkEle.style.display = 'inline';
    });
}

window.addEventListener('DOMContentLoaded', init);
