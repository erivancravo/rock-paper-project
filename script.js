function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * options.length);
  let choice = options[index];
  return choice;
}

function getPlayerChoice() {
  let playerSelection = prompt('Rock-Paper-Scissors\nWhat\'s your choice? ');
  let l = playerSelection.toLowerCase();
  return l;
}

function gamePlayer(computerSelection, playerSelection) {
  if(computerSelection === playerSelection) {
    let result = 'Both of us chose ' + computerSelection + ', that\'s a draw';
    return result;
  } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
    let result = computerSelection + ' beats ' + playerSelection + ', you lose!!!';
    return result;
  } else if(computerSelection === 'rock' && playerSelection === 'paper') {
    let result = playerSelection + ' beats ' + computerSelection + ', you win!!!';
    return result;
  } else if(computerSelection === 'paper' && playerSelection === 'rock'){
    let result = computerSelection + ' beats ' + playerSelection + ', you lose!!!';
    return result;
  } else if(computerSelection === 'Paper' && playerSelection === 'scissors') {
    let result = playerSelection + ' beats ' + computerSelection + ', you win!!!';
    return result;
  } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
    let result = computerSelection + ' beats ' + playerSelection + ', you lose!!!';
    return result;
  } else if(computerSelection === 'scissors' && playerSelection === 'rock') {
    let result = playerSelection + ' beats ' + computerSelection + ', you win!!!';
    return result;
  }
}
let a = getComputerChoice();
let b = getPlayerChoice();
console.log(gamePlayer(a, b));