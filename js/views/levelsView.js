import { Levels } from "../models/modelLevels.js"
import * as User from "../models/modelUsers.js"

let levels = []

const level1 = new Levels(1, `<img src="../assets/imgs/sala-aula.png" class="img-fluid" id="bgLevel" usemap="#image-map"><map name="image-map"><area target="" alt="board" title="board" href="../../html/dragndrop.html" coords="456,105,805,265" shape="rect"><area target="" alt="table" title="table" id="tableArea" href="../../html/challengeRebus.html" coords="220,323,196,348,262,348,337,351,395,351,409,341,423,324" shape="poly"><area target="" alt="door" title="door" href="../../html/challengeVideoDoor.html" coords="947,148,988,133,1050,108,1048,246,1048,387,1045,465,992,439,955,421" shape="poly"></map>`, 3, 5000);
const level2 = new Levels(2, `<img src="../assets/imgs/carro.jpeg" class="img-fluid" id="bgLevel" usemap="#image-map"><map name="image-map"><area target="" alt="radio" title="radio" href="../../html/radio.html" coords="519,382,603,491" shape="rect"><area target="" alt="diario" title="diario" href="../../html/hangmanChallenge.html" coords="713,462,892,526" shape="rect"><area target="" alt="outdoor" title="outdoor" href="../../html/memoryCard.html" coords="946,158,1042,158,1041,264,887,266" shape="poly"><area target="" alt="carro" id="carArea" title="carro" href="../../html/connectTheDots.html" coords="446,218,437,220,439,229,436,239,431,252,440,261,443,273,452,275,457,267,460,259,478,259,497,260,510,261,513,268,520,271,529,271,531,263,535,253,531,239,527,226,528,215,516,201,487,195,452,199" shape="poly"></map>`, 4, 5000)

levels.push(level1)
levels.push(level2)

const imageMap = document.getElementById("imageMap")


const levelUser = User.getUserLogged().levelLoad
console.log(levelUser)
// const levelUser = 2
const levelFound = levels.find((level) => level.levelName == levelUser)

imageMap.innerHTML = `${levelFound.imagePath}`

console.log(User.getUserLogged().finishedChallenges)

if(User.getUserLogged().currentLevel == 1){
    if(User.getUserLogged().finishedChallenges.length == 3){
        let modal = document.getElementById("challengeAlreadyCompleted");
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        let btnCloseChallengeCompleted = document.getElementById("btnCloseChallengeCompleted")
        btnCloseChallengeCompleted.addEventListener("click", function(){
            var modal = document.getElementById("challengeAlreadyCompleted");
            modal.classList.remove("show");
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            window.location.href = "../html/terapeuta.html"
        })
        User.changeCurrentLevel(2)    
        User.addWords()
        User.addBadge()
    }
}