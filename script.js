const loginButton = document.getElementById('login-button');
const loginMessage = document.getElementById('login-message');
const gameArea = document.getElementById('game-area');
const metaverseImage = document.getElementById('metaverse-image');
const balanceDisplay = document.getElementById('balance');

// Load metaverse image (replace with your actual image)
const metaverseImg = new Image();
metaverseImg.src = "https://placehold.co/600x400/000/fff?text=Metaverse+Image";
metaverseImage.appendChild(metaverseImg);

loginButton.addEventListener('click', () => {
  loginMessage.textContent = 'Access Granted! Welcome to the Game!';
  balanceDisplay.textContent = '100'; // Example: Set initial balance

  // Add more game content here (e.g., game logic, rewards)
  // ...
});
