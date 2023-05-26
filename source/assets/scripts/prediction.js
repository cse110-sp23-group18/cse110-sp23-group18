/**
 * @summary This file will output the predictive statements after a button is clicked. The button's event listener
 * is added upon the page loading. There is a designated set of responses that can be added/removed from.
 * 
 * @author Kavi Nelakonda (May 14, 2023)
 * Last modified by: Kavi Nelakonda (May 22, 2023)
 */


window.addEventListener("DOMContentLoaded", init);

 /** 
  * 10 responses, all with different tones, each corresponding with different images.
  * Adding to this adds to total number of responses. 
  */
const PREDICTIONS = [
        {
            "text": "Ah, a fish shape. The tea leaves reveal a wild journey ahead in overseas relations. Success is your destiny!",
            "picture": "./assets/images/dredges/fish1.png", 
        },
        {
            "text": "Oh, the leaves are shaped in a heart, it spill secrets of something amazing coming your way. True love is headed your way!",
            "picture": "./assets/images/dredges/heart1.png", 
        },
        {
            "text": "In the tea leaves, a tiny worry in the shape of a bug appears. But fear not, it's just a passing whisper.",
            "picture": "./assets/images/dredges/bug1.png",
        },
        {
            "text": "With the key shape, I see a readiness for newness. Prepare to welcome new ideas into your life.",
            "picture": "./assets/images/dredges/key1.png",
        },
        {
            "text": "I see a cloud in the cup. The tea leaves hint at some troubles heading your way soon. But fear not, for challenges are just part of life's wild ride!",
            "picture": "./assets/images/dredges/cloud1.png",
        },
        {
            "text": "Oh no, the tea leaves appear in the shape of a knife. Warning: fake friends lie in wait.",
            "picture": "./assets/images/dredges/knife1.png",
        },
        {
            "text": "The leaves looking like a whale reveal a sure thing, a major project holds the guarantee of achievement. Success is on the horizon!",
            "picture": "./assets/images/dredges/whale1.png",
        },
        {
            "text": "In the flower-shaped tea leaves, a message emerges: someone seeks your advice.",
            "picture": "./assets/images/dredges/flower1.png",
        },
        {
            "text": "Among us, you have a future that is leagues above the others in importance. Watch over your shoulder in the coming fortnight, because if you are crafty and display much valor, you may reach the apex of your life.",
            "picture": "./assets/images/dredges/acorn1.png",
        },
        {
            "text": "Tis' with great honor that I get to tell you that your future will shine brighter than the sun as it rises over the hills that surround this valley.",
            "picture": "./assets/images/dredges/snake1.png",
        }
]; 

// By adding another response, the random number generator will automatically adjust to the amount of responses
const PREDICTION_COUNT = Object.keys(PREDICTIONS).length;

/**
 * Adds an event listener to a button
 * 
 * Last Modified by: Kavi Nelakonda (May 25, 2023)
 * @returns void
 */
function init(){
    prediction();
}


/**
 * Generates a random number, uses the number as a key to find a response.
 * Response text is put in the response element that is generated if it does not exist. 
 * Picture associated with the response is put in an image elemtn that is generated if it does not exist.
 * 
 * Last Modified by: Kavi Nelakonda (May 25, 2023)
 * @returns void
 */
function prediction(){
    const randomNumber = Math.floor(Math.random() * PREDICTION_COUNT);

    let prediction = PREDICTIONS[randomNumber].text;
    let predictionTxt =  document.querySelector('#predictionTxt');
    // if(predictionEl == null){
    //     predictionEl = document.createElement('prediction');
    // }
    predictionTxt.innerHTML = prediction;

    let predictionPic = PREDICTIONS[randomNumber].picture;
    let predictPicEl = document.querySelector("#predictionImg");
    // if(predictPicEl == null){
    //     predictPicEl = document.createElement("img");
    // }
    predictPicEl.src = predictionPic;

    let predictionEl = document.querySelector(".prediction");
    predictionEl.appendChild(predictionTxt);
    predictionEl.appendChild(predictPicEl);
}


