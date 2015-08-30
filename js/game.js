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
