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
		if (this.onStart) {
			this.onStart();
		}
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
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 1; // ticks down to 0
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};
}
