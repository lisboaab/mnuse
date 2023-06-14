import * as User from "./../models/modelUsers.js"
import * as Challenges from "./../models/modelChallenges.js"

const gameBoard = document.querySelector(".game-board");
const playRestartBtn = document.getElementById("play-restart-btn");
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("congrats-modal");
const closeModalBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const winTime = document.getElementById("win-time");

let flippedCards = [];
let cardsMatched = 0;
let gameStarted = false;



class Game {
  constructor() {
    this.gameBoard = document.querySelector(".game-board");
    this.playRestartBtn = document.getElementById("play-restart-btn");
    this.cards = document.querySelectorAll(".card");
    this.modal = new Modal();
    this.timer = new Timer(document.getElementById("timer"));

    this.flippedCards = [];
    this.cardsMatched = 0;
    this.gameStarted = false;
  }

  init() {
    this.shuffleCards();
    this.playRestartBtn.addEventListener("click", () => {
      this.playRestartBtn.classList.toggle("play-restar-btn--restart");
      if (this.gameStarted) {
        this.restartGame();
        this.shuffleCards();
      } else {
        this.startGame();
      }
    });
    this.cards.forEach((card) => {
      card.addEventListener("click", () => this.onCardClick(card));
    });
    this.modal.closeModalBtn.addEventListener("click", () =>
      this.modal.close()
    );
    this.modal.overlay.addEventListener("click", () => this.modal.close());
  }

  startGame() {
    this.gameStarted = true;
    this.playRestartBtn.textContent = "Restart";
    this.timer.start();
  }

  restartGame() {
    this.cards.forEach((card) => {
      card.classList.remove("flipped");
      card.classList.remove("matched");
    });
    this.flippedCards = [];
    this.cardsMatched = 0;
    this.gameStarted = false;
    this.playRestartBtn.textContent = "Play";
    this.timer.pause();
  }

  onCardClick(card) {
    if (
      card.classList.contains("flipped") ||
      card.classList.contains("matched") ||
      this.flippedCards.length >= 2 ||
      !this.gameStarted
    ) {
      return;
    }

    card.classList.add("flipped");
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      const [firstCard, secondCard] = this.flippedCards;

      let isMatch =
        firstCard.dataset.framework === secondCard.dataset.framework;

      if (isMatch) {
        firstCard.classList.add("flipped");
        secondCard.classList.add("flipped");
        this.cardsMatched += 2;
        this.flippedCards = [];

        // Check if the game has ended
        if (this.cardsMatched === this.cards.length) {
          this.timer.pauseNoReset();
          winTime.textContent = this.timer.getCurrentTime();
          this.modal.open();
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          this.flippedCards = [];
        }, 1000);
      }
    }
  }

  shuffleCards() {
    this.cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * this.cards.length);
      card.style.order = randomPos;
    });
  }
}

const game = new Game();
game.init();


//  BUTTON BACK
let btnBackSideInfo = document.getElementById("btnBackSideInfo");
btnBackSideInfo.addEventListener("click", function(event){
    event.preventDefault();
    User.changeLevelLoad(2);
    window.location.href = "level.html";
})


// BUTTON HELP
let textsHelpBtn = document.getElementById("textsHelpBtn");
let challenge = Challenges.challengesList.find(chall => chall.challengeID === "memoryCard");
let line = `${challenge.helpCard}`;
textsHelpBtn.innerHTML += line;


// FUNCTIONS TO THE CLOSE BUTTON OF THE CREATED MODALS ABOVE
let btnCloseChallengeCompleted = document.getElementById("btnCloseChallengeCompleted")
btnCloseChallengeCompleted.addEventListener("click", function(){
    let modal = document.getElementById("challengeAlreadyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeSucessfull = document.getElementById("btnCloseChallengeSucessfull")
btnCloseChallengeSucessfull.addEventListener("click", function(){
    let modal = document.getElementById("challengeSucessfullyCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})

let btnCloseChallengeNotCompleted = document.getElementById("btnCloseChallengeNotCompleted")
btnCloseChallengeNotCompleted.addEventListener("click", function(){
    let modal = document.getElementById("challengeNotCompleted");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
})