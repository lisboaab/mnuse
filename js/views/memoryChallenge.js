import {Game} from "../models/modelMemoryCard.js"
import * as User from "../models/modelUsers.js"
import * as Challenges from "../models/modelChallenges.js"

const game = new Game();
game.init();

let remainingTime = 300

function updateTimer() {
  if (remainingTime > 0) {
    const minutes  = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
    document.getElementById("countdown").textContent = `0${minutes}:${secondsDisplay}`
    remainingTime -= 1
  } else {
    clearInterval(timerInterval)
  }
}

const timerInterval = setInterval(updateTimer, 1000)

//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "level.html";
})


// BUTTON TO SAVE CHALLENGE
document.getElementById("btnSaveSideInfo").addEventListener("click", function(){
    if (game.cardsMatched === game.cards.length){
        let modal = document.getElementById("challengeSucessfullyCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        wastedTime = 300 - remainingTime
        wastedTimeMinutes = wastedTime/60
        clearInterval(timerInterval)
        User.getTime(wastedTime)
        if (!checkChallengeIs(challenge.challengeID)){
            saveFinishedChallenge()
        }
    }
    else if (checkChallengeIs(challenge.challengeID)){
        let modal = document.getElementById("challengeAlreadyCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }
    else {
        let modal = document.getElementById("challengeNotCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }
})

// SEE IF CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
function checkChallengeIs(id) {
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    return challengeList.includes(id);
}

let usersList = JSON.parse(localStorage.getItem("users"));
let user = User.getUserLogged();
let challengeList = user.finishedChallenges;

//  SAVE IN LOCAL STORAGE THE WORD OF THE FINISHED CHALLENGE
function saveFinishedChallenge(){
    challengeList.push(challenge.challengeID);
    const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked, user.timeChallenges, user.isFinished);
    const index = usersList.findIndex(u => u.username === user.username);
    usersList[index] = updatedUser;
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    localStorage.setItem("users", JSON.stringify(usersList));
}

// BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "memoryCard");
let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


// BUTTONS TO CLOSE MODALS
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
  