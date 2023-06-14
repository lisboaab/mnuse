import * as User from "./../models/modelUsers.js"
import * as Challenges from "./../models/modelChallenges.js"

const draggableElements = document.querySelectorAll(".draggable")
const droppableElements = document.querySelectorAll(".droppable")

draggableElements.forEach(element => {
  element.addEventListener("dragstart", dragStart)
  element.addEventListener("dragend", dragEnd)
});

droppableElements.forEach(element => {
  element.addEventListener("dragenter", dragEnter)
  element.addEventListener("dragover", dragOver)
  element.addEventListener("dragleave", dragLeave)
  element.addEventListener("drop", drop)
})

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id)
  draggedElement = event.target
}

function dragEnd(event){
  draggedElement = null
}

function dragEnter(event) {
  event.preventDefault()
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover")
  }
}

function dragOver(event) {
  event.preventDefault()
}

function dragLeave(event) {
  event.target.classList.remove("droppable-hover")
}

let correctAnswers = 0;
function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");

  if (event.target.classList.contains("dropped")) {
    return;
  }

  const droppableElement = event.target;
  const draggableElementData = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(draggableElementData);
  const correctId = droppableElement.getAttribute("data-draggable-id");

  if (draggableElementData === correctId) {
    droppableElement.appendChild(draggableElement);
    droppableElement.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    correctAnswers += 1;
  }
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
    }
  } else if (checkChallengeIs(challenge.challengeID)){
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

// SEE IF VIDEO CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
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