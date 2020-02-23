class Color {
	constructor(r = 255, g = 255, b = 255, name = "white") {
		(this.r = r), // Creates a new object of pixel 'r' inside Color
			(this.g = g),
			(this.b = b),
			(this.colorName = name);
	}
	printColorProfile() {
		const { r, g, b, name } = this; // prevent 'this.r; this.g' redundancy
		console.log(
			// this refers to the Color data members
			`Alias: ${name}`,
			`\nRGB code: (${r}, ${g}, ${b})`
		);
	}
}

class Product extends Color {
	constructor(
		prodName = "placeholder",
		features = "N/A",
		price = 0
	) {
		super(); // calls the super class constructor
		(this.prodName = prodName),
			(this.features = features),
			(this.price = price);
	}
	displayProductInfo() {
		const { prodName, features, price } = this;
		console.log(
			`Product: ${prodName}\n`,
			`Features: ${features[ // Prints 1 random feature
				Math.floor(Math.random() * features.length)
			]}\n`,
			`Price: $${price}`
		);
	}
	displayColorAlias() {
		console.log(this.name);
	}
	setColorName(newName) {
		this.name = newName;
	}
	setColor(newR, newG, newB) {
		let { r, g, b } = this;
		r = newR;
		g = newG;
		b = newB;
	}
	print() {
		console.log("----------- FULL PRODUCT DETAILS -----------");
		this.displayProductInfo();
		this.printColorProfile(); // inherited
	}
}

// const black = new Color(0, 0, 0, "jet black");
// black.printColorProfile();

const piano = new Product(
	"Grand Piano",
	[
		"All-metal",
		"Weighted Keys",
		"Sound is uniform and well balanced",
		"Sostenuto pedal",
		"Shift pedal",
		"Sustain pedal"
	],
	120000.0
);

// piano.name = black.name;
piano.setColor(0, 0, 0);
piano.setColorName("Vanta Black");
piano.displayProductInfo();
piano.displayColorAlias();
piano.printColorProfile(); // calls function inside parent class Color
