/**
 * Returns a random element from an array.
 * @param {array} array - input
 * @return {number}
 */
function randomize(array) {
	const randomize = Math.floor(Math.random() * array.length);
	return array[randomize];
}
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

function drawHand() {
	const hand = [];
	for (let i = 5; i; i--) {
		hand.push(drawCard());
	}
	return hand;
}
const cards = {
	drawCard,
	drawHand
};

/* Math library */
function multiply(a, b) {
	return a * b;
}
function add(a, b) {
	return a + b;
}
const math = {
	multiply,
	add
};
