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
const bgm = new Audio();
bgm.src = './assets/audios/bgm.mp3';
bgm.preload = 'auto';

function init() {
    const startButton = document.querySelector('.start-button');

    /**
     * Event listener callback function for the start button click.
     * Sets the value of 'index' in localStorage to 'true' and plays background music.
     */
    startButton.addEventListener('click', () => {
        const thisLayout = document.getElementById('landing-layout');
        const nextLayout = document.getElementById('frame1-layout');
        const nextTemplate = document.getElementById('frame1-template');

        thisLayout.style.display = 'none';
        thisLayout.innerHTML = '';
        nextLayout.innerHTML = nextTemplate.innerHTML;
        nextLayout.style.display = 'block';
        initFrameOne();

        bgm.play().catch((error) => {
            // Handle autoplay error
            console.error('Autoplay failed:', error);
        });
    });
}

window.addEventListener('DOMContentLoaded', init);
