const actualCanvas = document.querySelector('#actualCanvas');
const formResolution = document.querySelector('.formResolution');
const inputResolution = document.querySelector('#inputResolution');
const submitResolution = document.querySelector('#submitResolution');
const colorButtons = document.querySelectorAll('#toolsSide button')

let currentColor = 'darkGreyPixel';

colorButtons.forEach(button => {button.addEventListener('click', e => {
  currentColor = e.target.id;
  console.log(e.target.id)
})}
);

formResolution.addEventListener('submit', function(event) {
  event.preventDefault();
  const numPixel = document.querySelector('#inputResolution').value;
  (numPixel > 100) ? alert('Warning!\nHaving a very high resolution could slow down your system.\nPlease enter a number not higher than 100.')
  : generateGrids(numPixel);
}, {once: true}
);

function generateGrids(numPixel) {
  for (i = 0; i < numPixel ** 2; i++) {
    let calculatePixel = (700 - 1) / numPixel
    const gridDiv = document.createElement('div');
    gridDiv.classList.add((`gridPixel`));
    gridDiv.textContent = 'o'
    gridDiv.setAttribute('style', `height: ${calculatePixel}px; width: ${calculatePixel}px; display: flex; ; margin: 0, padding: 0; border: 0; justify-content: center; align-items: center`);
    gridDiv.setAttribute('id', `gridPixel${i}`)
    actualCanvas.appendChild(gridDiv);
  }
  formatGridsOnHover();
};

function formatGridsOnHover() {
  const gridDiv = document.querySelectorAll('.gridPixel');
  gridDiv.forEach(grid => {grid.addEventListener('mousemove', e => {
    changeGridColor(e);
  })})
};

function changeGridColor(e) {
  let selectedDiv = document.querySelector(`#${e.target.id}`);
  selectedDiv.classList.add(`${currentColor}`)
};


