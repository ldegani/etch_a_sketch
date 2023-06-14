const container = document.querySelector('.grid-container');
const eraserButton = document.querySelector('.eraser');

const contents = [];
let eraser = false;
let grids; // Declared as a global variable to be reachable

function gridCreation() {
  for (let i = 0; i <= 255; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }

  grids = document.querySelectorAll('.grid'); // Assign 'grids' globally
  paintSquare(); // Call the function to attach the event listener
  erase(); // Call the function to initialize it
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

function erase(){
  eraserButton.addEventListener('click', () => {
    eraserButton.classList.toggle('eraser-active');
    if (eraser) {
      eraser = false;
    } else {
      eraser = true;
    }
  })
}

gridCreation()