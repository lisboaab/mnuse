import * as User from "./models/modelUsers.js"
import * as Challenges from "./models/modelChallenges.js"

const word1 = "caleb"
const word2 = "parents"
const word3 = "remember";
const wrongLetters = [];
const rightLetters = [];
let gameStarted = 0;

let remainingTime = 300

function updateTimer() {
  if (remainingTime > 0) {
    const countdownClock = document.getElementById("countdownClock")
    countdownClock.innerHTML = `<img src="../../assets/imgs/clock.png"><div id="countdown"></div>`
    const minutes  = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
    document.getElementById("countdown").innerHTML = `0${minutes}:${secondsDisplay}`
    remainingTime -= 1
  } else {
    clearInterval(timerInterval)
  }
}

const timerInterval = setInterval(updateTimer, 1000)

document.addEventListener("keydown", (event) => {
  const code = event.keyCode; // 65 - 90 (intervalo)
  if (isLetra(code)) {
    const letter = event.key.toLowerCase();
    if (!wrongLetters.includes(letter.toLowerCase())) {
      if (word1.includes(letter.toLowerCase()) || word2.includes(letter.toLowerCase()) || word3.includes(letter.toLowerCase())) {
        rightLetters.push(letter);
      } else {
        wrongLetters.push(letter);
      }
    }
    gameStarted += 1;
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

let usersList = JSON.parse(localStorage.getItem("users"));
let user = User.getUserLogged();
let challengeList = user.finishedChallenges;
let challengeIfFinished = false;

function validateGame() {
    const w1 = document.getElementById("fieldWord1");
    const w2 = document.getElementById("fieldWord2");
    const w3 = document.getElementById("fieldWord3");
    const partesCorpo = document.querySelectorAll(".hangman-part");

    if (wrongLetters.length === partesCorpo.length) {
      let modal = document.getElementById("modalGameOver");
      modal.classList.add("show");
      modal.style.display = "block";
      document.body.classList.add("modal-open");
      document.getElementById("btnTryAgain").addEventListener("click", restartGame)
    }

    if ((word1 === w1.textContent) && (word2 === w2.textContent) && (word3 === w3.textContent)){
      challengeIfFinished = true;
    }
}

// SEE IF CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
function checkChallengeIs(id) {
  let user = User.getUserLogged();
  let challengeList = user.finishedChallenges;
  return challengeList.includes(id);
}

function saveFinishedChallenge(){
  challengeList.push(challenge.challengeID);
  const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked, user.timeChallenges, user.isFinished);
  const index = usersList.findIndex(u => u.username === user.username);
  usersList[index] = updatedUser;
  sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
  localStorage.setItem("users", JSON.stringify(usersList));
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
    window.location.href = "level.html";
})


// BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "hangMan");
let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


// FUNCTION TO THE CLOSE BUTTON OF THE MESSAGE MODAL
let btnCloseModalGameOver = document.getElementById("btnCloseModalGameOver")
btnCloseModalGameOver.addEventListener("click", function(){
    let modal = document.getElementById("modalGameOver");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})


document.getElementById("btnCloseChallengeSucessfull").addEventListener("click", function(){
    let modal = document.getElementById("challengeSucessfullyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

document.getElementById("btnCloseChallengeCompleted").addEventListener("click", function(){
  let modal = document.getElementById("challengeAlreadyCompleted");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
})

document.getElementById("btnCloseChallengeNotCompleted").addEventListener("click", function(){
  let modal = document.getElementById("challengeNotCompleted");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
})

let wastedTime = 0

// BUTTON SAVE
document.getElementById("btnSaveSideInfo").addEventListener("click", function(){
  console.log(gameStarted)
  if (challengeIfFinished === true){
    let modal = document.getElementById("challengeSucessfullyCompleted");
      modal.classList.add("show");
      modal.style.display = "block";
      document.body.classList.add("modal-open");
      wastedTime = 300 - remainingTime
      clearInterval(timerInterval)
      if (!checkChallengeIs(challenge.challengeID)){
        saveFinishedChallenge()
        User.getTime(parseInt(wastedTime))
      }
  }
  else if (checkChallengeIs(challenge.challengeID)){
    let modal = document.getElementById("challengeAlreadyCompleted");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
  
  else if (!checkChallengeIs(challenge.challengeID) || gameStarted < 14){
    let modal = document.getElementById("challengeNotCompleted");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
  else {
    validateGame()
  }
})

console.log(challengeList)
console.log(gameStarted)