// reduce() to object

const books = [
	{
		title   : "Good Omens",
		authors : [ "Terry Pratchett", "Neil Gaiman" ],
		rating  : 4.25,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "Changing My Mind",
		authors : [ "Zadie Smith" ],
		rating  : 3.83,
		genres  : [ "nonfiction", "essays" ]
	},
	{
		title   : "Bone: The Complete Edition",
		authors : [ "Jeff Smith" ],
		rating  : 4.42,
		genres  : [ "fiction", "graphic novel", "fantasy" ]
	},
	{
		title   : "American Gods",
		authors : [ "Neil Gaiman" ],
		rating  : 4.11,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "A Gentleman in Moscow",
		authors : [ "Amor Towles" ],
		rating  : 4.36,
		genres  : [ "fiction", "historical fiction" ]
	},
	{
		title   : "The Name of the Wind",
		authors : [ "Patrick Rothfuss" ],
		rating  : 4.54,
		genres  : [ "fiction", "fantasy" ]
	},
	{
		title   : "The Overstory",
		authors : [ "Richard Powers" ],
		rating  : 4.19,
		genres  : [ "fiction", "short stories" ]
	},
	{
		title   : "A Truly Horrible Book",
		authors : [ "Xavier Time" ],
		rating  : 2.18,
		genres  : [ "fiction", "garbage" ]
	},
	{
		title   : "The Way of Kings",
		authors : [ "Brandon Sanderson" ],
		rating  : 4.65,
		genres  : [ "fantasy", "epic" ]
	},
	{
		title   : "Lord of the flies",
		authors : [ "William Golding" ],
		rating  : 3.67,
		genres  : [ "fiction" ]
	}
];

// Sorted books based by ratings
// Easy and quick method
const twoAndThreeStarBooks = books.reduce(
	(booksByRating, book) => {
		if (Math.floor(book.rating) === 2) {
			booksByRating[2].push(book);
		} else if (Math.floor(book.rating) === 3) {
			booksByRating[3].push(book);
		} else if (Math.floor(book.rating) === 4)
			booksByRating[4].push(book);
		return booksByRating;
	},
	{ 2: [], 3: [], 4: [] }
);

// Sort themselves by their own scores
// May also sacrifice readability for shorter code --> if (!groupedBooks[key]) {...};
const sortedByRatings = books.reduce((booksByRating, book) => {
	const rating = Math.floor(book.rating);
	if (booksByRating[rating] === undefined)
		booksByRating[rating] = [];
	booksByRating[rating].push(book);
	return booksByRating;
}, {});
// breakdown:
// initialze accumulator (list of books) as empty obj literal
// reduce rating to whole num
// create category based on its own rating if it does not exist yet
// push itself into the collection of books that it previously made
// return the collection of books

/* tallying */

const votes = [
	"y",
	"y",
	"n",
	"y",
	"n",
	"y",
	"n",
	"y",
	"n",
	"n",
	"n",
	"y",
	"y"
];

const tallyVotes1 = votes.reduce((tally, val) => {
	tally[val] ? tally[val]++ : (tally[val] = true);
	return tally;
}, {});

// // Expected output: { y: 7, n: 6 }
// // Variations:
// const tallyVotes2 = votes.reduce((tally, val) => {
// 	if (tally[val]) tally[val]++;
// 	else tally[val] = true;
// 	return tally;
// }, {});

// const tallyVotes3 = votes.reduce((tally, val) => {
// 	tally[val] = 1 + (tally[val] || 0);
// }, {});

// Hint: tally["b"] = 1; // output: { b: 1 }, or { key: value }
// {} second argument initializes container 'tally' as an object literal
