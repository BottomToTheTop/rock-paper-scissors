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

let computerSelection = getComputerChoice();

function getNewComputerChoice() {
    computerSelection = getComputerChoice();
}

let humanScore = 0;
let computerScore = 0;

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

const results = document.querySelector('#results');
const score = document.querySelector('#score');

function displayScore(humanScore, computerScore) {
    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    if (humanScore === 5) {
        score.textContent = "Player wins!";
        resetScore();
    } else if (computerScore === 5) {
        score.textContent = "Computer wins!";
        resetScore();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        results.textContent = "It's a tie!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! Paper beats Rock.";
        computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        results.textContent = "You win! Rock beats Scissors.";
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        results.textContent = "You win! Paper beats Rock.";
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        results.textContent = "It's a tie!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! Scissors beats Paper.";
        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! Rock beats Scissors.";
        computerScore += 1; 
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = "You win! Scissors beats Paper.";
        humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        results.textContent = "It's a tie!";
    }
    
    displayScore(humanScore, computerScore)
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock", computerSelection)
    getNewComputerChoice();
});

paperBtn.addEventListener("click", () => {
    playRound("paper", computerSelection)
    getNewComputerChoice();
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", computerSelection)
    getNewComputerChoice();
});