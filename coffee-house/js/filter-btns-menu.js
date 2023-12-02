const coffeeBtn = document.querySelector(".coffe-btn-menu");
const teaBtn = document.querySelector(".tea-btn-menu");
const cakeBtn = document.querySelector(".cake-btn-mebu");

const coffeeCards = document.querySelector(".cards-of-product");
const teaCards = document.querySelector(".products-tea");
const cakesCards = document.querySelector(".cake-products-container");

coffeeBtn.addEventListener("click", function () {
    coffeeCards.classList.remove("none");
    teaCards.classList.add("none");
    cakesCards.classList.add("none");
    coffeeBtn.classList.add("active-shop");
    teaBtn.classList.remove("active-shop");
    cakeBtn.classList.remove("active-shop");
});
teaBtn.addEventListener("click", function () {
    coffeeCards.classList.add("none");
    teaCards.classList.remove("none");
    cakesCards.classList.add("none");
    coffeeBtn.classList.remove("active-shop");
    teaBtn.classList.add("active-shop");
    cakeBtn.classList.remove("active-shop");
});
cakeBtn.addEventListener("click", function () {
    coffeeCards.classList.add("none");
    teaCards.classList.add("none");
    cakesCards.classList.remove("none");
    coffeeBtn.classList.remove("active-shop");
    teaBtn.classList.remove("active-shop");
    cakeBtn.classList.add("active-shop");
});
