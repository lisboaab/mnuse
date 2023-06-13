export class Challenges {
    challengeID = "";
    images = [];
    sounds = [];
    correctAnswers = [];
    helpCard = [];

    constructor(challengeID, images = [], sounds = [],correctAnswers = [],helpCard){
        this.challengeID = challengeID;
        this.images = images;
        this.sounds = sounds;
        this.correctAnswers = correctAnswers;
        this.helpCard = helpCard;
    }
}

export let challengesList = [];
challengesList.push(new Challenges ("rebus", [], [], [], "A REBUS is a picture representation of a name, work, or phrase. Each puzzle in this challenge portrays a common word or phrase. Can you guess what it is?"));
challengesList.push(new Challenges ("dragAndDrop", [], [], [], "Drag a number and drop it next to the figure you think it relates to. If the number sticks to the figure, you got it rigth!"));
challengesList.push(new Challenges ("videoBullying", [], [], [], "Watch this video produces by UNESCO about bullying and get one step closer to unlock Lily's memories!"));



console.log(challengesList)
