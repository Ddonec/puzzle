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
