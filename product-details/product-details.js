const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productType = urlParams.get("type");
const product = findProductById(productId);

var fotoTag = document.getElementById("foto");
fotoTag.setAttribute("src", "../" + product.bigPhotoUrl);

var priceTag = document.getElementById("price");
priceTag.innerText = product.price + priceTag.innerText;

var brandTag = document.getElementById("brandId")
brandTag.innerText = product.additionalInfo.brand;

var weightTag = document.getElementById("weightId")
weightTag.innerText = product.additionalInfo.weight;

var coffeeTypeTag = document.getElementById("coffeeTypeId")
coffeeTypeTag.innerText = product.additionalInfo.coffeeType;

var compositionTypeTag = document.getElementById("compositionTypeId")
compositionTypeTag.innerText = product.additionalInfo.compositionType;

var caffeineContentTag = document.getElementById("caffeineContentId")
caffeineContentTag.innerText = product.additionalInfo.caffeineContent;

var compositionTag = document.getElementById("compositionId")
compositionTag.innerText = product.additionalInfo.composition;

var aromatizationTag = document.getElementById("aromatizationId")
aromatizationTag.innerText = product.additionalInfo.aromatization;

var description = document.getElementById("description")
description.innerHTML = product.description;

function addToCarts() {
    let amountButton = document.getElementById("product-text-id");
    let amountButtonAsNumber = Number.parseInt(amountButton.value)
    changeItemAmountInCart(productId, amountButtonAsNumber);
}

function plusOneItemButton() {
    let amountButton = document.getElementById("product-text-id");
    amountButton.value++;
}

function minusOneItemButton(id) {
    let amountButton = document.getElementById("product-text-id");
    if (amountButton.value > 0) {
        amountButton.value--;
    }
}