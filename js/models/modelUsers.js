class Users {
    //ADICIONAR HASHTAGS PARA TORNAREM PRIVADAS
    username = "";
    email = "";
    password = "";
    avatar = "";
    currentLevel = 0;
    finishedChallenges = [];
    badges = [];
    words = [];

    constructor(username, email, password, avatar, currentLevel, finishedChallenges, badges, words){
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.currentLevel = currentLevel;
        this.finishedChallenges = finishedChallenges;
        this.badges = badges
        this.words = words
    }
}

let users = localStorage.getItem("users"); // Verifica se já existem usuários no localStorage e os recupera
if (!users) {
  	users = [
        {username:"admin",
        email:"admin@email.com",
        password:"123",
        avatar:"../assets/imgs/user.png",
        currentLevel:0,
        finishedChallenges:[],
        badges:[],
        words:[]
    },
        {username:"admin2",
        email:"admin2@email.com",
        password:"123",
        avatar:"../assets/imgs/user.png",
        currentLevel:0,
        finishedChallenges:[],
        badges:[],
        words:["Forgotten"]
    },
        {username:"admin3",
        email:"admin3@email.com",
        password:"123",
        avatar:"../assets/imgs/user.png",
        currentLevel:0,
        finishedChallenges:[],
        badges:[],
        words:["Forgotten", "Collision"]
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
    sessionStorage.setItem("loggedUser", JSON.stringify(user))
	let usersstr = JSON.stringify(users);
    console.log(usersstr)
	console.log("login feito")
    window.location.href = "../index.html"
}


// CREATE NEW USER - SIGN UP
export function saveUser(username, email, password) {
    const newUser = new Users ( 
        username,
        email,
        password,
        "../assets/imgs/user.png",
        0,
        [],
        [],
        []
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

// EDIT USERNAME AND / OR EMAIL
export function editProfile(username, email){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(username, email, loggedUser.password, loggedUser.avatar, loggedUser.currentLevel, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

// EDIT PASSWORD
export function editPassword(oldPassword, newPassword){
    const loggedUser = getUserLogged()
    if (oldPassword === loggedUser.password){
        const updatedUser = new Users(loggedUser.username, loggedUser.email, newPassword, loggedUser.avatar, loggedUser.currentLevel, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words)
        const index  = users.findIndex(user => user.username === loggedUser.username)
        users[index] =  updatedUser
        sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
        localStorage.setItem("users", JSON.stringify(users))
        location.reload()
    }else{
        /* validationMessage.textContent = "Passwords don't match!";
        validationMessage.style.color = "red"; */
        console.log("Passwords don't match!")
    }
}

// EDIT AVATAR
export function editAvatar(selectedAvatar){
    const loggedUser = getUserLogged()
    const updatedUser = new Users(loggedUser.username, loggedUser.email, loggedUser.password, selectedAvatar, loggedUser.currentLevel, loggedUser.finishedChallenges, loggedUser.badges, loggedUser.words)
    const index  = users.findIndex(user => user.username === loggedUser.username)
    users[index] =  updatedUser
    sessionStorage.setItem("loggedUser", JSON.stringify(updatedUser))
    localStorage.setItem("users", JSON.stringify(users))
    location.reload()
}

console.log(users)