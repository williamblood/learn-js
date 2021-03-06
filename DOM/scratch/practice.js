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
arrAllImages.forEach(img => {
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

/* How to create elements and add/remove them from the DOM*/

let parentIntro = document.querySelector(".hero-intro");
let firstH5 = document.querySelector("h2");

const newH2 = document.createElement("h2");
const newH2v2 = document.createElement("h2");

newH2.innerText = "Professional";
newH2v2.innerText = "Photographer";
// "Professional"

// appends to bottom/last
parentIntro.append(newH2, newH2v2);
// appends to top/first/before
parentIntro.prepend(newH2, newH2v2);

// // Other methods to add one element

// parentIntro.appendChild(newH2);
// // exptected: appends to last element
// parentIntro.insertBefore(newH2, firstH5);
// // exptected: appends new h2 to the top

// parentIntro.insertAdjacentElement("afterbegin", newH2);
// // parentIntro.insertAdjacentElement("beforeend", newH2);
// /* <h2>​Professional​</h2>​ */
// newH2.classList.add("newH2");

// const h2Link = document.createElement("a");
// h2Link.href = "https://youtu.be/s9odzlxOpP0";
// h2Link.innerText = "professional".toUpperCase();
// newH2.insertAdjacentElement("afterend", h2Link);

const allH2 = document.querySelectorAll("h2");
const firstH2 = allH2[0];
firstH2.remove(); // parent unnecessary
// allH2.removeChild(firstH2); parent required

// Removes all h2's
// allH2.forEach((element) => { element.remove()}

/* Events */

// e.preventDefault();
