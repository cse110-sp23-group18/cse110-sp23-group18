/**
 * @jest-environment jsdom
 */

import { TEAS, getChosenJar, selectJar } from '../scripts/frame1.js';

describe('selectJar', () => {
    let linkEle;

    beforeEach(() => {
        jest.resetModules();

        document.body.innerHTML = `
            <div class="frame-one-container">
                <div class='teajar-oolong' id="oolong">
                    <img src="assets/images/teajars/oolongJar.png" class='oolong' id="oolong" />
                    <!--<button id="oolong_tea">Oolong Tea</button>-->
                </div>
                <div class='teajar-green' id="green">
                    <img src="assets/images/teajars/greenJar.png" class='green' id="green" />
                    <!--<button id='green_tea'>Green Tea</button>-->
                </div>
                <div class='teajar-matcha' id="matcha">
                    <img src="assets/images/teajars/matchaJar.png" class='matcha' id="matcha" />
                    <!--<button id='matcha_tea'>Matcha Tea</button>-->
                </div>
            </div>
            <a href='frame2.html' title='Go to frame 2' id='next' style="display: none;">Confirm Selection</a>
        `;

        linkEle = document.querySelector('#next');
    });

    test('should select the green jar and cause the continue button to show up', () => {
        // Link element should start off hidden and chosenJar should be none
        expect(linkEle.style.display).toBe('none');
        expect(getChosenJar()).toBe(TEAS.none);

        // Select the green jar
        selectJar(TEAS.green);

        // Verify that the chosenJar is set correctly and that link is shown
        expect(getChosenJar()).toBe(TEAS.green);
        expect(linkEle.style.display).toBe('inline');
    });

    test('should select the matcha jar and cause the continue button to show up', () => {
        // Select the matcha jar
        selectJar(TEAS.matcha);

        // Verify that the chosenJar is set correctly and that link is shown
        expect(getChosenJar()).toBe(TEAS.matcha);
        expect(linkEle.style.display).toBe('inline');
    });

    test('should select the oolong jar and cause the continue button to show up', () => {
        // Select the oolong jar
        selectJar(TEAS.oolong);

        // Verify that the chosenJar is set correctly and that link is shown
        expect(getChosenJar()).toBe(TEAS.oolong);
        expect(linkEle.style.display).toBe('inline');
    });

    test('should deselect the jar if selected again', () => {
        // Select the green jar twice
        selectJar(TEAS.green);
        selectJar(TEAS.green);

        // Verify that the chosenJar is set correctly and that link is hidden
        expect(linkEle.style.display).toBe('none');
        expect(getChosenJar()).toBe(TEAS.none);
    });

    test('should switch the chosen jar if selected again', () => {
        // Select the green jar then the matcha jar
        selectJar(TEAS.green);
        selectJar(TEAS.matcha);

        // Verify that the chosenJar is set correctly and that link is hidden
        expect(linkEle.style.display).toBe('inline');
        expect(getChosenJar()).toBe(TEAS.matcha);
    });
});
