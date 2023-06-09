/**
 * @summary This file provides the scripting for the third frame of the file.
 * This includes the pouring of the tea from the teapot into the teacup and
 * providing transitions to the next frame (frame 4)
 *
 * @author ? (May ??, 2023)
 * Last Modfied: Shuyi Han, June 89, 2023
 */

/**
 * The function that animates the lifting and pouring of the teapot
 * After the animation is over, the frame is changed to visited in localStroage, and
 * the user is moved to frame 4.
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
    teapot.style.transform = 'translateY(0)';

    // Add the 'lifted' class to teapot element
    teapot.classList.add('lifted');
    setTimeout(() => {
        // Enable transition
        teapot.style.transition = 'transform 1.0s ease';
        // Move teapot upward and left
        teapot.style.transform = 'translateY(-55px) translateX(-75px)';
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
                    teapot.style.transform = 'translateY(0) scale(0.8)';
                    setTimeout(() => {
                        teapotImage.addEventListener('click', liftTeapot);
                        // Transition to next HTML Frame
                        setTimeout(() => {
                            window.location.href = './frame4.html';
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

    localStorage.setItem('frame3', 'true'); // shows that frame 3 has been reached
}

/**
 * The function that executes when the window finishes loading.
 * It retrieves the teapot element and adds a click event listener to it,
 * triggering the liftTeapot function.
 */
window.onload = function () {
    const teapot = document.getElementById('teapotImage');
    teapot.addEventListener('click', liftTeapot);
};
