buttonPlus()
updateCountInCart();
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productType = urlParams.get("type");

console.log(BEAN_PRODUCTS[productId])

var fotoTag = document.getElementById("foto");
fotoTag.setAttribute("src", "../" + BEAN_PRODUCTS[productId].bigPhotoUrl);

var priceTag = document.getElementById("price");
priceTag.innerText = BEAN_PRODUCTS[productId].price + priceTag.innerText;

var textTag = document.getElementById("textId")
textTag.innerText = BEAN_PRODUCTS[productId].description;

var brandTag = document.getElementById("brandId")
brandTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.brand;

var weightTag = document.getElementById("weightId")
weightTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.weight;

var coffeeTypeTag = document.getElementById("coffeeTypeId")
coffeeTypeTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.coffeeType;

var compositionTypeTag = document.getElementById("compositionTypeId")
compositionTypeTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.compositionType;

var caffeineContentTag = document.getElementById("caffeineContentId")
caffeineContentTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.caffeineContent;

var compositionTag = document.getElementById("compositionId")
compositionTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.composition;

var aromatizationTag = document.getElementById("aromatizationId")
aromatizationTag.innerText = BEAN_PRODUCTS[productId].additionalInfo.aromatization;


function buttonPlus() {
    let plus = document.getElementById("product-plus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value++;
}

function buttonMinus() {
    let minus = document.getElementById("product-minus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value--;
}



function addToCarts() {
    let saveInCart = localStorage.getItem('cartstorage')
    let cartStorage = JSON.parse(saveInCart);
    let cartAmount = cartStorage[productId];
    if (cartAmount == null) {
        cartAmount = 0;
    }
    let amountButton = document.getElementById("product-text-id");
    console.log("це кнопка кількості ", amountButton.value);
    console.log("це кількість у корзині ", cartAmount)
    let amountButtonAsNumber = Number.parseInt(amountButton.value)
    let newAmount = amountButtonAsNumber + cartAmount;
    // console.log("нова кількість ", newAmount)
    // console.log(typeof Number.parseInt(amountButton.value))
    // console.log(typeof cartAmount)
    console.log("корзина до присвоєння нової кількості", cartStorage[productId]);
    cartStorage[productId] = newAmount;
    console.log("корзина після присвоєння нової кількості", cartStorage[productId]);
    localStorage.setItem('cartstorage', JSON.stringify(cartStorage));
    updateCountInCart()
}