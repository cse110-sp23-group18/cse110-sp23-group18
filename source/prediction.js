/**
 * This file will output the predictive statements after a button is clicked. The button's event listener
 * is added upon the page loading. There is a designated set of responses that can be added/removed from.
 * 
 * Created by: Kavi Nelakonda (May 14, 2023)
 * Last modified by: Kavi Nelakonda (May 22, 2023)
 */

//import PREDICTIONS from "/predictions.json" assert {type: "json"};

window.addEventListener("DOMContentLoaded", init);

 /** 
  * Generates an element after randomly choosing a response intended to predict the future
  * 10 responses, all with different tones. 3 negative, 3 unsure, and 4 positive
  * Adding to this adds to total number of responses. 
  */
const PREDICTIONS = [
        {
            "text": "I see a fish, you are destined to achieve remarkable success and triumph in the realm of overseas relations",
            "picture":"", 
        },
        {
            "text": "Ain't no way yo future gon' look good. It's gon be rough for a homie out there. Be on the look out cuzz"
        },
        {
            "text": "Gosh darn diddly dee, it's look more south than a dog's tail on a hot sunny day. I reckon the future ain't lookin great."
        },
        {
            "text": "The mystical clouds continue to stay put, making it impossible for me to judge what is to come for you."
        },
        {
            "text": "Are you sure of what is to come? Because neither am I. Sorry to that I cannot provide insight."
        },
        {
            "text": "Ehhhhh, I don't know. It's really hard to say. Keep it up I guess..."
        },
        {
            "text": "LOOKING GOOD LET'S GO YOU GOT THIS. SHOULDERS STRAIGHT AND HEAD HIGH!"
        },
        {
            "text": "The future looks good for you."
        },
        {
            "text": "Among us, you have a future that is leagues above the others in importance. Watch over your shoulder in the coming fortnight, because if you are crafty and display much valor, you may reach the apex of your life."
        },
        {
            "text": "Tis' with great honor that I get to tell you that your future will shine brighter than the sun as it rises over the hills that surround this valley."
        }
]; 

// By adding another response, the random number generator will automatically adjust to the amount of responses
const PREDICTION_COUNT = Object.keys(PREDICTIONS).length;
console.log(PREDICTION_COUNT);

/**
 * Adds an event listener to a button
 * 
 * Last Modified by: Kavi Nelakonda (May 14, 2023)
 * @returns void
 */
function init(){
    let buttonEl = document.querySelector("button");
    buttonEl.addEventListener("click", prediction);
}


/**
 * Generates a random number, uses the number as a key to find a response.
 * Response text is put in the response element that is generated if it does not exist. 
 * 
 * Last Modified by: Kavi Nelakonda (May 22, 2023)
 * @returns void
 */
function prediction(){
    const randomNumber = Math.floor(Math.random() * PREDICTION_COUNT);
    let prediction = PREDICTIONS[randomNumber].text;
    console.log(prediction);
    // TODO: Determine if a response element will exist, and remove if so
    let predictionEl =   document.querySelector('.prediction');
    if(predictionEl == null){
        predictionEl = document.createElement('prediction');
    }

    predictionEl.innerHTML = prediction;
    let bodyEl = document.querySelector("body");
    bodyEl.appendChild(predictionEl);
}


