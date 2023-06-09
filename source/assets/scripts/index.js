// index.js
/**
 * Has a start button, and when clicked, adds values to localStorage.
 * @author Damaris Flores (May ??, 2023)
 * Last modified by: Shuyi Han (June 8, 2023)
 */

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
    // Set values in localStorage for all other frames to 'false'
    localStorage.setItem('index', 'false');
    localStorage.setItem('frame1', 'false');
    localStorage.setItem('frame2', 'false');
    localStorage.setItem('frame3', 'false');
    localStorage.setItem('frame4', 'false');

    const startButton = document.querySelector('.start-button');

    /**
     * Event listener callback function for the start button click.
     * Sets the value of 'index' in localStorage to 'true' and plays background music.
     */
    startButton.addEventListener('click', () => {
        localStorage.setItem('index', 'true');
        bgm.play().catch((error) => {
            // Handle autoplay error
            console.error('Autoplay failed:', error);
        });
    });
}

window.addEventListener('DOMContentLoaded', init);
