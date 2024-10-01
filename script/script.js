function handelKeyboardButton(event) {
  const currenAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currenAlphabetElement.innerText.toLowerCase();

  if (event.key === currentAlphabet) {
    removedBgById(currentAlphabet);
    continueGame("");
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
  } else {
    const currentLifeElement = document.getElementById("current-life");
    const currentLife = parseInt(currentLifeElement.innerText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handelKeyboardButton);
function continueGame() {
  const alphabet = getRandomAlphabet();
  const currenAlphabetElement = document.getElementById("current-alphabet");
  currenAlphabetElement.innerText = alphabet;
  setBgById(alphabet);
}

function play() {
  hideElementById("home");
  hideElementById("final-score");
  showElementById("play-ground");
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);
  continueGame("");
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  const score = getElementById("current-score");
  setElementValueById("game-score", score);

  const currenAlphabetElement = document.getElementById("current-alphabet");
  removedBgById(currenAlphabetElement.innerText);
}
