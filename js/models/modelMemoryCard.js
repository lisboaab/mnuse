export class MemoryGame {
  constructor() {
    this.gameBoard = document.querySelector(".game-board");
    this.cards = document.querySelectorAll(".card");

    this.flippedCards = [];
    this.cardsMatched = 0;
    this.gameStarted = false;
  }

  init() {
    this.shuffleCards();
        this.startGame();
    this.cards.forEach((card) => {
      card.addEventListener("click", () => this.onCardClick(card));
    });
  }

  startGame() {
    this.gameStarted = true;
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
          console.log("finished");
          return true
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

