/* Simply access any page by replacing the value below with the target URL/URI */
const usersURL = "/users";

const get = (url) => {
	return new Promise((resolve, reject) => {
		const pages = {
			"/users"    : [
				{ id: 9, name: "Billy" },
				{ id: 32, name: "Sophie" },
				{ id: 7, name: "Bentley Cooper" }
			],
			"/users/9"  : {
				id          : 9,
				name        : "Billy",
				age         : 20,
				location    : "OC",
				upvotes     : 943819,
				accountPlan : "gold"
			},
			"/users/32" : {
				id          : 32,
				name        : "Sophie",
				age         : 19,
				location    : "OC",
				upvotes     : 2133,
				accountPlan : "basic"
			},
			"/users/12" : {
				id          : 12,
				name        : "Bentley Cooper",
				age         : 5,
				location    : "OC",
				upvotes     : 7328,
				accountPlan : "basic"
			},

			"/contact"  : "Pretend this is the contact page!"
		};
		const requestedData = pages[url];
		if (requestedData) resolve({ status: 200, requestedData });
		else reject({ status: 404 });
	});
};

get(usersURL)
	.then((response) => {
		console.log(response.requestedData);
		const userId = response.requestedData[0].id; // I want the first user, billy
		get(`/users/${userId}`)
			.then((response) => {
				console.log(response.status);
				console.log(
					`More detailed data about ${response.requestedData
						.name}`,
					response.requestedData
				);
			})
			.catch((response) => {
				console.log(response.status);
			});
	})
	.catch((response) => console.error(response.status));

// Note: Do not pass an array of objects in a template literal ${}
// Example:
// 1) console.log(`data: ${response.requestedData}`);
// returns [object Object],[object Object],[object Object]
// 2) then() runs only if promise is resolved
// pass in objects in resolve/reject as arguments,
//  typically with status codes and other properties
