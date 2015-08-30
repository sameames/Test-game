
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
