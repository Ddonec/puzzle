const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderCont = document.querySelector(".product-into-slider-container");
const sliderWidthContainer = document.querySelector(
   ".product-slider-container"
);

const pag1 = document.querySelector(".pag-1");
const pag2 = document.querySelector(".pag-2");
const pag3 = document.querySelector(".pag-3");

const widthSlider = sliderWidthContainer.clientWidth;
let count = 1;

leftArrow.addEventListener("click", function () {
   if (count == 1) {
      sliderCont.style.transform = "translateX(0px)";
   } else if (count == 2) {
      sliderCont.style.transform = "translateX(0px)";
      count -= 1;
      pag1.classList.add("pagactive");
      pag2.classList.remove("pagactive");
      pag3.classList.remove("pagactive");
   } else if (count == 3) {
      sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
      count -= 1;
      pag1.classList.remove("pagactive");
      pag2.classList.add("pagactive");
      pag3.classList.remove("pagactive");
   }
   console.log(widthSlider);
   console.log(count);
});

rightArrow.addEventListener("click", function () {
   if (count == 1) {
      sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
      count += 1;
      pag1.classList.remove("pagactive");
      pag2.classList.add("pagactive");
      pag3.classList.remove("pagactive");
   } else if (count == 2) {
      let widthSlider2 = widthSlider * 2;
      sliderCont.style.transform = "translateX(-" + widthSlider2 + "px)";
      count += 1;
      pag1.classList.remove("pagactive");
      pag2.classList.remove("pagactive");
      pag3.classList.add("pagactive");
   } else if (count == 3) {
      let widthSlider2 = widthSlider * 2;
      sliderCont.style.transform = "translateX(-" + widthSlider2 + "px)";
   }

   console.log(widthSlider);
   console.log(count);
});
