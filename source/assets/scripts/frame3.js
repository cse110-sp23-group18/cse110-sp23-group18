/**
 * @summary This file provides the scripting for the third frame of the file.
 * This includes the pouring of the tea from the teapot into the teacup and
 * providing transitions to the next frame (frame 4)
 *
 * @author ? (May ??, 2023)
 * Last Modfied: Grant Cheng, June 9, 2023
 */

import initFrameFour from './frame4.js';

/**
 * The function that animates the lifting and pouring of the teapot
 * After the animation is over, the user is moved to frame 4.
 *
 * Last Modified: Kavi Nelakonda (June 2, 2023)
 */

/**
 * Creates an Audio object for the pouring sound effect.
 */
const pouringSound = new Audio();
pouringSound.src = './assets/audios/pouring_tea.mp3';
pouringSound.preload = 'auto';

function liftTeapot() {
    const teapot = document.querySelector('.teapot');
    const teapotImage = document.getElementById('teapotImage');
    const pouringImage = document.getElementById('pouringImage');

    // Disable transition temporarily
    teapot.style.transition = 'none';
    // Set teapot to original position
    const initVertPos = -teapot.offsetTop + 'px';
    teapot.style.transform = `translateY(${initVertPos})`;

    // Add the 'lifted' class to teapot element
    teapot.classList.add('lifted');
    setTimeout(() => {
        // Enable transition
        teapot.style.transition = 'transform 1.0s ease';
        // Move teapot upward and left
        teapot.style.transform =
            `translateY(calc(-13vh + ${initVertPos})) translateX(calc(-7vw))`;
        // Remove the 'lifted' class after the transition
        teapot.classList.remove('lifted');
        setTimeout(() => {
            teapotImage.classList.add('hidden'); // Hide the teapot image
            pouringImage.classList.remove('hidden'); // Show the pouring GI
            setTimeout(() => {
                teapotImage.classList.remove('hidden'); // Show the teapot image
                pouringImage.classList.add('hidden'); // Hide the pouring GIF
                pouringImage.setAttribute(
                    'src',
                    pouringImage.getAttribute('src')
                );
                // Move the teapot back to its original position
                setTimeout(() => {
                    // Enable transition
                    teapot.style.transition = 'transform 1.0s ease';
                    // Move teapot back to original position and scale down to 80%
                    teapot.style.transform = `translateY(${initVertPos})`;
                    setTimeout(() => {
                        teapotImage.addEventListener('click', liftTeapot);
                        // Transition to next HTML Frame
                        setTimeout(() => {
                            const thisLayout =
                                document.getElementById('frame3-layout');
                            const nextLayout =
                                document.getElementById('frame4-layout');
                            const nextTemplate =
                                document.getElementById('frame4-template');

                            thisLayout.style.display = 'none';
                            thisLayout.innerHTML = '';
                            nextLayout.innerHTML = nextTemplate.innerHTML;
                            nextLayout.style.display = 'block';
                            initFrameFour();
                        }, 400);
                    }, 1600);
                }, 800); // Adjust the delay as needed (1s = 1000ms)
            }, 3500); // Adjust the delay as needed (1s = 1000ms)
        }, 1000); // Adjust the delay as needed (1s = 1000ms)
    }, 90);

    pouringSound.currentTime = 0;
    // Play the audio only if it's allowed by the user agent
    if (pouringSound.paused) {
        pouringSound.play().catch((error) => {
            // Handle autoplay error
            console.error('Autoplay failed:', error);
        });
    }
}

/**
 * The function that executes when the window finishes loading.
 * It retrieves the teapot element and adds a click event listener to it,
 * triggering the liftTeapot function.
 */
export default function initFrameThree() {
    const teapot = document.getElementById('teapotImage');
    teapot.addEventListener('click', liftTeapot);
}
