function getComputerChoice() {
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Tie game! You choose: ${playerSelection}`);
        return playRound(0, 0);
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return playRound(1, 0);
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return playRound(1, 0);

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return playRound(1, 0);

    } else {
        console.log(`You lost.. ${computerSelection} beats ${playerSelection}`);
        return playRound(0, 1);

    }
  }
   
  const playerSelection = prompt("Choose your weapon(rock, paper or scissors)").toLocaleUpperCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

