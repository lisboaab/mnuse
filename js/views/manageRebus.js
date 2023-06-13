import * as Rebus  from "./models/modelChallengeRebus.js"

document.getElementById("formRebus").addEventListener("submit", (e) => {
    e.preventDefault()
    const url = document.getElementById("urlRebus").value
    const rightAnswer = document.getElementById("answerRebus").value
    const helpBtn = document.getElementById("descriptionRebus").value
    console.log(url, rightAnswer, helpBtn)

    Rebus.addRebus(url, rightAnswer, helpBtn)
})