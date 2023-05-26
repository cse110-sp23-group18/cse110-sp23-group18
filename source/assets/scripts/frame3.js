function liftTeapot() {
  const teapot = document.querySelector('.teapot');
  teapot.style.transition = 'none'; // Disable transition temporarily
  teapot.style.transform = 'translateY(0)'; // Set teapot to original position
  void teapot.offsetWidth; // Trigger reflow to apply the style immediately

  setTimeout(() => {
    teapot.style.transition = 'transform 1s ease'; // Enable transition
    teapot.style.transform = 'translateY(-125px)'; // Move teapot upward
  }, 10);
}

window.onload = function () {
  const move = document.getElementById('the button');
  move.onclick = liftTeapot;
};
