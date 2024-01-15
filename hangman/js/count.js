document.addEventListener("DOMContentLoaded", function () {
   const btn = document.querySelector(".test-btn");
   const humanSlices = document.querySelectorAll(".human-slice");
   const spanElement = document.createElement("span");
   const wordContainer = document.querySelector(".text-area__word");
   const questContainer = document.querySelector(".text-area__quest");
   const countContainer = document.querySelector(".text-area__count");
   let words = [
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

   let random = Math.floor(Math.random() * words.length);
   let wordObject = words[random];
   let word = Object.keys(wordObject)[0];
   let description = wordObject[word];
   let wordArray = word.toUpperCase().split("");
   let hideWordArray = new Array(wordArray.length).fill("_");
   console.log(wordArray);
   console.log(hideWordArray);
   console.log(words);

   let count = 0;

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
      alert("Game Over!");
      humanSlices.forEach((element) => {
         element.classList.add("none");
         count = 0;
         document.querySelector(".count-value").textContent = `${count} / 6`;

         pageClean();
         startNewGame();
         pageRender();
      });
   }
   function gameWinner() {
      alert(`Game Wimmer! Word is ${word} , count of false = ${count}`);
      humanSlices.forEach((element) => {
         element.classList.add("none");
         count = 0;
         document.querySelector(".count-value").textContent = `${count} / 6`;
      });
      console.log(words);
      pageClean();
      startNewGame();
      pageRender();
   }

   function updateCount() {
      humanSlices[count].classList.remove("none");
      count += 1;
      console.log(count);
      document.querySelector(".count-value").textContent = `${count} / 6`;
   }
});
