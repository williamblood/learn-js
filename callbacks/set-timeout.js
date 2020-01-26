/* Open dev tools to check the call stack and play with breakpoints */
const btn = document.querySelector("button");

// Note:
//  setTimeout contents are executed last.
//  the function is placed on top as the last in the call stack,
//  allowing any button changes to occur at the end of the delay.

const moveAfter = (element, pixels, delay) => {
	element.innerText = `Moving in ${delay / 1000} seconds..`;
	setTimeout(() => {
		element.style.transform = `translateX(${pixels}px)`;
		element.innerText = "Move";
	}, delay);
};

btn.addEventListener("click", () => {
	let currentRight = btn.getBoundingClientRect().right;
	if (currentRight + 200 > window.innerWidth)
		console.warn(
			"BOUNDARY REACHED.",
			`You are about to exceed the boundary by ${200 -
				currentRight}px.`,
			`Resetting position to ${currentRight}px.`
		);
	console.log(`current pixel count: ${currentRight}`);
	moveAfter(btn, (currentRight += 200), 2000);
	console.log(`pixel count after: ${currentRight}`);
});
