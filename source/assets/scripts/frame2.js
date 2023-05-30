// frame2.js
// Jessie Ouyang jeouyang@ucsd.edu

function init() {
    const teapot_image = document.getElementById('teapot');
    const link = document.getElementById('next');
    teapot_image.addEventListener('click', switchImage);

    function switchImage() {
        teapot_image.src = 'assets/images/gifs/teapotSteaming.gif';
        link.style.display = 'inline';
    }
}

window.addEventListener('DOMContentLoaded', init);
