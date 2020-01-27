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
	console.log(data);
});

myRequest.addEventListener("error", () => {
	console.error("Request was denied. Try again later.");
});
myRequest.open("GET", "https://swapi.co/api/starships/"); // edit API link to test error handling
myRequest.send();
console.log("Request sent successfully.\nPlease wait...");
