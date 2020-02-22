// Normal error handling function
function add(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		throw "ERROR: INCORRECT INPUT";
	}
	return x + y;
}

// Manually with promises
const divide = (x, y) => {
	return new Promise((resolve, reject) => {
		if (typeof x !== "number" || typeof y !== "number") {
			reject("ERROR: INCORRECT INPUT");
		}
		resolve(x / y);
	});
};

// Short-hand *BEST PRACTICES*
async function subtract(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		throw {
			status : 200,
			log    :
				"\nAsynchronously caught.\nPlease enter a number."
		};
	}
	return x - y;
}

subtract("x", 4)
	.then((data) => {
		console.log(data);
	})
	.catch(({ status, log }) => {
		// parameter destructuring
		throw console.log("Error:", status, log);
	});

// // Mimicking async without async
// function add(x, y) {
// 	return new Promise((resolve, reject) => {
// 		if (typeof x !== "number" || typeof y !== "number") {
// 			reject({ status: "Incorrect type" });
// 		} else resolve(x + y);
// 	});
// }

// add(1, 4)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((reject) => {
// 		throw new Error(reject.status);
// 	});
