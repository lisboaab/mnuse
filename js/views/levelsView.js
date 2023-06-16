import { Levels } from "../models/modelLevels.js"
import * as User from "../models/modelUsers.js"

export let levels = []

const level1 = new Levels(1, `<img src="../assets/imgs/sala-aula.png" class="img-fluid" id="bgLevel" usemap="#image-map"><map name="image-map"><area alt="board" title="board" href="../../html/dragndrop.html" coords="456,105,805,265" shape="rect"><area alt="table" title="table" id="tableArea" href="../../html/challengeRebus.html" coords="220,323,196,348,262,348,337,351,395,351,409,341,423,324" shape="poly"><area target="" alt="door" title="door" href="../../html/challengeVideoDoor.html" coords="947,148,988,133,1050,108,1048,246,1048,387,1045,465,992,439,955,421" shape="poly"><area id="chairEasterEgg" alt="chair" title="chair" coords="79,469,64,481,48,481,44,496,31,514,28,531,38,538,37,600,219,600,221,541,248,513,245,571,259,569,263,472" shape="poly"></map>`, 3);
const level2 = new Levels(2, `<img src="../assets/imgs/carro.jpeg" class="img-fluid" id="bgLevel" usemap="#image-map"><map name="image-map"><area alt="radio" title="radio" href="../../html/radio.html" coords="516,384,598,457" shape="rect"><area alt="easter egg" title="easter egg" id="radioEasterEgg" coords="543,458,570,482" shape="rect"><area target="" alt="diario" title="diario" href="../../html/hangmanChallenge.html" coords="713,462,892,526" shape="rect"><area target="" alt="outdoor" title="outdoor" href="../../html/memoryCard.html" coords="946,158,1042,158,1041,264,887,266" shape="poly"><area alt="carro" id="carArea" title="carro" href="../../html/connectTheDots.html" coords="446,218,437,220,439,229,436,239,431,252,440,261,443,273,452,275,457,267,460,259,478,259,497,260,510,261,513,268,520,271,529,271,531,263,535,253,531,239,527,226,528,215,516,201,487,195,452,199" shape="poly"></map>`, 4)

levels.push(level1)
levels.push(level2)

const imageMap = document.getElementById("imageMap")


const levelUser = User.getUserLogged().levelLoad
console.log(levelUser)
const levelFound = levels.find((level) => level.levelName == levelUser)

imageMap.innerHTML = `${levelFound.imagePath}`

console.log(User.getUserLogged().finishedChallenges)

if(User.getUserLogged().currentLevel == 1){
    if(User.getUserLogged().finishedChallenges.length == 3){
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
        User.changeCurrentLevel(2)
        User.addWords(0)
        User.addBadge(0)
    }
}else if(User.getUserLogged().currentLevel == 2){
    if(User.getUserLogged().finishedChallenges.length == 7){
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
        User.changeCurrentLevel(3)
        User.addWords(1)
        User.addBadge(1)
        // User.changeIsFinished()
    }
}

if(User.getUserLogged().levelLoad == 1){
    document.getElementById("chairEasterEgg").addEventListener("click", () => {
        const soundBullying = new Audio()
        soundBullying.src = "../assets/sounds/bullying.mp3"
        soundBullying.play()
        User.addBadge(4)
    })
}else if(User.getUserLogged().levelLoad == 2){
    document.getElementById("radioEasterEgg").addEventListener("click", () => {
        const soundRadio = new Audio()
        soundRadio.src = "../assets/sounds/radio.mp3"
        soundRadio.play()
        User.addBadge(5)
    })
}