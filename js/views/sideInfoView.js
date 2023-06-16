import * as User from "../models/modelUsers.js"

let resultSideInfo = ""

const sideInfo = document.getElementById("sideInfo")
const butonsSideInfo = document.getElementById("butonsSideInfo");

resultSideInfo = `<div id="countdownClock"></div>`

resultSideInfo += `<div id="wordsContainer"><h3>Words unlocked</h3>`

if(User.getUserLogged().words[0] == undefined){
    resultSideInfo += `<div id="words"><p></p></div><div id="words"><p></p></div></div>`
}else if(User.getUserLogged().words[1] == undefined){
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>a</p></div></div>`
}else{
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>${User.getUserLogged().words[1]}</p></div></div>`
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

resultSideInfo += `<div id="challengesContainer"><h3>Challenges</h3><p id="challenges">${getFinishedChallenges()}/${showTotalChallenges()}</p></div>`

sideInfo.innerHTML = resultSideInfo