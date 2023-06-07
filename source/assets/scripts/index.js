// index.js

function init() {
    localStorage.setItem('index', 'false');
    localStorage.setItem('frame1', 'false');
    localStorage.setItem('frame2', 'false');
    localStorage.setItem('frame3', 'false');
    localStorage.setItem('frame4', 'false');

    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', () => {
        localStorage.setItem('index', 'true');
    });
}

window.addEventListener('DOMContentLoaded', init);
