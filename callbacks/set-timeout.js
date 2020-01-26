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
	moveAfter(btn, 200, 2000);
});
