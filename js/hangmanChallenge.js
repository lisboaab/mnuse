import * as User from "./../models/modelUsers.js"
import * as Challenges from "./../models/modelChallenges.js"

const word1 = "caleb"
const word2 = "parents"
const word3 = "remember";
const wrongLetters = [];
const rightLetters = [];

document.addEventListener("keydown", (event) => {
  const code = event.keyCode; // 65 - 90 (intervalo)
  if (isLetra(code)) {
    const letter = event.key.toLowerCase();
      if (word1.includes(letter.toLowerCase()) || word2.includes(letter.toLowerCase()) || word3.includes(letter.toLowerCase())) {
        rightLetters.push(letter);
      } else {
        wrongLetters.push(letter);
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

function isLetra(code) {
    return code >= 65 && code <= 90;
}

function restartGame() {
    window.location.reload();
}


//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    User.changeLevelLoad(1);
    window.location.href = "level.html";
})


// BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "dragAndDrop");
let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


// BUTTON CONTINUE
let btnContinueSideInfo = document.getElementById("btnContinueSideInfo");
let usersList = JSON.parse(localStorage.getItem("users"));
let user = User.getUserLogged();
let challengeList = user.finishedChallenges;

btnContinueSideInfo.addEventListener("click", function(event) {
  event.preventDefault();

  if (correctAnswers === 3) {
    if (!checkChallengeIs(challenge.challengeID)) {
      challengeList.push(challenge.challengeID);
      console.log(challenge.challengeID);
      console.log(challengeList);
      const updatedUser = new User.Users(user.username,user.email,user.password,user.avatar,user.currentLevel,user.levelLoad,challengeList,user.badges,user.words,user.code);
      const index = usersList.findIndex(u => u.username === user.username);
      usersList[index] = updatedUser;
      sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
      localStorage.setItem("users", JSON.stringify(usersList));

      let modal = document.getElementById("challengeSucessfullyCompleted");
      modal.classList.add("show");
      modal.style.display = "block";
      document.body.classList.add("modal-open");
    } else {
      let modal = document.getElementById("challengeAlreadyCompleted");
      modal.classList.add("show");
      modal.style.display = "block";
      document.body.classList.add("modal-open");
      console.log(challenge.challengeID);
      console.log(challengeList);
    }
  } else if (checkChallengeIs(challenge.challengeID)){
  let modal = document.getElementById("challengeAlreadyCompleted");
  modal.classList.add("show");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
  console.log(challenge.challengeID);
  console.log(challengeList);
  }
  else {
  let modal = document.getElementById("challengeNotCompleted");
  modal.classList.add("show");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
  console.log(challenge.challengeID);
  console.log(challengeList);
  }
})

// SEE IF VIVEO CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
function checkChallengeIs(id) {
  let user = User.getUserLogged();
  let challengeList = user.finishedChallenges;
  return challengeList.includes(id);
}


// FUNCTIONS TO THE CLOSE BUTTON OF THE CREATED MODALS ABOVE
let btnCloseChallengeCompleted = document.getElementById("btnCloseChallengeCompleted")
btnCloseChallengeCompleted.addEventListener("click", function(){
    let modal = document.getElementById("challengeAlreadyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeSucessfull = document.getElementById("btnCloseChallengeSucessfull")
btnCloseChallengeSucessfull.addEventListener("click", function(){
    let modal = document.getElementById("challengeSucessfullyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeNotCompleted = document.getElementById("btnCloseChallengeNotCompleted")
btnCloseChallengeNotCompleted.addEventListener("click", function(){
    let modal = document.getElementById("challengeNotCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})