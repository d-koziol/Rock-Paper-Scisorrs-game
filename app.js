const game = () => {
    let playerScore = 0;  // Variables declaration.
    let computerScore = 0;
    let computerSelection;
    let playerSelection;
    let roundCounter = 0;
    
    const pScore = document.querySelector("#playerScore");
    const cScore = document.querySelector("#computerScore");
    const rResult = document.querySelector("#roundResult");
    const rNumber = document.querySelector("#roundNumber");
    const rButton = document.querySelector("#reset_btn");




    const playGame = () => {
        
const getComputerChoice = () => {  
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


const playRound = (playerSelection) => {  
    
    computerSelection = getComputerChoice();
    
    
    if (playerSelection === computerSelection) {
        roundCounter++;
        rNumber.textContent = roundCounter;
        rResult.textContent = `It's a tie... Try again.`;
            
    }
    else if( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
    (playerSelection === "PAPER" && computerSelection ==="ROCK") || 
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ) 
        {
            rResult.textContent = `You Win This Round! ${playerSelection} beats ${computerSelection}.`;
            roundCounter++;
            playerScore++;
            pScore.textContent = playerScore;
            rNumber.textContent = roundCounter;
            return playerScore;
        }
        else 
        {
            rResult.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection}.`;
            roundCounter++;
            computerScore++;
            cScore.textContent = computerScore;
            rNumber.textContent = roundCounter; 
            return computerScore;
        }
    }
    
    const resEt = () => {
        playerScore = 0;
        computerScore = 0; 
        roundCounter = 0;
        rNumber.textContent = "0"
        pScore.textContent = "0"; 
        cScore.textContent = "0";
    };
    rButton.addEventListener("click", resEt);

}
playGame();

}
game();
