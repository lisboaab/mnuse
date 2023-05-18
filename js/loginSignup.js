const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const accountCreated = document.getElementById("accountCreated")
const loginAccount = document.getElementById("loginAccount")

// VALIDADE PASSWORDS
const inputPassword1 = document.getElementById("password1Signup");
const inputPassword2 = document.getElementById("password2Signup");
let validationMessage = document.getElementById("validationMessage");

inputPassword2.addEventListener("input", function(){
	let password = inputPassword1.value;
	let validatePassword = inputPassword2.value;

	if (password === validatePassword){
		inputPassword2.classList.remove("error");
		inputPassword2.classList.add("success");
		validationMessage.textContent = "Password checked!"
	}
	else {
		inputPassword2.classList.remove("success");
		inputPassword2.classList.add("error");
		validationMessage.textContent = "Passwords does not check. Try again!"
	}
})

//


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//accountCreated.addEventListener('click', () => {
//	container.classList.remove("right-panel-active");
//});

loginAccount.addEventListener('click', () => {
	window.location.href = "../index.html"
});