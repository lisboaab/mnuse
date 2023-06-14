const sound1 = new Audio()
sound1.src = "../assets/sounds/airplane.wav"

const sound2 = new Audio()
sound2.src = "../assets/sounds/car.wav"

const sound3 = new Audio()
sound3.src = "../assets/sounds/car.wav"

const sound4 = new Audio()
sound4.src = "../assets/explosion.mp3"

let button1 = null
let button2 = null
let challengeCompleted = false

function clicked(button) {
    if (button.classList.contains("btn-clicked")) {
        return
    }

    button.classList.add("btn-clicked")

    if (button1 === null) {
        button1 = button
    } else if (button2 === null) {
        button2 = button
        checkMatch()
        checkChallengeCompleted()
    }
}

function checkMatch() {
    if (button1.name === button2.name && button1.id !== button2.id) {
        button1.removeEventListener("click", clicked)
        button2.removeEventListener("click", clicked)
        button1 = null
        button2 = null
    } else {
        setTimeout(function () {
            button1.classList.remove("btn-clicked")
            button2.classList.remove("btn-clicked")
            button1 = null
            button2 = null
        }, 400)
    }
}

function checkChallengeCompleted() {
    const buttons = document.getElementsByClassName("btn")
    const uniqueClassNames = new Set()

    for (let i = 0; i < buttons.length; i++) {
        uniqueClassNames.add(buttons[i].className)
    }

    if (uniqueClassNames.size === 1) {
        challengeCompleted = true
        console.log("Challenge completed!")
    }
}