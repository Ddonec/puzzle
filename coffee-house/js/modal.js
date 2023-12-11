const closeBtnModal = document.querySelector(".close-btn-modal");
const greyBG = document.querySelector(".grey-bg");
const modalWindow = document.querySelector(".modal-coffe");
const productCart = document.querySelector(".product-cart");
const products = document.querySelectorAll(".product-cart");

const sv1 = document.querySelector(".s-v-1");
const sv2 = document.querySelector(".s-v-2");
const sv3 = document.querySelector(".s-v-3");
const dv1 = document.querySelector(".d-v-1");
const dv2 = document.querySelector(".d-v-2");
const dv3 = document.querySelector(".d-v-3");

const closeModalElementsArr = [greyBG, closeBtnModal];

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

    // console.log(image);
    // console.log(title);
    // console.log(description);
    // console.log(price);
    // console.log(cat);
}

function setActive(element, elements) {
    elements.forEach((e) => e.classList.remove("size-value-btn-active"));
    element.classList.add("size-value-btn-active");
}
sv1.addEventListener("click", () => setActive(sv1, [sv2, sv3]));
sv2.addEventListener("click", () => setActive(sv2, [sv1, sv3]));
sv3.addEventListener("click", () => setActive(sv3, [sv1, sv2]));

dv1.addEventListener("click", () => dv1.classList.toggle("size-value-btn-active"));
dv2.addEventListener("click", () => dv2.classList.toggle("size-value-btn-active"));
dv3.addEventListener("click", () => dv3.classList.toggle("size-value-btn-active"));



