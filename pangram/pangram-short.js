/**
 * Returns true if sentence is a pangram.
 * @param {string} sentence - assumes string is a real sentence. 
 * @return {boolean}
 */

function isPangram(sentence) {
	let str = sentence.toLowerCase();
	for (let letter of "abcdefghijklmnopqrstuvwxyz") {
		if (!str.includes(letter)) return false;
	}
	return true;
}
