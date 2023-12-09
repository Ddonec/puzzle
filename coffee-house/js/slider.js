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
let secundomer = 0;
let interval;
let touchStartPozition; 

sliderCont.addEventListener("touchstart", function (event) {
    touchStartPozition = event.touches[0].clientX;
    isPaused = true;
});

sliderCont.addEventListener("touchend", function (event) {
    if (touchStartPozition !== undefined) {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartPozition;

        if (deltaX > 0) {
            console.log("свайп вправо");
            pagProgressBarReset();
            resetInterval();
            switchSlide("left");
        } else if (deltaX < 0) {
            console.log("свайп влево");
            pagProgressBarReset();
            resetInterval();
            switchSlide("right");
        } else {
            console.log("нет свайпа");
        }
        isPaused = false;
        touchStartPozition = undefined;
    }
});

function switchSlide(direction) {
    if (interval) {
        clearInterval(interval);
        secundomer = 0;
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
    secundomer = 0;
    clearInterval(interval);
    interval = setInterval(function () {
        if (!isPaused) {
            secundomer += 100;
            updatePagActiveWidth();
            if (secundomer >= 6000) {
                secundomer = 0;
                switchSlide("right");
            }
        }
    }, 100);
}

resetInterval();

sliderCont.addEventListener("mouseover", function (event) {
    if (event.type !== "touchend") {
        isPaused = true;
    }
});

sliderCont.addEventListener("mouseout", function (event) {
    if (event.type !== "touchend") {
        isPaused = false;
    }
});

window.addEventListener("resize", function () {
    widthSlider = sliderWidthContainer.clientWidth;
    updateSlider();
    updatePagActiveWidth();
});

leftArrow.addEventListener("click", function () {
    pagProgressBarReset();
    switchSlide("left");
});

rightArrow.addEventListener("click", function () {
    pagProgressBarReset();
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
    const pagActive = document.querySelector(".pagination-indicator-ss > .pagactive > div");
    if (pagActive) {
        const maxAnimationTime = 6000;
        const widthPercentage = (secundomer / maxAnimationTime) * 100;
        if (widthPercentage >= 99) {
            pagProgressBarReset();
        } else {
            pagActive.style.width = `${widthPercentage}%`;
        }
    }
}
function pagProgressBarReset() {
    const pagActive = document.querySelector(".pagination-indicator-ss > .pagactive > div");
    pagActive.style.width = "0%";
}
