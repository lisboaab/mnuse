import * as User from "../models/modelUsers.js"
import * as Challenges from "../models/modelChallenges.js"

// BACK BUTTON
let btnBackSideInfo = document.getElementById("btnBackSideInfo");

btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    User.changeCurrentLevel(1);
    window.location.href = "level.html";
})


// HELP BUTTON
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "videoBullying");

let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


// FUNCTION TO SEE IF THE USER SAW THE VIDEO
// let video = document.getElementById("video");
// let btnContinueSideInfo = document.getElementById("btnContinueSideInfo");
// btnContinueSideInfo.addEventListener("click", function() {
//     if (video.currentTime < 30) {
//         let modal = document.getElementById("challengeNotCompleted"); // modal saying the challenge is incomplete
//         modal.classList.add("show");
//         modal.style.display = "block";
//         document.body.classList.add("modal-open");
//     }
// });



// // FUNCTION TO CLOSE MODAL OF CHALLENGE NOT COMPLETE
// let btnCloseChallengeNotCompleted = document.getElementById("btnCloseChallengeNotCompleted")
// btnCloseChallengeNotCompleted.addEventListener("click", function(){
//     var modal = document.getElementById("challengeNotCompleted");
//     modal.classList.remove("show");
//     modal.style.display = "none";
//     document.body.classList.remove("modal-open");
// })

function checkChallengeIs(id) {
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    return challengeList.includes(id);
}

let btnContinueSideInfo = document.getElementById("btnContinueSideInfo");
btnContinueSideInfo.addEventListener("click", function() {
    // Save in local storage the challenge completed
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    let usersList = JSON.parse(localStorage.getItem("users"));
    if (!checkChallengeIs(challenge.challengeID)) {
        challengeList.push(challenge.challengeID);
        const updatedUser = new User.Users(user.username,user.email,user.password,user.avatar,user.currentLevel,user.levelLoad,challengeList,user.badges,user.words,user.code);
        const index = usersList.findIndex(u => u.username === user.username);
        usersList[index] = updatedUser;
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
        localStorage.setItem("users", JSON.stringify(usersList));
    
        let modal = document.getElementById("challengeSucessfullyCompleted"); // modal saying the challenge is completed
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    } else if (checkChallengeIs(challenge.challengeID)){ // modal saying that the challenge 
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