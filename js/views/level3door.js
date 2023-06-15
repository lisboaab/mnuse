import * as User from "../models/modelUsers.js"
import * as Challenges from "../models/modelChallenges.js"







//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "mapa.html";
})

let usersList = JSON.parse(localStorage.getItem("users"));
let user = User.getUserLogged();
let challengeList = user.finishedChallenges;

// BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "videoLevel3");
let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


//  BUTTON SAVE
function checkChallengeIs(id) {
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    return challengeList.includes(id);
}

let btnSaveSideInfo = document.getElementById("btnSaveSideInfo");
btnSaveSideInfo.addEventListener("click", function() {
    // Save in local storage the challenge completed
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    let usersList = JSON.parse(localStorage.getItem("users"));
    if (!checkChallengeIs(challenge.challengeID)) {
        challengeList.push(challenge.challengeID);
        const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked, user.timeChallenges, user.isFinished);
        const index = usersList.findIndex(u => u.username === user.username);
        usersList[index] = updatedUser;
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
        localStorage.setItem("users", JSON.stringify(usersList));
        console.log(challengeList)
        let modal = document.getElementById("challengeSucessfullyCompleted"); // modal saying the challenge is completed
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    } else if (checkChallengeIs(challenge.challengeID)){ // modal saying that the challenge was already completed before
        let modal = document.getElementById("challengeAlreadyCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }
})

let btnCloseChallengeCompleted = document.getElementById("btnCloseChallengeCompleted")
btnCloseChallengeCompleted.addEventListener("click", function(){
    var modal = document.getElementById("challengeAlreadyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeSucessfull = document.getElementById("btnCloseChallengeSucessfull")
btnCloseChallengeSucessfull.addEventListener("click", function(){
    var modal = document.getElementById("challengeSucessfullyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})
