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