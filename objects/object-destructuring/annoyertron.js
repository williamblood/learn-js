/* Using an arrow function to prevent "this" from mutating to a different scope */
const annoyerTron = {
	phrases      : [
		"literally",
		"cray cray",
		"I can't even",
		"totes!",
		"YOLO",
		"can't stop, won't stop"
	],
	randomPhrase() {
		const { phrases } = this;
		const randomIndex = Math.floor(
			Math.random() * phrases.length
		);
		return phrases[randomIndex];
	},
	start() {
		this.intervalId = setInterval(() => {
			console.log(this.randomPhrase());
		}, 2000);
		console.log(this);
	},
	stop() {
		clearInterval(this.intervalId);
	}
};
// Note: arrow functions do not change 'this' scope or
// get their own 'this'

/* Legacy */
// start() {
//     const that = this; /* binds to function scope */
//     var that = this; /* binds lexical scoped 'this' */
//     setInterval(() => {
//         console.log(this.randomPhrase());
//     }, 2000);
// }
