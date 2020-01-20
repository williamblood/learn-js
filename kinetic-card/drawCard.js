/**
 * Returns random element from array.
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
const card = drawCard();
console.log(card);

// Replace value string with this array for multi-char strings
const value2 = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K"
];
