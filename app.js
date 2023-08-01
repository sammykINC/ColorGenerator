// Generating random RGB colors
function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return { red, green, blue };
}

// Setting the generator color code to displayed text
function changeColors() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const colorContainer = card.querySelector('.color-container');
    const colorText = card.querySelector('.color-text');
    const randomColor = getRandomRGBColor();
    const { red, green, blue } = randomColor;
    const rgbText = `rgb(${red}, ${green}, ${blue})`;

    colorContainer.style.backgroundColor = rgbText;
    colorText.textContent = rgbText;
  });
}

// functions for ALL .card elements
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const colorContainer = card.querySelector('.color-container');
    const colorText = card.querySelector('.color-text');

    const clipboardIcon = colorContainer.querySelector('.clipboard-icon');
    const clickToCopyText = colorContainer.querySelector('.click-to-copy');
    clipboardIcon.style.display = 'none';
    clickToCopyText.style.display = 'none';

    colorContainer.addEventListener('mouseover', handleMouseOver);
    colorContainer.addEventListener('mouseout', handleMouseOut);
    colorContainer.addEventListener('click', handleClick);
    
    // hover effect - copy text 
    function handleMouseOver() {
      setTimeout(() => {
        const clipboardIcon = colorContainer.querySelector('.clipboard-icon');
        const clickToCopyText = colorContainer.querySelector('.click-to-copy');
        clipboardIcon.style.display = 'inline';
        clickToCopyText.style.display = 'inline';
      }, 50);
    }

    function handleMouseOut() {
      setTimeout(() => {
        const clipboardIcon = colorContainer.querySelector('.clipboard-icon');
        const clickToCopyText = colorContainer.querySelector('.click-to-copy');
        clipboardIcon.style.display = 'none';
        clickToCopyText.style.display = 'none';
      }, 50);
    }
    // to copy the RGB code
    function handleClick() {
      const rgbCode = colorText.textContent.trim();
      const textarea = document.createElement('textarea');
      textarea.value = rgbCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
        
      const notificationContainer = document.getElementById("notification-container");
      let notification = document.createElement("div");
      notification.classList.add("notification");
      notificationContainer.appendChild(notification);
    
      const defaultText = "rgb(0, 0, 0)";
      const validColor = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(rgbCode);
    
      if (rgbCode === defaultText || !validColor) {
        notification.classList.add("error_message");
        notification.innerHTML = 'Please generate a color first!';
      } else {
        notification.classList.add("success_message");
        notification.innerHTML = 'Code has been copied to the clipboard!';
      }
    
      setTimeout(() => {
        notification.remove();
      }, 5000);
    }    
  });
});

// Dark/Light Mode
document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('themeSwitch');
  const container = document.querySelector('.container');
  const body = document.body;
  const header = document.querySelector('.header');
  const colorTexts = document.querySelectorAll('.color-text');
  const cardContainers = document.querySelectorAll('.card');
  const error = document.querySelector('.error_message');
  const success = document.querySelector('.success_message');

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
      error.classList.add('light-text');
      error.classList.remove('dark-text');
      success.classList.add('dark-text');
      success.classList.remove('light-text');
      
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
      error.classList.add('dark-text');
      error.classList.remove('light-text');
      success.classList.add('light-text');
      success.classList.remove('dark-text');
      
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