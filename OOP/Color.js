class Color {
	constructor(r, g, b, name) {
		(this.r = r), // Creates a new object of pixel 'r' inside Color
			(this.g = g),
			(this.b = b),
			(this.name = name);
	}
	print() {
		const { r, g, b, name } = this; // prevent 'this.r; this.g' redundancy
		console.log(
			// this refers to the Color data members
			`Alias : ${name}`,
			`\nRGB code: (${r}, ${g}, ${b})`
		);
	}
}

const black = new Color(0, 0, 0, "darkness");
black.print();
