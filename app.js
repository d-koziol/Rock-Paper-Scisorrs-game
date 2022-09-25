function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Tie game! You choose: ${playerSelection}`);
        
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;

    } else {
        console.log(`You lost.. ${computerSelection} beats ${playerSelection}`);
        computerScore++;

    }
  }
   
  const playerSelection = prompt("Choose your weapon(rock, paper or scissors)").toLocaleUpperCase();
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log(`Your score: ${playerScore} | computer score ${computerScore}`);

