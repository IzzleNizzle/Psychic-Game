
var wins1 = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessRemaining = document.getElementById("guess-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var keyClicked;
var compChoice;
var wins = "0";
var lossCount = 0;
var guessesRemaining = 9;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var keyClickedHistory = [];


// Get game started
roundReset();


document.onkeyup = function game() {

    keyClicked = event.key;
    keyClickedHistory.push(event.key);
    guessed.push(" " + keyClicked);


    guessRemaining.textContent = guessesRemaining;
    wins1.textContent = wins;
    losses.textContent = lossCount;
    lettersGuessed.textContent = guessed;    

    for (i=0; i < keyClickedHistory.length; i++){
        if (keyClicked === keyClickedHistory[i]){
            break game;
        }

    }    
    


        if (keyClicked === compChoice) {
            wins++
            roundReset();
        }else {
            guessesRemaining--;
        }

        if (guessesRemaining === 0) {
            lossCount++;
            roundReset();
        }

        guessRemaining.textContent = guessesRemaining;
        wins1.textContent = wins;
        losses.textContent = lossCount;
        lettersGuessed.textContent = guessed;
  };


  function roundReset() {
    guessed = [];
    keyClickedHistory = [];
    compChoice = alpha[Math.floor((Math.random() * alpha.length))];
    guessesRemaining = 9;
    guessRemaining.textContent = guessesRemaining;
    wins1.textContent = wins;
    losses.textContent = lossCount;
    lettersGuessed.textContent = guessed;
  }




