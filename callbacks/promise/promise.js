//  "/users"
// edit next line "/users" directory to fetch other pages i.e "/contact"
const usersURL = "/users";

const get = url => {
	return new Promise((resolve, reject) => {
		const pages = {
			"/users"   : [
				{ id: 9, name: "Billy" },
				{ id: 32, name: "Sophie" },
				{ id: 7, name: "Bentley Cooper" }
			],
			"/contact" : "Pretend this is the contact page!"
		};
		const requestedData = pages[url];
		if (pages[url]) resolve({ status: 200, requestedData });
		else reject({ status: 404 });
	});
};

get(usersURL)
	.then(response => {
		console.log(`Status code: ${response.status} OK`);
		console.log("Resolved. Content accessed.");
		console.log("Your requested data: ", response.requestedData);
		// Note: Do not pass an array of objects in a template literal ${}
		// Example:
		//  console.log(`data: ${response.requestedData}`);
		// returns [object Object],[object Object],[object Object]
	})
	.catch(response => {
		console.warn(`There was an error: ${response.status}`);
	});

// then() runs only if promise is resolved
// pass in objects in resolve/reject as arguments,
//  typically with status codes and other properties
