// frame2.js
// Jessie Ouyang jeouyang@ucsd.edu 

function init() {
    var teapot_image = document.getElementById('teapot');
    teapot_image.addEventListener('click', switchImage);

    function switchImage() {
        teapot_image.src = 'assets/images/gifs/teapotSteaming.gif';
    }
  }
  
  window.addEventListener('DOMContentLoaded', init);
  