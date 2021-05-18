const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productType = urlParams.get("type");

console.log(ACCESSORY_PRODUCTS[productId])

var fotoTag = document.getElementById("foto");
fotoTag.setAttribute("src", "../" + ACCESSORY_PRODUCTS[productId].bigPhotoUrl);

var priceTag = document.getElementById("price");
priceTag.innerText = ACCESSORY_PRODUCTS[productId].price + priceTag.innerText;

var textTag = document.getElementById("textId")
textTag.innerText = ACCESSORY_PRODUCTS[productId].description;

var brandTag = document.getElementById("brandId")
brandTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.brand;

var weightTag = document.getElementById("weightId")
weightTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.weight;

var coffeeTypeTag = document.getElementById("coffeeTypeId")
coffeeTypeTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.coffeeType;

var compositionTypeTag = document.getElementById("compositionTypeId")
compositionTypeTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.compositionType;

var caffeineContentTag = document.getElementById("caffeineContentId")
caffeineContentTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.caffeineContent;

var compositionTag = document.getElementById("compositionId")
compositionTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.composition;

var aromatizationTag = document.getElementById("aromatizationId")
aromatizationTag.innerText = ACCESSORY_PRODUCTS[productId].additionalInfo.aromatization;

function addToCarts() {
    let amountButton = document.getElementById("product-text-id");
    let amountButtonAsNumber = Number.parseInt(amountButton.value)

    changeItemAmountInCart(productId, amountButtonAsNumber);
}

function plusOneItemButton() {
    let plus = document.getElementById("product-plus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value++;
}

function minusOneItemButton(id) {
    let minus = document.getElementById("product-minus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value--;
}