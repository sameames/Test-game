var playerScore;
var computerScore;

function showScore(){
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  showScore();
  gameScreenElement.style.display = 'initial';
  gameOverScreenElement.style.display = 'none';
  computerChoice = player2Picker();
}

function newMatch() {
  showScore();
  computerChoice = player2Picker();
}

function gameOver(winner){
  gameScreenElement.style.display = 'none';
  gameOverScreenElement.style.display = 'initial';
  gameWinnerElement.innerHTML = winner + " won";
}

function checkForWinner(){
  if (playerScore === 3){
    showScore();
    gameOver('Player');
  } else if (computerScore === 3){
    showScore('Computer');
    gameOver('Computer');
  } else {
    newMatch();
  }
}

function gameWon(winner){
  if (winner === 'player'){
    playerScore += 1;
    roundWinnerElement.innerHTML = "Player's Round";
    checkForWinner();
  }else if (winner === 'computer'){
    computerScore += 1;
    roundWinnerElement.innerHTML = "Computer's Round";
    checkForWinner();
  }else {
    roundWinnerElement.innerHTML = "Draw";
    checkForWinner();
  }
}
