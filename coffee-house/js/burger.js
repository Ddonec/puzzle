const burgerBtn = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelectorAll(".burger-menu li a");
const menuLink = document.querySelector(".menu-underline");
const body = document.querySelector("body");

let burgerStatus = false;

burgerBtn.addEventListener("click", function () {});

burgerBtn.addEventListener("click", function () {
    toggleBurgerMenu();
});

links.forEach((link) => {
    link.addEventListener("click", function () {
        closeBurgerMenu();
    });
});
menuLink.addEventListener("click", function () {
    closeBurgerMenu();
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        closeBurgerMenu();
    }
});

function toggleBurgerMenu() {
    if (!burgerStatus) {
        burgerBtn.classList.add("burger-button-active");
        burgerMenu.style.transform = "translateX(-16px)";
        body.classList.add("overflow-h");
    } else {
        burgerBtn.classList.remove("burger-button-active");
        burgerMenu.style.transform = "translateX(100vw)";
        body.classList.remove("overflow-h");
    }

    burgerStatus = !burgerStatus;
}

function closeBurgerMenu() {
    body.classList.remove("overflow-h");

    burgerBtn.classList.remove("burger-button-active");
    burgerMenu.style.transform = "translateX(100vw)";
    burgerStatus = false;
}
