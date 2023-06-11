import * as User from "../models/modelUsers.js"

let arrayLvl0 = []
let arrayLvl1 = []
let arrayLvl2 = []
let arrayLvl3 = []
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
    }
}

for (let user of users){
    if(user.avatar == "../assets/imgs/avatar1.png"){
        arrayAvatar1.push(user)
    }else if(user.avatar == "../assets/imgs/avatar2.jpg"){
        arrayAvatar2.push(user)
    }else if(user.avatar == "../assets/imgs/avatar3.jpg"){
        arrayAvatar3.push(user)
    }else if(user.avatar == "../assets/imgs/avatar4.jpg"){
        arrayAvatar4.push(user)
    }
}

let xValues = ["Level 0", "Level 1", "Level 2", "Level 3"]
let zValues = [arrayLvl0.length, arrayLvl1.length, arrayLvl2.length, arrayLvl3.length]
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

const avgTime = document.getElementById("avgTime")
const totalChallenges = document.getElementById("totalChallenges")