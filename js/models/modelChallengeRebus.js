let challengesRebus = []

export default class Rebus {
    id = 0;
    imgUrl = "";
    rightAnswer = "";
    textHelpBtn = "";

    constructor(imgUrl,rightAnswer,textHelpBtn){
        this.id = getId();
        this.imgUrl = imgUrl;
        this.rightAnswer = rightAnswer;
        this.textHelpBtn = textHelpBtn;
    }

    get imgUrl(){
        return this.imgUrl
    }
    get rightAnswer(){
        return this.rightAnswer
    }
    get textHelpBtn(){
        return this.textHelpBtn
    }

    set imgUrl(newUrl){
        this.imgUrl = newUrl
    }
    set rightAnswer(newAnswer){
        this.rightAnswer = newAnswer
    }
    set textHelpBtn(newText){
        this.textHelpBtn = newText
    }
}

challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus1.png","one in a million","Try to separate the number inside of the word, put them in the same sentence and guess it!"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus2.png","think outside the box","Way of thinking that is different from convetional. Term commonly used to instigate people to be creative and innovative."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus3.png","somewhere over the rainbow","Title of a very famous song related to rainbow."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus4.png","happy hour","Hour of the day where co-workers get out of the office and can enjoy the company of one another in a restaurant or a bar"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus5.png","earring","Object used to garnish ones ear."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus6.png","hotdog","Common streetfood originally invented in the USA"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus7.png","it is raining man","Title of a pop song released in 1983 by The Weather Girls."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus8.png","breakfast","Meal usually taken in the morning."))
  
let storedChallengesRebus = JSON.parse(localStorage.getItem("challengesRebus"));
if (storedChallengesRebus && Array.isArray(storedChallengesRebus)) {
challengesRebus = storedChallengesRebus;
} else {
localStorage.setItem("challengesRebus", JSON.stringify(challengesRebus));
}

export function getId(){
    let max = 0;
    for (let challenge of challengesRebus){
        if (challenge.id > max){
            max = challenge.id
        }
    }
    return max+1;
}

export function addRebus(url, rightAnswer, helpBtn){
    const newRebus = new Rebus(
        url,
        rightAnswer,
        helpBtn
    )

    if(rebusExists(rightAnswer)){
        alert("Existent")
    }else{
        challengesRebus.push(newRebus)
        localStorage.setItem("challengesRebus", JSON.stringify(challengesRebus))
        console.log(JSON.stringify(challengesRebus))
    }
    console.log(challengesRebus)
}

export function rebusExists(rightAnswer){
    if(challengesRebus.some((challengeRebus) => challengeRebus.rightAnswer == rightAnswer)){
        return true
    }else{
        return false
    }
}
