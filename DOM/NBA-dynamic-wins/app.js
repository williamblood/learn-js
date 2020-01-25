const warriorsGames = [
	{
		awayTeam : {
			team     : "Golden State",
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : "Houston",
			points   : 106,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : "Golden State",
			points   : 105,
			isWinner : false
		},
		homeTeam : {
			team     : "Houston",
			points   : 127,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : "Golden State",
			points   : 126,
			isWinner : true
		},
		awayTeam : {
			team     : "Houston",
			points   : 85,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : "Golden State",
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : "Houston",
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : "Golden State",
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : "Houston",
			points   : 98,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : "Golden State",
			points   : 115,
			isWinner : true
		},
		awayTeam : {
			team     : "Houston",
			points   : 86,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : "Golden State",
			points   : 101,
			isWinner : true
		},
		homeTeam : {
			team     : "Houston",
			points   : 92,
			isWinner : false
		}
	}
];

warriorsGames.forEach((game, gameNum) => {
	const gameNumHeading = document.createElement("h3");
	gameNumHeading.innerText = `Game ${gameNum + 1}`;
	const homeVsAway = document.createElement("ul");
	const { awayTeam, homeTeam } = game;
	// const awayT = game["awayTeam"].team;
	// const homeT = game["homeTeam"].team;
	homeVsAway.innerText = `Home | ${homeTeam.team} vs ${awayTeam.team} | Away`;

	const scores = document.createElement("li");
	let homePoints = homeTeam.points,
		awayPoints = awayTeam.points;
	if (homePoints > awayPoints)
		scores.innerHTML = `<b>${homePoints}</b>-${awayPoints}`;
	else scores.innerHTML = `${homePoints}-<b>${awayPoints}</b>`;

	homeVsAway.append(scores);
	document.body.append(gameNumHeading, homeVsAway);
});
