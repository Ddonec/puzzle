const closeBtnModal = document.querySelector(".close-btn-modal");
const greyBG = document.querySelector(".grey-bg");
const modalWindow = document.querySelector(".modal-coffe");
const productCart = document.querySelector(".product-cart");
const products = document.querySelectorAll(".product-cart");
const priceModal = document.getElementById("modal-price");

let priceModalReal = priceModal.textContent;
let actualValue = 0;

const sv1 = document.querySelector(".s-v-1");
const sv2 = document.querySelector(".s-v-2");
const sv3 = document.querySelector(".s-v-3");
const dv1 = document.querySelector(".d-v-1");
const dv2 = document.querySelector(".d-v-2");
const dv3 = document.querySelector(".d-v-3");

const closeModalElementsArr = [greyBG, closeBtnModal];
const sizeButtons = [sv1, sv2, sv3];

function priceLlifeUpdate(clickedButton) {
    sizeButtons.forEach((button) => {
        button.classList.remove("size-value-btn-active");
    });

    clickedButton.classList.add("size-value-btn-active");
}

closeModalElementsArr.forEach(function (element) {
    element.addEventListener("click", function () {
        closeModal();
    });
});

function openModaScriptl() {
    greyBG.classList.remove("none");
    modalWindow.classList.remove("none");
    greyBG.style = "";
    modalWindow.style = "";
    document.querySelector("body").style.overflow = "hidden";
}
function closeModal() {
    greyBG.style.display = "none";
    modalWindow.style.display = "none";
    document.querySelector("body").style = "";
    dv1.classList.remove("size-value-btn-active");
    dv2.classList.remove("size-value-btn-active");
    dv3.classList.remove("size-value-btn-active");
    setActive(sv1, [sv2, sv3]);
}

products.forEach((product) => {
    product.addEventListener("click", () => {
        openModal();
        const title = product.querySelector("ul li:first-child").textContent;
        const description = product.querySelector("ul li:last-child").textContent;
        const price = product.querySelector(".price-product").textContent;
        const image = product.querySelector(".image-zone-product img").getAttribute("src");
        const cat = product.dataset.category;

        openModal(image, title, description, price, cat);
    });
});

function openModal(image, title, description, price, cat) {
    openModaScriptl();
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");

    // const sizeValueModalBtns = document.querySelector(".size-value-modal-btns-cont");
    // const additivesModalBtns = document.querySelector(".third-info-modal .size-value-modal-btns-cont");

    if (cat === "coffeeCat") {
        document.querySelector(".s-v-1 p").textContent = "200 ml";
        document.querySelector(".s-v-2 p").textContent = "300 ml";
        document.querySelector(".s-v-3 p").textContent = "400 ml";
        document.querySelector(".d-v-1 p").textContent = "Sugar";
        document.querySelector(".d-v-2 p").textContent = "Lemon";
        document.querySelector(".d-v-3 p").textContent = "Syrup";
        // sizeValueModalBtns.innerHTML = `<div class="size-value-btn s-v-1 size-value-btn-active"><div>S</div><p>200 ml</p></div><div class="size-value-btn s-v-2"><div>M</div><p>300 ml</p></div><div class="size-value-btn s-v-3"><div>L</div><p>400 ml</p></div>`;
        // additivesModalBtns.innerHTML = `<div class="size-value-btn d-v-1"><div>1</div><p>Sugar</p></div><div class="size-value-btn d-v-2"><div>2</div><p>Cinnamon</p></div><div class="size-value-btn d-v-3"><div>3</div><p>Syrup</p></div>`;
    }
    if (cat === "teaCat") {
        document.querySelector(".s-v-1 p").textContent = "200 ml";
        document.querySelector(".s-v-2 p").textContent = "300 ml";
        document.querySelector(".s-v-3 p").textContent = "400 ml";
        document.querySelector(".d-v-1 p").textContent = "Sugar";
        document.querySelector(".d-v-2 p").textContent = "Lemon";
        document.querySelector(".d-v-3 p").textContent = "Syrup";
        // sizeValueModalBtns.innerHTML = `<div class="size-value-btn s-v-1 size-value-btn-active"><div>S</div><p>200 ml</p></div><div class="size-value-btn s-v-2"><div>M</div><p>300 ml</p></div><div class="size-value-btn s-v-3"><div>L</div><p>400 ml</p></div>`;
        // additivesModalBtns.innerHTML = `<div class="size-value-btn d-v-1"><div>1</div><p>Sugar</p></div><div class="size-value-btn d-v-2"><div>2</div><p>Lemon</p></div><div class="size-value-btn d-v-3"><div>3</div><p>Syrup</p></div>`;
    }
    if (cat === "dessertCat") {
        document.querySelector(".s-v-1 p").textContent = "50 g";
        document.querySelector(".s-v-2 p").textContent = "100 g";
        document.querySelector(".s-v-3 p").textContent = "200 g";
        document.querySelector(".d-v-1 p").textContent = "Berries";
        document.querySelector(".d-v-2 p").textContent = "Nuts";
        document.querySelector(".d-v-3 p").textContent = "Jam";
        // sizeValueModalBtns.innerHTML = `<div class="size-value-btn s-v-1 size-value-btn-active"><div>S</div><p>50 g</p></div><div class="size-value-btn s-v-2"><div>M</div><p>100 g</p></div><div class="size-value-btn s-v-3"><div>L</div><p>200 g</p></div>`;
        // additivesModalBtns.innerHTML = `<div class="size-value-btn d-v-1"><div>1</div><p>Berries</p></div><div class="size-value-btn d-v-2"><div>2</div><p>Nuts</p></div><div class="size-value-btn d-v-3"><div>3</div><p>Jam</p></div>`;
    }

    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = price;

    priceModalReal = price;
    actualValue = Number.parseFloat(modalPrice.textContent.slice(1));

    // console.log(image);
    // console.log(title);
    // console.log(description);
    // console.log(price);
    // console.log(cat);
    console.log(actualValue);
}

