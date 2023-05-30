/**
 * @summary This file provides the scripting for the first frame of the file.
 * This includes animations when clicking on tea jars and transitions to
 * the next frame (frame 2)
 *
 * @author Jessie Ouyang (May ??, 2023)
 * Last modified by: Grant Cheng (May 29, 2023)
 */

/**
 * The initialization function that runs when the window loads
 */
function init() {
    // get image element representing types of tea jars
    const oolongImage = document.getElementById('oolong');
    const matchaImage = document.getElementById('matcha');
    const greenImage = document.getElementById('green');
    const link = document.getElementById('next');
    // intialize all chosen value to be false
    let isOolongChosen = false;
    let isMatchaChosen = false;
    let isGreenChosen = false;
    // when one image is clicked,
    // if it has not been chosen
    // select current image and deselect other images
    // else deselect current image
    oolongImage.addEventListener('click', () => {
        link.style.display = 'inline';
        if (!isOolongChosen) {
            isOolongChosen = true;
            oolongImage.style.transform = 'scale(1.15)';
            // set current
            oolongImage.classList.add('flicker-effect');
            // remove other options
            isGreenChosen = false;
            greenImage.style.transform = 'scale(1)';
            greenImage.classList.remove('flicker-effect');
            isMatchaChosen = false;
            matchaImage.style.transform = 'scale(1)';
            matchaImage.classList.remove('flicker-effect');
        } else {
            isOolongChosen = false;
            oolongImage.style.transform = 'scale(1)';
            oolongImage.classList.remove('flicker-effect');
        }
    });

    matchaImage.addEventListener('click', () => {
        link.style.display = 'inline';
        if (!isMatchaChosen) {
            isMatchaChosen = true;
            matchaImage.style.transform = 'scale(1.15)';
            // set current
            matchaImage.classList.add('flicker-effect');
            // remove other options
            isOolongChosen = false;
            oolongImage.style.transform = 'scale(1)';
            oolongImage.classList.remove('flicker-effect');
            isGreenChosen = false;
            greenImage.style.transform = 'scale(1)';
            greenImage.classList.remove('flicker-effect');
        } else {
            isMatchaChosen = false;
            matchaImage.style.transform = 'scale(1)';
            matchaImage.classList.remove('flicker-effect');
        }
    });

    greenImage.addEventListener('click', () => {
        link.style.display = 'inline';
        if (!isGreenChosen) {
            isGreenChosen = true;
            greenImage.style.transform = 'scale(1.15)';
            // set current
            greenImage.classList.add('flicker-effect');
            // remove other options
            isOolongChosen = false;
            oolongImage.style.transform = 'scale(1)';
            oolongImage.classList.remove('flicker-effect');
            isMatchaChosen = false;
            matchaImage.style.transform = 'scale(1)';
            matchaImage.classList.remove('flicker-effect');
        } else {
            isGreenChosen = false;
            greenImage.style.transform = 'scale(1)';
            greenImage.classList.remove('flicker-effect');
        }
    });
}

window.addEventListener('DOMContentLoaded', init);
