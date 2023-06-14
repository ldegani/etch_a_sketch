const container = document.querySelector('.grid-container');
const eraserButton = document.querySelector('.eraser');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');

const contents = [];
let eraser = false;
let grids; // Declared as a global variable to be reachable
let size = 16; // Declared as a global variable to be reachable

eraserButton.onclick = erase; // Calls the function only when clicking
sizeButton.onclick = takeSize();
rainbowButton.onclick = rainbowMode;

function gridCreation(size) {
  cellSize = 100 / size;
  for (let i = 1; i <= size * size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.flexBasis = `${cellSize}%`;
    container.appendChild(grid);
  }

  grids = document.querySelectorAll('.grid'); // Assign 'grids' globally
  paintSquare(); // Call the function to attach the event listener
}

function takeSize() {
  sizeButton.addEventListener('click', () => {
    size = parseInt(prompt('Tell me how many squares you need:'));
    if (isNaN(size) || size <=0 || size > 100) {
      alert('Invalid entry! Try a number between 1 and 100');
      return;
    }
    clearGrid();
    gridCreation(size);
  });
}

function paintSquare() {
  for (let i = 0; i <= grids.length - 1; i++) {
    grids[i].addEventListener('click', () => {
      if (eraser) {
        grids[i].classList.remove('selected');
      } else {
       grids[i].classList.add('selected');
      }
    })
  };
}

function rainbowMode() {
  rainbowButton.classList.toggle('active');
}

function clearGrid() {
  //container.innerHTML = '';
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function erase(){
  eraserButton.classList.toggle('active');
  eraser = !eraser;
}

gridCreation(size)