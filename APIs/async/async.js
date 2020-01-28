// Mimicking async without async
function add(x, y) {
	return new Promise((resolve, reject) => {
		if (typeof x !== "number" || typeof y !== "number") {
			reject({ status: "Incorrect type" });
		} else resolve(x + y);
	});
}

add(1, 4)
	.then((data) => {
		console.log(data);
	})
	.catch((reject) => {
		throw new Error(reject.status);
	});
