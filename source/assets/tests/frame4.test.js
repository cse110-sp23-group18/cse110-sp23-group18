import initFrameFour from '../scripts/frame4.js';

// Mock the necessary DOM elements and functions
document.body.innerHTML = `
   <div id="frame4-layout">
       Frame 4 Layout
       <img id="teacup" />
   </div>
   <div id="frame5-layout"></div>
   <div id="frame5-template">Frame 5 Template</div>
`;

jest.mock('./frame5.js', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('initFrameFour', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize frame four functionality', () => {
        // Mock the necessary Audio class and its methods
        const mockAudioConstructor = jest.fn();
        const mockPlay = jest.fn();
        const mockSetTimeout = jest.spyOn(window, 'setTimeout');

        global.Audio = jest.fn().mockImplementation(() => ({
            src: '',
            preload: '',
            play: mockPlay,
        }));

        // Call the function to test
        initFrameFour();

        // Simulate a click on the teacup image
        const teacupImage = document.getElementById('teacup');
        teacupImage.click();

        // Teacup image should have the 'enlarged' class
        expect(teacupImage.classList.contains('enlarged')).toBe(true);

        // setTimeout should be called twice
        expect(mockSetTimeout).toHaveBeenCalledTimes(2);

        // play method of Audio object should be called once
        expect(mockPlay).toHaveBeenCalledTimes(1);

        // frame4-layout should have display: none
        expect(document.getElementById('frame4-layout').style.display).toBe(
            'none'
        );

        // frame4-layout should have empty innerHTML
        expect(document.getElementById('frame4-layout').innerHTML).toBe('');

        // frame5-layout should have innerHTML equal to 'Frame 5 Template'
        expect(document.getElementById('frame5-layout').innerHTML).toBe(
            'Frame 5 Template'
        );

        // frame5-layout should have display: flex
        expect(document.getElementById('frame5-layout').style.display).toBe(
            'flex'
        );

        // Audio constructor should be called once
        expect(mockAudioConstructor).toHaveBeenCalledTimes(1);

        // Audio constructor should be called with no arguments
        expect(mockAudioConstructor).toHaveBeenCalledWith();

        // global.Audio should be called as a constructor
        expect(global.Audio).toHaveBeenCalledWith();

        // The src property of the Audio object should be './assets/audios/drinking_tea.mp3'
        expect(mockAudioConstructor().src).toBe(
            './assets/audios/drinking_tea.mp3'
        );

        // The preload property of the Audio object should be 'auto'
        expect(mockAudioConstructor().preload).toBe('auto');

        // play method of Audio object should be called
        expect(mockPlay).toHaveBeenCalled();

        // setTimeout should be called with a function and a delay of 1500ms
        expect(mockSetTimeout).toHaveBeenCalledWith(expect.any(Function), 1500);

        // setTimeout should be called with a function and a delay of 1300ms
        expect(mockSetTimeout).toHaveBeenCalledWith(expect.any(Function), 1300);

        // The initFrameFive function from frame5.js should be called
        expect(require('./frame5.js').default).toHaveBeenCalled();
    });
});
