// Note: Use AXIOS instead to deal with the response status
fetch("https://swapi.co/api/starships/")
	.then((response) => {
		// Convert the response body readableStream into JSON data
		if (!response.ok) throw new Error(response.status);
		return response.json();
	})
	.then((data) => {
		console.log("Here's everything I got back: ", data);
		const airships = data.results;
		console.log("I found ships!", airships); // data is now a javascript object
		let filmURL = "";
		airships.forEach((airship) => {
			if (airship.name.includes("TIE")) {
				console.log(
					"Is that a TIE fighter? Check this out!",
					airship
				);
				console.log("Let me find some relevant films..");
				filmURL = airship.films[0];
				// Note: cannot return fetch() in if() scope
			} else console.log(airship.name);
		});
		console.log(filmURL);
		return fetch(filmURL);
	})
	.then((response) => {
		console.log(response);
		if (!response.ok) throw new Error(response.status);
		return response.json();
	})
	.then((data) => {
		console.log("Got the first film", data);
	})
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
