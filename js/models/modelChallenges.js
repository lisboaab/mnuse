class Challenges {
    challengeID = "";
    images = [];
    sounds = [];
    correctAnswers = [];
    helpCard = [];

    constructor(challengeID, images, sounds,correctAnswers,helpCard){
        this.challengeID = challengeID;
        this.images = images;
        this.sounds = sounds;
        this.correctAnswers = correctAnswers;
        this.helpCard = helpCard;
    }
}