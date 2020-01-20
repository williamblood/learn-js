/* Legacy way */
let nums = [ 4, 10, 2, 4, 9, 3, 5, 1, 0 ];
console.log(nums);
nums = {
	...nums
};
console.log(nums);

const sumExample = function(x, y, z) {
	console.log(arguments[0]);
	return x + y + z;
};
console.log(sum(4, 20, 0));

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
// Rest
const mult = (...numbers) =>
	numbers.reduce((total, val) => total * val);
