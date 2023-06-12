import initFrameThree from '..scripts/frame3.js';

jest.useFakeTimers();

window.HTMLMediaElement.prototype.play = jest
  .fn()
  .mockImplementation(() => ({ catch: jest.fn() }));

describe('initFrameThree', () => {
  it('should animate lifting and pouring the teapot', () => {
    const teapotImage = document.getElementById('teapotImage');
    const pouringImage = document.getElementById('pouringImage');
    const pouringSound = new Audio();

    initFrameThree();

    // Simulate a click event on the teapot image
    teapotImage.click();

    // Assert that the 'lifted' class is added to the teapot element
    const teapot = document.querySelector('.teapot');
    expect(teapot.classList.contains('lifted')).toBe(true);

    // Fast-forward to the end of the animation
    jest.advanceTimersByTime(5000);

    // Assert that the pouring and teapot images are toggled
    expect(teapotImage.classList.contains('hidden')).toBe(false);
    expect(pouringImage.classList.contains('hidden')).toBe(true);

    // Assert that the pouring image's source is reset
    expect(pouringImage.getAttribute('src')).toBe('');

    // Assert that the teapot element is back to its original position
    expect(teapot.style.transform).toBe('');

    // Assert that the sound's currentTime is set to 0
    expect(pouringSound.currentTime).toBe(0);

    // Assert that the sound's play method is called
    expect(pouringSound.play).toHaveBeenCalled();

    // Fast-forward to the end of the transition
    jest.advanceTimersByTime(2400);

    // Assert that the teapot image click event listener is added again
    expect(teapotImage.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));

    // Assert that the layout elements are updated correctly
    const thisLayout = document.getElementById('frame3-layout');
    const nextLayout = document.getElementById('frame4-layout');
    expect(thisLayout.style.display).toBe('none');
    expect(thisLayout.innerHTML).toBe('');
    expect(nextLayout.innerHTML).toBe('');
    expect(nextLayout.style.display).toBe('block');
  });
});
