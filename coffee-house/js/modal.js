const closeBtnModal = document.querySelector(".close-btn-modal");
const greyBG = document.querySelector(".grey-bg");
const modalWindow = document.querySelector(".modal-coffe");
const productCart = document.querySelector(".product-cart");

closeBtnModal.addEventListener("click", function () {
    greyBG.style.display = "none";
    modalWindow.style.display = "none";
});
productCart.addEventListener("click", function () {
    greyBG.classList.remove("none");
    modalWindow.classList.remove("none");
    greyBG.style = "";
    modalWindow.style = "";
});
