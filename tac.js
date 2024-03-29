let cells = document.querySelectorAll('.row > div');
let players = ['Joel', 'Leoj']  //PLAYERS IDENTIFIED


for (i = 0; i < cells.length; i++) { // this will be the main argument
    addEventListener('click', cellClicked ) // maybe cell clicked (player?)
}

function cellClicked () { 
    for (o = 0; 0 < players.length; o++) {

    }
    event.target.textContent = players.length
}
// List of things that need to happen
// Players need to be identified |CHECK|
// Click needs to display an X or an O | |
// Players need to switch every click| |
// X and O need to alternate at the same rate the players switch | |
// there needs to be an identifier to see if someone has won | |
// When someone wins there needs to be an alert that stops the game | |
// There needs to be a way to reset the game | |
