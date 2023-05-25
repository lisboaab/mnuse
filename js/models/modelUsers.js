class Users {
    //ADICIONAR HASHTAGS PARA TORNAREM PRIVADAS
    username = "";
    email = "";
    password = "";
    avatar = "";
    currentLevel = 0;
    finishedChallenges = [];
    badges = [];

    constructor(username, email, password, avatar, currentLevel, finishedChallenges, badges){
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.currentLevel = currentLevel;
        this.finishedChallenges = finishedChallenges;
        this.badges = badges
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
        badges:[]
    }];
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
        console.log("usuario salvo com sucesso")
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
