users = []

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const accountCreated = document.getElementById("accountCreated")
const loginAccount = document.getElementById("loginAccount")

// VALIDATE LOG IN INFORMATION
signInButton.addEventListener("click", function(event){
	event.preventDefault();
	let emailToValidate = document.getElementById("emailLogin").value;
	let passwordToValidate = document.getElementById("passwordLogin").value;

	const userToLogIn = {
        email: emailToValidate,
        password: passwordToValidate
    };

    let userExists = users.some(user => user.email === emailToValidate && user.password === passwordToValidate);

    if (userExists) {
        loginAccount(emailToValidate, passwordToValidate); // crie a função
    } else {
        const message = document.getElementById("validationMessageLogIn");
        message.textContent = "Log in failed. Try again.";
    }
});


// LOG IN FUNCTION
function loginAccount(emailLogin,passwordLogin)



// VALIDADE INPUT OF PASSWORDS ON SIGN UP
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
		accountCreated.disabled = false;
		inputPassword1.reset()
		inputPassword2.reset()
	}
	else {
		inputPassword2.classList.remove("success");
		inputPassword2.classList.add("error");
		validationMessage.textContent = "Passwords does not check. Try again!";
		accountCreated.disabled = true;
	}

})
//


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