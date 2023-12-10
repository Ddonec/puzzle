const closeBtnModal = document.querySelector(".close-btn-modal");
const greyBG = document.querySelector(".grey-bg");
const modalWindow = document.querySelector(".modal-coffe");

closeBtnModal.addEventListener("click", function () {
    greyBG.style.display = "none";
    modalWindow.style.display = "none";
});
