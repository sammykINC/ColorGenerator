function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return { red, green, blue };
}

function changeColors() {
  const boxes = document.querySelectorAll('.color-container');
  const colors = document.querySelectorAll('.color-text');

  boxes.forEach((box, index) => {
    const randomColor = getRandomColor();
    const { red, green, blue } = randomColor;
    const rgbText = `rgb(${red}, ${green}, ${blue})`;

    box.style.backgroundColor = rgbText;
    colors[index].textContent = rgbText;
  });
}

function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return { red, green, blue };
}

function changeColors() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const colorContainer = card.querySelector('.color-container');
    const colorText = card.querySelector('.color-text');
    const randomColor = getRandomRGBColor();
    const { red, green, blue } = randomColor;
    const rgbText = `RGB(${red}, ${green}, ${blue})`;

    colorContainer.style.backgroundColor = rgbText;
    colorText.textContent = rgbText;
  });
}

// Dark/Light Mode
document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('themeSwitch');
  const container = document.querySelector('.container');
  const body = document.body;
  const header = document.querySelector('.header');
  const colorTexts = document.querySelectorAll('.color-text');
  const cardContainers = document.querySelectorAll('.card');

  let isDarkTheme = false;

  themeSwitch.addEventListener('change', toggleTheme);

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      container.classList.add('light-theme');
      container.classList.remove('dark-theme');
      header.classList.add('dark-text');
      header.classList.remove('light-text');

      cardContainers.forEach((cardContainer) => {
        cardContainer.classList.add('light-theme');
        cardContainer.classList.remove('dark-theme');
      });

      colorTexts.forEach((colorText) => {
        colorText.classList.add('dark-text');
        colorText.classList.remove('light-text');
      });
    } else {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      container.classList.add('dark-theme');
      container.classList.remove('light-theme');
      header.classList.add('light-text');
      header.classList.remove('dark-text');
      
      cardContainers.forEach((cardContainer) => {
        cardContainer.classList.add('dark-theme');
        cardContainer.classList.remove('light-theme');
      });

      colorTexts.forEach((colorText) => {
        colorText.classList.add('light-text');
        colorText.classList.remove('dark-text');
      });
    }
  }
});

