// frame1.js

function init() {}

window.addEventListener('DOMContentLoaded', init);

const oolong = document.getElementById('oolong');
const matcha = document.getElementById('matcha');
const green = document.getElementById('green');

image.addEventListener('click', () => {
    flickerImage();
});

function flickerImage() {
    const opacity = window.getComputedStyle(image).getPropertyValue('opacity');

    if (opacity === '0') {
        image.style.opacity = '1';
    } else {
        image.style.opacity = '0';
    }

    setTimeout(flickerImage, 200); // Adjust the delay between flickers (in milliseconds) as desired
}
