import * as User from "./models/modelUsers.js";

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const accountCreated = document.getElementById("accountCreated");
const loginAccount = document.getElementById("logBtn");


// VALIDATE IF LOG IN INFORMATION EXISTS
loginAccount.addEventListener("submit", function(event){
	event.preventDefault();
	let usernameToValidate = document.getElementById("usernameLogin").value;
	let passwordToValidate = document.getElementById("passwordLogin").value;

    if (User.checkLogin(usernameToValidate, passwordToValidate)) {
        User.login();
    } else {
		const message = document.getElementById("validationMessageLogIn");
        message.textContent = "Log in failed. Try again.";
		message.style.color = "red";
    }
});


// VALIDADE INPUT OF EQUAL PASSWORDS ON SIGN UP
const inputPassword1 = document.getElementById("password1Signup");
const inputPassword2 = document.getElementById("password2Signup");
let validationMessage = document.getElementById("validationMessage");

inputPassword2.addEventListener("input", function(){
	let password = inputPassword1.value;
	let validatePassword = inputPassword2.value;

	if (validatePassword === '') {
		// Campo vazio
		inputPassword2.classList.remove("success");
		inputPassword2.classList.remove("error");
		inputPassword2.classList.add("blank");
		validationMessage.textContent = "";
		accountCreated.disabled = true;
	}
	else if (password === validatePassword){
		inputPassword2.classList.remove("error");
		inputPassword2.classList.remove("blank");
		inputPassword2.classList.add("success");
		validationMessage.textContent = "Password checked!";
		validationMessage.style.color = "green";
		accountCreated.disabled = false;
	}
	else {
		inputPassword2.classList.remove("success");
		inputPassword2.classList.remove("blank");
		inputPassword2.classList.add("error");
		validationMessage.textContent = "Passwords does not check. Try again!";
		accountCreated.disabled = true;
		validationMessage.style.color = "red";
	}

})


// SIGN UP
accountCreated.addEventListener("submit", function(event) {
	event.preventDefault();
	let usernameSignup = document.getElementById("usernameSignup").value;
	let emailSignup = document.getElementById("emailSignup").value;
	let password2Signup = inputPassword2.value;
	User.saveUser(usernameSignup, emailSignup, password2Signup);
})


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
