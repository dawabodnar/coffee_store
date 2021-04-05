var productId = 1;
console.log(BEAN_PRODUCTS[productId])
var fotoTag = document.getElementById("foto");
fotoTag.setAttribute("src", "../images/barista-amato-250g-zerno-1-300x472.jpg")

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