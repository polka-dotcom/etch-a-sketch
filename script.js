const container = document.querySelector('.container'); 
const gridBtn = document.getElementById('gridBtn');
const resetBtn = document.getElementById('resetBtn');
const colourBtn = document.getElementById('colourBtn');
let gridSize= 16;
const containerSize = 960;

function randRGB() { 
    const r = Math.floor(Math.random()* 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    return `rgb(${r}, ${g}, ${b})`; 
}

function createGrid(num) {
    container.innerHTML = ''; 
    const squareSize = containerSize / num; 

    for (let i=0; i< num * num; i++) {
        const square = document.createElement('div'); 
        square.classList.add('square'); 
        square.style.width = `${squareSize}px`; 
        square.style.height = `${squareSize}px`; 
        square.addEventListener("mouseenter", () => {
            if (colourBtn.classList.contains('active')) {
                if (!square.classList.contains('coloured')) {
                    square.style.backgroundColor = randRGB();
                    square.classList.add('coloured');
                }
            } else {
                square.style.backgroundColor = 'black';
            }
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

resetBtn.addEventListener('click', () => {
    createGrid(gridSize);
});

colourBtn.addEventListener('click', () => {
    colourBtn.classList.toggle('active'); 
});