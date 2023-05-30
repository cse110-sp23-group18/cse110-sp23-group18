function liftTeapot() {
    const teapot = document.querySelector('.teapot');
    const teapotImage = document.getElementById('teapotImage');
    const pouringImage = document.getElementById('pouringImage');

    teapot.style.transition = 'none'; // Disable transition temporarily
    teapot.style.transform = 'translateY(0)'; // Set teapot to original position
    teapotImage.classList.remove('hidden');
    pouringImage.classList.add('hidden');
    // void teapot.offsetWidth; // Trigger reflow to apply the style immediately

  teapot.classList.add('lifted'); // Add the 'lifted' class to teapot element
  setTimeout(() => {
    teapot.style.transition = 'transform 1.5s ease'; // Enable transition
    teapot.style.transform =  'translateY(-125px) translateX(-75px)'; // Move teapot upward and left
    teapot.classList.remove('lifted'); // Remove the 'lifted' class after the transition
    setTimeout(() => {
      teapotImage.classList.add('hidden'); // Hide the teapot image
      pouringImage.classList.remove('hidden'); // Show the pouring GIF
   
      // pourImage.addEventListener('animationiteration', () => {
      //   pourImage.style.animationIterationCount = '1'; // Set iteration count to 1
      // }, { once: true });
    }, 1000); // Adjust the delay as needed (1s = 1000ms)
  }, 10);
}

window.onload = function () {
  const move = document.getElementById('the button');
  move.onclick = liftTeapot;
};
