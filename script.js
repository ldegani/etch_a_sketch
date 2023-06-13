const container = document.querySelector('.grid-container');

const contents = [];

for (let i = 0; i <= 255; i++) {
  contents[i] = `content${[i]}`;
}

for (let i = 0; i <= contents.length - 1; i++) {
  console.log(contents[i]);
  contents[i] = document.createElement('div');
  contents[i].classList.add('grid');
//  contents[i].setAttribute('id', 'c'+[i]);
  container.appendChild(contents[i]);
}

const grids = document.querySelectorAll('.grid');

for (let i = 0; i <= grids.length - 1; i++) {
  grids[i].addEventListener('click', (event) => {
    const item = event.target;
    item.classList.remove('grid');
    item.classList.add('grid-selected');
  })
};
