/**
 * @summary This file provides the scripting for the second frame of the file.
 * This includes providing transitions to the next frame (frame 3)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */

import initFrameThree from './frame3.js';

/**
 * The initialization function that runs when the window loads
 * The gif runs, and then frame 2 is changed to visited in localStorage
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */
export default function initFrameTwo() {
    const teapotEle = document.getElementById('teapot');

    teapotEle.addEventListener('click', () => {
        teapotEle.src = 'assets/images/gifs/teapotSteaming.gif';
        setTimeout(() => {
            document.getElementById('frame2-layout').style.display = 'none';
            document.getElementById('frame3-layout').innerHTML =
                document.getElementById('frame3-template').innerHTML;
            initFrameThree();
        }, 5000);

        localStorage.setItem('frame2', 'true');
    });
}
