
/**
 * This file will output the predictive statements after a button is clicked. The button's event listener
 * is added upon the page loading. There is a designated set of responses that can be added/removed from.
 * 
 * Created by: Kavi Nelakonda (May 14, 2023)
 * Last modified by: Kavi Nelakonda (May 22, 2023)
 */


window.addEventListener("DOMContentLoaded", init);

 /** 
  * Generates an element after randomly choosing a response intended to predict the future
  * 10 responses, all with different tones. 3 negative, 3 unsure, and 4 positive
  * Adding to this adds to total number of responses. 
  */
const RESPONSES = {
    0: "Yo LOL SOS cuz ur future ain’t lookin too gr8 out there, GL HF while u still got it", 
    // negative but with text talk
    1: "Ain’t no way yo future gon’ look good. It’s gon be rough for a homie out there. Be on the look out cuzz", 
    // negative but in a AAVE
    2: "Gosh darn diddly dee, it's look more south than a dog's tail on a hot sunny day. I reckon the future ain't lookin great.",
    // negative but in a souther way
    3: "The mystical clouds continue to stay put, making it impossible for me to judge what is to come for you.", 
    // ambiguous
    4: "Are you sure of what is to come? Because neither am I. Sorry to that I cannot provide insight.",
    // ambiguous, but somewhat sarcastic
    5: "Ehhhhh, I don’t know. It’s really hard to say. Keep it up I guess...", 
    // ambiguous, but doesn't seem to care.
    6: "LOOKING GOOD LET'S GO YOU GOT THIS. SHOULDERS STRAIGHT AND HEAD HIGH!",
    // positive but over excited
    7: "The future looks good for you.", 
    // positive, but straightroward
    8: "Among us, you have a future that is leagues above the others in importance. Watch over your shoulder in the coming fortnight, because if you are crafty and display much valor, you may reach the apex of your life.", 
    // positive but with plenty of video game references
    9: "Tis’ with great honor that I get to tell you that your future will shine brighter than the sun as it rises over the hills that surround this valley." // positive but overly majestic
};

// By adding another response, the random number generator will automatically adjust to the amount of responses
const RESPONSE_COUNT = Object.keys(RESPONSES).length;

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
    const randomNumber = Math.floor(Math.random() * RESPONSE_COUNT);
    let response = RESPONSES[randomNumber];

    // TODO: Determine if a response element will exist, and remove if so
    let responseEl =   document.querySelector('response');
    if(responseEl == null){
        responseEl = document.createElement('response');
    }

    responseEl.innerHTML = response;
    let bodyEl = document.querySelector("body");
    bodyEl.appendChild(responseEl);
}


