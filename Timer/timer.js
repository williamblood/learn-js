class Timer {
	constructor(input_dur, start_btn, pause_btn) {
		this.input_dur = input_dur;
		this.start_btn = start_btn;
		this.pause_btn = pause_btn;

		this.start_btn.addEventListener("click", this.start);
		this.pause_btn.addEventListener(
			"click",
			this.pause.bind(this) // binds pause() to any new instance of Timer w/out arrow func
		);
	}

	start = () => {
		this.activateStart();
		// arrow func binds 'this' to any new Timer using the constructor
	};
	activateStart() {
		// bound inside the constructor of any new Timer instance (using arrow func)
		console.log(this);
		console.log("Timer Started.");
	}

	pause() {
		// bound inside the constructor of any new Timer instance (using bind())
		console.log(this);
		console.log("Paused timer.");
		// BUG FIXED! bug log -> BUGGED: 'this' references button tag when clicked
	}
}

const inputDuration = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(inputDuration, startButton, pauseButton);
timer.start();
timer.pause();

// Import to Babel for debugging compiled source code and 'this'
