import { arrOfMystery } from "./mystery.js";
import { nan1 } from "./mystery.js";
import { nan2 } from "./mystery.js";
import { nan3 } from "./mystery.js";
import { nan4 } from "./mystery.js";
import { nan11 } from "./mystery.js";
import { nan15 } from "./mystery.js";

const winSound = new Audio("assets/sounds/win.mp3");
const deleteSound = new Audio("assets/sounds/del.mp3");
const xSound = new Audio("assets/sounds/x.mp3");
const bSound = new Audio("assets/sounds/b.mp3");
function playBSound() {
   bSound.currentTime = 0;
   bSound.playbackRate = 2;
   bSound.play();
}
function playXSound() {
   xSound.currentTime = 0;
   xSound.playbackRate = 2;
   xSound.play();
}
function playDeleteSound() {
   deleteSound.currentTime = 0;
   deleteSound.playbackRate = 2;
   deleteSound.play();
}
let nanObj = nan1;
let newArr = [...nanObj.sost];
let timer = false;
let seconds = 0;
let saveObj = {};

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

const muteSwitch = document.createElement("div");
muteSwitch.classList.add("toggle-switch");
muteSwitch.dataset.mute = "false";

const muteLabel = document.createElement("label");
muteLabel.textContent = "Mute";
muteLabel.htmlFor = "muteSwitch";

function toggleMute() {
   const isMuted = muteSwitch.dataset.mute === "true";
   muteSwitch.dataset.mute = isMuted ? "false" : "true";

   winSound.volume = isMuted ? 1 : 0;
   deleteSound.volume = isMuted ? 1 : 0;
   xSound.volume = isMuted ? 1 : 0;
   bSound.volume = isMuted ? 1 : 0;
}

muteSwitch.addEventListener("click", toggleMute);

const themeSwitch = document.createElement("div");
themeSwitch.classList.add("toggle-theme-switch");
themeSwitch.dataset.theme = "light";

const themeLabel = document.createElement("label");
themeLabel.textContent = "Theme";
themeLabel.htmlFor = "themeSwitch";

const controlPanel = document.createElement("div");
controlPanel.classList.add("control-panel");

controlPanel.appendChild(muteSwitch);
controlPanel.appendChild(muteLabel);
controlPanel.appendChild(themeSwitch);
controlPanel.appendChild(themeLabel);
controlPanel.appendChild(timerZone);

function toggleTheme() {
   const body = document.body;

   themeSwitch.dataset.theme = themeSwitch.dataset.theme === "light" ? "dark" : "light";
   body.classList.toggle("dark", themeSwitch.dataset.theme === "dark");
}
themeSwitch.addEventListener("click", toggleTheme);

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
      if (this.classList.contains("black")) {
         this.classList.remove("black");
         playDeleteSound();
      } else {
         this.classList.add("black");
         this.classList.remove("x");
         this.textContent = "";
         playBSound();
      }
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
      playDeleteSound();
   } else {
      this.classList.toggle("x");
      this.classList.remove("black");
      this.textContent = "X";
      playXSound();
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
      winSound.play();

      const taskName = nanObj.task;
      const tasksize = nanObj.size;
      const timeSpent = seconds;

      const currentLeaderboardJSON = localStorage.getItem("leaderboard");
      const currentLeaderboard = currentLeaderboardJSON ? JSON.parse(currentLeaderboardJSON) : [];

      currentLeaderboard.push({ task: taskName, time: timeSpent, size: tasksize });

      currentLeaderboard.sort((a, b) => a.time - b.time);

      localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));

      createModal();
   } else {
      console.log("не успех");
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

   const chooseLevelBtns = document.createElement("button");
   chooseLevelBtns.textContent = "Choose Level";

   modalContent.appendChild(message);
   modalContent.appendChild(chooseLevelBtns);
   modal.appendChild(modalContent);
   document.body.appendChild(modal);
   document.body.appendChild(fill);
   chooseLevelBtns.addEventListener("click", () => {
      ChoseLevel();
      closeModal();
   });
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
   let saveObj = { ...nanObj };

   saveObj.sost = newArr;
   saveObj.timer = seconds;
   let newObJJSON = JSON.stringify(saveObj);
   localStorage.setItem("saveObj", newObJJSON);
   console.log("save game");
}

