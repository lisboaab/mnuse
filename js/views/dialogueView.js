export function generateDialogue(value){

  const dialogue = {start: ["Hello Lily, welcome to another therapy session!", "These sessions are to unlock the memories that were forgotten by your subconscious.", "This is a common phenom among people that went through traumatic situations, it's called Dissociative amnesia.", "I know that it can be a confusing and scary journey, but I'm here to help you in the process!"],
  map: ["It's crucial to comprehend that each brain part is responsible for several aspects of our body, like our memory, our emotions, our likes and our experiences.", "When you click in a brain part an informative card will show up about that specific lobe.", "It's essential to pay attention to every given information, it can be fundamental!", "Each room represents a specific moment in your life, and you will need to solve challenges to go to the next room.", "Together we will be able to recover your lost memories. Let's start?"],
  lvl1: ["As you know, you had to change countries and go live with your grandmother when you were younger and you had to go to a new school where you didn't know anyone, in this first phase we will explore memories related to your adaptation to the new school.", "Observe the ambience carefully and pay attention to every detail. Is there something that draws your attention? Something that seems familiar? Try to interact with the objects and remember that this is a safe and controlled place."],
  lvl1End: ["Congratulations for figuring out your first memory! What a complicated phase! Sadly, bullying is quite common, especially in schools.", "It's important to remember that if you're going through something like that you should seek help from closer adults.", "Everyone deserves to be treated with respect and dignity, never let anyone make you think otherwise.", "Ready to unlock more memories? Get ready!"],
  lvl2: ["Lily, in our sessions you didn't mention the fact that you don't feel comfortable inside a car!", "This feeling can be related to some forgotten memory...", "While you explore the room it can be important to pay attention to your emotions, are you anxious, scared?", "Remember that this is a safe and controlled room so there's no need to be worried about what can happen.", "Good luck Lily!"],
  lvl2End: ["Congratulations for finishing another phase!", "I'm sure this wasn't an easy memory to remember but I believe there's some comfort in knowing what happened to your parents.", "Drunk driving is a dangerous and irresponsible choice, and it can have devastating effects, including car accidents that can be fatal.", "But the fear of driving or being inside a car shouldn't be a barrier forever.",  "Try to get in the car with someone you trust, practice breathing techniques to control your anxiety and remember that it's normal to be scared but you can't let the fear rule your live."],
  lvl3: ["Congratulations Lily! In this last phase there's no challenges, but you can only get in the phase if you insert the words correctly.", "In this phase, you'll watch a video that has all your lost memories.", "Before we proceed, I'd like to remind you that if you feel uncomfortable or overwhelmed you can simply leave.", "Your comfort is my priority."],
  end: ["I hope you feel a sense of relief and comprehension. If there's anything else I can help you with, I'm here!", "Congratulations on finishing the Escape Room!"]}
  
  let currentPhraseIndex = 0

  function displayNextPhrase(dialogue) {
    if (currentPhraseIndex < dialogue.length) {
      const currentPhrase = dialogue[currentPhraseIndex]
      currentPhraseIndex += 1
      displayDialogue(currentPhrase)
    } else {
      window.location.href = "../../html/mapa.html"
    }
  }

  if(value == 0){
    displayNextPhrase(dialogue.start)
  }else if(value == 1){
    displayNextPhrase(dialogue.map)
  }else if(value == 2){
    displayNextPhrase(dialogue.lvl1)
  }else if(value == 3){
    displayNextPhrase(dialogue.lvl1End)
  }else if(value == 4){
    displayNextPhrase(dialogue.lvl2)
  }else if(value == 5){
    displayNextPhrase(dialogue.lvl2End)
  }else if(value == 6){
    displayNextPhrase(dialogue.lvl3)
  }else if(value == 7){
    displayNextPhrase(dialogue.end)
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if(value == 0){
      displayNextPhrase(dialogue.start)
    }else if(value == 1){
      displayNextPhrase(dialogue.map)
    }else if(value == 2){
      displayNextPhrase(dialogue.lvl1)
    }else if(value == 3){
      displayNextPhrase(dialogue.lvl1End)
    }else if(value == 4){
      displayNextPhrase(dialogue.lvl2)
    }else if(value == 5){
      displayNextPhrase(dialogue.lvl2End)
    }else if(value == 6){
      displayNextPhrase(dialogue.lvl3)
    }else if(value == 7){
      displayNextPhrase(dialogue.end)
    }
  })

  function displayDialogue(phrase){
    const dialogue = document.getElementById("dialogue")
    dialogue.innerHTML = phrase
  }
}