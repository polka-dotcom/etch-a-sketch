const container = document.querySelector('.container'); 
const gridBtn = document.getElementById('gridBtn');
let gridSize= 16;
const containerSize = 960;

function createGrid(num) {
    container.innerHTML = ''; 
    const squareSize = containerSize / num; 

    for (let i=0; i< num * num; i++) {
        const square = document.createElement('div'); 
        square.classList.add('square'); 
        square.style.width = `${squareSize}px`; 
        square.style.height = `${squareSize}px`; 
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'black';
        }); 
    
        container.appendChild(square);
    }
}

createGrid(gridSize); 

gridBtn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Enter number of rows/columns: '));
    while (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt('Enter a number between 1 and 100: '));
    }
    createGrid(gridSize);
});