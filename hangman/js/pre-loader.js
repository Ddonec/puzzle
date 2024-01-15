document.addEventListener("DOMContentLoaded", function () {
   document.querySelector("body").innerHTML = `  
   <main>
    <section class="visual-area">
       <div class="hangman-visual-box">
          <img class="human-slice none" id="head" src="assets/content/head.svg" alt="" />
          <img class="human-slice none" id="body" src="assets/content/body.svg" alt="" />
          <img class="human-slice none" id="lhand" src="assets/content/hand-one.svg" alt="" />
          <img class="human-slice none" id="rhand" src="assets/content/hand-two.svg" alt="" />
          <img class="human-slice none" id="lleg" src="assets/content/hand-one.svg" alt="" />
          <img class="human-slice none" id="rleg" src="assets/content/hand-two.svg" alt="" />
       </div>
       <h1>Hangman game</h1>
    </section>
    <section class="text-area">
       <div class="text-area__word"></div>
       <div class="text-area__quest"></div>
       <div class="text-area__count"></div>
       <div class="text-area__keyboard"></div>
    
    </section>
    </main>
    <script src="js/count.js"></script>
    `;
});
