// Number Guessing Game in JavaScript
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function playGame() {
  let userGuess = parseInt(prompt("Guess a number between 1 and 100: "));
  attempts++;
  if (userGuess === secretNumber) {
    alert(` Congratulations! You guessed the number in ${attempts} attempts.`);
  } else if (userGuess < secretNumber) {
    alert("Too low! Try again.");
    playGame();
  } else {
    alert("Too high! Try again.");
    playGame();
  }
}

playGame();