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
	gameNumHeading.innerText = `Game ${gameNum}`;
	const homeVs = document.createElement("ul");
	const awayT = game["awayTeam"].team;
	const homeT = game["homeTeam"].team;
	homeVs.innerText = `Home | ${homeT} vs ${awayT} | Away`;

	let winnerName = document.createElement("li");
	let loserName = document.createElement("li");
	let winnerPoints = 0,
		loserPoints = 0;
	let winningTeam = awayT;
	if (winningTeam === "Golden State" && winningTeam.isWinner) {
		winnerName.innerText = winningTeam;
		winnerPoints = winningTeam.points;
	} else {
		loserName.innerText = winningTeam;
		loserPoints = winningTeam.points;
	}
	let winner = document.createElement("ul");
	winner.innerHTML = `Winner: ${winningTeam} <b>${winnerPoints}</b> : ${loserPoints}`;
	document.body.append(gameNumHeading, homeVs, winner);
});
