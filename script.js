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

console.log(getComputerChoice());