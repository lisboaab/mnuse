class Users {
    //ADICIONAR HASHTAGS PARA TORNAREM PRIVADAS
    username = "";
    email = "";
    password = "";
    avatar = "";
    currentLevel = 0;
    levelLoad = 0;
    finishedChallenges = [];
    badges = [];
    words = [];
    code = 0;

    constructor(username, email, password, avatar, currentLevel, levelLoad, finishedChallenges, badges, words, code){
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.currentLevel = currentLevel;
        this.levelLoad = levelLoad;
        this.finishedChallenges = finishedChallenges;
        this.badges = badges
        this.words = words
        this.code = code
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
        finishedChallenges:[],
        badges:[],
        words:["Forgotten", "Collision"],
        code: 1
    },
        {username:"admin2",
        email:"admin2@email.com",
        password:"123",
        avatar:"../assets/imgs/avatar1.png",
        currentLevel:1,
        levelLoad: 0,
        finishedChallenges:[],
        badges:[],
        words:[],
        code: 1
    },
        {username:"admin3",
        email:"admin3@email.com",
        password:"123",
        avatar:"../assets/imgs/avatar1.png",
        currentLevel:2,
        levelLoad: 0,
        finishedChallenges:[],
        badges:[],
        words:["Forgotten"],
        code: 1
        }
    ];
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
    const blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || []
    const validationMessage = document.getElementById("validationMessageLogIn")
    if(blockedUsers.some(blockedUser => blockedUser.username === user.username)){
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
        0
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
        const updatedUser = new Users(username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, finishedChallenges, loggedUser.badges, loggedUser.words, loggedUser.code)
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
        const updatedUser = new Users(loggedUser.username, email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words, loggedUser.code)
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
        const updatedUser = new Users(loggedUser.username, loggedUser.email, newPassword, loggedUser.avatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words, loggedUser.code)
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
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, selectedAvatar, loggedUser.currentLevel, loggedUser.levelLoad, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words, loggedUser.code)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

export function editCode(userID, newCode){
    const user  = users.find(user => user.username === userID)
    const updatedUser = new Users(user.username, user.email, user.password, user.avatar, user.currentLevel, user.levelLoad, user.finishedChallenges, user.badges, user.words, newCode)
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

export function blockUser(userID){
    let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers"))
    const blockedUser = users.find(user => user.username === userID)
    blockedUsers.push(blockedUser)
    localStorage.setItem("blockedUsers", JSON.stringify(blockedUsers))
    console.log(blockedUser)
}

export function unblockUser(userID){
    let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers"))
    const blockedUserIndex = blockedUsers.findIndex(blockedUser => blockedUser.username === userID)
    blockedUsers.splice(blockedUserIndex, 1)
    localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers))
}

export function exportBlockedUsers(){
    const blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || []
    return blockedUsers
}

export function changeCurrentLevel(level){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, level, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words, loggedUser.code)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
}

console.log(users)

// localStorage.clear()
// sessionStorage.clear()