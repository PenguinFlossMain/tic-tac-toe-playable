let cells = document.querySelectorAll('.row > div');
let players = ['Joel', 'Leoj']  //PLAYERS IDENTIFIED
let XO = ['x', 'o']
let counter = 0
for (i = 0; i < cells.length; i++) { // this will be the main argument
    addEventListener('click', cellClicked) // maybe cell clicked (player?)
}

function cellClicked(event) { 
if (counter % 2 == 0) event.target.textContent = 'X';
else event.target.textContent='O'
counter++
}



// List of things that need to happen
// Players need to be identified |CHECK|
// Click needs to display an X or an O | |
// Players need to switch every click| |
// X and O need to alternate at the same rate the players switch | |
// there needs to be an identifier to see if someone has won | |
// When someone wins there needs to be an alert that stops the game | |
// There needs to be a way to reset the game | |
// ODDS AND EVENS BOOLIAN FUCK FUCK FUCK FUCK 