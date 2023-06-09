/**
 * @summary This file provides the scripting for the fourth frame of the file.
 * This includes clicking the teacup to reveal fortune providing transitions to
 * the next frame (frame 5)
 *
 * @author Kavi (June 8, 2023)
 * Last modified by: Grant Cheng (June 2, 2023)
 */

/**
 * The initialization function that runs when the window loads
 * When the teacup is clicked, frame 4 is changed visited in localStroage
 * and the user is moved to frame 5
 *
 * Last modified by: Kavi Nelakonda (June 2, 2023)
 * @returns void
 */

const drinkingSound = new Audio();
drinkingSound.src = './assets/audios/drinking_tea.mp3';
drinkingSound.preload = 'auto';
function init() {
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
        localStorage.setItem('frame4', 'true');
        setTimeout(() => {
            window.location.href = './frame5.html';
        }, 1180);
    });
}

window.addEventListener('DOMContentLoaded', init);
