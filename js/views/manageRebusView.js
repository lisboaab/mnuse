import * as Rebus  from "../models/modelChallengeRebus.js"

document.getElementById("formRebus").addEventListener("submit", (e) => {
    e.preventDefault()
    const url = document.getElementById("urlRebus").value
    const path = url.lastIndexOf("\\")
    const modifiedUrl = url.slice(path + 1)
    const validUrl = "../assets/imgs/" + modifiedUrl
    const rightAnswer = document.getElementById("answerRebus").value
    const helpBtn = document.getElementById("descriptionRebus").value
    Rebus.addRebus(validUrl, rightAnswer, helpBtn)
})