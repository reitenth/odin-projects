const playerDisplay = document.querySelector('.player-choice');
const computerDisplay = document.querySelector('.computer-choice');
const resultDisplay = document.querySelector('.result-display');
const resultRow = document.querySelector('.result-row');
const choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

// Get computer choice

function getComputerChoice() {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// Play round

function playRound(humanSelection) {
  const computerSelection = getComputerChoice();

  if (humanSelection === computerSelection) {
    resultRow.textContent = `${humanSelection + ' draws ' + computerSelection}`;
    resultDisplay.textContent = "It's a tie!";
  } else if (
    (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
    (humanSelection === 'Paper' && computerSelection === 'Rock') ||
    (humanSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    humanScore++;
    playerDisplay.textContent = `USER: ${humanScore}`;
    resultRow.textContent = `${humanSelection + ' beats ' + computerSelection}`;
    resultDisplay.textContent = 'You win!';
  } else {
    computerScore++;
    computerDisplay.textContent = `COMP: ${computerScore}`;
    resultRow.textContent = `${computerSelection + ' beats ' + humanSelection}`;
    resultDisplay.textContent = 'You lose!';
  }
  if (humanScore === 5 || computerScore === 5)
    resultDisplay.textContent = 'Game Over!';

  changeColor(resultDisplay);
}

// Change color of result

function changeColor(element) {
  if (element.textContent === "It's a tie!") {
    element.style.backgroundColor = '#5E81AC';
  } else if (element.textContent === 'You win!') {
    element.style.backgroundColor = '#A3BE8C';
  } else if (element.textContent === 'You lose!') {
    element.style.backgroundColor = '#BF616A';
  } else {
    element.style.backgroundColor = '#2e3440';
  }
}
