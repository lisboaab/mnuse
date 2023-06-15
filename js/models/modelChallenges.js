export class Challenges {
    challengeID = "";
    helpCard = [];

    constructor(challengeID,helpCard){
        this.challengeID = challengeID;
        this.helpCard = helpCard;
    }
}

export let challengesList = [];
challengesList.push(new Challenges ("rebus", "A REBUS is a picture representation of a name, work, or phrase. Each puzzle in this challenge portrays a common word or phrase. Can you guess what it is? Note: Don't forget to press 'ENTER' to validade your answer!"));
challengesList.push(new Challenges ("dragAndDrop", "Drag a number and drop it next to the figure you think it relates to. If the number fades out, you got it right!"));
challengesList.push(new Challenges ("videoBullying", "Watch this video produced by UNESCO about bullying and get one step closer to unlock Lily's memories!"));
challengesList.push(new Challenges ("memoryCard", "Click on the cards one at a time and try to find its pair"));
challengesList.push(new Challenges ("hangMan", "Try to guess the missing words on Lily's diary! Tap a letter and see if it matches any of the blank spaces, but be careful, in this challenge you have only 6 tries!"));
challengesList.push(new Challenges ("radio", "Click on the number boxes, TURN ON YOUR AUDIO, and try to match the sound you hear to the images."));
challengesList.push(new Challenges ("connectTheDots", "Click and hold on the first dot and see where it sticks to. Connect all the dots to see the image hidden behind them!"));
challengesList.push(new Challenges ("videoLevel3", "All Lily's memories are unlocked, congratulations! Press play to see everything that was once forgotten!"));



console.log(challengesList)
