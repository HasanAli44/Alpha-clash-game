function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removedBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getRandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");
  // console.log(alphabets);
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  // console.log(index, alphabet);
  return alphabet;
}
