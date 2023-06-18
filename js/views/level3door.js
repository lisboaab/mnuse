import * as User from "../models/modelUsers.js"

//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "mapa.html";
})

let user = User.getUserLogged();


//  BUTTON FINISH
let btnSaveSideInfo = document.getElementById("btnSaveSideInfo");
btnSaveSideInfo.addEventListener("click", function() {
    // Save in local storage the challenge completed
    let user = User.getUserLogged();
    if (!user.isFinished) {
        let modal = document.getElementById("levelFinished");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        let btnCloseChallengeCompleted = document.getElementById("btnLevelFinished")
        btnCloseChallengeCompleted.addEventListener("click", function(){
        let modal = document.getElementById("levelFinished");
            modal.classList.remove("show");
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            window.location.href = "../html/terapeuta.html"
        })
        User.addBadge(2)
        User.changeCurrentLevel(4)
        User.changeIsFinished()
    } else if (user.isFinished){ // modal saying that the challenge was already completed before
        let modal = document.getElementById("challengeAlreadyCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }
})

let btnCloseChallengeCompleted = document.getElementById("btnCloseChallengeCompleted")
btnCloseChallengeCompleted.addEventListener("click", function(){
    var modal = document.getElementById("challengeAlreadyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeSucessfull = document.getElementById("btnCloseChallengeSucessfull")
btnCloseChallengeSucessfull.addEventListener("click", function(){
    var modal = document.getElementById("challengeSucessfullyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})
