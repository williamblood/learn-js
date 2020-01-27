/* Simply access any page by replacing the value below with the target URL/URI */
const usersURL = "/users";

const get = (url) => {
	return new Promise((resolve, reject) => {
		const pages = {
			"/users"         : [
				{ id: 9, name: "Billy" },
				{ id: 32, name: "Sophie" },
				{ id: 7, name: "Bentley Cooper" }
			],
			"/users/9"       : {
				id          : 9,
				postId      : 4092348,
				name        : "Billy",
				age         : 28,
				location    : "OC",
				upvotes     : 943819,
				accountPlan : "gold"
			},
			"/users/32"      : {
				id          : 32,
				postId      : 3428412,
				name        : "Sophie",
				age         : 19,
				location    : "OC",
				upvotes     : 2133,
				accountPlan : "basic"
			},
			"/users/12"      : {
				id          : 12,
				postId      : 89234923,
				name        : "Bentley Cooper",
				age         : 5,
				location    : "OC",
				upvotes     : 7328,
				accountPlan : "basic"
			},
			"/posts/4092348" : "Our eyes are yet to open.",
			"/posts/3428412" :
				"Where we're going, we won't need eyes to see.",
			"/contact"       : "Pretend this is the contact page!"
		};
		setTimeout(() => {
			const requestedData = pages[url];
			if (requestedData)
				resolve({ status: 200, requestedData });
			else reject({ status: 404 });
		}, 1500);
	});
};

// Access and print user posts
get(usersURL)
	.then((response) => {
		const userId = response.requestedData[0].id;
		console.log(response.status, "Fetching user ID..");
		return get(`/users/${userId}`);
	})
	.then((response) => {
		const postId = response.requestedData.postId;
		const name = response.requestedData.name;
		console.log(`[${name}]`);
		console.log(
			response.status,
			"ID Retreived.\nFetching post ID.."
		);
		return get(`/posts/${postId}`);
	})
	.then((response) => {
		const userPost = response.requestedData;
		console.log(`Post: ${userPost}`);
	})
	.catch((response) => {
		console.error("That ain't it chief.", response.status);
	});
