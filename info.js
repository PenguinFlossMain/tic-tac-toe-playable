let cells = document.querySelectorAll('.row > div');
console.log(cells)
// remember! arrays are positioned to start at 0, so you have positions 0-8 not 1-9

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked );
} 

function cellClicked() {
    console.log(event.target.textContent)
}
//if else statements are my friends 
//cells[2].textContent can look into cell number 2 and see what text is there
// === is equal to
//if(conditionOne && conditionTwo && conditionThree .. ect.)
//if (condition){}else if(){}else if(){} < things can be chained like this