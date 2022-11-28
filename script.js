'use strict';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const background = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const getScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const hiddenNumber = function (hidNum) {
  document.querySelector('.number').textContent = hidNum;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When the input field is empty
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // When the guessed number is correct
  else if (guess === secretNumber) {
    background('#60b347');
    numberWidth('30rem');
    displayMessage('🎉 Correct Number!');
    hiddenNumber(secretNumber);

    // assigning the highest score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // when the guessed number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
      score--;
      getScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      getScore(0);
    }
  }
});

// Reset Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  getScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  hiddenNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  background('#222');
  numberWidth('15rem');
});
