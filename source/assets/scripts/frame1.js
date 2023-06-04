/**
 * @summary This file provides the scripting for the first frame of the file.
 * This includes animations when clicking on tea jars and transitions to
 * the next frame (frame 2)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Kavi Nelakonda (May 31, 2023)
 */

/**
 * Constants of the string representation for each tea type. Useful for
 * refactoring code and preventing spelling errors with strings.
 */
const TEAS = {
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
 * The function that handles the logic for and animates everything when
 * selecting a jar
 *
 * @param {string} teaType the type of the tea from the TEAS constant
 */
function selectJar(teaType) {
    const linkEle = document.getElementById('next');

    chosenJar = chosenJar === teaType ? TEAS.none : teaType;

    Object.keys(TEAS).forEach((tea) => {
        const teaEle = document.getElementById(TEAS[tea]);

        if (!teaEle) return;

        if (tea === chosenJar) {
            teaEle.style.transform = 'scale(1.5)';
            teaEle.classList.add('flicker-effect');
        } else {
            teaEle.style.transform = 'scale(1)';
            teaEle.classList.remove('flicker-effect');
        }
    });
    clickSound.currentTime = 0; // Reset the audio to start from the beginning
    clickSound.play();

    linkEle.style.display = chosenJar === teaType ? 'inline' : 'none';
}

/**
 * The initialization function that runs when the window loads
 */
function init() {
    // adds event listeners to all tea jars
    Object.keys(TEAS).forEach((tea) => {
        const teaEle = document.getElementById(TEAS[tea]);

        if (!teaEle) return;

        teaEle.addEventListener('click', () => {
            selectJar(TEAS[tea]);
        });
    });

    const nextButton = document.querySelector('#next');
    nextButton.addEventListener('click', () => {
        clickNextSound.play();
        localStorage.setItem('frame1', 'true');
    });
}

window.addEventListener('DOMContentLoaded', init);
