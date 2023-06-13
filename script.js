const container = document.querySelector('.grid-container');
const eraserButton = document.querySelector('.eraser');

const contents = [];
let eraser = false;

for (let i = 0; i <= 255; i++) {
  contents[i] = `content${[i]}`;
}

for (let i = 0; i <= contents.length - 1; i++) {
  console.log(contents[i]);
  contents[i] = document.createElement('div');
  contents[i].classList.add('grid');
  container.appendChild(contents[i]);
}

const grids = document.querySelectorAll('.grid');

for (let i = 0; i <= grids.length - 1; i++) {
  grids[i].addEventListener('click', () => {
    if (eraser) {
      grids[i].classList.remove('selected');
    } else {
      grids[i].classList.add('selected');
    }
  })
};

eraserButton.addEventListener('click', () => {
  eraserButton.classList.toggle('eraser-active');
  if (eraser) {
    eraser = false;
    console.log(eraser);
  } else {
    eraser = true;
    console.log(eraser);
  }
})