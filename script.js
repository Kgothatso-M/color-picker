const generateBtn = document.getElementById('generate');
const paletteDiv = document.getElementById('palette');

generateBtn.addEventListener('click', () => {
  paletteDiv.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.background = color;
    colorBox.innerHTML = `<span>${color}</span>`;
    paletteDiv.appendChild(colorBox);
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}