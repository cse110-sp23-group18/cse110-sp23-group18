const form = document.querySelector('form');
const answer = document.querySelector('#answer');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const question = form.elements.question.value.trim();

	// Checks if the question is valid, and makes sure it ends with a "?" so we know it was a question
	const validQuestionRegex = /^(can|will|should|do|does|did|is|are|am|was|were|has|have|had|may|might|must|shall|could|would|do|did|were)(\s.+)?\?$/i;
	if (!validQuestionRegex.test(question)) {
		answer.innerHTML = "Please ask a valid yes/no question.";
		return;
	}

	const randomNumber = Math.random();

	let response;
    //gives an equal chance to all 10 random answers
	if (randomNumber < 0.1) {
		response = 'As sure as the sun rises in the east.';
	} else if (randomNumber < 0.2) {
		response = 'The winds of fate say yes.';
	} else if (randomNumber < 0.3) {
		response = 'The signs are unclear, ask again later.';
	} else if (randomNumber < 0.4) {
		response = 'The shadows whisper "no".';
	} else if (randomNumber < 0.5) {
		response = 'The mystic realm is shrouded in darkness, and I cannot see the answer clearly.';
	}  else if (randomNumber < 0.6) {
        response = 'As I gaze into the mystic realm, the answer becomes clear: yes, without a doubt.';
    }  else if (randomNumber < 0.7) {
        response = 'The omens are not favorable, the answer is no.';
    }   else if (randomNumber < 0.8) {
        response = 'The future is always in motion, but at this moment, the answer is unclear.';
    }  else if (randomNumber < 0.9) {
        response = 'The spirits have spoken, and their answer is no.';
    } else {
        response = 'The mystical beings lack the answer.';
    }

	// Add animations to the answer box, still needs plenty fixing
	answer.innerHTML = '';
	form.classList.add('shake');
	setTimeout(() => {
		answer.innerHTML = `${question} Hmm... ${response}`; // We can randomize this line as well
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

	form.reset();
});
