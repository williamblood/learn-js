/* Legacy way */
let nums = [ 4, 10, 2, 4, 9, 3, 5, 1, 0 ];
console.log(nums);
nums = {
	...nums
};
console.log(nums);

const sumExample = function(x, y, z) {
	console.log(`Selecting first arg in param: ${arguments[0]}`);
	return x + y + z;
};
console.log(sum(4, 20, 0));

//  Infinite paramater algorithm (Legacy)
// Note: arguments local var must be converted to arr to use arr methods
// else limited manipulation with an object
function sum() {
	const argumentsToArray = [ ...arguments ];
	return argumentsToArray.reduce((container, element) => {
		return container + element;
	});
}

/* New Standard way */

// Rest - spread operator for infinite params/args
function sumRest(...numbers) {
	return numbers.reduce((container, element) => {
		return container + element;
	});
}
// Shorter version
const mult = (...numbers) =>
	numbers.reduce((total, val) => total * val);
