function translateImage() {
    var image = document.getElementById("teapot_img");
    var currentTop = parseInt(image.style.top) || 0;
    var translationAmount = 50; // Adjust this value to change the amount of vertical translation
  
    // Calculate the new top position
    var newTop = currentTop + translationAmount;
  
    // Apply the new top position to the image
    image.style.top = newTop + "px";
  }