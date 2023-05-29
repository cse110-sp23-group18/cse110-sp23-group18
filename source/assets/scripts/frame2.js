// frame2.js
// Jessie Ouyang jeouyang@ucsd.edu 

function init() {
    var teapot_image = document.getElementById('teapot');
    var link = document.getElementById('next');
    teapot_image.addEventListener('click', switchImage);

    function switchImage() {
        teapot_image.src = 'assets/images/gifs/teapotSteaming.gif';
        link.style.display = 'inline';
    }
  }
  
  window.addEventListener('DOMContentLoaded', init);
  