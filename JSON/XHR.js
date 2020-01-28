// The "original" way of sending requests

// XML HTTP Requests = XHR on dev tools,
// doesn't support promises
// Get ready for callback hell
// Think of this as a request form, submitting to browser

const myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", function() {
	console.log("Loaded.");
	// "this" becomes the request object with accessor methods like "responseText"
	const data = JSON.parse(this.responseText);
	console.log("Here's everything I got back: ", data);
	const airships = data.results;
	console.log("I found ships!", airships); // data is now a javascript object
	airships.forEach((airship) => {
		if (airship.name.includes("TIE")) {
			console.log(
				"Is that a TIE fighter? Check this out!",
				airship
			);
		}
	});
});

myRequest.addEventListener("error", () => {
	console.error("Request was denied. Try again later.");
});
myRequest.open("GET", "https://swapi.co/api/starships/"); // edit API link to test error handling
console.log("Sending request to https://swapi.co/api/starships/");
myRequest.send();
console.log("Request sent successfully.\nPlease wait...");
