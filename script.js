// creates constants and variables
let gridSize = 16;

const container = document.querySelector('.container');
const button = document.querySelector('.header button')


// creates grid of squares
function createGrid() {
    for(i=0; i< gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', () => changeSquareColor(square));

        container.appendChild(square);
    }
};

createGrid();
// button functionality

button.addEventListener('click', () => changeGridSize())

// functions for color, button
function changeSquareColor(square) {
    square.style.background = 'red'
}

function eraseSquares(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeGridSize() {
    gridSize = parseInt(prompt('Enter a number less than 100'));
    while ((gridSize > 100)) {
        gridSize = prompt(`${gridSize} is an invalid input.
        \n Enter a number less than 100`)
    }
    container.style.setProperty(
        'grid-template-columns',
        `repeat(${gridSize}, 2fr)`
    )
    container.style.setProperty(
        'grid-template-rows',
        `repeat(${gridSize}, 2fr)`
    )
    eraseSquares(container)
    createGrid()

}



