const textElement = document.getElementById("text");
const words = textElement.innerText.split(" ");
textElement.innerHTML = words
  .map((word) => `<span class="word">${word}</span>`)
  .join(" ");

const wordElements = document.querySelectorAll(".word");
let currentWord = 0;

function highlightWord() {
  wordElements.forEach((word, index) => {
    word.classList.toggle("highlight", index === currentWord);
  });

  currentWord = (currentWord + 1) % wordElements.length;
}

setInterval(highlightWord, 500);
