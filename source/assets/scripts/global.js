/**
 * Global js file to manage the global styling variables
 * @author Grant Cheng (June 9, 2023)
 * Last modified by: Grant Cheng (June 9, 2023)
 */

/**
 * A constant that sets the widths and heights of all backgrounds for different devices
 */
const IMG_SIZE = {
    MOBILE: {
        width: 1640,
        height: 2360,
    },
    TABLET: {
        width: 2360,
        height: 1640,
    },
    DESKTOP: {
        width: 1600,
        height: 900,
    },
    UHD: {
        width: 4096,
        height: 1714,
    },
};

/**
 * This function calculates the size and sets the CSS global variable
 */
function recalcSize() {
    let imgSize;

    if (window.innerWidth < 769) {
        imgSize = IMG_SIZE.MOBILE;
    } else if (window.innerWidth < 1280) {
        imgSize = IMG_SIZE.TABLET;
    } else if (window.innerWidth < 4096) {
        imgSize = IMG_SIZE.DESKTOP;
    } else {
        imgSize = IMG_SIZE.UHD;
    }

    const r = document.querySelector(':root');
    r.style.setProperty('--img-scale', window.innerWidth / imgSize.width);
}

// Calls recalcSize on DOM load and on resize
window.addEventListener('resize', recalcSize);
window.addEventListener('DOMContentLoaded', recalcSize);
