const prediction = require('./source/assets/scripts/prediction.js');

describe('prediction', () => {
    it('should update the prediction text and image elements with a random prediction', () => {
      const randomNumber = 0; // Mocking a specific random number to access a prediction
      Math.floor = jest.fn(() => randomNumber);
  
      prediction();
  
      // Retrieve the mocked DOM elements
      const predictionTxtEl = document.querySelector('#predictionTxt');
      const predictPicEl = document.querySelector('#predictionImg');
  
      // Verify that the prediction text and image elements are updated correctly
      expect(predictionTxtEl.innerHTML).toBe(PREDICTIONS[randomNumber].text);
      expect(predictPicEl.src).toBe(PREDICTIONS[randomNumber].picture);
    });
  });