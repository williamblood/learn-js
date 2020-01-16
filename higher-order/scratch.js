/**
 * Returns an anonymous function that returns true
 * if a number is within the range of x and y 
 * when called.
 * @param {*} x - set minimum barrier value.
 * @param {*} y - set maximum barrier value.
 */

function between(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

// Examples:
const isAdult = between(18, 99);
const isMinor = between(0, 18);
const isNiceWeather = between(65, 79);
