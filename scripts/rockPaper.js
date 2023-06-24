// Game Logic:
// 1 represents rock
// 2 represents paper
// 3 represents scissors

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Function to update the score
function updateScore(result) {
  if (result === 'You win') {
    score.wins++;
  } else if (result === 'You lose') {
    score.losses++;
  } else {
    score.ties++;
  }

  // Display the updated score on the page
  document.querySelector('.score-track').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function to determine the computer's move
function computerMoveValue() {
  // Generate a random number between 1 and 3
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    return 'rock';
  } else if (randNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function retrieveMove(move){
  let move1 , move2 ,move3 ;
  if (move === 'rock') {
      move1 = '&#9994' ;
      return move1 ;
    
  } else if ( move === 'paper') {
      move2 = '&#9995' ;   
      return move2 ; 
  }
  else{
      move3 = '&#9996' ;
      return move3 ;
  }
 
}

// Function to determine the game result
function result(userMove) {
  let computerMove = computerMoveValue();
  let gameResult = '';
  let ourmove = (retrieveMove(userMove)) ;
  let opponentMove = (retrieveMove(computerMove));

  
  if (
    (computerMove === 'rock' && userMove === 'paper') ||
    (computerMove === 'paper' && userMove === 'scissors') ||
    (computerMove === 'scissors' && userMove === 'rock')
  ) {
    gameResult = 'You win';
    updateScore(gameResult);
    
    document.querySelector('.user-comp-move')
    .innerHTML = `YOU WIN <br>        You ${ourmove}    || ${opponentMove} Computer` ;

    document.querySelector('.result-animation').innerHTML = '<img src="dancing-emoji.gif" alt="You won GIF" class="gif">';

        

  } else if (
    (computerMove === 'rock' && userMove === 'scissors') ||
    (computerMove === 'paper' && userMove === 'rock') ||
    (computerMove === 'scissors' && userMove === 'paper')
  ) {
    gameResult = 'You lose';
    updateScore(gameResult);
    document.querySelector('.user-comp-move')
    .innerHTML = `YOU LOOSE <br>      You ${ourmove}    || ${opponentMove} Computer` ;

    document.querySelector('.result-animation').innerHTML = '<img src="sad-unscreen.gif" alt="You loose GIF" class="gif">';

    
  } else {
    gameResult = 'Match tied';
    updateScore(gameResult);
    document.querySelector('.user-comp-move')
    .innerHTML = `MATCH TIED <br>      You ${ourmove}   || ${opponentMove} Computer` ;

    document.querySelector('.result-animation').innerHTML = '<video src="TieEmoji.mp4" class="video" autoplay muted loop></video>';

    
  }

  // Remove the GIF after 3 seconds
  setTimeout(() => {
    document.querySelector('.result-animation').innerHTML = '';
  }, 3000);

  // Store the updated score in localStorage
  localStorage.setItem('score', JSON.stringify(score));
}

// Function to reset the game
function resetValue() {
  // Remove the score data from localStorage
  localStorage.removeItem('score');
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  
  // Update the displayed score to zero
  document.querySelector('.score-track').innerHTML = 'Wins: 0, Losses: 0, Ties: 0';
}

// Event Listeners:
// Rock button click event
document.getElementById('rock').onclick = function () {
  result('rock');
};

// Paper button click event
document.getElementById('paper').onclick = function () {
  result('paper');

};

// Scissors button click event
document.getElementById('scissors').onclick = function () {
  result('scissors');
};

//
