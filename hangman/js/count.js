document.addEventListener("DOMContentLoaded", function () {
   const humanSlices = document.querySelectorAll(".human-slice");
   const spanElement = document.createElement("span");
   const wordContainer = document.querySelector(".text-area__word");
   const questContainer = document.querySelector(".text-area__quest");
   const countContainer = document.querySelector(".text-area__count");
   const mainContaine = document.querySelector("main");
   const words = [
      { sky: "The expanse of air over the Earth." },
      { ocean: "A vast body of saltwater." },
      { dance: "Expressive movement to music." },
      { forest: "A large area covered chiefly with trees." },
      { melody: "A sequence of musical tones." },
      { shadow: "A dark area or shape produced by an object blocking the direct light." },
      { sunrise: "The appearance of the sun above the horizon in the morning." },
      { river: "A large, flowing body of water." },
      { snow: "Frozen precipitation in the form of ice crystals." },
      { book: "A written or printed work consisting of pages." },
      { moon: "The natural satellite of the Earth." },
      { magic: "The power of apparently influencing events by using mysterious forces." },
      { star: "A celestial body that emits light." },
      { pizza: "A savory dish consisting of a usually round, flattened base of dough." },
      { rainbow: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light." },
      { flower: "The reproductive structure found in flowering plants." },
      { dragon: "A mythical, fire-breathing creature." },
      { galaxy: "A system of millions or billions of stars." },
      { heart: "The organ that pumps blood." },
      { coffee: "A brewed beverage made from roasted coffee beans." },
      { laughter: "The sound of amusement." },
      { love: "An intense feeling of deep affection." },
      { courage: "The ability to confront fear or adversity." },
      { camera: "A device for capturing visual images." },
      { music: "Art of combining sounds in a harmonious manner." },
      { adventure: "An unusual and exciting experience." },
      { sunset: "The daily disappearance of the sun below the horizon." },
      { treasure: "A quantity of precious metals, gems, or other valuable objects." },
      { moonlight: "The light of the moon." },
      { space: "The vast, seemingly infinite expanse that exists beyond Earth." },
      { castle: "A large building, typically fortified." },
      { dream: "A series of thoughts, images, and sensations occurring in a person's mind during sleep." },
      { apple: "A round fruit with red or green skin and a whitish interior." },
      { computer: "An electronic device for storing and processing data." },
      { elephant: "A large mammal with long tusks and a distinctive trunk." },
      { butterfly: "A winged insect with colorful wings and a slender body." },
      { mountain: "A large landform that rises prominently above its surroundings." },
      { umbrella: "A device, used for protection against rain or sunlight." },
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
   let modalStatus = false;
   console.log(word);

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
      mainContaine.style.background = `#00000000`;
      modalText.classList.remove("modal-content__winner");
      modalText.classList.remove("modal-content__loser");

      questContainer.textContent = description;
      countContainer.textContent = `Value: `;
      countContainer.appendChild(spanElement);

      console.log(word);
      console.log(words);
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
      if (!modalStatus) {
         keyContainers.forEach((keyContainer) => {
            if (keyContainer.textContent === letter && !keyContainer.classList.contains("disabled")) {
               for (let i = 0; i < wordArray.length; i++) {
                  if (wordArray[i] === letter) {
                     hideWordArray[i] = wordArray[i];
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
            }
         });
      }
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
      mainContaine.style.background = `#000000${count}0`;
      document.querySelector(".count-value").textContent = `${count} / 6`;
   }

   function createModal() {
      modal.classList.add("modal");
      modalContent.classList.add("modal-content");

      const playAgainBtn = document.createElement("button");
      playAgainBtn.textContent = "Играть еще раз";
      playAgainBtn.onclick = () => {
         if (words.length === 0) {
            alert("ты прошел игру");
         } else {
            startNewGame();
            closeModal();
            pageRender();
            resetHuman();
         }
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
      modalStatus = true;
   }

   function updateModal() {
      modalText.classList.add("modal-content__winner");
      modalText.innerHTML = `You win ^_^<br> Word is "${word.charAt(0).toUpperCase() + word.slice(1)}" <br> Count of false = ${count} <br> press "space" or "enter"`;
   }
   function updateModalLoser() {
      modalText.classList.add("modal-content__loser");

      modalText.innerHTML = `You lose =(<br> Word is "${word.charAt(0).toUpperCase() + word.slice(1)}" <br> press "spaсe" or "enter"`;
   }

   function closeModal() {
      modalAction = document.querySelector(".modal");
      if (modalAction) {
         modalAction.style.display = "none";
      }
      modalStatus = false;
   }
   document.addEventListener("keydown", function (event) {
      if (modalStatus) {
         if (event.key === "Enter" || event.key === " ") {
            if (modalAction.classList.contains("modal")) {
               if (words.length === 0) {
                  alert("ты прошел игру");
               } else {
                  startNewGame();
                  closeModal();
                  pageRender();
                  resetHuman();
               }
            }
         }
      }
   });
});
