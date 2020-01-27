const contactURL = "/contact";

const get = url => {
	return new Promise((resolve, reject) => {
		const pages = {
			"/users"   : [
				{ id: 9, name: "Billy" },
				{ id: 32, name: "Sophie" }
			],
			"/contact" : "Pretend this is the contact page!"
		};
		const requestedData = pages[url];
		if (pages[url]) resolve({ status: 200, requestedData });
		else reject({ status: 404 });
	});
};

get(contactURL)
	.then(response => {
		console.log(`Status code: ${response.status} OK`);
		console.log("Resolved. Content accessed.");
		console.log(
			`Loading page and revealing contents: ${response.requestedData}`
		);
	})
	.catch(response => {
		console.warn(`There was an error: ${response.status}`);
	});

// then() runs only if promise is resolved
