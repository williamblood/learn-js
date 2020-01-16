function getCard() {
	const value = "A2345678910JQK";

	const suit = [ "clubs", "spades", "hearts", "diamonds" ];
	const vSeed = Math.floor(Math.random() * value.length);
	const sSeed = Math.floor(Math.random() * suit.length);

	const randomValue = value.slice(vSeed, vSeed + 1);
	const randomSuit = suit.slice(sSeed, sSeed + 1);
	const card = `${randomValue} of ${randomSuit}`;
	return card;
}
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
