// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");
// const productType = urlParams.get("type");
var productId = 1;
console.log(BEAN_PRODUCTS[productId])
var foto = document.getElementById("foto1");
foto.setAttribute("src", "../" + BEAN_PRODUCTS[productId].bigPhotoUrl);
var brand = document.getElementById("idBrand")
brand.innerText = BEAN_PRODUCTS[productId].name;
var price = document.getElementById("idPrice");
price.innerText = BEAN_PRODUCTS[productId].price;

function send() {
    var nameCart = document.getElementById("name-cart");
    var surnameCart = document.getElementById("surname-cart");
    var contactCart = document.getElementById("contact-cart");
    var infoCart = document.getElementById("info-cart");
    var object = {};
    object.name = nameCart.value;
    object.surname = surnameCart.value;
    object.contact = contactCart.value;
    object.info = infoCart.value;
    // object.information = " Ім'я: " + nameCart.value + " Прізвище: " + surnameCart.value + " Номер: " + contactCart.value + " Дані відправки: " + infoCart.value;
    console.log(object)
}