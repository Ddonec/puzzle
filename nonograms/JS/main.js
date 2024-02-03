const nan1 = {
   task: 1,
   size: 5,
   sost: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   sol: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   podsk1: [1, 1, 1, 1, 1],
   podsk2: [5, 0, 0, 0, 0],
};

let newArr = [...nan1.sost];

let timer = false;
let seconds = 10;

function startTimer() {
   timer = setInterval(() => {
      seconds++;
      updateTimer();
   }, 1000);
}
function resetTimer() {
   stopTimer();
   seconds = 0;
   updateTimer();
   timer = false;
}

function stopTimer() {
   clearInterval(timer);
}
function updateTimer() {
   console.log(seconds);
   const time = document.querySelector(".timer");
   time.innerText = seconds;
}
const timerZone = document.createElement("div");
timerZone.classList.add("timer");
timerZone.innerText = seconds;
document.body.appendChild(timerZone);

const squareSol = document.createElement("div");
squareSol.classList.add("square-sol");
const topPodskazki = document.createElement("div");
topPodskazki.classList.add("top-podskazri");
const leftPodskazki = document.createElement("div");
leftPodskazki.classList.add("left-podskazki");

for (const value of nan1.podsk2) {
   const podsk2 = document.createElement("div");
   podsk2.classList.add("podsk2");
   podsk2.textContent = value;
   topPodskazki.appendChild(podsk2);
}

for (const value of nan1.podsk1) {
   const podsk1 = document.createElement("div");
   podsk1.classList.add("podsk1");
   podsk1.textContent = value;
   leftPodskazki.appendChild(podsk1);
}

const nonograma = document.createElement("div");
nonograma.id = "nonograma";

for (let i = 0; i < nan1.size; i++) {
   const rowContainer = document.createElement("div");
   rowContainer.classList.add("row-container");

   for (let j = 0; j < nan1.size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(nan1.sost[i * nan1.size + j] ? "black" : "white");

      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("contextmenu", handleContextMenu);

      rowContainer.appendChild(cell);
   }

   nonograma.appendChild(rowContainer);
}

const gameContainer = document.createElement("section");
gameContainer.classList.add("game-container");
gameContainer.appendChild(squareSol);
gameContainer.appendChild(topPodskazki);
gameContainer.appendChild(leftPodskazki);
gameContainer.appendChild(nonograma);

document.body.appendChild(gameContainer);

function handleCellClick(event) {
   if (event.button === 0) {
      this.classList.toggle("black");
      this.classList.remove("x");
      updateNewArr();
      if (!timer) {
         startTimer();
      }
      console.log(newArr);
   }
}

function handleContextMenu(event) {
   event.preventDefault();
   this.classList.toggle("x");
   this.classList.remove("black");
   updateNewArr();
   if (!timer) {
      startTimer();
   }
   console.log(newArr);
}
function updateNewArr() {
   newArr = Array.from(document.querySelectorAll(".row-container")).flatMap((row) => Array.from(row.querySelectorAll(".cell")).map((cell) => (cell.classList.contains("black") ? 1 : 0)));

   WinCheck(newArr, nan1.sol);
}

function WinCheck(arr1, arr2) {
   if (arr1.every((value, index) => value === arr2[index])) {
      console.log("you win");
      createModal();
   }
}

function createModal() {
   const fill = document.createElement("div");
   fill.classList.add("fill");

   const modal = document.createElement("div");
   modal.classList.add("modal");

   const modalContent = document.createElement("div");
   modalContent.classList.add("modal-content");

   const message = document.createElement("p");
   message.textContent = `Отлично! Вы решили нонограмму за ${seconds} секунд!`;
   stopTimer();

   const playAgainBtn = document.createElement("button");
   playAgainBtn.textContent = "Сыграть еще раз";
   playAgainBtn.addEventListener("click", playAgain);

   modalContent.appendChild(message);
   modalContent.appendChild(playAgainBtn);
   modal.appendChild(modalContent);
   document.body.appendChild(modal);
   document.body.appendChild(fill);
}

function playAgain() {
   const modal = document.querySelector(".modal");
   modal.remove();
   const fill = document.querySelector(".fill");
   fill.remove();
   resetTimer();

   nonograma.innerHTML = "";

   for (let i = 0; i < nan1.size; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row-container");

      for (let j = 0; j < nan1.size; j++) {
         const cell = document.createElement("div");
         cell.classList.add("cell");
         cell.classList.add(nan1.sost[i * nan1.size + j] ? "black" : "white");

         cell.addEventListener("click", handleCellClick);
         cell.addEventListener("contextmenu", handleContextMenu);

         rowContainer.appendChild(cell);
      }

      nonograma.appendChild(rowContainer);
   }
}
