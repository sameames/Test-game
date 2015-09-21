var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var playAgianButton = document.getElementById("playAgian");
var playerScoreElement = document.getElementById("playerScore");
var computerScoreElement = document.getElementById("computerScore");
var gameWinnerElement = document.getElementById("gameWinner");
var roundWinnerElement = document.getElementById("roundWinner");
var gameScreenElement = document.getElementById("gameScreen");
var gameOverScreenElement = document.getElementById("gameOverScreen");

var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';
var computerChoice;

var player2Picker = function(){
  var number = Math.floor(Math.random() * 3) + 1;
    switch (number){
      case 1:
        return  rock;
        break;
      case 2:
        return paper;
        break;
      case 3:
        return scissors;
        break;
    }
};

function rPS(playerChoice){
  if (playerChoice === rock) {
    switch (computerChoice){
      case rock:
        gameWon('draw');
        break;
      case paper:
        gameWon('computer');
        break;
      case scissors:
        gameWon('player');
        break;
    }
  }else if (playerChoice === paper) {
      switch (computerChoice){
        case rock:
          gameWon('player');
          break;
        case paper:
          gameWon('draw');
          break;
        case scissors:
          gameWon('computer');
          break;
      }
  } else if (playerChoice === scissors) {
      switch (computerChoice){
        case rock:
          gameWon('computer');
          break;
        case paper:
          gameWon('player');
          break;
        case scissors:
          gameWon('draw');
          break;
      }
  }
}

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


rockButton.onclick = function (){
  rPS(rock);
}

var paperButton = document.getElementById("paper");
paperButton.onclick = function (){
  rPS(paper);
}

var scissorsButton = document.getElementById("scissors");
scissorsButton.onclick = function (){
  rPS(scissors);
}


playAgianButton.onclick = function (){
  newGame();
}

newGame();
