const btn = document.querySelector("button");

const moveAfter = (element, pixels, delay) => {
	element.innerText = `Moving in ${delay / 1000} seconds`;
	setTimeout(() => {
		element.style.transform = `translateX(${pixels}px)`;
		element.innerText = "Move";
	}, delay);
};
btn.addEventListener("click", () => {
	moveAfter(btn, 200, 2000);
});
