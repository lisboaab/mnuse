import * as User from "./models/modelUsers.js"
import * as Challenges from "./models/modelChallenges.js"

const sound1 = new Audio()
sound1.src = "../assets/sounds/airplane.wav"

const sound2 = new Audio()
sound2.src = "../assets/sounds/car.wav"

const sound3 = new Audio()
sound3.src = "../assets/sounds/smash-bottle.wav"

const sound4 = new Audio()
sound4.src = "../assets/sounds/explosion.mp3"

const sound3Btn = document.getElementById("sound3")

sound3Btn.addEventListener("click", () => {
    clicked(sound3Btn)
})

sound3Btn.addEventListener("mousedown", () => {
    sound3.play()
})

const soundButtons = document.querySelectorAll("#sounds .radioBtn")
const imageButtons = document.querySelectorAll("#images .radioBtn")

soundButtons.forEach((soundButton) => {
    const sound = getSoundFromButtonName(soundButton.name)
    soundButton.addEventListener("click", () => {
      clicked(soundButton)
    })
  
    soundButton.addEventListener("mousedown", () => {
      if (sound) {
        sound.play()
      }
    })
})
  

imageButtons.forEach((imageButton) => {
    imageButton.addEventListener("click", () => {
      clicked(imageButton)
    })
})


let button1 = null
let button2 = null
let matched = 0

function clicked(button) {
    if (button.classList.contains("radioBtn-clicked")) {
      return
    }
  
    button.classList.add("radioBtn-clicked")
  
    if (button1 === null) {
      button1 = button
    } else if (button2 === null) {
      button2 = button
      checkMatch()
    }
}
  

function checkMatch() {
    if (button1.name === button2.name && button1.id !== button2.id) {
        button1.removeEventListener("click", clicked)
        button2.removeEventListener("click", clicked)
        button1 = null
        button2 = null
        matched += 1
        if(matched == 4){
          let modal = document.getElementById("challengeSucessfullyCompleted");
          modal.classList.add("show");
          modal.style.display = "block";
          document.body.classList.add("modal-open");
          if (!checkChallengeIs(challenge.challengeID)){
            saveFinishedChallenge()
          }
        }
    } else {
        button1.classList.remove("radioBtn-clicked")
        button2.classList.remove("radioBtn-clicked")
        button1 = null
        button2 = null
    }
}

function getSoundFromButtonName(name) {
    if (name == "one"){
        return sound1
    }else if (name == "two"){
        return sound2
    }else if (name == "three"){
        return sound3
    }else if (name == "four"){
        return sound4
    }
}


let usersList = JSON.parse(localStorage.getItem("users"));
let user = User.getUserLogged();
let challengeList = user.finishedChallenges;
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "radio");


// SEE IF CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
function checkChallengeIs(id) {
  let user = User.getUserLogged();
  let challengeList = user.finishedChallenges;
  return challengeList.includes(id);
}

//  SAVES IN THE ARRAY OF COMPLETED CHALLENGES THIS CHALLENGE ID
function saveFinishedChallenge(){
  challengeList.push(challenge.challengeID);
  const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked);
  const index = usersList.findIndex(u => u.username === user.username);
  usersList[index] = updatedUser;
  sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
  localStorage.setItem("users", JSON.stringify(usersList));
}
console.log(`lista de challenges: ${challengeList}`)

//  FUNCTIONS BTNS CLOSE MODALS
document.getElementById("btnCloseChallengeSucessfull").addEventListener("click", function(){
  let modal = document.getElementById("challengeSucessfullyCompleted");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
})


// TEXT IN THE HELP BUTTON
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challengeID = Challenges.challengesList.find(chall => chall.challengeID === "radio");
let line = `${challengeID.helpCard}`;
textsHelpBtn.innerHTML += line;


//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "level.html";
})

// BUTTON SAVE (IF CHALLENGE IS ALREADY COMPLETED SHOW MODAL)
document.getElementById("btnSaveSideInfo").addEventListener("click", function(){
  if (checkChallengeIs(challenge.challengeID)){
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


// FUNCTION THAT SHOWS A MODAL SAYING TO TURN ON THE AUDIO ON THE 1ST TIME THE PERSON CLICKS THE 1ST NUMBER BOX
let firstBoxClicked = 0;
document.getElementById("sound3").addEventListener("click",function(){
  if (firstBoxClicked === 0){
    let modal = document.getElementById("turnAudioOn");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    firstBoxClicked += 1;
  }

})
// BUTTON TO CLOSE THE MODAL ABOVE
document.getElementById("btnCloseAudioOn").addEventListener("click", function(){
  let modal = document.getElementById("turnAudioOn");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
})
