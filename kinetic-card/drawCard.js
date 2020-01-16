/**
 * Returns a randomized index from input array.
 * @param {array} array 
 * @return {number}
 */

function seed(array) {
	const randomize = Math.floor(Math.random() * array.length);
	return randomize;
}

/**
 * Returns an object representing a card with a value and suit 
 * akin to a standard 52-card deck.
 * @return {Object} 
 */

function drawCard() {
	const value = "A2345678910JQK";
	const suit = [ "clubs", "spades", "hearts", "diamonds" ];

	// Stores the location of a random value and suit
	const randomValue = value[seed(value)];
	const randomSuit = suit[seed(suit)];
	return {
		value : randomValue,
		suit  : randomSuit
	};
}
const card = drawCard();
console.log(card);

// Replace value string with this array for multi-char strings
// const value = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
// ];
