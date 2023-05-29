// frame4.js
// Jessie Ouyang jeouyang@ucsd.edu 

function init() {
    var teacup_image = document.getElementById('teacup');
    var link = document.getElementById('next');
    teacup_image.addEventListener('click', switchImage);


    function switchImage() {
        teacup_image.style.transform = 'scale(1.5)';
        link.style.display = 'inline';
    }
  }
  
  window.addEventListener('DOMContentLoaded', init);
  