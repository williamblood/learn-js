class Timer {
	constructor(input_dur, start_btn, pause_btn, callbacks) {
		this.input_dur = input_dur;
		this.start_btn = start_btn;
		this.pause_btn = pause_btn;

		// Saves a reference to optional callbacks if provided
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.start_btn.addEventListener("click", this.start);
		this.pause_btn.addEventListener("click", this.pause);
	}

	get timeRemaining() {
		return parseFloat(this.input_dur.value);
	}

	set timeRemaining(newTime) {
		this.input_dur.value = newTime; // updates html text
	}

	start = () => {
		this.onStart();
		const currentTime = this.timeRemaining; // grabs input val
		this.timeRemaining = currentTime; // updates timer

		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining < 1) {
			this.pause();
			this.onComplete();
		} else {
			this.timeRemaining = this.timeRemaining - 1; // ticks down to 0
			this.onTick(this.timeRemaining);
		}
	};
}

const inputDuration = document.querySelector("#duration");
inputDuration.value = 30; // default

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
