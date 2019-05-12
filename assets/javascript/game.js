// ** I tried really hard at this one, but I simply can not figure out what I am missing. I can not get it to work. I have gotten help outside of class, JS tutoring, etc but I feel like I am missing some key item to make this code work. So I am submitting what I have.




// 1) We need variables for what whats displayed, and an array to hold the letters guessed

var wins = 0;
var losses = 0;
var guessesLeft = 10; 
var guessed = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
//Do I need to have this below variable to make it work?
var assigned;

// 2) we need to write it to the HTML
document.getElementById("wins") = "wins";
document.getElementById("losses") = "losses";
document.getElementById("guessed") = "guessed";

// 3) We need to make the browser assign a number to correspond with the index in the alphabet array
assigned = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(assigned);

// 4) the number above has to be assigned to an index in the alphabet array ... right??
function answer() {
    assigned = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(assigned);
}

// 5) this is the event that says something must happen when the user presses a key
document.onkeyup = function(event) {
  var playerInput = event.key;
};

// 6) when a player picks the wrong letter, subtract the guesses left by 1
answer();
if (playerInput !== assigned) {
    guessesLeft--;
}

// 7) when a player picks the wrong letter, add the keystroke to the guessed array
guessed.push(playerInput);
document.getElementById("playerInput") = guessed;
console.log(guessed);

// 8) when a player picks the right letter, add another number to the Wins, and reset the guesses left
answer();
if (playerInput == assigned) {
    guessesLeft = 10;
    wins++;
    guessed = [];
}

// 9) if the user keeps guessing wrong and the guesses left reaches zero, we need to add 1 to the losses variable, and reset the guesses left to 10
if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;    
}





*below is referencing code from activities to refer back to 

     // Let's start by grabbing a reference to the <span> below.
     // var userText = document.getElementById("user-text");

     // Next, we give JavaScript a function to execute when onkeyup event fires.
     // document.onkeyup = function(event) {
      // userText.textContent = event.key;