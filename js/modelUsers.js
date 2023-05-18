class Users {
    #username = "";
    #email = "";
    #password = "";
    #avatar = "";
    #currentLevel = 0;
    #finishedChallenges = [];
    #badges = [];

    constructor(username, email, password, avatar, currentLevel, finishedChallenges, badges){
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#avatar = avatar;
        this.#currentLevel = currentLevel;
        this.#finishedChallenges = finishedChallenges;
        this.#badges = badges
    }
}