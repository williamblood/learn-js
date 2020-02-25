const inputDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(inputDuration, startButton, pauseButton, {
	onTick(value) {
		console.log(`Time remaining: ${value}`);
	},
	onComplete() {
		console.log("Timer complete.");
	},
	onStart() {
		console.log("Timer started.");
	}
});

inputDuration.value = 30; // default
