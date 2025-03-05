//Get from user's input "rock", "paper", or "scissors" (case-insensitive)

function getHumanChoice() {
    let humanChoice = prompt("Make your choice");

    // Check if user canceled the prompt
    if (humanChoice === null) {
        alert("Action canceled");
        return null;
    }

    humanChoice = humanChoice.trim().toLowerCase(); // Safe to use now
    if (humanChoice == "rock") {
        return "rock"
    } else if (humanChoice == "paper") {
        return "paper"
    } else if (humanChoice == "scissors") {
        return "scissors"
    } else {
        alert("Invalid input")
        return getHumanChoice();
    }
}


//Choose randomly "rock", "paper" or "scissors"

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getComputerChoice() {
    const computerChoice = getRandomNumber(1, 3);
    if (computerChoice == 1) {
        return "rock"
    } else if (computerChoice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// <!-- Declare the players score variables -->
let humanScore = 0;
let computerScore = 0;

// playRound(HumanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock");
        } else {
            humanScore++;
            console.log("You win! Rock beats scissors");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper");
        } else {
            humanScore++;
            console.log("You win! Paper beats rock");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
        } else {
            humanScore++;
            console.log("You win! Scissors beats paper");
        }
    }
}

// last boss playGame()

function playGame() {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    if (computerScore > humanScore) {
        console.log("You lose the game!");
    }
    if (humanScore === computerScore) {
        console.log("It's a tie!");
    }
    console.log("Human: " + humanScore + " Computer: " + computerScore);
}

playGame();