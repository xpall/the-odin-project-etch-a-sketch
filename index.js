const actualCanvas = document.querySelector('#actualCanvas');

let numPixel = 12;
let calculatePixel = 700 / numPixel

for (i = 0; i < numPixel ** 2; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add((`gridPixel`));
  gridDiv.setAttribute('style', `height: ${calculatePixel}px; width: ${calculatePixel}px; display: flex; ; margin: 0, padding: 0; border: 0; justify-content: center; align-items: center`);
  gridDiv.setAttribute('id', `gridPixel${i}`)
  // gridDiv.textContent = 0;
  actualCanvas.appendChild(gridDiv);
};

const gridDiv = document.querySelectorAll('.gridPixel');
gridDiv.forEach(grid => {grid.addEventListener('mouseover', e => {
  // console.log(e);
  // console.log(e.target.id);
  changeColor(e);
})});

function changeColor(e) {
  let selectedDiv = document.querySelector(`#${e.target.id}`);
  selectedDiv.classList.add('selectedPixel')
};




