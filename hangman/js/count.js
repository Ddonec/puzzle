document.addEventListener("DOMContentLoaded", function () {
   const btn = document.querySelector(".test-btn");
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

   const randomIndex = Math.floor(Math.random() * words.length);
   const wordObject = words[randomIndex];
   const word = Object.keys(wordObject)[0];
   const description = wordObject[word];
   const wordArray = word.toUpperCase().split("");
   console.log(wordArray);

   let count = 0;

   spanElement.classList.add("count-value");
   spanElement.textContent = `${count} / 6`;

   for (let letter of word) {
      const letterContainer = document.createElement("p");
      letterContainer.textContent = letter;
      wordContainer.appendChild(letterContainer);
   }
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

   function handleKeyClick(letter) {
      const keyContainers = document.querySelectorAll(".key-container");

      keyContainers.forEach((keyContainer) => {
         if (keyContainer.textContent === letter && !keyContainer.classList.contains("disabled")) {
            keyContainer.classList.add("disabled");

            console.log(`Key clicked: ${letter}`);
         }
      });
   }

   function gameOver() {
      alert("Game Over!");
      humanSlices.forEach((element) => {
         element.classList.add("none");
         count = 0;
         document.querySelector(".count-value").textContent = `${count} / 6`;
      });
   }

   btn.addEventListener("click", function () {
      if (count < humanSlices.length) {
         humanSlices[count].classList.remove("none");
         count += 1;
         console.log(count);
         document.querySelector(".count-value").textContent = `${count} / 6`;
      }
      if (count === 6) {
         setTimeout(() => {
            gameOver();
         }, 100);
      }
   });
});
