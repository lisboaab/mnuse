import * as User from "../models/modelUsers.js"
import * as Challenges from "../models/modelChallenges.js"

let arrayLvl0 = []
let arrayLvl1 = []
let arrayLvl2 = []
let arrayLvl3 = []
let arrayLvl4 = []
let arrayAvatar1 = []
let arrayAvatar2 = []
let arrayAvatar3 = []
let arrayAvatar4 = []


let users = User.exportUsers() 
for (let user of users){
    if(user.currentLevel == 0){
        arrayLvl0.push(user)
    }else if(user.currentLevel == 1){
        arrayLvl1.push(user)
    }else if(user.currentLevel == 2){
        arrayLvl2.push(user)
    }else if(user.currentLevel == 3){
        arrayLvl3.push(user)
    }else if(user.currentLevel == 4){
        arrayLvl4.push(user)
    }
}

for (let user of users){
    if(user.avatar == "../assets/imgs/avatar1.png"){
        arrayAvatar1.push(user)
    }else if(user.avatar == "../assets/imgs/avatar2.png"){
        arrayAvatar2.push(user)
    }else if(user.avatar == "../assets/imgs/avatar3.png"){
        arrayAvatar3.push(user)
    }else if(user.avatar == "../assets/imgs/avatar4.png"){
        arrayAvatar4.push(user)
    }
}

let xValues = ["Level 0", "Level 1", "Level 2", "Level 3", "Level 4"]
let zValues = [arrayLvl0.length, arrayLvl1.length, arrayLvl2.length, arrayLvl3.length, arrayLvl4.length]
let yValues = [arrayAvatar1.length, arrayAvatar2.length, arrayAvatar3.length, arrayAvatar4.length]
let aValues = ["Avatar 1", "Avatar 2", "Avatar 3", "Avatar 4"]

let barColors = ["#eeeaf5", "#827397", "#4d4c7d", "#732AD9"]

new Chart("levelsChart", {
    type: "doughnut",
    data: {
        labels: aValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options:{
        title: {
            display: true,
            text: "Users avatars",
            font: {
                color: "#EEEAF5"
            }
        }
    }
})

new Chart("levelsChart2", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Users",
            borderColor: "#eeeaf5",
            data: zValues,
            fill: false
        }]
    },
    options:{
        title: {
            display: true,
            text: "Levels and Users"
        }
    }
})

const totalUsers = document.getElementById("totalUsers")
totalUsers.innerHTML = users.length

const totalChallenges = document.getElementById("totalChallenges")
totalChallenges.innerHTML = Challenges.challengesList.length

const avgTime = document.getElementById("avgTime")
const timesUsers = User.exportTimesUsers()
const totalTimesUsers = timesUsers.reduce((sum, time) => sum+time, 0)
const avg = totalTimesUsers / (timesUsers.length)
const minutes = Math.floor(avg / 60)
const seconds = avg % 60
const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
avgTime.innerHTML += `${minutes}m${secondsDisplay}s`
console.log(avg)