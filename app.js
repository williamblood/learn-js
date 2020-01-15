/**
 * Returns true if input string is a pangram.
 * Returns true if called with {string} | {boolean}
 * and if input string is a perfect pangram.
 * 
 * @param {string} paramString - assumes string is a real sentence, special characters OK.
 * @param {boolean} perfectPangramOpt - additional restrictions: unique, no special characters, whitespace OK.
 * @return {boolean} true | false
 */

function isPangram(paramString, perfectPangramOpt) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const alphaRray = [];
	const stringArray = [];

	// Convert strings to lowercase char array without spaces
	let string = paramString.replace(/\s+/g, "").toLowerCase();

	for (let letter of alphabet) {
		alphaRray.push(letter);
	}
	for (let letter of string) {
		stringArray.push(letter);
	}
	console.log(stringArray);
	console.log(alphaRray);

	// Compare each letter in string array to alphabet array

	for (let i = 0; i < stringArray.length; i++) {
		let unique = false;
		for (let j = 0; j < alphaRray.length; j++) {
			if (stringArray[i] === alphaRray[j]) {
				console.log(
					`matched: ${stringArray[i]} = ${alphaRray[j]}`
				);
				console.log(`Removing ${alphaRray[j]}`);
				alphaRray.splice(j, 1);
				unique = true;
				console.log("New array: " + alphaRray);
				break;
			}
		}
		// Checks for a perfect pangram if user activates option
		if (!unique && perfectPangramOpt) {
			console.error(`${unique} - Not a perfect pangram.`);
			return false;
		}
	}
	// If any letters remain in alphabet, string is not a pangram
	if (alphaRray.length) {
		console.warn("Not a pangram.");
		return false;
	}
	// If alphabet is empty, input is a pangram
	console.log("This is a pangram.");
	return true;
}
