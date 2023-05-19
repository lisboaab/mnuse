const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const accountCreated = document.getElementById("accountCreated");
const loginAccount = document.getElementById("logBtn");



// VALIDATE IF LOG IN INFORMATION EXISTS
loginAccount.addEventListener("click", function(event){
	event.preventDefault();
	let emailToValidate = document.getElementById("emailLogin").value;
	let passwordToValidate = document.getElementById("passwordLogin").value;

    let userExists = users.some(user => user.email === emailToValidate && user.password === passwordToValidate); //essa funcao esta em models


    if (userExists) {
        
		const message = document.getElementById("validationMessageLogIn");
        message.textContent = "Log in failed. Try again.";
		message.style.color = "red";
    } else {
		login(emailToValidate, passwordToValidate);
    }
});


// LOG IN FUNCTION
function login(emailLogin,passwordLogin){
	console.log(JSON.stringify(users))
	console.log("login feito")
}



// VALIDADE INPUT OF EQUAL PASSWORDS ON SIGN UP
const inputPassword1 = document.getElementById("password1Signup");
const inputPassword2 = document.getElementById("password2Signup");
let validationMessage = document.getElementById("validationMessage");

inputPassword2.addEventListener("input", function(){
	let password = inputPassword1.value;
	let validatePassword = inputPassword2.value;

	if (password === validatePassword){
		inputPassword2.classList.remove("error");
		inputPassword2.classList.add("success");
		validationMessage.textContent = "Password checked!";
		validationMessage.style.color = "green";
		accountCreated.disabled = false;
	}
	else {
		inputPassword2.classList.remove("success");
		inputPassword2.classList.add("error");
		validationMessage.textContent = "Passwords does not check. Try again!";
		accountCreated.disabled = true;
		validationMessage.style.color = "red";
	}

})


// SIGN UP


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
