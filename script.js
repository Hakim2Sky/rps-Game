function getComputerChoice() {
    const choice = Number(Math.random().toFixed(2));
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    return prompt("Enter your Choice: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`its A TIE`);
    }
}

playRound(getComputerChoice(), getHumanChoice());