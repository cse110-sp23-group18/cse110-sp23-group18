/**
 * @summary This file provides the scripting for the fourth frame of the file.
 * This includes clicking the teacup to reveal fortune providing transitions to
 * the next frame (frame 5)
 *
 * @author Shuyi Han (May ??, 2023)
 * Last modified by: Grant Cheng (June 8, 2023)
 */

import initFrameFive from './frame5.js';

/**
 * The initialization function that runs when the window loads
 * When the teacup is clicked, the user is moved to frame 5
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 * @returns void
 */

const drinkingSound = new Audio();
drinkingSound.src = './assets/audios/drinking_tea.mp3';
drinkingSound.preload = 'auto';

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

        drinkingSound.play();
        setTimeout(() => {
            const thisLayout = document.getElementById('frame4-layout');
            const nextLayout = document.getElementById('frame5-layout');
            const nextTemplate = document.getElementById('frame5-template');

            thisLayout.style.display = 'none';
            thisLayout.innerHTML = '';
            nextLayout.innerHTML = nextTemplate.innerHTML;
            nextLayout.style.display = 'flex';
            initFrameFive();
        }, 1180);
    });
}
