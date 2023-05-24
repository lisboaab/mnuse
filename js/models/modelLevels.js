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

level1 = new Levels("1", "<img src='Sala-terapeuta_Prancheta 1 cópia.png' usemap='#image_map'><map name='image_map'><area alt='Google' title='Google' href='google.com' coords='1609,422 3100,412 3100,2639 1609,2609' shape='polygon'><area alt='yt' title='yt' href='youtube.cm' coords='4826,265 6337,314 6435,2492 4826,2658' shape='polygon'></map>", 3, 600)
level2 = new Levels("2", , 4, 600)