function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
	let computerResponse = getRandomInt(1, 3);
	//console.log(computerResponse);
	let response;
	if (computerResponse == 1) {
		response = "rock";
	} else if (computerResponse == 2) {
		response = "paper";
	} else {
		response = "scissors";
	}
	return response;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let outcome;
	let score = 3;
	if (playerSelection === "rock" && computerSelection === "rock") {
		outcome = "It's a Tie!";
		score = 0;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		outcome = "You Lose! Paper beats Rock";
		score = -1;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		outcome = "You Win! Rock beats Scissors";
		score = 1;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		outcome = "You Win! Paper beats Rock";
		score = 1;
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		outcome = "It's a Tie!";
		score = 0;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		outcome = "You Lose! Scissors beats Paper";
		score = -1;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		outcome = "You Lose! Rock beats Scissors!";
		score = -1;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		outcome = "You Win! Scissors beat Paper";
		score = 1;
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		outcome = "It's a Tie!";
		score = 0;
	} else {
		outcome = "Error"
		score = 2;
	}
	console.log(outcome);
	return score;
}

function game() {
	//let playerSelection = "rock";
	let player = 0;
	let computer = 0;
	while(player < 5 && computer < 5) { 
  		let computerSelection = computerPlay();
  		let playerSelection = prompt("Enter Rock, Paper or Scissors");
		let result = playRound(playerSelection, computerSelection)
		if (result == 1) {
			player = player + 1;
		} else if (result == -1) {
			computer = computer + 1;
		}
		console.log("Player = " + player +"\t" + "Computer = " + computer)	
	}
	console.log("Game Ended!")
}

game();