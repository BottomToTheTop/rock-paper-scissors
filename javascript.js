function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function getNewChoices() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a tie!");
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a tie!");
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1; 
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a tie!");
        }
    }
}

const rockBtn = document.querySelector("#btn");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
