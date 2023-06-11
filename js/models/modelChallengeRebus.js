export default class Rebus {
    id = 0;
    imgUrl = "";
    rigthAnswer = "";
    textHelpBtn = "";

    constructor(imgUrl,rigthAnswer,textHelpBtn){
        this.id = getId();
        this.imgUrl = imgUrl;
        this.rigthAnswer = rigthAnswer;
        this.textHelpBtn = textHelpBtn;
    }

    get imgUrl(){
        return this.imgUrl
    }
    get rigthAnswer(){
        return this.rigthAnswer
    }
    get textHelpBtn(){
        return this.textHelpBtn
    }

    set imgUrl(newUrl){
        this.imgUrl = newUrl
    }
    set rigthAnswer(newAnswer){
        this.rigthAnswer = newAnswer
    }
    set textHelpBtn(newText){
        this.textHelpBtn = newText
    }
}

export const challengesRebus = [];

challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus1.png","one in a million","Try to separate the number inside of the word, put them in the same sentence and guess it!"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus2.png","think outside of the box","different from convetional. Term commonly used to instigate people to be creative and innovative."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus3.png","somewhere over the rainbow","Title of a very famous song."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus4.png","happy hour","Hour of the day where co-workers get out of the office and can enjoy the company of one another in a restaurant or a bar"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus5.png","earring","Object used to garnish ones ear."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus6.png","hot dog","Common streetfood originally invented in the USA"))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus7.png","it is raining man","Title of a pop song released in 1983 by The Weather Girls."))
challengesRebus.push(new Rebus("../assets/imgs/classroom-rebus8.png","breakfast","Meal usually taken in the morning."))

export function getId(){
    let max = 0;
    for (let challenge of challengesRebus){
        if (challenge.id > max){
            max = challenge.id
        }
    }
    return max+1;
}