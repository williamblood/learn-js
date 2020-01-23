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

// Style the font color
let h5 = document.querySelector("h5");
// <h5>​PRAGMATISM​</h5>​
let h5CSS = getComputedStyle(h5);
h5.style.color = "white";
// "white"
console.log(h5CSS.backgroundColor);
// "rgba(0, 0, 0, 0)"
h5CSS = getComputedStyle(h5);
console.log(h5CSS.color);
// "rgb(255, 255, 255)"
// Note: getComputedStyle is read-only, access to prop CSS
h5.style.color = "";
// inline style, reset color

/* How to create elements and them to the DOM*/

let firsth2 = document.querySelector("h2");
// undefined
const newh2 = document.createElement("h2");
// undefined
newh2.innerText = "Professional";
// "Professional"
firsth2.appendChild(newh2);
/* <h2>​Professional​</h2>​ */
newh2.classList;
// DOMTokenList [value: ""]length: 0value: ""__proto__: DOMTokenListlength: (...)value: (...)item: ƒ item()contains: ƒ contains()add: ƒ add()remove: ƒ remove()toggle: ƒ toggle()replace: ƒ replace()supports: ƒ supports()toString: ƒ toString()entries: ƒ entries()forEach: ƒ forEach()keys: ƒ keys()values: ƒ values()constructor: ƒ DOMTokenList()Symbol(Symbol.toStringTag): "DOMTokenList"Symbol(Symbol.iterator): ƒ values()get length: ƒ length()get value: ƒ value()set value: ƒ value()__proto__: Object
newh2.classList.add("h4");
