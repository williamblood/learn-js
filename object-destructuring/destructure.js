const pegasusObject = {
	first   : "Maximillion",
	last    : "Pegasus",
	country : "United States",
	title   : [
		"President of Industrial Illusions",
		"Inventor of Duel Monsters"
	]
};

const { first, last, ...misc } = pegasusObject;
// Rename
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

const [ { first: winner }, , { country: USA } ] = results;

// Destruct on fuction
