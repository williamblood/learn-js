const inputDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
const timer = new Timer(inputDuration, startButton, pauseButton, {
	onTick(value) {
		console.log(`Time remaining: ${value}`);
		circle.setAttribute("stroke-dashoffset", currentOffset);
		currentOffset = currentOffset - 50;
	},
	onComplete() {
		console.log("Timer complete.");
	},
	onStart() {
		console.log("Timer started.");
	}
});

inputDuration.value = 30; // default
