function getComputerChoice() {
    let computerChoice = Math.random();
    console.log(computerChoice);
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gethumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}