import * as User from "./models/modelUsers.js"
import * as Challenges from "./models/modelChallenges.js"

let finishedChalenge = false;

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
    let modal = document.getElementById("modalGameOver");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    document.getElementById("btnTryAgain").addEventListener("click", restartGame)
    clearInterval(timerInterval)
  }
}

const timerInterval = setInterval(updateTimer, 1000)

function game(){
const canvasDiv = document.getElementById("canvas")
const canvas = document.getElementById("game")
let context = canvas.getContext("2d")
let startX
let startY
let paint
let lines = []
let size = 'xl'

let points = {'xl': [[[242,323], [321,448], [314,313], [484,335], [355,252], [475,166], [333,186], [344,50], [260,169], [180,71], [183,204], [62,250], [204,296], [121,427]]]}
let stage = 0
let nbPoints = 14
let startingPoint = 0

function init() {
  drawPoints()

  canvas.onmousedown = function(e){
    let mouseX = e.pageX - this.offsetLeft
    let mouseY = e.pageY - this.offsetTop           
    paint      = true
    startX     = mouseX
    startY     = mouseY
  }

  canvas.onmousemove = function(e){
    if(paint){
      if (startingPoint === nbPoints - 1) {
        e.preventDefault()
        return false
      }

      let mouseX = e.pageX - this.offsetLeft
      let mouseY = e.pageY - this.offsetTop

      if (Math.abs(startX - points[size][stage][startingPoint][0]) > 10 || Math.abs(startY - points[size][stage][startingPoint][1]) > 10) {
        return false
      }

      if (Math.abs(startX - points[size][stage][startingPoint][0]) < 10 && Math.abs(startY - points[size][stage][startingPoint][1]) < 10 && Math.abs(mouseX - points[size][stage][startingPoint+1][0]) < 10 && Math.abs(mouseY - points[size][stage][startingPoint+1][1]) < 10) {
        startX = points[size][stage][startingPoint][0];
        startY = points[size][stage][startingPoint][1];
        mouseX = points[size][stage][startingPoint+1][0];
        mouseY = points[size][stage][startingPoint+1][1];
        lines.push({x1: startX,y1: startY, x2: mouseX, y2: mouseY})
        startingPoint++
        startX = points[size][stage][startingPoint][0]
        startY = points[size][stage][startingPoint][1]
      }

      drawLines(mouseX, mouseY);
      }
    };

    canvas.onmouseup = function(e){
      handleMouse(e)
    }
  
    canvas.onmouseleave = function(e){
      handleMouse(e)
    }
  }
  
  function handleMouse(event) {
    paint = false;
    if (startingPoint === nbPoints - 1) {
      event.preventDefault()
      endGame()
      return false
    }
  
    let mouseX = event.pageX - canvas.offsetLeft
    let mouseY = event.pageY - canvas.offsetTop
  
    if (Math.abs(startX - points[size][stage][startingPoint][0]) <= 10 && Math.abs(startY - points[size][stage][startingPoint][1]) <= 10 && Math.abs(mouseX - points[size][stage][startingPoint+1][0]) <= 10 && Math.abs(mouseY - points[size][stage][startingPoint+1][1]) <= 10) {
      startX = points[size][stage][startingPoint][0]
      startY = points[size][stage][startingPoint][1]
      mouseX = points[size][stage][startingPoint+1][0]
      mouseY = points[size][stage][startingPoint+1][1]
      lines.push({x1: startX, y1: startY, x2: mouseX, y2: mouseY})
      startingPoint++
      startX = points[size][stage][startingPoint][0]
      startY = points[size][stage][startingPoint][1]
    }
  
    drawLines()
  }
  
  function drawLines(toX, toY) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  
    for (let i = 0; i < lines.length; i++) {
      drawLine(lines[i])
    }
  
    drawLine({x1: startX, y1: startY, x2: toX, y2: toY})
  
    drawPoints()
  }
  
  function drawLine(line) {
    context.strokeStyle = "#18234d"
    context.lineJoin = "round"
    context.lineWidth = 8
  
    context.beginPath()
    context.moveTo(line.x1, line.y1)
    context.lineTo(line.x2, line.y2)
    context.stroke()
  }
  
  function drawPoints() {
    context.beginPath()
    context.moveTo(points[size][stage][3][0], points[size][stage][3][1])
    context.stroke()
  
    for (let i = 0; i < points[size][stage].length; i++) {
      let centerX = points[size][stage][i][0]
      let centerY = points[size][stage][i][1]
      let radius = 8

      if(i == 0){
        context.fillStyle = '#732AD9'
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        context.fill()
      }else{
        context.beginPath()
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        context.fillStyle = '#827397'
        context.fill()
      }
    }
  
    drawActivePoints()
  }
  
  function drawActivePoints() {
    for (let i = 0; i < points[size][stage].length; i++) {
      if (i <= startingPoint && startingPoint > 0) {
        let centerX = points[size][stage][i][0]
        let centerY = points[size][stage][i][1]
        context.beginPath()
        context.arc(centerX, centerY, 6, 0, 2 * Math.PI, false)
        context.fillStyle = '#18234d'
        context.strokeStyle = '#18234d'
        context.fill()
        context.stroke()
      }
    }
  }
  
  function endGame() {
    const finalImg = document.getElementById("finalImg")
    canvas.style.display = "none"
    finalImg.style.display = "inline"
    finishedChalenge = true;
    return true
  }
  
    init()


      // SHOW MODALS
      let usersList = JSON.parse(localStorage.getItem("users"));
      let user = User.getUserLogged();
      let challengeList = user.finishedChallenges;
      let wastedTime = 0


      document.getElementById("btnSaveSideInfo").addEventListener("click", function(){
        if (finishedChalenge === true){
          let modal = document.getElementById("challengeSucessfullyCompleted");
          modal.classList.add("show");
          modal.style.display = "block";
          document.body.classList.add("modal-open");
          wastedTime = 300 - remainingTime
          console.log(wastedTime)
          clearInterval(timerInterval)
          if(!checkChallengeIs(challenge.challengeID)){
            saveFinishedChallenge()
            User.getTime(parseInt(wastedTime))
          }
        }
        else {
          if(checkChallengeIs(challenge.challengeID)){
            let modal = document.getElementById("challengeAlreadyCompleted");
            modal.classList.add("show");
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            clearInterval(timerInterval)
          }
          else {
            let modal = document.getElementById("challengeNotCompleted");
            modal.classList.add("show");
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            clearInterval(timerInterval)
          }
          
        }
      })

      
        // SEE IF CHALLENGE IS IN ARRAY OF FINISHED CHALLENGES
        function checkChallengeIs(id) {
          let user = User.getUserLogged();
          let challengeList = user.finishedChallenges;
          return challengeList.includes(id);
        }

        // SAVE IN LOCAL STORAGE FINISHED CHALLENGE
        function saveFinishedChallenge(){
          challengeList.push(challenge.challengeID);
          const updatedUser = new User.Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, challengeList, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked, user.timeChallenges, user.isFinished);
          const index = usersList.findIndex(u => u.username === user.username);
          usersList[index] = updatedUser;
          sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser));
          localStorage.setItem("users", JSON.stringify(usersList));
          console.log(challengeList)
        }


  }
  
game()


//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "level.html";
})

//  BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "connectTheDots");
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

function restartGame() {
  window.location.reload();
}