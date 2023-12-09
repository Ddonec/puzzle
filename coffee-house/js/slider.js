const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cliderContainer = document.querySelector(".product-into-slider-container");
const cliderInfoContainer = document.querySelector(".product-slider-container");
const pagActive = document.querySelector(".pagination-indicator-ss > .pagactive > div");

const pag1 = document.querySelector(".pag-1");
const pag2 = document.querySelector(".pag-2");
const pag3 = document.querySelector(".pag-3");

let widthSlider = cliderInfoContainer.clientWidth;
let count = 1;
let isPaused = false;
let timer = 0;
let interval;

function switchSlide(direction) {
    if (interval) {
        clearInterval(interval);
        timer = 0;
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
    cliderContainer.style.transform = "translateX(-" + widthSlider * (count - 1) + "px)";
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
    interval = setInterval(function () {
        if (!isPaused) {
            timer += 100;
            updatePagActiveWidth();
            if (timer >= 6000) {
                switchSlide("right");
            }
        }
    }, 100);
}

resetInterval();

cliderContainer.addEventListener("mouseover", function () {
    isPaused = true;
    console.log(timer);
});

cliderContainer.addEventListener("mouseout", function () {
    isPaused = false;
    console.log(timer);
});

window.addEventListener("resize", function () {
    widthSlider = cliderInfoContainer.clientWidth;
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
    if (pagActive) {
        const maxAnimationTime = 6000;
        const widthPercentage = (timer / maxAnimationTime) * 100;
        pagActive.style.width = `${widthPercentage}%`;
    }
}
