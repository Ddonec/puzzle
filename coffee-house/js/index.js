const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderCont = document.querySelector(".product-into-slider-container");
const sliderWidthContainer = document.querySelector(
   ".product-slider-container"
);

const widthSlider = sliderWidthContainer.clientWidth;
let count = 1;

leftArrow.addEventListener("click", function () {
   console.log("10");
   if (count == 1) {
      sliderCont.style.transform = "translateX(0px)";
   } else if (count == 2) {
      sliderCont.style.transform = "translateX(0px)";
      count -= 1;
   } else if (count == 3) {
      sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
      count -= 1;
   }
   console.log(count);
});

rightArrow.addEventListener("click", function () {
   console.log("20");
   if (count == 1) {
      sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
      count += 1;
   } else if (count == 2) {
      let widthSlider2 = widthSlider * 2;
      sliderCont.style.transform = "translateX(-" + widthSlider2 + "px)";
      count += 1;
   } else if (count == 3) {
      sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
   }

   console.log(count);
});
