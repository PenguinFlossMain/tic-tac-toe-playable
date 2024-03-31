const cells = document.querySelectorAll('.row > div');
let counter = 0
for (i = 0; i < cells.length; i++) { // this will be the main argument
    addEventListener('click', cellClicked) 
}
function cellClicked(event) {
    if (counter % 2 == 0) event.target.textContent = 'X';
    else if (counter % 2 !== 0) event.target.textContent = 'O';
    counter++;
    winnerCheck();
}
function winnerCheck() { 
if(cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') { alert('Player 1 Winner!'); location.reload()} 
if(cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
if(cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O') { alert('Player 2 Winner!'); location.reload()} 
else if(counter == 9){ alert('Draw!'); location.reload()} 

}

//winning combos: 012, 345, 678, 036, 147, 258, 048, 246 thats it!
// List of things that need to happen
// Players need to be identified |CHECK|
// Click needs to display an X or an O |CHECK|
// X and O need to alternate at the same rate the players switch |CHECK|
// there needs to be an identifier to see if someone has won |CHECK|
// When someone wins there needs to be an alert that stops the game |CHECK|
// There needs to be a way to reset the game |CHECK|
//I have absolutely no ide