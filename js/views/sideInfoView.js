import * as User from "../models/modelUsers.js"

let resultSideInfo = ""

const sideInfo = document.getElementById("sideInfo")
const butonsSideInfo = document.getElementById("butonsSideInfo");

// let countDownDate = new Date().getTime() + (5 * 60 * 1000)
let countDownDate = new Date().getTime() + (0.1 * 60 * 1000)

resultSideInfo = `<div id="countdown"></div>`

let x = setInterval(function() {

    let now = new Date().getTime()
    let distance = countDownDate - now
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s "
    if (distance < 0) {
        clearInterval(x)
        document.getElementById("countdown").innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" id="restartBtn" data-bs-target="#exampleModal">RESTART</button>`
    }
}, 1000)

resultSideInfo += `<h3>Words unlocked</h3>`


if(User.getUserLogged().words[0] == undefined){
    resultSideInfo += `<div id="words"><p>a</p></div><div id="words"><p>a</p></div>`
}else if(User.getUserLogged().words[1] == undefined){
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>a</p></div>`
}else{
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>${User.getUserLogged().words[1]}</p></div>`
}

function showTotalChallenges(){
    let currentLevel = User.getUserLogged().levelLoad;
    if (currentLevel === 1){
        return 3
    }
    else if (currentLevel == 2){
        return 4
    }
    else if (currentLevel == 3){
        return 1
    }
}

function getFinishedChallenges(){
    let currentLevel = User.getUserLogged().levelLoad;
    let finishedChallenges = User.getUserLogged().finishedChallenges.length;
    if (currentLevel === 1){
        if (finishedChallenges > 3){
            return 3
        }
        else {
          return (finishedChallenges)  
        }
    }
    else if (currentLevel === 2){
        return (finishedChallenges - 3)
    }
    else if (currentLevel === 3){
        if (User.getUserLogged().finishedChallenges.includes("videoLevel3")){
            return 1
        }
        else {
          return (finishedChallenges - 7)  
        }
    }
}

resultSideInfo += `<h3>Challenges</h3><p id="challenges">${getFinishedChallenges()}/${showTotalChallenges()}</p>`

sideInfo.innerHTML = resultSideInfo