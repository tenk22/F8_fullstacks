const textElement = document.getElementById("text");
const text = textElement.innerText;
let currentIndex = 0;

function highlightWord() {
  let wordStart = currentIndex;
  let wordEnd = text.indexOf(" ", wordStart);

  if (wordEnd === -1) {
    wordEnd = text.length;
  }

  const highlightedText =
    text.substring(0, wordStart) +
    `<span class="highlight">${text.substring(wordStart, wordEnd)}</span>` +
    text.substring(wordEnd);
  textElement.innerHTML = highlightedText;

  currentIndex = wordEnd + 1;
  if (currentIndex >= text.length) {
    currentIndex = 0;
  }
}

setInterval(highlightWord, 500);
