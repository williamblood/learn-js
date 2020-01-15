function isPangram(paramString) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const alphaRray = [];
	const stringArray = [];
	// Convert string to lowercase char array like alphabet
	let string = paramString.replace(/\s+/g, "").toLowerCase();

	for (let letter of alphabet) {
		alphaRray.push(letter);
	}
	for (let letter of string) {
		stringArray.push(letter);
	}
	console.log(stringArray);
	console.log(alphaRray);
	for (let i = 0; i < stringArray.length; i++) {
		for (let j = 0; j < alphaRray.length; j++) {
			if (stringArray[i] === alphaRray[j]) {
				console.log(
					`matched: ${stringArray[i]} = ${alphaRray[j]}`
				);
				console.log(`Removing ${alphaRray[j]}`);
				alphaRray.splice(j, 1);
				console.log("New array: " + alphaRray);
				break;
			}
		}
	}
	if (alphaRray.length) {
		console.warn("Not a Pangram.");
		return false;
	}
	return true;
}
