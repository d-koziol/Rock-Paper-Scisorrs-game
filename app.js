let playerScore = 0;  // Variables declaration.
let computerScore = 0;
let computerSelection;
let playerSelection;



function getComputerChoice() {  // Function that generates random computer's weapon.
    const weapons = ["ROCK", "PAPER", "SCISSORS"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    
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
    const rScore = document.querySelector("#roundResult");
    
    
    if (playerSelection === computerSelection) {
        
            rScore.textContent = `Result: It's a tie... Try again.`;
            return 0;
        }
        else if( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
                (playerSelection === "PAPER" && computerSelection ==="ROCK") || 
                 (playerSelection === "SCISSORS" && computerSelection === "PAPER") ) 
        {
            rScore.textContent = `Result: You Win This Round! ${playerSelection} beats ${computerSelection}.`;
            pScore.textContent = parseInt(pScore.textContent) + 1;
            return 1;
        }
        else 
        {
            rScore.textContent = `Result: You Lose This Round! ${computerSelection} beats ${playerSelection}.`;
            cScore.textContent = parseInt(cScore.textContent) + 1;
            return -1;
        }
    }

   


function getScore (playerScore, computerScore){ // Function that keeps score and reports it at the end of the game.
    if (playerScore < computerScore) {
        console.log(`Game over, computer wins with score ${computerScore}:${playerScore}`)
    } else if ( playerScore > computerScore){
        console.log(`Game over, You won with score ${playerScore}:${computerScore}`);
    }
}
getScore (playerScore, computerScore);


