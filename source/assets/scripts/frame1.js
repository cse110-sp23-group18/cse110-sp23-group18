// frame1.js
// Jessie Ouyang jeouyang@ucsd.edu
function init() {
    // get image element representing types of tea jars
  var oolong_image = document.getElementById('oolong');
  var matcha_image = document.getElementById('matcha');
  var green_image = document.getElementById('green');
  
  // intialize all chosen value to be false
  var oolong_is_chosen = false;
  var matcha_is_chosen = false;
  var green_is_chosen = false;
  
  // when one image is clicked,
  // if it has not been chosen
  // select current image and deselect other images
  // else deselect current image
  oolong_image.addEventListener('click', function() {
    if (!oolong_is_chosen) {
      oolong_is_chosen = true;
      oolong_image.style.transform = 'scale(1.25)';
      // set current 
      oolong_image.classList.add('flicker-effect');
      // remove other options
      green_is_chosen = false;
      green_image.style.transform = 'scale(1)';
      green_image.classList.remove('flicker-effect');
      matcha_is_chosen = false;
      matcha_image.style.transform = 'scale(1)';
      matcha_image.classList.remove('flicker-effect');
  
    } else {
      oolong_is_chosen = false;
      oolong_image.style.transform = 'scale(1)';
      oolong_image.classList.remove('flicker-effect');
    }
  });
  
  matcha_image.addEventListener('click', function() {
    if (!matcha_is_chosen) {
      matcha_is_chosen = true;
      matcha_image.style.transform = 'scale(1.25)';
      // set current 
      matcha_image.classList.add('flicker-effect');
      // remove other options
      oolong_is_chosen = false;
      oolong_image.style.transform = 'scale(1)';
      oolong_image.classList.remove('flicker-effect');
      green_is_chosen = false;
      green_image.style.transform = 'scale(1)';
      green_image.classList.remove('flicker-effect');
    } else {
      matcha_is_chosen = false;
      matcha_image.style.transform = 'scale(1)';
      matcha_image.classList.remove('flicker-effect');
    }
  });
  
  green_image.addEventListener('click', function() {
    if (!green_is_chosen) {
      green_is_chosen = true;
      green_image.style.transform = 'scale(1.25)';
      // set current 
      green_image.classList.add('flicker-effect');
      //remove other options
      oolong_is_chosen = false;
      oolong_image.style.transform = 'scale(1)';
      oolong_image.classList.remove('flicker-effect');
      matcha_is_chosen = false;
      matcha_image.style.transform = 'scale(1)';
      matcha_image.classList.remove('flicker-effect');
    } else {
      green_is_chosen = false;
      green_image.style.transform = 'scale(1)';
      green_image.classList.remove('flicker-effect');
    }
  });
  
  
  }
  
  window.addEventListener('DOMContentLoaded', init);
  
  