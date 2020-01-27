const get = url => {
	return new Promise((resolve, reject) => {
		if (url === "amskdjaksdjalksjd112ielsa") resolve();
		else reject();
	});
};

const url = "amskdjaksdjalksjd112ielsa";
get(url)
	.then(() => {
		console.log(`Key: ${url}`);
		console.log("Resolved. Content accessed.");
	})
	.catch(() => {
		console.warn("Rejected");
	});

// .then runs only if promise is resolved
