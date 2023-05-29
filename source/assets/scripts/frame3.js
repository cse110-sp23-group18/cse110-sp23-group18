function translateImage() {
    const image = document.getElementById('teapot_img');
    const currentTop = parseInt(image.style.top) || 0;
    const translationAmount = 50; // Adjust this value to change the amount of vertical translation

    // Calculate the new top position
    const newTop = currentTop + translationAmount;

    // Apply the new top position to the image
    image.style.top = `${newTop}px`;
}
