function getComputerChoice() {  // Function that generates random computer's weapon.
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}

let playerScore = 0;  // Variables declaration.
let computerScore = 0;
let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection) {  // Function  that allows to play one round and declares the winner.
    
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose your weapon(rock, paper or scissors)").toLocaleUpperCase();
    
    if (playerSelection === computerSelection) {
        console.log(`Tie game! You choose: ${playerSelection}`);
        console.log(`Your score: ${playerScore} | computer score: ${computerScore}`);

        
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Your score: ${playerScore} | computer score: ${computerScore}`);
        return playerScore;

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Your score: ${playerScore} | computer score: ${computerScore}`);
        return playerScore;

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Your score: ${playerScore} | computer score: ${computerScore}`);
        return playerScore;

    } else {
        console.log(`You lost.. ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`Your score: ${playerScore} | computer score: ${computerScore}`);
        return computerScore;
    } 
    
}
   
  playRound(playerSelection, computerSelection);

function game() {   // Function that allows to play 5 rounds.

    for (let i=0; i <= 5; i++){ 
        playRound();
    }
}
game();

function score (playerScore, computerScore){ // Function that keeps score and reports it at the end of the game.
    if (playerScore < computerScore) {
        console.log(`Game over, computer wins with score ${computerScore}:${playerScore}`)
    } else if ( playerScore > computerScore){
        console.log(`Game over, You won with score ${playerScore}:${computerScore}`);
    }
}
score (playerScore, computerScore);