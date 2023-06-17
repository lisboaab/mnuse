export class Users {
    //ADICIONAR HASHTAGS PARA TORNAREM PRIVADAS
    username = "";
    email = "";
    password = "";
    avatar = "";
    currentLevel = 0;
    levelLoad = 0;
    finishedChallenges = [];
    badges = [];
    badgesDescription = [];
    words = [];
    code = 0;
    isBlocked = false;
    timeChallenges = 0;
    isFinished = false

    constructor(username, email, password, avatar, currentLevel, levelLoad, finishedChallenges, badges, badgesDescription, words, code, isBlocked, timeChallenges, isFinished){
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.currentLevel = currentLevel;
        this.levelLoad = levelLoad;
        this.finishedChallenges = finishedChallenges;
        this.badges = badges,
        this.badgesDescription = badgesDescription
        this.words = words
        this.code = code
        this.isBlocked = isBlocked
        this.timeChallenges = timeChallenges
        this.isFinished = isFinished
    }
}

let users = localStorage.getItem("users"); // Verifica se já existem usuários no localStorage e os recupera
if (!users) {
  	users = [
        {username:"admin",
        email:"admin@email.com",
        password:"123",
        avatar:"../assets/imgs/avatar1.png",
        currentLevel:3,
        levelLoad: 0,
        finishedChallenges:["drangAndDrop","hangMan","rebus","videoBullying","connectTheDots","radio"],
        badges:[],
        badgesDescription: [],
        words:["Forgotten", "Collision"],
        code: 1,
        isBlocked: false,
        timeChallenges: 200,
        isFinished: true,
    },
        {username:"admin2",
        email:"admin2@email.com",
        password:"123",
        avatar:"../assets/imgs/avatar1.png",
        currentLevel:1,
        levelLoad: 0,
        finishedChallenges:["drangAndDrop"],
        badges:[],
        badgesDescription: [],
        words:[],
        code: 1,
        isBlocked: false,
        timeChallenges: 0,
        isFinished: false
    },
        {username:"admin3",
        email:"admin3@email.com",
        password:"123",
        avatar:"../assets/imgs/avatar1.png",
        currentLevel:2,
        levelLoad: 0,
        finishedChallenges:["rebus","videoBullying","drangAndDrop"],
        badges:[],
        badgesDescription: [],
        words:["Forgotten"],
        code: 1,
        isBlocked: false,
        timeChallenges: 0,
        isFinished: false
    }
    ];
    localStorage.setItem("users", JSON.stringify(users))
} else {
  	users = JSON.parse(users);
}

export function initUsers(){
    users = localStorage.users ? JSON.parse(localStorage.users) : [];
}


// VALIDATE IF USER EXISTS
export function userExists(username, email) {
    if (users.some(user => user.email === email)){
        return "email"
    }
    else if (users.some(user => user.username === username)){
        return "username"
    }
}

// CHECKS LOGIN ACCOUNT
export function checkLogin(usernameToValidate,passwordToValidate){
    if (users.some(user => user.username === usernameToValidate && user.password === passwordToValidate)){
        return true
    }
}

// LOG IN
export function login(usernameToValidate, passwordToValidate){
    const user = users.find((user) => user.username === usernameToValidate && user.password === passwordToValidate);
    const validationMessage = document.getElementById("validationMessageLogIn")
    if(user.isBlocked){
        validationMessage.textContent = "Your account is blocked."
        validationMessage.style.color = "red"
    }else{
        sessionStorage.setItem("loggedUser", JSON.stringify(user))
        let usersstr = JSON.stringify(users);
        console.log(usersstr)
        console.log("login feito")
        window.location.href = "../index.html"
    }
}


