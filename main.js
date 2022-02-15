var secretNumber = 4;

var guess = prompt("Guess a Number");

if (Number(guess) === secretNumber) {
    alert("You've guessed right");
} else if (Number(guess) < secretNumber) {
    alert("Less than the right number. Refresh and guess again");
} else {
    alert("Greater than the right number. Refresh and guess again");
}
