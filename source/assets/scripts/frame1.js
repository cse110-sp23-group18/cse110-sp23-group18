// frame1.js

function init() {}

window.addEventListener('DOMContentLoaded', init);

var oolong = document.getElementById("oolong");
var matcha = document.getElementById("matcha");
var green = document.getElementById("green");


image.addEventListener("click", function() {
  flickerImage();
});

function flickerImage() {
  var opacity = window.getComputedStyle(image).getPropertyValue("opacity");

  if (opacity === "0") {
    image.style.opacity = "1";
  } else {
    image.style.opacity = "0";
  }

  setTimeout(flickerImage, 200); // Adjust the delay between flickers (in milliseconds) as desired
}