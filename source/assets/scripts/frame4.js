// frame4.js
// Jessie Ouyang jeouyang@ucsd.edu

function init() {
    const teacup_image = document.getElementById('teacup');
    const link = document.getElementById('next');
    teacup_image.addEventListener('click', switchImage);

    function switchImage() {
        teacup_image.style.transform = 'scale(1.5)';
        link.style.display = 'inline';
    }
}

window.addEventListener('DOMContentLoaded', init);
