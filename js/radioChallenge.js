const sound1 = new Audio()
sound1.src = "../assets/sounds/airplane.wav"

const sound2 = new Audio()
sound2.src = "../assets/sounds/car.wav"

const sound3 = new Audio()
sound3.src = "../assets/sounds/smash-bottle.wav"

const sound4 = new Audio()
sound4.src = "../assets/sounds/explosion.mp3"

const sound3Btn = document.getElementById("sound3")

sound3Btn.addEventListener("click", () => {
    clicked(sound3Btn)
})

sound3Btn.addEventListener("mousedown", () => {
    sound3.play()
})

const soundButtons = document.querySelectorAll("#sounds .radioBtn")
const imageButtons = document.querySelectorAll("#images .radioBtn")

soundButtons.forEach((soundButton) => {
    const sound = getSoundFromButtonName(soundButton.name)
    soundButton.addEventListener("click", () => {
      clicked(soundButton)
    })
  
    soundButton.addEventListener("mousedown", () => {
      if (sound) {
        sound.play()
      }
    })
})
  

imageButtons.forEach((imageButton) => {
    imageButton.addEventListener("click", () => {
      clicked(imageButton)
    })
})


let button1 = null
let button2 = null
let matched = 0

function clicked(button) {
    if (button.classList.contains("radioBtn-clicked")) {
      return
    }
  
    button.classList.add("radioBtn-clicked")
  
    if (button1 === null) {
      button1 = button
    } else if (button2 === null) {
      button2 = button
      checkMatch()
    }
}
  

function checkMatch() {
    if (button1.name === button2.name && button1.id !== button2.id) {
        button1.removeEventListener("click", clicked)
        button2.removeEventListener("click", clicked)
        button1 = null
        button2 = null
        matched += 1
        if(matched == 4){
            console.log("completed")
        }
    } else {
        button1.classList.remove("radioBtn-clicked")
        button2.classList.remove("radioBtn-clicked")
        button1 = null
        button2 = null
    }
}

function getSoundFromButtonName(name) {
    if (name == "one"){
        return sound1
    }else if (name == "two"){
        return sound2
    }else if (name == "three"){
        return sound3
    }else if (name == "four"){
        return sound4
    }
}