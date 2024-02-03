const gameContainer = document.getElementById("nonograma");

document.oncontextmenu = cmenu;
function cmenu() {
   return false;
}

var elements = document.getElementsByTagName("*");
for (var id = 0; id < elements.length; ++id) {
   elements[id].oncontextmenu = null;
}

for (let i = 0; i < 10; i++) {
   for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mousedown", handleMouseDown);
      gameContainer.appendChild(cell);
   }
}

function toggleCell(event) {
   event.preventDefault();

   this.classList.contains("cross")
      ? this.classList.remove("cross")
      : this.classList.toggle("clicked");
}

function handleMouseDown(event) {
   if (event.button === 2) {
      event.preventDefault();
      this.classList.contains("clicked")
         ? this.classList.remove("clicked")
         : this.classList.toggle("cross");
   }
}
gameContainer.addEventListener("click", function (event) {
   if (event.target.classList.contains("cell")) {
      toggleCell.call(event.target, event); 
   }
});
