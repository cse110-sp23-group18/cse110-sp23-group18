// frame4.js
// Jessie Ouyang jeouyang@ucsd.edu

function init() {
    const teacupImage = document.getElementById('teacup');
    const link = document.getElementById('next');
    teacupImage.addEventListener('click', () => {
        teacupImage.style.transform = 'scale(1.5)';
        link.style.display = 'inline';
    });
}

window.addEventListener('DOMContentLoaded', init);
