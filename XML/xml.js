// The "original" way of sending requests

// XML HTTP Requests = XHR on dev tools,
// doesn't support promises
// Get ready for callback hell
// Think of this as a request form, submitting to browser

const myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", () => {
	console.log("Loaded successfully");
});

myRequest.addEventListener("error", () => {
	console.error("Request was denied");
});
myRequest.open("GET", "https://swapi.co/api/starships/");
myRequest.send();
console.log("Request sent successfully.");
