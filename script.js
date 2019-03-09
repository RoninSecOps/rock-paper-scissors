let playerScore = 0;
let computerScore = 0;
let myArray = [ 'paper', 'rock', 'scissors' ];
let computerSelection = myArray[Math.floor(Math.random() * 3)];
let round = 0;
let tie = 0;

function computerPlay(playerSeclection, computerSelection) {
	if (playerSeclection === 'rock' && computerSelection === 'paper') {
		'You Win! Rock beats Paper', (playerScore += 1);
		++round;
	} else if (playerSeclection === 'rock' && computerSelection === 'rock') {
		'Draw! Rock equal Rock', (tie += 1);
		++round;
	} else if (playerSeclection === 'rock' && computerSelection === 'scissors') {
		'You Win! Rock beats Scissors', (playerScore += 1);
		++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'rock') {
		'You Lose! Rock beats Paper', (computerScore += 1);
		++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'scissors') {
		'You Lose! Scissors beats Paper', (computerScore += 1);
		++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'paper') {
		'Draw! Paper equal Paper', (tie += 1);
		++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'paper') {
		'You Win! Scissors beats Paper', (playerScore += 1);
		++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'rock') {
		'You Lose Rock beats Scossors', (computerScore += 1);
		++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'scissors') {
		'Draw! Scissors equal Scissors', (tie += 1);
		++round;
	} else {
		('Total Error!');
	}
}
function result(playerScore, computerScore) {
	if (round === 5) {
		if (playerScore > computerScore) {
			console.log(`You Won! You have ${playerScore} points, computer has ${computerScore}, tie rounds ${tie}`);
		} else if (playerScore < computerScore) {
			console.log(`You Lose! You have ${playerScore} points, computer has ${computerScore}, tie rounds ${tie}`);
		} else {
			console.log(`Draw! You have ${playerScore} points, computer has ${computerScore}, tie rounds ${tie}`);
		}
	}
}

computerPlay('paper', computerSelection);
computerPlay('scissors', computerSelection);
computerPlay('rock', computerSelection);
computerPlay('rock', computerSelection);
computerPlay('paper', computerSelection);

result(playerScore, computerScore);
