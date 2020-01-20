const role = "President";
const person = "Maximillion Pegasus";
const role2 = "Contestant";
const person2 = "Yugi Moto";

/* (New) dynamic keys */
const players = {
	[role]        : person,
	[role2]       : person2,
	[(1 + 1) / 2]: "one"
};

/**
 * Adds a new property to an object and returns the copy.
 * @param {object} object - Object to add properties.
 * @param {*} key - Name of property. 
 * @param {*} value - Contents.
 */
const addProperty = (object, key, value) => {
	return {
		...object,
		[key] : value
	};
};

const updatedPlayers = addProperty(players, "Me", "William Blood");
// expected output : {1: "one", President: "Maximillion Pegasus", Contestant: "Yugi Moto", Me: "William Blood"}

/* (Legacy) Dynamic Keys*/
// initialize obj
const players2 = {};
players2[role] = person;
players2[role2] = person2;
