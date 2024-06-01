let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 3;

document.getElementById('submit').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const tries = document.getElementById('tries');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        if (guess === secretNumber) {
            result.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
            document.getElementById('submit').disabled = true;
            document.getElementById('guess').disabled = true;
            document.getElementById('reset').style.display = 'block';
        } else {
            guesses--;
            if (guesses === 0) {
                result.textContent = `Sorry, you've run out of guesses. The correct number was: ${secretNumber}`;
                document.getElementById('submit').disabled = true;
                document.getElementById('guess').disabled = true;
                document.getElementById('reset').style.display = 'block';
            } else {
                result.textContent = guess < secretNumber ? 'Too low. Try again.' : 'Too high. Try again.';
                tries.textContent = `Tries left: ${guesses}`;
            }
        }
    }
});

document.getElementById('reset').addEventListener('click', function() {
    guesses = 3;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('tries').textContent = 'Tries left: 3';
    document.getElementById('submit').disabled = false;
    document.getElementById('guess').disabled = false;
    document.getElementById('reset').style.display = 'none';
});
