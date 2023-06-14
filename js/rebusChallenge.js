import * as Rebus  from "./models/modelChallengeRebus.js"
import * as User from "./models/modelUsers.js"
import * as Challenges from "./models/modelChallenges.js"

const rebusChallenges = JSON.parse(localStorage.getItem("challengesRebus"))
console.log(rebusChallenges)

// CREATE 4 RANDOM NUMBERS FOR THE CHALLENGE
let randomIds = []
while (randomIds.length != 4){
    let randomId = Math.floor(Math.random() * rebusChallenges.length) + 1;
    if (randomIds.includes(randomId)){
        continue
    } else {
        randomIds.push(randomId);
    }
}

// console.log(randomIds);


// GET IN THE ARRAY OF ANSWERS THE 4 OBJECTS CHOSEN FROM THE RANDOM NUMBERS
let rebus1 = rebusChallenges.find((challenge) => challenge.id === randomIds[0]);
let rebus2 = rebusChallenges.find((challenge) => challenge.id === randomIds[1]);
let rebus3 = rebusChallenges.find((challenge) => challenge.id === randomIds[2]);
let rebus4 = rebusChallenges.find((challenge) => challenge.id === randomIds[3]);

let correctAnswers = [];
correctAnswers.push(rebus1.rightAnswer);
correctAnswers.push(rebus2.rightAnswer);
correctAnswers.push(rebus3.rightAnswer);
correctAnswers.push(rebus4.rightAnswer);

console.log(correctAnswers);


// PUT THE IMAGES OF EACH CHALLENGE IN THE HTML 
document.getElementById("rebusImg1").src = rebus1.imgUrl;
document.getElementById("rebusImg2").src = rebus2.imgUrl;
document.getElementById("rebusImg3").src = rebus3.imgUrl;
document.getElementById("rebusImg4").src = rebus4.imgUrl;



// SELECT THE INPUTS THAT WILL BE FILLED BY THE USER
let answer1 = document.getElementById("InputRebusAnswer1");
let answer2 = document.getElementById("InputRebusAnswer2");
let answer3 = document.getElementById("InputRebusAnswer3");
let answer4 = document.getElementById("InputRebusAnswer4");
let inputs = [answer1, answer2,answer3,answer4];


// SELECT THE DIVS WHERE THE "RIGHT" OR "WRONG" ICON WILL APPEAR
let check1 = document.getElementById("addCheck0");
let check2 = document.getElementById("addCheck1");
let check3 = document.getElementById("addCheck2");
let check4 = document.getElementById("addCheck3");
let checks = [check1,check2,check3,check4];


// ADD EVENT LISTENER TO EACH INPUT AREA
let sumAllRigthAnswers = 0;
answer1.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer1,0) === true){
            showCorrectOrWrong("correct", 0);
            sumAllRigthAnswers += 1;
        }
        else {
            showCorrectOrWrong("wrong", 0);
        }
    }
})

answer2.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer2,1) === true){
            showCorrectOrWrong("correct",1);
            sumAllRigthAnswers += 1;
        }
        else {
            showCorrectOrWrong("wrong", 1);
        }
    }
})

answer3.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer3,2) === true){
            showCorrectOrWrong("correct", 2);
            sumAllRigthAnswers += 1;
        }
        else {
            showCorrectOrWrong("wrong", 2);
        }
    }
})

answer4.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer4,3) === true){
            showCorrectOrWrong("correct", 3);
            sumAllRigthAnswers += 1;
        }
        else {
            showCorrectOrWrong("wrong", 3);
        }
    }
})

// FUNCTION TO CHECK THE ANSWERS OF THE USER
// idCard = input do challenge;   indexAnswer = index da answer no array  correctAnswers 
function checkAnswer(idCard, indexAnswer){
    if (idCard.value.toLowerCase() === correctAnswers[indexAnswer]){
        return true
    }
    else {
        return false
    }
}

// FUNCTION TO ADD THE ICON OF "RIGTH" OR "WRONG" AND COLORS BESIDES THE INPUT AREA
function showCorrectOrWrong(state, idInput){
    let obj = inputs[idInput];
    let div = checks[idInput];
    let divCheckCorrect = document.getElementsByClassName("correct");
    let divCheckWrong = document.getElementsByClassName("wrong");
    if (state === "correct"){
        if (divCheckWrong[idInput].style.opacity = "1" 
        || (divCheckWrong[idInput].style.display = "inline")){    // checks if the wrong answer check is showing
            divCheckWrong[idInput].style.opacity = "0";           // if it is, it hiddens the image
            divCheckWrong[idInput].style.display = "none";
        }
        obj.style.borderBottom = "solid #00bb00 2px";
        divCheckCorrect[idInput].style.opacity = "1";
        divCheckCorrect[idInput].style.display = "inline";
    }
    else{
        if (divCheckCorrect[idInput].style.opacity = "1" || (divCheckCorrect[idInput].style.display = "inline")){  // checks if the correct answer check is showing
            divCheckCorrect[idInput].style.opacity = "0";
            divCheckCorrect[idInput].style.display = "none" ;    // if it is, it hiddens the image
        }
        obj.style.borderBottom = "solid #ee3a00 2px";
        divCheckWrong[idInput].style.opacity = "1";
        divCheckWrong[idInput].style.display = "inline";
    }
}



    // BUTTONS ON THE SIDE VIEW PAGE
// FEED THE HELP BUTTONS ON THE CHALLENGE PAGE
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "rebus");

let line = `${challenge.helpCard} <br><br> <b>1.</b> ${rebus1.textHelpBtn} <br><br> <b>2.</b> ${rebus2.textHelpBtn} <br><br> <b>3.</b> ${rebus3.textHelpBtn} <br> <br><b>4.</b> ${rebus4.textHelpBtn} <br>`;
textsHelpBtn.innerHTML += line;

// BACK BUTTON
let btnBackSideInfo = document.getElementById("btnBackSideInfo");

btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    User.changeLevelLoad(1);
    window.location.href = "level.html";
})

// SEE IF CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
function checkChallengeIs(id) {
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    return challengeList.includes(id);
}
  
// VALIDATE ALL ANSWERS
let btnContinueSideInfo = document.getElementById("btnContinueSideInfo");
let usersList = JSON.parse(localStorage.getItem("users"));

btnContinueSideInfo.addEventListener("click", function(event) {
    event.preventDefault();
    let user = User.getUserLogged();
    let challengeList = user.finishedChallenges;
    if (sumAllRigthAnswers === 4) {
        if (!checkChallengeIs(challenge.challengeID)) {
        challengeList.push(challenge.challengeID);
        console.log(challenge.challengeID);
        console.log(challengeList);
        const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked);
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
});
  


// FUNCTIONS TO THE CLOSE BUTTON OF THE CREATED MODALS ABOVE
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

let btnCloseChallengeNotCompleted = document.getElementById("btnCloseChallengeNotCompleted")
btnCloseChallengeNotCompleted.addEventListener("click", function(){
    var modal = document.getElementById("challengeNotCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})
