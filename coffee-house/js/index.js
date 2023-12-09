const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderCont = document.querySelector(".product-into-slider-container");
const sliderWidthContainer = document.querySelector(".product-slider-container");
const activeBar = document.querySelector(".pagactive::before");

const pag1 = document.querySelector(".pag-1");
const pag2 = document.querySelector(".pag-2");
const pag3 = document.querySelector(".pag-3");

let widthSlider = sliderWidthContainer.clientWidth;
let count = 1;

window.addEventListener("resize", function () {
    widthSlider = sliderWidthContainer.clientWidth;
});
window.addEventListener("resize", function () {
    widthSlider = sliderWidthContainer.clientWidth;
    count = 1;
    sliderCont.style.transform = "translateX(0px)";
    pag1Active();
});
leftArrow.addEventListener("click", function () {
    if (count == 1) {
        let widthSlider2 = widthSlider * 2;
        sliderCont.style.transform = "translateX(-" + widthSlider2 + "px)";
        count = 3;
        pag3Active();
    } else if (count == 2) {
        sliderCont.style.transform = "translateX(0px)";
        count -= 1;
        pag1Active();
    } else if (count == 3) {
        sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
        count -= 1;
        pag2Active();
    }
    console.log(widthSlider);
    console.log(count);
});

rightArrow.addEventListener("click", function () {
    if (count == 1) {
        sliderCont.style.transform = "translateX(-" + widthSlider + "px)";
        count += 1;
        pag2Active();
    } else if (count == 2) {
        let widthSlider2 = widthSlider * 2;
        sliderCont.style.transform = "translateX(-" + widthSlider2 + "px)";
        count += 1;
        pag3Active();
    } else if (count == 3) {
        sliderCont.style.transform = "translateX(0px)";
        count = 1;
        pag1Active();
    }

    console.log(widthSlider);
    console.log(count);
});
function pag1Active() {
    pag1.classList.add("pagactive");
    pag2.classList.remove("pagactive");
    pag3.classList.remove("pagactive");
}
function pag2Active() {
    pag1.classList.remove("pagactive");
    pag2.classList.add("pagactive");
    pag3.classList.remove("pagactive");
    activeBar.style.width = "100%";
}
function pag3Active() {
    pag1.classList.remove("pagactive");
    pag2.classList.remove("pagactive");
    pag3.classList.add("pagactive");
}
