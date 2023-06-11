import * as dialogue from "./dialogueView.js"
import * as User from "../models/modelUsers.js"

if(User.getUserLogged().currentLevel == 0){
    dialogue.generateDialogue(0)
}else if(User.getUserLogged().currentLevel == 1){
    dialogue.generateDialogue(2)
}if(User.getUserLogged().currentLevel == 2){
    dialogue.generateDialogue(4)
}if(User.getUserLogged().currentLevel == 3){
    dialogue.generateDialogue(6)
}