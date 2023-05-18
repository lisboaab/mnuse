class Users {
    #username = "";
    #email = "";
    #password = "";
    #avatar = "";
    #currentLevel = 0;
    #finishedChallenges = [];
    #badges = [];

    constructor(username, email, password, avatar, currentLevel, finishedChallenges, badges){
        username = this.username;
        email = this.email;
        password = this.password;
        avatar = this.avatar;
        currentLevel = this.currentLevel;
        finishedChallenges = this.finishedChallenges;
        badges = this.badges
    }
}