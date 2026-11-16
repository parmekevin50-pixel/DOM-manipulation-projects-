const form = document.querySelector("#guess-form");

const guessInput = document.querySelector("#guess");

const message = document.querySelector("#message");

const attemptsDisplay = document.querySelector("#attempts");

const restartButton = document.querySelector("#restart");

let randomNumber;
let attempts;

// Start game
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  attempts = 10;

  message.textContent = "Start guessing!";

  attemptsDisplay.textContent = "Attempts left: 10";

  guessInput.disabled = false;

  form.querySelector("button").disabled = false;

  guessInput.value = "";

  restartButton.style.display = "none";
}

// Check guess
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100 || !Number.isInteger(userGuess)) {
    message.textContent = "Enter a number between 1 and 100";
    return;
  }

  attempts--;

  if (userGuess === randomNumber) {
    message.textContent = "Congratulations! Correct Number 🎉";

    endGame();
  } else if (attempts === 0) {
    message.textContent = "Game Over! The number was " + randomNumber;

    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Too Low! Try a higher number.";
  } else {
    message.textContent = "Too High! Try a lower number.";
  }

  attemptsDisplay.textContent = "Attempts left: " + attempts;

  guessInput.value = "";
});

// End game
function endGame() {
  guessInput.disabled = true;

  form.querySelector("button").disabled = true;

  restartButton.style.display = "inline-block";
}

// Restart game
restartButton.addEventListener("click", startGame);

// Initialize game
startGame();