function setActive(element, elements) {
    elements.forEach((e) => e.classList.remove("size-value-btn-active"));
    element.classList.add("size-value-btn-active");
}

function priceLlifeUpdate(clickedButton) {
    sizeButtons.forEach((button) => {
        button.classList.remove("size-value-btn-active");
    });

    clickedButton.classList.add("size-value-btn-active");

    let basePrice = Number.parseFloat(priceModalReal.slice(1));

    // Учтем размер
    if (clickedButton === sv1) {
        actualValue = basePrice;
    } else if (clickedButton === sv2) {
        actualValue = basePrice + 0.5;
    } else if (clickedButton === sv3) {
        actualValue = basePrice + 1;
    }

    // Учтем добавки
    if (dv1.classList.contains("size-value-btn-active")) {
        actualValue += 0.5; // Предполагаемая цена за добавку
    }

    if (dv2.classList.contains("size-value-btn-active")) {
        actualValue += 0.5; // Предполагаемая цена за добавку
    }

    if (dv3.classList.contains("size-value-btn-active")) {
        actualValue += 0.5; // Предполагаемая цена за добавку
    }
}

sv1.addEventListener("click", () => {
    setActive(sv1, [sv2, sv3]);
    priceLlifeUpdate(sv1);
});

sv2.addEventListener("click", () => {
    setActive(sv2, [sv1, sv3]);
    priceLlifeUpdate(sv2);
});

sv3.addEventListener("click", () => {
    setActive(sv3, [sv1, sv2]);
    priceLlifeUpdate(sv3);
});

function toggleActiveClass(element) {
    if (element.classList.contains("size-value-btn-active")) {
        element.classList.remove("size-value-btn-active");
        actualValue -= 0.5;
    } else {
        element.classList.add("size-value-btn-active");
        actualValue += 0.5;
    }
}

dv1.addEventListener("click", () => toggleActiveClass(dv1));
dv2.addEventListener("click", () => toggleActiveClass(dv2));
dv3.addEventListener("click", () => toggleActiveClass(dv3));

modalWindow.addEventListener("click", function () {
    if (Number.isInteger(actualValue)) {
        priceModal.textContent = "$" + actualValue + ".00";
    } else {
        priceModal.textContent = "$" + actualValue + "0";
    }
    console.log(actualValue);
});

// if (dv1.classList.contains("size-value-btn-active")) {
//     if (Number.isInteger(actualValue)) {
//         priceModal.textContent = "$" + actualValue + ".00";
//     } else {
//         priceModal.textContent = "$" + actualValue + "0";
//     }
// }
// if (dv2.classList.contains("size-value-btn-active")) {
// }
// if (dv3.classList.contains("size-value-btn-active")) {
// }
// if (dv1.classList.contains("size-value-btn-active") && dv2.classList.contains("size-value-btn-active")) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         // console.log(priceModalReal);
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + ".00";

//         // console.log("четное");
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + "0";

//         // console.log("нечетное");
//         // console.log(Number.parseFloat(priceModalReal.slice(1)) + 1);
//         // console.log(priceModalReal);
//     }
// }
// if (dv2.classList.contains("size-value-btn-active") && dv3.classList.contains("size-value-btn-active")) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + ".00";
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + "0";
//     }
// }
// if (dv3.classList.contains("size-value-btn-active") && dv2.classList.contains("size-value-btn-active")) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + ".00";
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + "0";
//     }
// }
// if (dv3.classList.contains("size-value-btn-active") && dv1.classList.contains("size-value-btn-active")) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + ".00";
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1) + "0";
//     }
// }
// if (
//     dv3.classList.contains("size-value-btn-active") &&
//     dv2.classList.contains("size-value-btn-active") &&
//     dv1.classList.contains("size-value-btn-active")
// ) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1.5) + "0";
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1)) + 1.5) + ".00";
//     }
// }
// if (
//     !dv3.classList.contains("size-value-btn-active") &&
//     !dv2.classList.contains("size-value-btn-active") &&
//     !dv1.classList.contains("size-value-btn-active")
// ) {
//     if (Number.isInteger(Number.parseFloat(priceModalReal.slice(1)))) {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1))) + ".00";
//     } else {
//         priceModal.textContent = "$" + String(Number.parseFloat(priceModalReal.slice(1))) + "0";
//     }
// }
