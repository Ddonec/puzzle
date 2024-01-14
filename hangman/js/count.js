document.addEventListener("DOMContentLoaded", function () {
   const btn = document.querySelector(".test-btn");
   const humanSlices = document.querySelectorAll(".human-slice");
   let count = 0;

   btn.addEventListener("click", function () {
      if (count < humanSlices.length) {
         humanSlices[count].classList.remove("none");
         count += 1;
         console.log(count);
      } else {
         alert("you lose");
         count = 0;
         humanSlices.forEach((element) => {
            element.classList.add("none");
         });
      }
   });

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
   const wordContainer = document.querySelector(".text-area__word");
   const questContainer = document.querySelector(".text-area__quest");

   for (let letter of word) {
      const letterContainer = document.createElement("p");
      letterContainer.textContent = letter;
      wordContainer.appendChild(letterContainer);
   }
   questContainer.textContent = description;

});
