// index.js
/**
 * Has a start button, and when clicked, adds values to localStorage.
 * @author Damaris Flores (May ??, 2023)
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */

import initFrameOne from './frame1.js';

/**
 * @summary The javascript file associated with the opening page of the program. init is called on load
 * All the other frames are changed to having not been visited.
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 */
function init() {
    localStorage.setItem('index', 'false');
    localStorage.setItem('frame1', 'false');
    localStorage.setItem('frame2', 'false');
    localStorage.setItem('frame3', 'false');
    localStorage.setItem('frame4', 'false');

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        const thisLayout = document.getElementById('landing-layout');
        const nextLayout = document.getElementById('frame1-layout');
        const nextTemplate = document.getElementById('frame1-template');

        localStorage.setItem('index', 'true');
        thisLayout.style.display = 'none';
        thisLayout.innerHTML = '';
        nextLayout.innerHTML = nextTemplate.innerHTML;
        nextLayout.style.display = 'block';
        initFrameOne();
    });
}

window.addEventListener('DOMContentLoaded', init);
