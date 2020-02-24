class Timer {
	constructor(input_dur, start_btn, pause_btn) {
		this.input_dur = input_dur;
		this.start_btn = start_btn;
		this.pause_btn = pause_btn;

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
		const currentTime = this.timeRemaining; // grabs input val
		this.timeRemaining = currentTime; // updates timer

		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining < 1) this.pause();
		else {
			this.timeRemaining = this.timeRemaining - 1; // ticks down to 0
			console.log(`${this.timeRemaining}`);
		}
	};
}

const inputDuration = document.querySelector("#duration");
inputDuration.value = 30;

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(inputDuration, startButton, pauseButton);
