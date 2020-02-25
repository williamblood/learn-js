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
		this.input_dur.value = newTime.toFixed(2); // updates html text
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		const currentTime = this.timeRemaining; // grabs input val
		this.timeRemaining = currentTime; // updates timer

		this.tick();
		this.interval = setInterval(this.tick, 50); // 50ms
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaining < 0.01) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05; // ticks down by 0.05 of a second
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};
}
