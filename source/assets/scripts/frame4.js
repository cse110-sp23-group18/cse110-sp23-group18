/**
 * @summary This file provides the scripting for the fourth frame of the file.
 * This includes clicking the teacup to reveal fortune providing transitions to
 * the next frame (frame 5)
 *
 * @author Shuyi Han (May ??, 2023)
 * Last modified by: Grant Cheng (June 2, 2023)
 */

import initFrameFive from './frame5.js';

/**
 * The initialization function that runs when the window loads
 * When the teacup is clicked, frame 4 is changed visited in localStroage
 * and the user is moved to frame 5
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 * @returns void
 */
export default function initFrameFour() {
    const teacupImage = document.getElementById('teacup');
    let isEnlarged = false;

    function toggleSize() {
        teacupImage.classList.toggle('enlarged');
        isEnlarged = !isEnlarged;

        if (isEnlarged) {
            setTimeout(toggleSize, 1500); // Wait for 1 second and toggle again
        } else {
            setTimeout(toggleSize, 1300); // Wait for 0.5 seconds and toggle again
        }
    }
    teacupImage.addEventListener('click', () => {
        toggleSize();
        localStorage.setItem('frame4', 'true');
        setTimeout(() => {
            document.getElementById('frame4-layout').style.display = 'none';
            document.getElementById('frame5-layout').style.display = 'block';
            document.getElementById('frame5-layout').innerHTML =
                document.getElementById('frame5-template').innerHTML;
            initFrameFive();
        }, 800);
    });
}

// window.addEventListener('DOMContentLoaded', init);
