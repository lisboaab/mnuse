import * as dialogue from "./dialogueView.js"
import * as User from "../models/modelUsers.js"

if(User.getUserLogged().currentLevel == 0){
    dialogue.generateDialogue(0)
}else if(User.getUserLogged().currentLevel == 2){
    dialogue.generateDialogue(2)
}else if(User.getUserLogged().currentLevel == 3){
    dialogue.generateDialogue(3)
}else if(User.getUserLogged().currentLevel == 4){
    dialogue.generateDialogue(4)
}