'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number ;D';

document.querySelector('.number').textContent = 11;
document.querySelector('score').textContent = 10;

document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
*/

// Generating the secret number
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;
let win = false;

document.querySelector('.check').addEventListener('click', function () {
  if (!win) {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 0 && score <= 1 && !(guess === secretNumber)) {
      document.querySelector('.message').textContent =
        '💥 You lost the game!! Try Again!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      score--;
      document.querySelector('.score').textContent = score;
    } //if there is no input
    else if (!guess && score > 0) {
      // when theres no input
      document.querySelector('.message').textContent = '⛔ No Number';
      score--;
      document.querySelector('.score').textContent = score;
      // when player wins
    } else if (guess === secretNumber && score > 0) {
      win = true;
      document.querySelector('.message').textContent =
        '🥳🎊🎉Correct Number!🎉🎊🥳';
      document.querySelector('.number').textContent = secretNumber;

      // this are inline style
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } // when the input is too high
    else if (guess > secretNumber && score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      // when the input is too low
    } else if (guess < secretNumber && score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  win = false;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
