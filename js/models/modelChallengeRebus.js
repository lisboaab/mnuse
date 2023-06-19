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

let rebus = localStorage.getItem("rebus")
if (!rebus){
    rebus = [
        {id: 1,
        imgUrl: "../assets/imgs/rebus1.png",
        rightAnswer: "one in a million",
        textHelpBtn: "Try to separate the number inside of the word, put them in the same sentence and guess it!"
        },
        {id: 2,
        imgUrl: "../assets/imgs/rebus2.png",
        rightAnswer: "think outside the box",
        textHelpBtn: "Way of thinking that is different from convetional. Term commonly used to instigate people to be creative and innovative."
        },
        {id: 3,
        imgUrl: "../assets/imgs/rebus3.png",
        rightAnswer: "somewhere over the rainbow",
        textHelpBtn: "Title of a very famous song related to rainbow."
        },
        {id: 4,
        imgUrl: "../assets/imgs/rebus4.png",
        rightAnswer: "happy hour",
        textHelpBtn: "Hour of the day where co-workers get out of the office and can enjoy the company of one another in a restaurant or a bar"
        },
        {id: 5,
        imgUrl: "../assets/imgs/rebus5.png",
        rightAnswer: "earring",
        textHelpBtn: "Object used to garnish ones ear."
        },
        {id: 6,
        imgUrl: "../assets/imgs/rebus6.png",
        rightAnswer: "hotdog",
        textHelpBtn: "Common streetfood originally invented in the USA"
        },
        {id: 7,
        imgUrl: "../assets/imgs/rebus7.png",
        rightAnswer: "it's raining men",
        textHelpBtn: "Title of a pop song released in 1983 by The Weather Girls."
        },
        {id: 8, 
        imgUrl: "../assets/imgs/rebus8.png",
        rightAnswer: "breakfast",
        textHelpBtn: "Meal usually taken in the morning."
        },
    ]
    localStorage.setItem("rebus", JSON.stringify(rebus))
}else{
    rebus = JSON.parse(rebus)
}

export function initRebus(){
    rebus = localStorage.rebus ? JSON.parse(localStorage.rebus) : [];
}

export function getId(){
    let max = 0;
    for (let challenge of rebus){
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
        rebus.push(newRebus)
        localStorage.setItem("rebus", JSON.stringify(rebus))
    }
}

export function rebusExists(rightAnswer){
    if(rebus.some((rebus) => rebus.rightAnswer == rightAnswer)){
        return true
    }else{
        return false
    }
}
