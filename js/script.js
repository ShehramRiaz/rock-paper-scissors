let userScore = 0;
let computerScore = 0;

const choiceBtns = document.querySelectorAll(".choice__btn");

choiceBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.dataset.choice.trim().toLowerCase();
        startGame(userChoice);
    });
});

function startGame(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        drawGame(computerChoice);
        return;
    } else {
        let isUserWins = true;

        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                isUserWins = false;
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                isUserWins = false;
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                isUserWins = false;
            }
        }
        showWinner(isUserWins, userChoice, computerChoice);
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // 0 -2

    return choices[randomIndex];
}

function drawGame(choice) {
    updateMessage("It's a draw! Try Again");
    updateChoices(choice, choice);
}

function updateMessage(msg) {
    const message = document.getElementById("message");

    message.textContent = msg.trim();
}

function updateChoices(userChoice, computerChoice) {
    const userChoiceEl = document.getElementById("userChoice");
    const computerChoiceEl = document.getElementById("computerChoice");

    userChoiceEl.textContent = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
    computerChoiceEl.textContent = computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase();
}

function showWinner(isUserWinner, userChoice, computerChoice) {
    if (isUserWinner) {
        userScore++;
        updateMessage("You Win!");
    } else {
        computerScore++;
        updateMessage("OOPS! You Lose this round");
    }

    updateChoices(userChoice, computerChoice);
    updateScore();
}

function updateScore() {
    const userScoreEl = document.getElementById("userScore");
    const computerScoreEl = document.getElementById("computerScore");

    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
}