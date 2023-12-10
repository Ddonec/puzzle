const closeBtnModal = document.querySelector(".close-btn-modal");
const greyBG = document.querySelector(".grey-bg");
const modalWindow = document.querySelector(".modal-coffe");
const productCart = document.querySelector(".product-cart");

const closeModalElementsArr = [greyBG, closeBtnModal];
closeModalElementsArr.forEach(function (element) {
    element.addEventListener("click", function () {
        closeModal();
    });
});
// productCart.addEventListener("click", function () {
//     openModal();
// });

function openModaScriptl() {
    greyBG.classList.remove("none");
    modalWindow.classList.remove("none");
    greyBG.style = "";
    modalWindow.style = "";
}

function closeModal() {
    greyBG.style.display = "none";
    modalWindow.style.display = "none";
}

const products = document.querySelectorAll(".product-cart");

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

    const sizeValueModalBtns = document.querySelector(".size-value-modal-btns-cont");
    const additivesModalBtns = document.querySelector(".third-info-modal .size-value-modal-btns-cont");

    if (cat === "coffeeCat") {
        // Фильтры для кофе
        sizeValueModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>S</div>
        <p>200 ml</p>
    </div>
    <div class="size-value-btn">
        <div>M</div>
        <p>300 ml</p>
    </div>
    <div class="size-value-btn">
        <div>L</div>
        <p>400 ml</p>
    </div>`;
        additivesModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>1</div>
        <p>Sugar</p>
    </div>
    <div class="size-value-btn">
        <div>2</div>
        <p>Cinnamon</p>
    </div>
    <div class="size-value-btn">
        <div>3</div>
        <p>Syrup</p>
    </div>`;
    } else if (cat === "teaCat") {
        // Фильтры для чая
        sizeValueModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>S</div>
        <p>200 ml</p>
    </div>
    <div class="size-value-btn">
        <div>M</div>
        <p>300 ml</p>
    </div>
    <div class="size-value-btn">
        <div>L</div>
        <p>400 ml</p>
    </div>`;
        additivesModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>1</div>
        <p>Sugar</p>
    </div>
    <div class="size-value-btn">
        <div>2</div>
        <p>Lemon</p>
    </div>
    <div class="size-value-btn">
        <div>3</div>
        <p>Syrup</p>
    </div>`;
    } else if (cat === "dessertCat") {
        // Фильтры для десертов
        sizeValueModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>S</div>
        <p>50g</p>
    </div>
    <div class="size-value-btn">
        <div>M</div>
        <p>100g</p>
    </div>
    <div class="size-value-btn">
        <div>L</div>
        <p>150g</p>
    </div>`;
        additivesModalBtns.innerHTML = `
        <div class="size-value-btn">
        <div>1</div>
        <p>Berries</p>
    </div>
    <div class="size-value-btn">
        <div>2</div>
        <p>Nuts</p>
    </div>
    <div class="size-value-btn">
        <div>3</div>
        <p>Jam</p>
    </div>`;
    }
    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = price;

    console.log(image);
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(cat);
}

function updateModalButtonCat() {}