function showSolution() {
   console.log("Show game");
   nonograma.innerHTML = "";
   renderNonogramForSol();
}

function loadGame() {
   resetTimer();

   const nanObjJSON = localStorage.getItem("saveObj");

   if (nanObjJSON) {
      nanObj = JSON.parse(nanObjJSON);
      seconds = nanObj.timer || 0;
      updateTimer();
      console.log("Игра загружена");
      playAgain();
      startTimer();
   } else {
      alert("Нет сохранений");
   }
}

function ChoseLevel() {
   const fill = document.createElement("div");
   fill.classList.add("fill");
   const modal = document.createElement("div");
   modal.classList.add("modal");

   const modalContent = document.createElement("div");
   modalContent.classList.add("modal-content");
   const title = document.createElement("h2");
   title.textContent = "Choose Level";
   modalContent.appendChild(title);

   for (let i = 0; i < arrOfMystery.length; i++) {
      const levelBtn = document.createElement("button");
      levelBtn.textContent = `Level ${i + 1}`;
      levelBtn.addEventListener("click", () => {
         choseLevelBtn(i);
         closeModal();
      });
      modalContent.appendChild(levelBtn);
   }
   modal.appendChild(modalContent);
   document.body.appendChild(modal);
   document.body.appendChild(fill);
}

function choseLevelBtn(levelIndex) {
   nanObj = arrOfMystery[levelIndex];
   console.log(`Chose level ${levelIndex + 1}`);
   playAgain();
   resetTimer();
}

function leaderBoard() {
   console.log("Leaderboard");

   const leaderboardJSON = localStorage.getItem("leaderboard");
   const leaderboard = leaderboardJSON ? JSON.parse(leaderboardJSON) : [];

   const fill = document.createElement("div");
   fill.classList.add("fill");

   const modal = document.createElement("div");
   modal.classList.add("modal");

   const modalContent = document.createElement("div");
   modalContent.classList.add("modal-content");

   const title = document.createElement("h2");
   title.textContent = "Leaderboard";
   modalContent.appendChild(title);

   for (let i = 0; i < Math.min(5, leaderboard.length); i++) {
      const result = leaderboard[i];
      const resultItem = document.createElement("p");
      resultItem.textContent = `${i + 1}. Task: ${result.task}, Time: ${result.time} seconds`;
      modalContent.appendChild(resultItem);
   }
   const chooseLevelBtn = document.createElement("button");
   chooseLevelBtn.textContent = "Choose Level";
   chooseLevelBtn.addEventListener("click", () => {
      ChoseLevel();
      closeModal();
   });
   modalContent.appendChild(chooseLevelBtn);
   const restartBtn = document.createElement("button");
   restartBtn.textContent = "Restart Game";
   restartBtn.addEventListener("click", () => {
      restartGame();
      closeModal();
   });
   modalContent.appendChild(restartBtn);
   modal.appendChild(modalContent);
   document.body.appendChild(modal);
   document.body.appendChild(fill);
}
function randomGame() {
   console.log("randomGame");
   const randomIndex = Math.floor(Math.random() * arrOfMystery.length);
   nanObj = arrOfMystery[randomIndex];
   playAgain();
   resetTimer();
}

function renderNonogramForSol() {
   for (let i = 0; i < nanObj.size; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row-container");

      for (let j = 0; j < nanObj.size; j++) {
         const cell = document.createElement("div");
         cell.classList.add("cell");
         cell.classList.add(nanObj.sol[i * nanObj.size + j] === 1 ? "black" : nanObj.sol[i * nanObj.size + j] === 2 ? "x" : "white");

         if (nanObj.sol[i * nanObj.size + j] === 2) {
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
document.body.appendChild(controlPanel);
