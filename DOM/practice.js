/* Versatile selector (USE THIS MAINLY) */
let firstLink = document.querySelector("a");
let allLinks = document.querySelectorAll("a");

// nest CSS syntax as args if necessary
let aboutWork = document.querySelector("div.about-work");
// this example is not practical but showcases nesting
let aboutImage = document.querySelector("main section .about-image");

/* Legacy */
// returns array-LIKE DOM objects, not real arrays
const logo = document.getElementById("logo");

const allImages = document.getElementsByTagName("img");
// iterable using a for loop
for (let img of allImages) {
	if (typeof img === "object") continue;
	else {
		console.error("This shouldn't be wrong");
		break;
	}
}
// TL;DR: This won't work
// allImages.forEach((img) => {
// 	console.log(img);
// });

// convert to array to use array methods
const arrAllImages = [ ...allImages ];
arrAllImages.forEach((img) => {
	console.log(
		typeof img === "object" ? "object found" : "not an object"
	);
});

/* Other common methods and properties */

let emailHTML = document.querySelector("input[type='email']");
let attributeTypeContents = emailHTML.getAttribute("type");
// change attribute type from email to text
attributeTypeContents = emailHTML.setAttribute("type", "text");

let parentEmail = emailHTML.parentElement; // returns parent HTML obj
let child = emailHTML.children; // returns array
let nextSib = emailHTML.nextElementSibling;
let prevSib = emailHTML.previousElementSibling;
