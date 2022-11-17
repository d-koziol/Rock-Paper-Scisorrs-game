let playerScore = 0;  // Variables declaration.
let computerScore = 0;
let computerSelection;
let playerSelection;
let roundCounter = 0;
const maxRound = 5;



function getComputerChoice() {  // Function that generates random computer's weapon.
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if(button.id === "rock_btn") {
            playerSelection = "ROCK";
            playRound(playerSelection);
   
        };
        if(button.id === "paper_btn") {
            playerSelection = "PAPER";
            playRound(playerSelection);
        };
        if(button.id ===  "scissors_btn") {
            playerSelection = "SCISSORS";
            playRound(playerSelection);
        };
    })
    return playerSelection;
});

function playRound(playerSelection) {  // Function  that allows to play one round and declares the winner.
    
    computerSelection = getComputerChoice();
    const pScore = document.querySelector("#playerScore");
    const cScore = document.querySelector("#computerScore");
    const rResult = document.querySelector("#roundResult");
    const rNumber = document.querySelector("#roundNumber");
    
    
    if (playerSelection === computerSelection) {
        rNumber.textContent = roundCounter += 1;
        rResult.textContent = `It's a tie... Try again.`;
            
        }
        else if( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "PAPER" && computerSelection ==="ROCK") || 
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ) 
        {
            rResult.textContent = `You Win This Round! ${playerSelection} beats ${computerSelection}.`;
            pScore.textContent = parseInt(pScore.textContent) + 1;
            rNumber.textContent = roundCounter += 1;
        }
        else 
        {
            rResult.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection}.`;
            cScore.textContent = parseInt(cScore.textContent) + 1;
            rNumber.textContent = roundCounter += 1;
        }
        return roundCounter;
    }

function endGame(playerScore, computerScore) {
        const gResult = document.querySelector("#gameResult");
        if (playerScore > computerScore && roundCounter === maxRound) {
            gResult.textContent = `You won this game with score ${playerScore} to ${computerScore}`;
        } 
        else if (computerScore > playerScore && roundCounter === maxRound) {
            gResult.textContent = `You lost this game with score ${playerScore} to ${computerScore}`;
        }
        else if (playerScore === computerScore && roundCounter === maxRound) {
            gResult.textContent = `It's a tie ${playerScore} to ${computerScore}`;
        }
        console.log(gResult);
    }
endGame();
