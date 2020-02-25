const inputDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);

const timer = new Timer(inputDuration, startButton, pauseButton, {
	onStart(totalDuration) {
		this.totalDuration = totalDuration;
		console.log("Timer started.");
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			"stroke-dashoffset",
			timeRemaining * perimeter / this.totalDuration - perimeter
		);
	},
	onComplete() {
		console.log("Timer complete.");
	}
});
