// function translateImage() {
//     var image = document.getElementById("teapot_img");
//     var currentTop = parseInt(image.style.top) || 0;
//     var translationAmount = 50; // Adjust this value to change the amount of vertical translation
  
//     // Calculate the new top position
//     var newTop = currentTop + translationAmount;
  
//     // Apply the new top position to the image
//     image.style.top = newTop + "px";
//   }

// function liftTeapot() {
//   var teapot = document.querySelector('.teapot');
//   teapot.style.transition = 'transform 0.8s ease';
//   teapot.style.transform = 'translateY(-125px)';
  
// }

function liftTeapot() {
  var teapot = document.querySelector('.teapot');
  teapot.style.transition = 'none'; // Disable transition temporarily
  teapot.style.transform = 'translateY(0)'; // Set teapot to original position
  void teapot.offsetWidth; // Trigger reflow to apply the style immediately

  setTimeout(function() {
    teapot.style.transition = 'transform 1s ease'; // Enable transition
    teapot.style.transform = 'translateY(-125px)'; // Move teapot upward
  }, 10);
}

window.onload = function() {
  var move = document.getElementById("the button");
  move.onclick = liftTeapot;
}

