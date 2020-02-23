class Timer {
	constructor(input_dur, start_btn, pause_btn) {
		this.input_dur = input_dur;
		this.start_btn = start_btn;
		this.pause_btn = pause_btn;

		this.start_btn.addEventListener("click", this.start);
		this.pause_btn.addEventListener("click", this.pause);
	}

	start() {
		console.log("Started timer.");
	}
	pause() {
		console.log("Paused timer.");
	}
}

const inputDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(inputDuration, startButton, pauseButton);
timer.start();
timer.pause();
