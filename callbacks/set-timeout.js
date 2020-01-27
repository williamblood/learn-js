/* Open dev tools to check the call stack and play with breakpoints */
/* Level 2-3 callbacks */
const btn = document.querySelector("button");

// Note:
//  setTimeout contents are executed last.
//  the function is placed on top as the last in the call stack,
//  allowing any button changes to occur at the end of the delay.

// Click and move button, save current position of btn for next click
// Send user warning if button goes off screen
// Send user success notification if it moved successfully

/**
 * Moves any element to the right of the document body. 
 * @param {*} element - target element to move.
 * @param {number} pixels - amount of pixels to element.
 * @param {number} delay - in miliseconds.
 * @param {callbackfn} onFailure - called when element has exceeded client boundary.
 * @param {callbackfn} onSucess - called when element has successfully moved.
 */

const moveAfter = (element, pixels, delay, onFailure, onSucess) => {
	let currentRight = element.getBoundingClientRect().right;
	const boundary = document.body.getBoundingClientRect().width;
	if (currentRight + pixels > boundary) {
		onFailure();
	} else {
		element.innerText = `Moving in ${delay / 1000} seconds..`;
		setTimeout(() => {
			element.style.transform = `translateX(${(currentRight += pixels)}px)`;
			element.innerText = "Move";
			onSucess();
		}, delay);
	}
};

btn.addEventListener("click", () => {
	moveAfter(btn, 100, 2000, displayError, () => {
		console.log(`Moved successfully!`);
	});
});

function displayError() {
	console.warn(
		"BOUNDARY REACHED.\n You are about to exceed the boundary.\n Stopping."
	);
}
