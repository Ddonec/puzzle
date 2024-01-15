document.addEventListener("DOMContentLoaded", function () {
   const humanSlices = document.querySelectorAll(".human-slice");
   const spanElement = document.createElement("span");
   const wordContainer = document.querySelector(".text-area__word");
   const questContainer = document.querySelector(".text-area__quest");
   const countContainer = document.querySelector(".text-area__count");
   const words = [
      { apple: "A round fruit with red or green skin and a whitish interior." },
      { guitar: "A musical instrument, usually having six strings, played by plucking or strumming." },
      { computer: "An electronic device for storing and processing data." },
      { elephant: "A large mammal with long tusks and a distinctive trunk." },
      { butterfly: "A winged insect with colorful wings and a slender body." },
      { mountain: "A large landform that rises prominently above its surroundings." },
      { umbrella: "A device consisting of a collapsible circular frame covered with fabric, used for protection against rain or sunlight." },
      { journey: "The act of traveling from one place to another." },
      { whisper: "To speak or communicate in a soft, hushed voice." },
      { victory: "The act of achieving success in challenge." },
   ];
   const modal = document.createElement("div");
   const modalContent = document.createElement("div");
   const modalText = document.createElement("p");

   let random = Math.floor(Math.random() * words.length);
   let wordObject = words[random];
   let word = Object.keys(wordObject)[0];
   let description = wordObject[word];
   let wordArray = word.toUpperCase().split("");
   let hideWordArray = new Array(wordArray.length).fill("_");
   let count = 0;
   console.log(wordArray);
   console.log(hideWordArray);
   console.log(words);

   spanElement.classList.add("count-value");
   spanElement.textContent = `${count} / 6`;

   pageRender();

   function randomWord() {
      random = Math.floor(Math.random() * words.length);
      return words[random];
   }

   function startNewGame() {
      wordObject = randomWord();
      word = Object.keys(wordObject)[0];
      description = wordObject[word];
      wordArray = word.toUpperCase().split("");
      hideWordArray = new Array(wordArray.length).fill("_");
      pageClean();
      renderWordContainer(hideWordArray, wordContainer);
      questContainer.textContent = description;
      countContainer.textContent = `Value: `;
      countContainer.appendChild(spanElement);

      console.log(wordArray);
      console.log(hideWordArray);
      console.log(words);
      console.log(word);
   }

   function pageClean() {
      wordContainer.innerHTML = "";
      questContainer.innerHTML = "";
      countContainer.innerHTML = "";
      document.querySelector(".text-area__keyboard").innerHTML = "";
   }
   function pageRender() {
      renderWordContainer(hideWordArray, wordContainer);

      questContainer.textContent = description;
      countContainer.textContent = `Value: `;
      countContainer.appendChild(spanElement);

      const keyboardContainer = document.querySelector(".text-area__keyboard");

      for (let i = 65; i <= 90; i++) {
         const keyContainer = document.createElement("div");
         const letter = String.fromCharCode(i);
         keyContainer.className = "key-container";
         keyContainer.textContent = letter;
         keyboardContainer.appendChild(keyContainer);

         keyContainer.addEventListener("click", function () {
            handleKeyClick(letter);
         });

         window.addEventListener("keydown", function (event) {
            const pressedLetter = event.key.toUpperCase();
            if (pressedLetter === letter) {
               handleKeyClick(letter);
            }
         });
      }
   }

   function renderWordContainer(wordArray, container) {
      wordContainer.innerHTML = "";
      for (let letter of wordArray) {
         const letterContainer = document.createElement("p");
         letterContainer.textContent = letter;
         container.appendChild(letterContainer);
      }
   }

   function handleKeyClick(letter) {
      const keyContainers = document.querySelectorAll(".key-container");

      let status = false;

      keyContainers.forEach((keyContainer) => {
         if (keyContainer.textContent === letter && !keyContainer.classList.contains("disabled")) {
            for (let i = 0; i < wordArray.length; i++) {
               if (wordArray[i] === letter) {
                  hideWordArray[i] = wordArray[i];
                  console.log(wordArray);
                  console.log(hideWordArray);
                  renderWordContainer(hideWordArray, wordContainer);
               }
               if (hideWordArray.every((value, index) => value === wordArray[index])) {
                  setTimeout(() => {
                     gameWinner();
                  }, 100);
               }
               if (wordArray[i] === letter) {
                  status = true;
               }
            }
            keyContainer.classList.add("disabled");

            if (!status) {
               updateCount();
               if (count === 6) {
                  setTimeout(() => {
                     gameOver();
                  }, 100);
               }
            }

            console.log(letter);
         }
      });
   }

   function gameOver() {
      gameEnd();
      updateModalLoser();

   }
   function gameWinner() {
      gameEnd();
      updateModal();
   }

   function gameEnd() {
      let index = words.findIndex((obj) => Object.keys(obj)[0] === word);
      words.splice(index, 1);
      console.log(words);
      const modalCreate = createModal(count);
      document.body.appendChild(modalCreate);
      openModal();
   }

   function resetHuman() {
      humanSlices.forEach((element) => {
         element.classList.add("none");
      });
      count = 0;
      document.querySelector(".count-value").textContent = `${count} / 6`;
   }
   function updateCount() {
      humanSlices[count].classList.remove("none");
      count += 1;
      console.log(count);
      document.querySelector(".count-value").textContent = `${count} / 6`;
   }

   function createModal(count) {
      modal.classList.add("modal");
      modalContent.classList.add("modal-content");
      modalText.textContent = `Game Wimmer! Word is ${word} , count of false = ${count}`;

      const playAgainBtn = document.createElement("button");
      playAgainBtn.textContent = "Играть еще раз";
      playAgainBtn.onclick = () => {
         startNewGame();
         closeModal();
         pageRender();
         resetHuman();
      };

      modalContent.textContent = "";
      modalContent.appendChild(modalText);
      modalContent.appendChild(playAgainBtn);

      modal.textContent = "";
      modal.appendChild(modalContent);

      return modal;
   }
   let modalAction;

   function openModal() {
      modalAction = document.querySelector(".modal");
      if (modalAction) {
         modalAction.style.display = "flex";
      }
   }

   function updateModal() {
      modalText.innerHTML = `Game Wimmer!<br> Word is ${word} <br> count of false = ${count}`;
   }
   function updateModalLoser() {
      modalText.innerHTML = `Game Loser!<br> Word is ${word} <br> count of false = ${count}`;
   }

   function closeModal() {
      modalAction = document.querySelector(".modal");
      if (modalAction) {
         modalAction.style.display = "none";
      }
   }
});
