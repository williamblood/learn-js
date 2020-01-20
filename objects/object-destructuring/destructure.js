/* this keyword may also be destructured */

const pegasusObject = {
	first    : "Maximillion",
	last     : "Pegasus",
	country  : "United States",
	title    : [
		"President of Industrial Illusions",
		"Inventor of Duel Monsters"
	],
	fullName() {
		const { first, last } = this;
		console.log(first, last);
	}
	// WITHOUT DESTRUCTURING "this"
	// fullName() {
	// 	console.log(this.first, this.last);
	// }
};

const { first, last, ...misc } = pegasusObject;
// Rename key with value still inside, unchanged
const { first: x, last: y } = pegasusObject;

const pegasusArray = [
	"Maximillion",
	"Pegasus",
	"United States",
	[
		"President of Industrial Illusions",
		"Inventor of Duel Monsters"
	]
];

const [ firstName, lastName, ...details ] = pegasusArray;

/* Nested version */

const results = [
	{
		first   : "Eliud",
		last    : "Kipchoge",
		country : "Kenya"
	},
	{
		first   : "Feyisa",
		last    : "Lilesa",
		country : "Ethiopia"
	},
	{
		first   : "Galen",
		last    : "Rupp",
		country : "United States"
	}
];
// Rename key "first" to var "winner"
const [ { first: winner }, , { country: USA } ] = results;

// Destructure argument:
// Unpacks at parameter list
function print2({ first, last, country }) {
	console.log(`${last}, ${first} - ${country}`);
}

// Unpacks in function scope
/**
 * Prints the full name of a person and their country of origin. 
 * @param {object} person 
 */
function print(person) {
	const { first, last, country } = person;
	console.log(`${last}, ${first} - ${country}`);
}

// Practical application of destructuring:
const response = [ "HTTP/1.1", "200 OK", "application/json" ];

function parseRes([ protocol, status, type ]) {
	status.includes("200")
		? console.log(`ACCESS GRANTED`)
		: console.error(`Error: ${status}`);
}
// expected output: ACCESS GRANTED
