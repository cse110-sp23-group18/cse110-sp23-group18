// Import the necessary dependencies for testing
const jsdom = require('jsdom');

// Load the file and create a virtual DOM
const html = `
<!DOCTYPE html>
<html>
  <body>
    <div id="oolong"></div>
    <div id="matcha"></div>
    <div id="green"></div>
    <a id="next"></a>
  </body>
</html>
`;
const window  = new jsdom(html);
global.document = window.document;
global.window = window;

// Load the file for testing
const { selectJar, init, TEAS } = require('./source/assets/scripts/frame1.js');

describe('selectJar', () => {
  beforeEach(() => {
    // Reset chosenJar to none before each test
    chosenJar = TEAS.none;

    // Reset the classList and style for each tea element
    Object.keys(TEAS).forEach((tea) => {
      const teaEle = document.getElementById(TEAS[tea]);
      teaEle.classList.remove('flicker-effect');
      teaEle.style.transform = 'scale(1)';
    });

    // Reset the display style for the link element
    const linkEle = document.getElementById('next');
    linkEle.style.display = 'none';
  });

  test('should select a tea jar and update the chosenJar value', () => {
    selectJar(TEAS.oolong);

    expect(chosenJar).toBe(TEAS.oolong);
  });

  test('should deselect a tea jar and set chosenJar to none', () => {
    chosenJar = TEAS.oolong;
    selectJar(TEAS.oolong);

    expect(chosenJar).toBe(TEAS.none);
  });

  test('should update the style and classList of selected tea jar', () => {
    selectJar(TEAS.matcha);

    const selectedTeaEle = document.getElementById(TEAS.matcha);
    const deselectedTeaEle = document.getElementById(TEAS.oolong);

    expect(selectedTeaEle.style.transform).toBe('scale(1.5)');
    expect(selectedTeaEle.classList.contains('flicker-effect')).toBe(true);
    expect(deselectedTeaEle.style.transform).toBe('scale(1)');
    expect(deselectedTeaEle.classList.contains('flicker-effect')).toBe(false);
  });

  test('should display the link element when a tea jar is selected', () => {
    selectJar(TEAS.green);

    const linkEle = document.getElementById('next');

    expect(linkEle.style.display).toBe('inline');
  });

  test('should hide the link element when a tea jar is deselected', () => {
    chosenJar = TEAS.green;
    selectJar(TEAS.green);

    const linkEle = document.getElementById('next');

    expect(linkEle.style.display).toBe('none');
  });
});

describe('init', () => {
  test('should add event listeners to all tea jars', () => {
    init();

    Object.keys(TEAS).forEach((tea) => {
      const teaEle = document.getElementById(TEAS[tea]);
      teaEle.click();

      expect(chosenJar).toBe(TEAS[tea]);
    });
  });
});