// CREATE NEW USER - SIGN UP
export function saveUser(username, email, password) {
    const newUser = new Users ( 
        username,
        email,
        password,
        "../assets/imgs/avatar1.png",
        0,
        0,
        [],
        [],
        [],
        [],
        0,
        false,
        0,
        false
    );
    if (userExists(username, email) === "email"){
        validationMessage.textContent = "Email already in use. Try another one!";
        validationMessage.style.color = "red";
    }
    else if (userExists(username, email) === "username"){
        validationMessage.textContent = "This username already exists. Try another one!";
        validationMessage.style.color = "red";
    }
    else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("utilizador salvo com sucesso")
        console.log(JSON.stringify(users))
        validationMessage.textContent = "User successfully created!";
        validationMessage.style.color = "green";
    }   
}

// CHECKS IF THE USER IS LOGGED

export function isLogged() {
    return sessionStorage.getItem("loggedUser") ? true : false
}
  
// RETURNS INFO OF THE LOGGED USER
export function getUserLogged() {
    return JSON.parse(sessionStorage.getItem("loggedUser"))
}

// LOGOUT
export function logout() {
    sessionStorage.removeItem("loggedUser");
}

// EDIT USERNAME
export function editUser(username){
    const validationMessageUser = document.getElementById("validationMessageUser");
    if (users.some(user => user.username === username)){
        validationMessageUser.textContent = "This username already exists. Try another one!";
        validationMessageUser.style.color = "red";
    }
    else {
        const loggedUser = getUserLogged()
        const updatedUser = new Users(username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
        const index  = users.findIndex(user => user.username === loggedUser.username)
        users[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("users", JSON.stringify(users))
        location.reload()
    }
}

// EDIT EMAIL
export function editEmail(email){
    const validationMessageEmail = document.getElementById("validationMessageEmail");
    if (users.some(user => user.email === email)){
        validationMessageEmail.textContent = "Email already in use. Try another one!";
        validationMessageEmail.style.color = "red";
    }
    else {
        const loggedUser = getUserLogged()
        const updatedUser = new Users(loggedUser.username, email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
        const index  = users.findIndex(user => user.username === loggedUser.username)
        users[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("users", JSON.stringify(users))
        location.reload()
    }
}

// EDIT PASSWORD
export function editPassword(oldPassword, newPassword){
    const validationMessagePassword = document.getElementById("validationMessagePassword")
    const loggedUser = getUserLogged()
    if (oldPassword === loggedUser.password){
        const updatedUser = new Users(loggedUser.username, loggedUser.email, newPassword, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
        const index  = users.findIndex(user => user.username === loggedUser.username)
        users[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("users", JSON.stringify(users))
        location.reload()
    }else{
        validationMessagePassword.textContent = "Old password incorrect!";
        validationMessagePassword.style.color = "red";
        console.log("Passwords don't match!")
    }
}

// EDIT AVATAR
export function editAvatar(selectedAvatar){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, selectedAvatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

export function editCode(userID, newCode){
    const user  = users.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, user.finishedChallenges, user.badges, user.badgesDescription, user.words, newCode, user.isBlocked, user.timeChallenges, user.isFinished)
    const index  = users.findIndex(user => user.username === userID)
    users[index] =  updatedUser
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

export function exportUsers(){
    return users
}

export function removeUser(userID){
    const index  = users.findIndex(user => user.username === userID)
    users.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(users))
}

export function isUserBlocked(userID){
    const userFound  = users.find(user => user.username == userID)
    if (userFound.isBlocked == true){
        return true
    }else{
        return false
    }
}

export function blockUser(userID){
    const block = true
    const user  = users.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, user.finishedChallenges, user.badges, user.badgesDescription, user.words, user.code, block, user.timeChallenges, user.isFinished)
    const index  = users.findIndex(user => user.username === userID)
    users[index] =  updatedUser
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

export function unblockUser(userID){
    const block = false
    const user  = users.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, user.finishedChallenges, user.badges, user.badgesDescription, user.words, user.code, block, user.timeChallenges, user.isFinished)
    const index  = users.findIndex(user => user.username === userID)
    users[index] =  updatedUser
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

export function exportBlockedUsers(){
    const blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || []
    return blockedUsers
}

export function changeLevelLoad(level){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, level, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
}

export function changeCurrentLevel(level){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, level, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
    console.log(users)
}

let words = ["forgotten", "collision"]

export function addWords(wordIndex){
    const loggedUser = getUserLogged()
    const wordReceived = words[wordIndex]
    loggedUser.words.push(wordReceived)
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
}

let badges = ["../assets/imgs/badges/badge_level1.png", "../assets/imgs/badges/badge_level2.png", "../assets/imgs/badges/badge_level3.png", "../assets/imgs/badges/badge_mnuseLeague.png", "../assets/imgs/badges/badge_easterEggCadeiras.png", "../assets/imgs/badges/badge_easterEggRadio.png"]
let descriptions = ["You got this badge for finishing level 1!", "You got this badge for finishing level 2!", "You got this badge for finishing level 3!", "You got this badge for being #1 in the Mnuse League!", "Careful! The kids in this classroom are not very nice...", "Careful! The story behind this car is more complex than it looks like..."]

export function addBadge(badgeIndex){
    const loggedUser = getUserLogged()
    const badgeReceived = badges[badgeIndex]
    const descriptionReceived = descriptions[badgeIndex]
    if(!loggedUser.badges.includes(badgeReceived)){
        loggedUser.badges.push(badgeReceived)
        loggedUser.badgesDescription.push(descriptionReceived)
        const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, loggedUser.isFinished)
        const index  = users.findIndex(user => user.username === loggedUser.username)
        users[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)
        console.log(badgeReceived)
        showBadgeNotification()
    }
}

export function addMnuseBadge(badgeIndex, userID){
    const user = users.find(user => user.username === userID)
    const badgeReceived = badges[badgeIndex]
    const descriptionReceived = descriptions[badgeIndex]
    if(!user.badges.includes(badgeReceived)){
        user.badges.push(badgeReceived)
        user.badgesDescription.push(descriptionReceived)
        const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, user.finishedChallenges, user.badges, user.badgesDescription, user.words, user.code, user.isBlocked, user.timeChallenges, user.isFinished)
        const index  = users.findIndex(u => u.username === user.username)
        users[index] =  updatedUser
        localStorage.setItem("users", JSON.stringify(users))
        showBadgeNotification()
    }
}

export function getTime(time) {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    let newTime = 0
    if (loggedUser.timeChallenges === 0) {
        newTime = time;
    } else {
        newTime = loggedUser.timeChallenges + time
    }

    loggedUser.timeChallenges = newTime
    const usersList = JSON.parse(localStorage.getItem("users"))
    const index = usersList.findIndex((user) => user.username === loggedUser.username)
    if (index !== -1) {
        usersList[index] = loggedUser;
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        localStorage.setItem("users", JSON.stringify(usersList));
    }
}

export function changeIsFinished(){
    const isfinished = true
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.badgesDescription, loggedUser.words, loggedUser.code, loggedUser.isBlocked, loggedUser.timeChallenges, isfinished)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
}

export function exportTimesUsers(){
    let timesUsers = users.filter((user) => user.isFinished).map((user) => user.timeChallenges).sort((a, b) => a - b)
    return timesUsers
}
export function showBadgeNotification(){
    document.getElementById("notification").classList.add("show");
    localStorage.setItem("visibleBadgeNotification", "true");
}

function hideBadgeNotification() {
    document.getElementById("notification").classList.remove("show"); // Remove a classe 'show' para esconder o toast
    localStorage.setItem("visibleBadgeNotification", "false"); // Armazena o estado do toast no Local Storage
}

document.addEventListener("DOMContentLoaded", function() {
    let notification = localStorage.getItem("visibleBadgeNotification");
    if (notification === "true") {
        showBadgeNotification();
    } 
    document.querySelector(".btn-close").addEventListener("click", function(){
        hideBadgeNotification();
    })
});
    


console.log(users)

// localStorage.clear()
// sessionStorage.clear()