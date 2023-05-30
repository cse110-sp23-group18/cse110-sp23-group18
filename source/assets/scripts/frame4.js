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
    teacupImage.addEventListener('click', () => {
        teacupImage.style.transform = 'scale(1.5)';
        link.style.display = 'inline';
    });
}

window.addEventListener('DOMContentLoaded', init);
