/**
 * Returns an anonymous function that returns true
 * if a number is within desired range.
 * @param {*} x - sets minimum barrier value.
 * @param {*} y - sets maximum barrier value.
 */
// Function declaratation (Callback type)
function between(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

// Examples:
const isAdult = between(18, 99);
const isMinor = between(0, 18);
const isNiceWeather = between(65, 79);

// Arrow function
const pow = (base, exponent) => {
	exponent = base * exponent;
	return base * exponent;
};

// Function expression
const calcAreaCirc = function(radius) {
	return Math.PI * pow(radius, 2);
};

// Function expression with callback
const calcVolCyl = function(calcAreaCirc, height) {
	return calcAreaCirc(2) * height;
};

// Method
let lowerCaseToUpperCase = "string object".toUpperCase();

// Arrow function further simplified
const square = (base) => {
	base * base;
};

// Callback methods
/* Animal Pound Inventory - Data */
const cats = [ "hans", "elsa", "juniper" ];
const dogs = [ "bruce", "max" ];
const deceased = cats.forEach((cat, catSlot, cats) => {
	console.log(`cat slot : ${catSlot}`);
	console.log(`cat : ${cat}`);
	console.log(`cats : ${cats}`);
	console.log(`terminating : ${cats.pop()}`);

	// Expected: hans, elsa, juniper
});
// More examples:

const books = [
	{
		title   : "Good Omens",
		authors : [ "Terry Pratchett", "Neil Gaiman" ],
		rating  : 4.25,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "Changing My Mind",
		authors : [ "Zadie Smith" ],
		rating  : 3.83,
		genres  : [ "nonfiction", "essays" ]
	},
	{
		title   : "Bone: The Complete Edition",
		authors : [ "Jeff Smith" ],
		rating  : 4.42,
		genres  : [ "fiction", "graphic novel", "fantasy" ]
	},
	{
		title   : "American Gods",
		authors : [ "Neil Gaiman" ],
		rating  : 4.11,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "A Gentleman in Moscow",
		authors : [ "Amor Towles" ],
		rating  : 4.36,
		genres  : [ "fiction", "historical fiction" ]
	},
	{
		title   : "The Name of the Wind",
		authors : [ "Patrick Rothfuss" ],
		rating  : 4.54,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "The Overstory",
		authors : [ "Richard Powers" ],
		rating  : 4.19,
		genres  : [ "fiction", "short stories" ]
	},
	{
		title   : "A Truly Horrible Book",
		authors : [ "Xavier Time" ],
		rating  : 2.18,
		genres  : [ "fiction", "garbage" ]
	},
	{
		title   : "The Way of Kings",
		authors : [ "Brandon Sanderson" ],
		rating  : 4.65,
		genres  : [ "fantasy", "epic" ]
	},
	{
		title   : "Lord of the flies",
		authors : [ "William Golding" ],
		rating  : 3.67,
		genres  : [ "fiction" ]
	}
];

const display = () => {
	books.forEach((data) => {
		console.log(data.title);
	});
};

const titles = books.map((data) => data.title);

const spaceKitties = cats.map((cat) =>
	cat.toUpperCase().split("").join(" ")
);

/* map() */
// double every num and map to a new array
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const doubled = nums.map((n) => n * 2);

// check if even/odd and return as obj

const evenOrOdd = nums.map((n) => {
	return {
		original : n,
		doubled  : n * 2,
		even     : n == 2
	};
});

/* find(), filter() */

let movies = [
	"The Fantastic Mr. Fox",
	"Mr. and Mrs. Smith",
	"Mrs. Doubtfire",
	"Mr. Deeds",
	"Inception",
	"Interstellar",
	"Mr. Miyagi"
];
// search for 1 movie, first occurence
const movieSearchByIdx = movies.find(
	(data) => data.indexOf("Deeds") !== -1
);
const movieSearchByInc = movies.find((data) => data.includes("Mr."));

// search, returns all occurences
const filterMovies = movies.filter((data) => {
	return data.includes("In"); // expected: Inception, Interstellar
});

const vals = [ 5, 4, 9, 1, 2 ];

/**
 * Returns the larger number in an array.
 * 
 * Note: This function mimics the method reduce() to find the max.
 * @param {array} nums -  collection of numbers to compare.
 * @param {number} initialValue - if supplied, becomes starting value to compare. Else, defaults to first element in array.  
 */
function findMax(nums, initialValue = nums[0]) {
	let max = initialValue;
	for (let i = 1; i < nums.length; i++) {
		max = Math.max(max, array[i]);
	}
	return max;
}

// Array manipulation in order from high level to low level:

/**
 * Returns a single string by
 * converting the supplied array.
 * @param {array} arr -  collection of numbers to be converted.
 * 
 */
function convertArrToStr(arr) {
	return arr.slice().join("") - "0";
}

/**
 * Returns a single string by
 * converting the supplied array.
 * @param {array} arr -  collection of numbers to be converted.
 * 
 */
function arrToStr(arr) {
	let str = "";
	// convert each el to str
	for (let i = 0; i < arr.length; i++) {
		str = str + arr[i];
	}
	return str;
	// return as 1 string
}

/**
 * Returns a number by converting the supplied array.
 * @param {array} arr -  collection of numbers to be converted.
 */
function arrToInt(arr) {
	let str = "";
	// convert each el to str
	for (let i = 0; i < arr.length; i++) {
		str = str + arr[i];
	}
	// subtract by first ascii char ("0")
	return str - "0";
}
