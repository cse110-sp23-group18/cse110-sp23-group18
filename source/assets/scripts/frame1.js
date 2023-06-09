/**
 * @summary This file provides the scripting for the first frame of the file.
 * This includes animations when clicking on tea jars and transitions to
 * the next frame (frame 2)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Grant Cheng (Jun 8, 2023)
 */

import initFrameTwo from './frame2.js';

/**
 * Constants of the string representation for each tea type. Useful for
 * refactoring code and preventing spelling errors with strings.
 */
export const TEAS = {
    oolong: 'oolong',
    matcha: 'matcha',
    green: 'green',
    none: 'none',
};

let chosenJar = TEAS.none;

/**
 * The initialization function that runs when the window loads
 */
const clickSound = new Audio();
clickSound.src = './assets/audios/select_type_of_tea.mp3';
clickSound.preload = 'auto';

const clickNextSound = new Audio();
clickNextSound.src = './assets/audios/confirm_selection.mp3';
clickNextSound.preload = 'auto';

/**
 * Gets the chosenJar variable so that tests can access the variable.
 *
 * @returns {string} The chosenJar variable.
 */
export function getChosenJar() {
    return chosenJar;
}

/**
 * The function that handles the logic for and animates everything when
 * selecting a jar
 *
 * @param {string} teaType the type of the tea from the TEAS constant
 * @auther Jessie Ouyang (May ??, 2023)
 * Last modified by:
 */
export function selectJar(teaType) {
    const linkEle = document.getElementById('next');

    chosenJar = chosenJar === teaType ? TEAS.none : teaType;

    // Update the appearance of tea jars based on the chosen jar
    Object.keys(TEAS).forEach((tea) => {
        const teaEle = document.getElementById(TEAS[tea]);

        if (!teaEle) return;

        if (tea === chosenJar) {
            teaEle.style.transform = 'scale(1.25)';
            teaEle.classList.add('flicker-effect');
        } else {
            teaEle.style.transform = 'scale(1)';
            teaEle.classList.remove('flicker-effect');
        }
    });

    // Reset the audio to start from the beginning
    clickSound.currentTime = 0;
    // Play click sound when selecting a jar
    clickSound.play();

    // Show/hide the "confirm selection" button based on the chosen jar
    linkEle.style.display = chosenJar === teaType ? 'inline' : 'none';
}

/**
 * The initialization function that runs when the window loads.
 *
 * Last modified by: Shuyi (June 8, 2023)
 */
export default function initFrameOne() {
    const nextButton = document.querySelector('#next');
    /* hide 'confirm selection' button */
    nextButton.style.visibility = 'hidden';

    // adds event listeners to all tea jars
    Object.keys(TEAS).forEach((tea) => {
        const teaEle = document.getElementById(TEAS[tea]);

        if (!teaEle) return;

        // Handle click event for each tea jar
        teaEle.addEventListener('click', () => {
            selectJar(TEAS[tea]);
            /* only show button to confirm tea selection and
            move to next frame once a teajar is chosen */
            nextButton.style.visibility = 'visible';
        });
    });

    /* const nextButton = document.querySelector('#next'); */
    nextButton.addEventListener('click', () => {
        clickNextSound.play();
        clickNextSound.addEventListener('ended', () => {
            // Delayed transition to another frame after the sound finishes playing
            const thisLayout = document.getElementById('frame1-layout');
            const nextLayout = document.getElementById('frame2-layout');
            const nextTemplate = document.getElementById('frame2-template');

            thisLayout.style.display = 'none';
            thisLayout.innerHTML = '';
            nextLayout.innerHTML = nextTemplate.innerHTML;
            nextLayout.style.display = 'block';
            initFrameTwo();
        });
    });
}
