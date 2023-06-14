const word1 = "caleb"
const word2 = "parents"
const word3 = "remember";
const wrongLetters = [];
const rightLetters = [];

document.addEventListener("keydown", (event) => {
  const code = event.keyCode; // 65 - 90 (intervalo)
  if (isLetra(code)) {
    const letter = event.key.toLowerCase();
    if (wrongLetters.includes(letter.toLowerCase())) {
        warningWrongLetter();
    } else {
      if (word1.includes(letter.toLowerCase()) || word2.includes(letter.toLowerCase()) || word3.includes(letter.toLowerCase())) {
        rightLetters.push(letter);
      } else {
        wrongLetters.push(letter);
      }
    }
    attGame();
  }
});

function attGame() {
  showWrongLetters();
  showRightLetters();
  drawHangman();
  validateGame();
}

function showWrongLetters() {
  const div = document.querySelector(".wrong-letters-container");
  div.innerHTML = ""
  wrongLetters.forEach((letter) => {
    div.innerHTML += `<p>${letter.toLowerCase()}`;
  });
}

function showRightLetters() {
  const fieldWord1 = document.querySelector("#fieldWord1");
  fieldWord1.innerHTML = "";
  word1.split("").forEach((letter) => {
    if (rightLetters.includes(letter)) {
        fieldWord1.innerHTML += `<span>${letter}</span>`;
    } else {
        fieldWord1.innerHTML += `<span>_</span>`;
    }
  });

  const fieldWord2 = document.querySelector("#fieldWord2");
  fieldWord2.innerHTML = "";
  word2.split("").forEach((letter) => {
    if (rightLetters.includes(letter)) {
        fieldWord2.innerHTML += `<span>${letter}</span>`;
    } else {
        fieldWord2.innerHTML += `<span>_</span>`;
    }
  });

  const fieldWord3 = document.querySelector("#fieldWord3");
  fieldWord3.innerHTML = "";
  word3.split("").forEach((letter) => {
    if (rightLetters.includes(letter)) {
        fieldWord3.innerHTML += `<span>${letter}</span>`;
    } else {
        fieldWord3.innerHTML += `<span>_</span>`;
    }
  });
}

function validateGame() {
    let message = "";
    const w1 = document.getElementById("fieldWord1");
    const w2 = document.getElementById("fieldWord2");
    const w3 = document.getElementById("fieldWord3");
    const partesCorpo = document.querySelectorAll(".hangman-part");

    if (wrongLetters.length === partesCorpo.length) {
        message = "Game over!";
    }

    if ((word1 === w1.textContent) && (word2 === w2.textContent) && (word3 === w3.textContent)){
        message = "Congratulations! You won!";
    }

    if (message) {
        document.querySelector("#message").innerHTML = message;
        document.querySelector(".popup-container").style.display = "flex";
    }
}

function drawHangman() {
  const partesCorpo = document.querySelectorAll(".hangman-part");
  for (let i = 0; i < wrongLetters.length; i++) {
        partesCorpo[i].style.display = "block";
  }
}

function warningWrongLetter() {
    const warning = document.querySelector(".warning-repeated-word");
    warning.classList.add("show");
    setTimeout(() => { warning.classList.remove("show"); }, 1000);
}

function isLetra(code) {
    return code >= 65 && code <= 90;
}

function restartGame() {
    window.location.reload();
}