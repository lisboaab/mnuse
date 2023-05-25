correctAnswers = ["one in a million", "think outside of the box", "somewhere over the rainbow", "happy hour"]

answer1 = document.getElementById("InputRebusAnswer1");
answer2 = document.getElementById("InputRebusAnswer2");
answer3 = document.getElementById("InputRebusAnswer3");
answer4 = document.getElementById("InputRebusAnswer4");
inputs = [answer1, answer2,answer3,answer4]

check1 = document.getElementById("addCheck0")
check2 = document.getElementById("addCheck1")
check3 = document.getElementById("addCheck2")
check4 = document.getElementById("addCheck3")
checks = [check1,check2,check3,check4]



// criar classe com a imagem, id e resposta certa de cada rebus (já fica fácil pra adicionar outros rebus)
// gerar 4 numeros random e esses numeros serão o id do obj na classe
// e usar a classe pra alimentar a funcao e o html







// tentar fazer isso usando o for each e o index da resposta    
answer1.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer1,0) === true){
            showCorrectOrWrong("correct", 0)
        }
        else {
            showCorrectOrWrong("wrong", 0)
        }
    }
})

answer2.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer2,1) === true){
            showCorrectOrWrong("correct",1)
        }
        else {
            showCorrectOrWrong("wrong", 1)
        }
    }
})

answer3.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer3,2) === true){
            showCorrectOrWrong("correct", 2)
        }
        else {
            showCorrectOrWrong("wrong", 2)
        }
    }
})

answer4.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if (checkAnswer(answer4,3) === true){
            showCorrectOrWrong("correct", 3)
        }
        else {
            showCorrectOrWrong("wrong", 3)
        }
    }
})

// idCard = input do challenge;   indexAnswer = index da answer no array  correctAnswers 
function checkAnswer(idCard, indexAnswer){
    if (idCard.value === correctAnswers[indexAnswer]){
        return true
    }
    else {
        return false
    }
}

function showCorrectOrWrong(state, idInput){
    obj = inputs[idInput];
    div = checks[idInput];
    img = document.getElementById("imageChecks");
    if (this.img){ // como fazer para apagar só a imagem que estiver no div dessa sessao?
        this.img.parentNode.removeChild(img);
    }
    if (state === "correct"){
        obj.style.borderBottom = "solid #00bb00 2px";
        const image = document.createElement('img')
        image.src = "../assets/imgs/green checked.png";
        image.width = "35";
        image.marginLeft = "10%";
        image.id = "imageChecks"
        div.appendChild(image)
    }
    else{
        obj.style.borderBottom = "solid #ee3a00 2px";
        const image = document.createElement('img');
        image.src = "../assets/imgs/red wrong icon.png";
        image.width = "35";
        image.marginLeft = "10%";
        image.id = "imageChecks"
        div.appendChild(image)
    }
}