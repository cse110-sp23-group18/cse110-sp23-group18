// index.js
/**
 * Has a start button, and when clicked
 * @author Damaris Flores (May ??, 2023)
 * Last modified by: Grant Cheng (June 8, 2023)
 */

import initFrameOne from './frame1.js';

/**
 * @summary The javascript file associated with the opening page of the program. init is called on load
 * All the other frames are changed to having not been visited.
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */
function init() {
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        const thisLayout = document.getElementById('landing-layout');
        const nextLayout = document.getElementById('frame1-layout');
        const nextTemplate = document.getElementById('frame1-template');

        thisLayout.style.display = 'none';
        thisLayout.innerHTML = '';
        nextLayout.innerHTML = nextTemplate.innerHTML;
        nextLayout.style.display = 'block';
        initFrameOne();
    });
}

window.addEventListener('DOMContentLoaded', init);
