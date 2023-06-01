/**
 * @summary This file provides the scripting for the fourth frame of the file.
 * This includes clicking the teacup to reveal fortune providing transitions to
 * the next frame (frame 5)
 *
 * @author Shuyi Han (May ??, 2023)
 * Last modified by: Grant Cheng (May 29, 2023)
 */

/**
 * The initialization function that runs when the window loads
 */
function init() {
    const teacupImage = document.getElementById('teacup');
    const link = document.getElementById('next');
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
        link.style.display = 'inline';
    });

    const startButton = document.querySelector('#next');
    startButton.addEventListener('click', () => {
        localStorage.setItem('frame4', 'true');
    });
}

window.addEventListener('DOMContentLoaded', init);
