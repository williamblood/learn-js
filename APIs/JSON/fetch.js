// Note: AXIOS remains the gold standard, use that instead

const validateAndParseData = (response) => {
	console.log("Data received. Confirming status...");
	if (!response.ok) throw new Error(response.status);
	else console.log(`Status: ${response.status} OK. Parsing data.`);
	return response.json();
};

const listAirships = (data) => {
	console.log("Here's everything I got back: ", data);
	const airships = data.results;
	console.log("I found ships!", airships); // data is now a javascript object
	airships.forEach((airship) => {
		if (airship.name.includes("TIE")) {
			console.log(
				"Is that a TIE fighter? Check this out!",
				airship
			);
		} else {
			console.log(airship.name);
		}
	});
	return Promise.resolve(data);
};

const fetchNextPage = (data) => {
	const nextPage = data.next;
	console.log("Fetching next page...");
	return fetch(nextPage);
};

const fetchStarships = (url = "https://swapi.co/api/starships/") => {
	console.log(`Fetching data from ${url}`);
	return fetch(url);
};

// fetchStarships() is equivalent to fetch("https://swapi.co/api/starships/")
fetchStarships()
	.then(validateAndParseData)
	.then(listAirships)
	.then(fetchNextPage)
	.then(validateAndParseData)
	.then(listAirships)
	.catch((err) => {
		console.error(err, "Unable to fetch data. Aborting.");
	});

/* Old code */

// const myRequest = new XMLHttpRequest();

// myRequest.addEventListener("load", function() {
// 	console.log("Loaded.");
// 	// "this" becomes the request object with accessor methods like "responseText"
// 	const data = JSON.parse(this.responseText);
// 	airships.forEach((airship) => {
// 		if (airship.name.includes("TIE")) {
// 			console.log(
// 				"Is that a TIE fighter? Check this out!",
// 				airship
// 			);
// 		}
// 	});
// });

// myRequest.addEventListener("error", () => {
// 	console.error("Request was denied. Try again later.");
// });
// myRequest.open("GET", "https://swapi.co/api/starships/"); // edit API link to test error handling
// console.log("Sending request to https://swapi.co/api/starships/");
// myRequest.send();
// console.log("Request sent successfully.\nPlease wait...");
