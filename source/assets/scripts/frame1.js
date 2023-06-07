/**
 * @summary This file provides the scripting for the first frame of the file.
 * This includes animations when clicking on tea jars and transitions to
 * the next frame (frame 2)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Kavi Nelakonda (June 2, 2023)
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
 * Gets the chosenJar variable so that tests can access the variable
 * @returns the chosenJar variable
 */
function getChosenJar() {
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

    linkEle.style.display = chosenJar === teaType ? 'inline' : 'none';
}

/**
 * The initialization function that runs when the window loads.
 * When the button to confirm the selection is clicked, frame 1 is changed to visited
 * in localStorage.
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
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
        localStorage.setItem('frame1', 'true');
    });
}

window.addEventListener('DOMContentLoaded', init);

try {
    module.exports = {
        TEAS,
        getChosenJar,
        selectJar,
    };
} catch (e) {
    console.warn('Modules not exported');
}
