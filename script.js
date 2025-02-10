// Wallet Section
const metarushBalance = document.getElementById("metarush-balance");
const metaverseBalance = document.getElementById("metaverse-balance");
const metarushInput = document.getElementById("metarush-input");
const convertButton = document.getElementById("convert-button");
const metaverseOutput = document.getElementById("metaverse-output");

// Initial balance (replace with actual values)
metarushBalance.textContent = "1000"; // Example initial balance
metaverseBalance.textContent = "5"; // Example initial balance

convertButton.addEventListener("click", () => {
  const metarushAmount = parseInt(metarushInput.value);
  // Implement the conversion logic here (e.g., 10 MetaRush Coins = 1 MetaVerse Token)
  const metaverseAmount = metarushAmount / 10;
  metaverseOutput.textContent = `${metaverseAmount} MetaVerse Tokens`;
});

// Games Section
const spinButton = document.getElementById("spin-button");
const wheelResult = document.getElementById("wheel-result");
const winAmount = document.getElementById("win-amount");

spinButton.addEventListener("click", () => {
  // Implement the spin wheel logic here (random number generation)
  const randomWin = Math.floor(Math.random() * 1451) + 150; // Random win between 150 and 1500 MetaRush Coins
  if (randomWin === 1500) {
    // Jackpot
    winAmount.textContent = "100 MetaVerse Tokens!";
  } else {
    winAmount.textContent = `${randomWin} MetaRush Coins`;
  }
});

// Coin Rain Game Logic
const rainButton = document.getElementById("rain-button");
const collectedCoins = document.getElementById("collected-coins");

rainButton.addEventListener("click", () => {
  // Implement the coin rain logic here
  //  - Generate random coin values 
  //  - Update collectedCoins.textContent with the total 
});

// Tasks Section
const questionsContainer = document.getElementById("questions");

// Example questions (replace with your actual questions)
const questions = [
  { question: "What is the metaverse?", answer: "A virtual world..." },
  { question: "How can I use the metaverse?", answer: "You can..." },
];

questions.forEach((question, index) => {
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `
    <p>${question.question}</p>
    <button id="answer-button-${index}">Show Answer</button>
    <span id="answer-${index}" style="display: none;">${question.answer}</span>
  `;
  questionsContainer.appendChild(questionElement);

  const answerButton = questionElement.querySelector(`#answer-button-${index}`);
  const answerSpan = questionElement.querySelector(`#answer-${index}`);

  answerButton.addEventListener("click", () => {
    answerSpan.style.display = "inline";
    answerButton.disabled = true;
  });
});

// --- Add game logic and UI interactions here ---
// Example: Simple "Guess the Number" game
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const guessResult = document.getElementById("guess-result");

let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let guessesLeft = 5; // Start with 5 guesses

guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  if (guess === secretNumber) {
    guessResult.textContent = "You guessed it! Congratulations!";
    // Add reward logic here, e.g., update user's MetaRush Coins balance
  } else if (guess < secretNumber) {
    guessResult.textContent = "Too low! Try again.";
  } else {
    guessResult.textContent = "Too high! Try again.";
  }

  guessesLeft--;

  if (guessesLeft === 0) {
    guessResult.textContent = `You're out of guesses! The number was ${secretNumber}.`;
    // Add game over logic here, e.g., reset the game or display a message
  }
});
