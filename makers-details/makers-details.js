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


var typeTag = document.getElementById("type")
typeTag.innerText = product.additionalInfo.type;

var textTag = document.getElementById("textId")
textTag.innerText = product.description;


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