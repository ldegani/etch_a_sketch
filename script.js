const container = document.querySelector('.grid-container');
const eraserButton = document.querySelector('.eraser');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');

const contents = [];
let eraser = false;
let rainbow = false;
let grids; // Declared as a global variable to be reachable
let defaultGrid = 16;

eraserButton.onclick = erase; // Calls the function only when clicking
sizeButton.onclick = takeSize;
rainbowButton.onclick = rainbowMode;
clearButton.onclick = clearDrawing;

function gridCreation(newSize) {
  cellSize = 100 / newSize;
  for (let i = 1; i <= newSize * newSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.flexBasis = `${cellSize}%`;
    container.appendChild(grid);
  }

  grids = document.querySelectorAll('.grid'); // Assign 'grids' globally
  paintSquare(); // Call the function to attach the event listener
}

function takeSize() {
  newSize = parseInt(prompt('Tell me how many squares you need:'));
  if (isNaN(newSize) || newSize <=0 || newSize > 100) {
    alert('Invalid entry! Try a number between 1 and 100');
    return;
  }
  clearGrid();
  gridCreation(newSize);
}

function paintSquare() {
  for (let i = 0; i <= grids.length - 1; i++) {
    grids[i].addEventListener('click', () => {
      if (rainbow) {
        grids[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      }
      if (eraser) {
        grids[i].classList.remove('selected');
        grids[i].style.backgroundColor = '';
      } else {
       grids[i].classList.add('selected');
      }
    })
  };
}

function rainbowMode() {
  rainbowButton.classList.toggle('active');
  rainbow = !rainbow;
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function clearGrid() {
  //container.innerHTML = '';
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function clearDrawing() {
  for (let i = 0; i <= grids.length; i++) {
    grids[i].classList.remove('selected');
    grids[i].style.backgroundColor = '';
  }
}

function erase(){
  eraserButton.classList.toggle('active');
  eraser = !eraser;
}

gridCreation(defaultGrid)