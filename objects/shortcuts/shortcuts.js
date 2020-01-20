/* Returns object with key named implicitly by its identifier */

function drawCardImplicitly() {
	let value = "A2345678910JQK";
	let suit = [ "clubs", "spades", "hearts", "diamonds" ];
	value = randomize(value);
	suit = randomize(suit);
	return {
		value,
		suit
	};
}
// ^ Notes: split() value to add multi-character values such as "King", "Queen"

/**
 * Returns random element from array.
 * @param {array} array - input
 * @return {number}
 */
function randomize(array) {
	const randomize = Math.floor(Math.random() * array.length);
	return array[randomize];
}

/* Shorter code but keys are explicitly assigned */

/**
 * Returns an object representing a card with a value and suit 
 * akin to a standard 52-card deck.
 * @return {Object} 
 */
function drawCard() {
	const value = "A2345678910JQK";
	const suit = [ "clubs", "spades", "hearts", "diamonds" ];
	return {
		value : randomize(value),
		suit  : randomize(suit)
	};
}
