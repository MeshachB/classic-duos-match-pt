const duos = [
  { match: "Kobe", made: "Shaq" },
  { match: "Batman", made: "Robin" },
  { match: "Kid", made: "Play" },
  { match: "Jordan", made: "Pippen" },
  { match: "Mario", made: "Luigi" },
  { match: "Snoop", made: "Dre" },
  { match: "Tom", made: "Jerry" },
  { match: "Lilo", made: "Stitch" },
  { match: "Steph", made: "Klay" },
  { match: "Will", made: "Carlton" },
];

let cards = [];
duos.forEach((pair) => {
  cards.push(pair.match, pair.made);
});

cards.sort(() => Math.random() - 0.5);

const board = document.getElementById("game-board");
const timerDisplay = document.getElementById("timer");
const runItBackBtn = document.getElementById("run-it-back"); 

let flippedCards = [];
let matched = 0;
let timeLeft = 180;
let timer; 


function createBoard() {
  cards.forEach((name) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;
    card.textContent = "?";
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
} 

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
    this.textContent = this.dataset.name;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const isPair = duos.some(
    (pair) =>
      (pair.match === card1.dataset.name && pair.made === card2.dataset.name) ||
      (pair.match === card2.dataset.name && pair.made === card1.dataset.name)
  );

    if (isPair) {
    matched += 2;
    flippedCards = [];
    if (matched === cards.length) endGame(true);
  } else {
    flippedCards.forEach((card) => {
      card.classList.remove("flipped");
      card.textContent = "?";
    });
    flippedCards = [];
  }
} 


function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Timer: ${timeLeft}s`;
    if (timeLeft <= 0) endGame(false);
  }, 1000);
}