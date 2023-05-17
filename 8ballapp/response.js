// const form = document.querySelector('.cont');
// const answer = document.querySelector('.answer');
// const moon = document.getElementById('#moon');
const submit = document.getElementById('submitButton');

function MyFunc() {
    const question = document.getElementById('question').value;

    let audio;

    // Checks if the question is valid, and makes sure it ends with a "?" so we know it was a question
    const validQuestionRegex =
        /^(can|will|should|do|does|did|is|are|am|was|were|has|have|had|may|might|must|shall|could|would|do|did|were)(\s.+)?\?$/i;
    if (!validQuestionRegex.test(question)) {
        document.getElementById('responsebox').innerHTML =
            'Please ask a valid yes/no question.';
        document.getElementById('question').value =
            document.getElementById('question').defaultValue;
        return;
    }

    const randomNumber = Math.random();
    let response;
    // gives an equal chance to all 10 random answers

    if (randomNumber < 0.1) {
        response = 'As sure as the sun rises in the east.';
        audio = new Audio('audio/as_sure_as_the.mp3');
        audio.play();
    } else if (randomNumber < 0.2) {
        response = 'The winds of fate say yes.';
        audio = new Audio('audio/the_winds_of_fate.mp3');
        audio.play();
    } else if (randomNumber < 0.3) {
        response = 'The signs are unclear, ask again later.';
        audio = new Audio('audio/the_signs_are_unclear.mp3');
        audio.play();
    } else if (randomNumber < 0.4) {
        response = 'The shadows whisper "no".';
        audio = new Audio('audio/the_shadow_whisper_no.mp3');
        audio.play();
    } else if (randomNumber < 0.5) {
        response =
            'The mystic realm is shrouded in darkness, and I cannot see the answer clearly.';
        audio = new Audio('audio/the_mystic_realm.mp3');
        audio.play();
    } else if (randomNumber < 0.6) {
        response =
            'As I gaze into the mystic realm, the answer becomes clear: yes, without a doubt.';
        audio = new Audio('audio/as_i_gaze_into.mp3');
        audio.play();
    } else if (randomNumber < 0.7) {
        response = 'The omens are not favorable, the answer is no.';
        audio = new Audio('audio/the_omens_are_not.mp3');
        audio.play();
    } else if (randomNumber < 0.8) {
        response =
            'The future is always in motion, but at this moment, the answer is unclear.';
        audio = new Audio('audio/the_future_is_always.mp3');
        audio.play();
    } else if (randomNumber < 0.9) {
        response = 'The spirits have spoken, and their answer is no.';
        audio = new Audio('audio/the_spirits_have_spoken.mp3');
        audio.play();
    } else {
        response = 'The mystical beings lack the answer.';
        audio = new Audio('audio/the_mystical_beings_lack.mp3');
        audio.play();
    }

    document.getElementById(
        'responsebox'
    ).innerHTML = `${question} Hmm... ${response}`;
    document.getElementById('question').value =
        document.getElementById('question').defaultValue;

    // Extra features past MVP

    /* document.getElementById("moon").style.transform="translateX(-40vw)";
	document.getElementById("moon").style.transform="translateX(-40vw)";
	*/

    /* setTimeout(() => {
		 // We can randomize this line as well
		form.classList.remove('shake');
		answer.classList.add('darken');
		setTimeout(() => {
			answer.classList.remove('darken');
			answer.classList.add('lighten');
			setTimeout(() => {
				answer.classList.remove('lighten');
			}, 100);
		}, 1000);
	}, 500);
	 */
}

submit.addEventListener('onclick', MyFunc());
