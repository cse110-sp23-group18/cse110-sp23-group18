// frame2.js
// Jessie Ouyang jeouyang@ucsd.edu
function switchImage() {
    document.getElementById('teapot').src =
        'assets/images/gifs/teapotSteaming.gif';
    document.getElementById('next').style.display = 'inline';
}

function init() {
    document.getElementById('teapot').addEventListener('click', switchImage);
}

window.addEventListener('DOMContentLoaded', init);
