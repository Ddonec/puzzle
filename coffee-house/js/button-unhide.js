let coffeBtn = document.getElementById("show-more-button-coffee");

const productsCoffeeContainer = document.querySelector(".coffe-products-container");
coffeBtn.addEventListener("click", function () {
    const hiddenProducts = document.querySelectorAll(".cards-of-product div:nth-child(n + 5)");

    hiddenProducts.forEach((product) => {
        productsCoffeeContainer.style.maxHeight = productsCoffeeContainer.scrollHeight + "px";
        product.style.display = "block";
        product.style.opacity = "1";
    });
    setTimeout(() => {
        coffeBtn.style.display = "none";
    }, 200);
});

let cakeMoreBtn = document.getElementById("show-more-button-cakes");

const productsCakeContainer = document.querySelector(".cakes-product");
cakeMoreBtn.addEventListener("click", function () {
    const hiddenProducts = document.querySelectorAll(".cakes-product div:nth-child(n + 5)");

    hiddenProducts.forEach((product) => {
        productsCakeContainer.style.maxHeight = productsCakeContainer.scrollHeight + "px";
        product.style.display = "block";
        product.style.opacity = "1";
    });
    setTimeout(() => {
        cakeMoreBtn.style.display = "none";
    }, 200);
});

function hideCakes() {
    productsCakeContainer.style = "";
    cakeMoreBtn.style.display = "flex";
}
function hideCoffee() {
    productsCoffeeContainer.style = "";
    coffeBtn.style.display = "flex";
}
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        cakeMoreBtn.style.display = "none";
        coffeBtn.style.display = "none";
    } else {
        hideCakes();
        hideCoffee();
    }
});

document.querySelector(".coffe-tea-cakes-buttons-area").addEventListener("click", function () {
    hideCakes();
    hideCoffee();
});
