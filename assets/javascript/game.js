// Create a variable to grab the element ID(s) which will display user key input
var userText = document.getElementById("user-text");

// this is the event that says something must happen when the user presses a key
document.onkeyup = function(event) {
  userText.textContent = event.key;
};