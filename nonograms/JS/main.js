import { nan1 } from "./mystery.js";
import { nan2 } from "./mystery.js";
import { nan11 } from "./mystery.js";
import { nan15 } from "./mystery.js";

let nanObj = nan1;
let newArr = [...nanObj.sost];
let timer = false;
let seconds = 0;

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
   time.innerText = formatTimer(seconds);
}

function formatTimer(seconds) {
   const minutes = Math.floor(seconds / 60);
   const secondsValue = seconds % 60;
   const minCorrect = String(minutes).padStart(2, "0");
   const secCorrect = String(secondsValue).padStart(2, "0");

   return `${minCorrect}:${secCorrect}`;
}
const timerZone = document.createElement("div");
timerZone.classList.add("timer");
timerZone.innerText = formatTimer(seconds);

const buttonsContainerZone = document.createElement("div");
buttonsContainerZone.classList.add("button-container");

const saveButtonZone = document.createElement("button");
saveButtonZone.textContent = "Save game";
saveButtonZone.onclick = saveGame;

const restartButtonZone = document.createElement("button");
restartButtonZone.textContent = "Restart game";
restartButtonZone.onclick = restartGame;

const showSolutionZone = document.createElement("button");
showSolutionZone.textContent = "Show game solution";
showSolutionZone.onclick = showSolution;

const loadGameZone = document.createElement("button");
loadGameZone.textContent = "Load game";
loadGameZone.onclick = loadGame;

const ChoseLevelZone = document.createElement("button");
ChoseLevelZone.textContent = "Chose level";
ChoseLevelZone.onclick = ChoseLevel;

const leaderBoardlZone = document.createElement("button");
leaderBoardlZone.textContent = "Leader board";
leaderBoardlZone.onclick = leaderBoard;

document.body.appendChild(buttonsContainerZone);

buttonsContainerZone.appendChild(restartButtonZone);
buttonsContainerZone.appendChild(saveButtonZone);
buttonsContainerZone.appendChild(showSolutionZone);
buttonsContainerZone.appendChild(loadGameZone);
buttonsContainerZone.appendChild(ChoseLevelZone);
buttonsContainerZone.appendChild(leaderBoardlZone);

document.body.appendChild(timerZone);

const squareSol = document.createElement("div");
squareSol.classList.add("square-sol");
const topPodskazki = document.createElement("div");
topPodskazki.classList.add("top-podskazri");
const leftPodskazki = document.createElement("div");
leftPodskazki.classList.add("left-podskazki");
const nonogramaCont = document.createElement("div");
nonogramaCont.id = "nonogramaCont";
const nonograma = document.createElement("div");
nonograma.id = "nonograma";

function podskazkiCreate() {
   for (const value of nanObj.podsk2) {
      const podsk2 = document.createElement("div");
      podsk2.classList.add("podsk2");
      podsk2.textContent = value;
      topPodskazki.appendChild(podsk2);
   }

   for (const value of nanObj.podsk1) {
      const podsk1 = document.createElement("div");
      podsk1.classList.add("podsk1");
      podsk1.textContent = value;
      leftPodskazki.appendChild(podsk1);
   }
}
podskazkiCreate();

function renderNonogram() {
   for (let i = 0; i < nanObj.size; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row-container");

      for (let j = 0; j < nanObj.size; j++) {
         const cell = document.createElement("div");
         cell.classList.add("cell");
         cell.classList.add(nanObj.sost[i * nanObj.size + j] ? "black" : "white");

         cell.addEventListener("click", handleCellClick);
         cell.addEventListener("contextmenu", handleContextMenu);
         nonograma.addEventListener("contextmenu", function (e) {
            e.preventDefault();
         });

         rowContainer.appendChild(cell);
      }

      nonograma.appendChild(rowContainer);
   }
}
renderNonogram();
const gameContainer = document.createElement("section");
gameContainer.style.width = `calc(var(--razmer-cell) * ${nanObj.widthP + 2})`;

gameContainer.classList.add("game-container");
gameContainer.appendChild(squareSol);
gameContainer.appendChild(topPodskazki);
gameContainer.appendChild(leftPodskazki);
nonogramaCont.appendChild(nonograma);
gameContainer.appendChild(nonogramaCont);

document.body.appendChild(gameContainer);

function handleCellClick(event) {
   if (event.button === 0) {
      this.classList.toggle("black");
      this.classList.remove("x");
      this.textContent = "";
      updateNewArr();
      if (!timer) {
         startTimer();
      }
      console.log(newArr);
   }
}

function handleContextMenu(event) {
   event.preventDefault();
   const hasXClass = this.classList.contains("x");
   if (hasXClass) {
      this.classList.remove("x");
      this.textContent = "";
   } else {
      this.classList.add("x");
      this.classList.remove("black");
      this.textContent = "X";
   }
   updateNewArr();
   if (!timer) {
      startTimer();
   }
   console.log(newArr);
}
function updateNewArr() {
   newArr = Array.from(document.querySelectorAll(".row-container")).flatMap((row) => Array.from(row.querySelectorAll(".cell")).map((cell) => (cell.classList.contains("black") ? 1 : 0)));

   WinCheck(newArr, nanObj.sol);
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
   message.textContent = `Отлично! Вы решили нонограмму за ${formatTimer(seconds)} !`;
   stopTimer();

   const playAgainBtn = document.createElement("button");
   playAgainBtn.textContent = "Сыграть еще раз";
   playAgainBtn.addEventListener("click", closeModal);

   modalContent.appendChild(message);
   modalContent.appendChild(playAgainBtn);
   modal.appendChild(modalContent);
   document.body.appendChild(modal);
   document.body.appendChild(fill);
}

function closeModal() {
   const modal = document.querySelector(".modal");
   modal.remove();
   const fill = document.querySelector(".fill");
   fill.remove();
   playAgain();
}
function playAgain() {
   resetTimer();
   gameContainer.style.width = `calc(var(--razmer-cell) * ${nanObj.widthP + 2})`;

   const topPodskazki = document.querySelector(".top-podskazri");
   const leftPodskazki = document.querySelector(".left-podskazki");

   topPodskazki.textContent = "";
   leftPodskazki.textContent = "";

   podskazkiCreate();

   nonograma.innerHTML = "";
   nonograma.style.gridTemplateColumns = `repeat(${nanObj.size}, var(--razmer-cell))`;

   renderNonogram();
}

function restartGame() {
   console.log("restart game");
   playAgain();
}
function saveGame() {
   console.log("save game");
}
function showSolution() {
   console.log("Show game");
}
function loadGame() {
   console.log("Load last game");
}

function ChoseLevel() {
   const levelChoice = prompt("указать номер уровня");

   if (levelChoice === "1") {
      nanObj = nan1;
   } else if (levelChoice === "2") {
      nanObj = nan2;
   } else if (levelChoice === "3") {
      nanObj = nan11;
   } else if (levelChoice === "4") {
      nanObj = nan15;
   }
   console.log("Chose level");
   playAgain();
}
function leaderBoard() {
   console.log("Leaderboard");
}
