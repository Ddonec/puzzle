import { arrOfMystery } from "./mystery.js";
import { nan1 } from "./mystery.js";
import { nan2 } from "./mystery.js";
import { nan3 } from "./mystery.js";
import { nan4 } from "./mystery.js";
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
   updateTimer(seconds);
   timer = false;
}

function stopTimer() {
   clearInterval(timer);
}
function updateTimer() {
   console.log(seconds);
   const time = document.querySelector(".timer");
   time.innerText = formatTimer();
}

function formatTimer() {
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

const randomGameZone = document.createElement("button");
randomGameZone.textContent = "Random game";
randomGameZone.onclick = randomGame;

document.body.appendChild(buttonsContainerZone);

buttonsContainerZone.appendChild(restartButtonZone);
buttonsContainerZone.appendChild(saveButtonZone);
buttonsContainerZone.appendChild(showSolutionZone);
buttonsContainerZone.appendChild(loadGameZone);
buttonsContainerZone.appendChild(ChoseLevelZone);
buttonsContainerZone.appendChild(leaderBoardlZone);
buttonsContainerZone.appendChild(randomGameZone);

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
   topPodskazki.innerHTML = "";
   leftPodskazki.innerHTML = "";
   for (const value of nanObj.podsk2) {
      const podsk2 = document.createElement("div");
      podsk2.classList.add("podsk2");

      if (Array.isArray(value)) {
         podsk2.innerHTML = value.join("<br>");
      } else {
         podsk2.textContent = value;
      }

      topPodskazki.appendChild(podsk2);
   }

   for (const value of nanObj.podsk1) {
      const podsk1 = document.createElement("div");
      podsk1.classList.add("podsk1");

      if (Array.isArray(value)) {
         podsk1.textContent = value.join(" ");
      } else {
         podsk1.textContent = value;
      }

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
         cell.classList.add(nanObj.sost[i * nanObj.size + j] === 1 ? "black" : nanObj.sost[i * nanObj.size + j] === 2 ? "x" : "white");

         if (nanObj.sost[i * nanObj.size + j] === 2) {
            cell.textContent = "X";
         } else {
            cell.textContent = "";
         }
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
      this.classList.toggle("x");
      this.classList.remove("black");
      this.textContent = "X";
   }

   updateNewArr();
   if (!timer) {
      startTimer();
   }
}

function updateNewArr() {
   newArr = Array.from(document.querySelectorAll(".row-container")).flatMap((row) =>
      Array.from(row.querySelectorAll(".cell")).map((cell) => {
         const isBlack = cell.classList.contains("black");
         const isX = cell.classList.contains("x");

         if (isBlack) {
            return 1;
         } else if (isX) {
            return 2;
         } else {
            return 0;
         }
      })
   );

   WinCheck(newArr, nanObj.sol);
}

function WinCheck(arr1, arr2) {
   const possArr1 = arr1.reduce((acc, val, i) => {
      if (val === 1) {
         acc.push(i);
      }
      return acc;
   }, []);

   const possArr2 = arr2.reduce((acc, val, i) => {
      if (val === 1) {
         acc.push(i);
      }
      return acc;
   }, []);

   if (JSON.stringify(possArr1) === JSON.stringify(possArr2)) {
      console.log("успех");
      createModal();
   } else {
      console.log(" не успех");
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
   resetTimer();
}
function playAgain() {
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
   resetTimer();
}
function saveGame() {
   let newObJ = { ...nanObj };

   newObJ.sost = newArr;
   newObJ.timer = seconds;
   let newObJJSON = JSON.stringify(newObJ);
   localStorage.setItem("newObJ", newObJJSON);
   console.log("save game");
}

function showSolution() {
   console.log("Show game");
}

function loadGame() {
   const nanObjJSON = localStorage.getItem("newObJ");

   if (nanObjJSON) {
      nanObj = JSON.parse(nanObjJSON);
      seconds = nanObj.timer || 0;
      updateTimer();
      console.log("Игра загружена");
      playAgain();
      startTimer();
      return seconds;
   } else {
      console.log("Сохраненной игры не найдено");
      return null;
   }
}

function ChoseLevel() {
   const levelChoice = prompt("указать номер уровня");
   nanObj = arrOfMystery[levelChoice - 1];

   console.log("Chose level");
   playAgain();
   resetTimer();
}
function leaderBoard() {
   const nanObjJSON = localStorage.getItem("newObJ");

   console.log("Leaderboard");
   nanObj = JSON.parse(nanObjJSON);
   seconds = nanObj.timer;
   console.log(seconds);
}
function randomGame() {
   console.log("randomGame");
}
