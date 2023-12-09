const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const sliderCont = document.querySelector(".product-into-slider-container");
const sliderWidthContainer = document.querySelector(".product-slider-container");

const pag1 = document.querySelector(".pag-1");
const pag2 = document.querySelector(".pag-2");
const pag3 = document.querySelector(".pag-3");

let widthSlider = sliderWidthContainer.clientWidth;
let count = 1;
let isPaused = false;
let elapsedMilliseconds = 0;
let intervalId;

function switchSlide(direction) {
    if (intervalId) {
        clearInterval(intervalId);
        elapsedMilliseconds = 0;
    }

    if (direction === "left") {
        count = count === 1 ? 3 : count - 1;
    } else {
        count = count === 3 ? 1 : count + 1;
    }

    updateSlider();
    resetInterval();
}

function updateSlider() {
    sliderCont.style.transform = "translateX(-" + widthSlider * (count - 1) + "px)";
    updatePagination();
}

function updatePagination() {
    if (count === 1) {
        pag1Active();
    } else if (count === 2) {
        pag2Active();
    } else if (count === 3) {
        pag3Active();
    }
}

function resetInterval() {
    intervalId = setInterval(function () {
        if (!isPaused) {
            elapsedMilliseconds += 100;
            updatePagActiveWidth();
            if (elapsedMilliseconds >= 6000) {
                switchSlide("right");
            }
        }
    }, 100);
}

resetInterval();

sliderCont.addEventListener("mouseover", function () {
    isPaused = true;
});

sliderCont.addEventListener("mouseout", function () {
    isPaused = false;
});

window.addEventListener("resize", function () {
    widthSlider = sliderWidthContainer.clientWidth;
    updateSlider();
    updatePagActiveWidth();
});

leftArrow.addEventListener("click", function () {
    switchSlide("left");
});

rightArrow.addEventListener("click", function () {
    switchSlide("right");
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
}

function pag3Active() {
    pag1.classList.remove("pagactive");
    pag2.classList.remove("pagactive");
    pag3.classList.add("pagactive");
}

function updatePagActiveWidth() {
    const pagActive = document.querySelector(".pagactive::before");
    if (pagActive) {
        const maxAnimationTime = 6000;
        const widthPercentage = (elapsedMilliseconds / maxAnimationTime) * 100;
        if (widthPercentage >= 90) {
            pagActive.style.width = "0%";
        } else {
            pagActive.style.width = `${widthPercentage}%`;
        }
    }
}
