let playerScore = 0;
let computerScore = 0;
let myArray = [ 'paper', 'rock', 'scissors' ];
let computerSelection = myArray[Math.floor(Math.random() * 3)];
let round = 0;
let tie = 0;
function computerPlay(playerSeclection, computerSelection) {
	if (playerSeclection === 'rock' && computerSelection === 'paper') {
		'You Win! Rock beats Paper', (playerScore += 1);
		return ++round;
	} else if (playerSeclection === 'rock' && computerSelection === 'rock') {
		'Draw! Rock equal Rock', (tie += 1);
		return ++round;
	} else if (playerSeclection === 'rock' && computerSelection === 'scissors') {
		'You Win! Rock beats Scissors', (playerScore += 1);
		return ++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'rock') {
		'You Lose! Rock beats Paper', (computerScore += 1);
		return ++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'scissors') {
		'You Lose! Scissors beats Paper', (computerScore += 1);
		return ++round;
	} else if (playerSeclection === 'paper' && computerSelection === 'paper') {
		'Draw! Paper equal Paper', (tie += 1);
		return ++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'paper') {
		'You Win! Scissors beats Paper', (playerScore += 1);
		return ++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'rock') {
		'You Lose Rock beats Scossors', (computerScore += 1);
		return ++round;
	} else if (playerSeclection === 'scissors' && computerSelection === 'scissors') {
		'Draw! Scissors equal Scissors', (tie += 1);
		return ++round;
	} else {
		return 'Total Error!';
	}
}
// round = computerPlay(playerSeclection, computerSelection);

// if (round === 5) {
// 	if (playerScore > computerScore) {
// 		console.log('You won');
// 	} else if (playerScore < computerScore) {
// 		console.log('You lose');
// 	} else {
// 		console.log('Draw');
// 	}
// }

computerPlay('paper', computerSelection);
console.log(playerScore);
console.log(computerScore);
