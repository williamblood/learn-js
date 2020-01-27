/* Open dev tools to check the call stack and play with breakpoints */

const btn = document.querySelector("button");

const moveRight = (element, pixels, delay) => {
	return new Promise((resolve, reject) => {
		let currentRight = element.getBoundingClientRect().right;
		const boundary = document.body.getBoundingClientRect().width;
		if (currentRight + pixels > boundary) {
			reject({ boundary, currentRight, pixels });
		} else {
			element.innerText = `Moving in ${delay / 1000} seconds..`;
			setTimeout(() => {
				element.style.transform = `translateX(${(currentRight += pixels)}px)`;
				element.innerText = "Move";
				resolve();
			}, delay);
		}
	});
};

btn.addEventListener("click", () => {
	moveRight(
		btn,
		100,
		2000
	).catch(({ boundary, currentRight, pixels }) => {
		console.error(
			`Element cannot exceed ${boundary}px!\n`,
			`Your element's dimensions: ${currentRight}px\n`,
			`Amount of desired spaces to move: ${pixels}px`
		);
	});
});

/* Old code */

// /**
//  * Moves any element to the right of the document body.
//  * @param {*} element - target element to move.
//  * @param {number} pixels - amount of pixels to move element by.
//  * @param {number} delay - in miliseconds.
//  * @param {callbackfn} onFailure - called when element has exceeded client boundary.
//  * @param {callbackfn} onSucess - called when element has successfully moved.
//  */

// const moveAfter = (element, pixels, delay, onFailure, onSucess) => {
// 	let currentRight = element.getBoundingClientRect().right;
// 	const boundary = document.body.getBoundingClientRect().width;
// 	if (currentRight + pixels > boundary) {
// 		onFailure();
// 	} else {
// 		element.innerText = `Moving in ${delay / 1000} seconds..`;
// 		setTimeout(() => {
// 			element.style.transform = `translateX(${(currentRight += pixels)}px)`;
// 			element.innerText = "Move";
// 			onSucess();
// 		}, delay);
// 	}
// };

// btn.addEventListener("click", () => {
// 	moveAfter(btn, 100, 2000, displayError, () => {
// 		console.log(`Moved successfully!`);
// 	});
// });

// function displayError() {
// 	console.warn(
// 		"BOUNDARY REACHED.\n You are about to exceed the boundary.\n Stopping."
// 	);
// }
