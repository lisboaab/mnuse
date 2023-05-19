class Levels {
    levelName = "";
    imagePath = "";
    numberOfChallenges= 0;
    limitTime = 0;

    constructor(levelName, imagePath, numberOfChallenges,limitTime){
        this.levelName = levelName;
        this.imagePath = imagePath;
        this.numberOfChallenges = numberOfChallenges;
        this.limitTime = limitTime
    }
}