let wordLevel1 = "forgotten";
let wordLevel2 = "collision";
let messageToShow = document.getElementById("messageToShow");
let inputWord1 = document.getElementById("inputWord1");
let inputWord2 = document.getElementById("inputWord2");
let btnContinue = document.getElementById("btnContinue");
let containerVideo = document.getElementById("containerVideo");
var modalUnlockWords = document.getElementById('modalUnlockWords');


function checkInput(){
    if (inputWord1.value.toLowerCase() != wordLevel1 && inputWord2.value.toLowerCase() != wordLevel2){
        messageToShow.textContent = "";
        messageToShow.textContent = "Both words are incorrect! Try again";
        messageToShow.setAttribute("class", "wrong");
        // btnContinue.disabled = true;
        return false

    } else if (inputWord1.value.toLowerCase() != wordLevel1 && inputWord2.value.toLowerCase() === wordLevel2){
        messageToShow.textContent = "";
        messageToShow.textContent = "Word of the 1st level is incorrect! Try again";
        messageToShow.setAttribute("class", "wrong");
        // btnContinue.disabled = true;
        return false

    }
    else if (inputWord2.value.toLowerCase() != wordLevel2  && inputWord1.value.toLowerCase() === wordLevel1){
        messageToShow.textContent = "";
        messageToShow.textContent = "Word of the 2nd level is incorrect! Try again";
        messageToShow.setAttribute("class", "wrong");
        // btnContinue.disabled = true;
        return false
        
    }
    else if (inputWord1.value.toLowerCase() === wordLevel1 && inputWord2.value.toLowerCase() === wordLevel2) {
        messageToShow.textContent = "Words match!";
        messageToShow.setAttribute("class", "right");
        // btnContinue.disabled = false;
        return true
    }
    else {
        messageToShow.textContent = "";
        messageToShow.textContent = "Something is wrong! Try again";
        messageToShow.setAttribute("class", "wrong");
        return false
    }
}


btnContinue.addEventListener("click", function(event){
    event.preventDefault()
    checkInput()
    if (checkInput()){
        containerVideo.style.opacity = "100";
        modalUnlockWords.hide();
    }
    else {
        containerVideo.style.opacity = "0";
    }
    
})



