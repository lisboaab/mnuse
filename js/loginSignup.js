const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const accountCreated = document.getElementById("accountCreated")
const loginAccount = document.getElementById("loginAccount")

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

accountCreated.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

loginAccount.addEventListener('click', () => {
	window.location.href = "../index.html"
});