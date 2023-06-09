/**
 * @summary This file provides the scripting for the third frame of the file.
 * This includes the pouring of the tea from the teapot into the teacup and
 * providing transitions to the next frame (frame 4)
 *
 * @author Shuyi Han? (May ??, 2023)
 * Last Modfied: Kavi Nelakonda, June 2, 2023
 */

import initFrameFour from './frame4.js';

/**
 * The function that animates the lifting and pouring of the teapot
 * After the animation is over, the frame is changed to visited in localStroage, and
 * the user is moved to frame 4.
 *
 * Last Modified: Kavi Nelakonda (June 2, 2023)
 */
function liftTeapot() {
    const teapot = document.querySelector('.teapot');
    const teapotImage = document.getElementById('teapotImage');
    const pouringImage = document.getElementById('pouringImage');

    teapot.style.transition = 'none'; // Disable transition temporarily
    teapot.style.transform = 'translateY(0)'; // Set teapot to original position

    teapot.classList.add('lifted'); // Add the 'lifted' class to teapot element
    setTimeout(() => {
        teapot.style.transition = 'transform 1.0s ease'; // Enable transition
        teapot.style.transform = 'translateY(-55px) translateX(-75px)'; // Move teapot upward and left
        teapot.classList.remove('lifted'); // Remove the 'lifted' class after the transition
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
                    teapot.style.transition = 'transform 1.0s ease'; // Enable transition
                    teapot.style.transform = 'translateY(0)'; // Move teapot back to original position and scale down to 80%
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
    localStorage.setItem('frame3', 'true'); // shows that frame 3 has been reached
}

export default function initFrameThree() {
    const teapot = document.getElementById('teapotImage');
    teapot.addEventListener('click', liftTeapot);
}
