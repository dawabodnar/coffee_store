emptyCart();

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
    let saveInCart = localStorage.getItem('cartstorage')
    let cartStorage = JSON.parse(saveInCart);
    object.cart = cartStorage;
    console.log(object)
    var sentOrder = document.getElementById("sendOrder");
    sentOrder.innerHTML = "Ваше замовлення прийнято. Через декілька хвилин з вами звяжеться наш працівник. Дякуємо Вам"
}

function emptyCart() {
    let empty = document.getElementById("products-table")
    let saveInCart = localStorage.getItem('cartstorage')
    if (saveInCart === null) {
        empty.innerHTML = "Пусто"
    } else {
        let cartStorage = JSON.parse(saveInCart);
        let arrayId = Object.keys(cartStorage);
        for (var i = 0; i < arrayId.length; i++) {
            var numberId = arrayId[i];
            var productsTable = document.getElementById("products-table");
            productsTable.innerHTML = productsTable.innerHTML +
                "<div class='products-coffee-cart'>" +
                "<div class='info-coffee-cart'>" +
                "<img src='" + "../" + BEAN_PRODUCTS[numberId].bigPhotoUrl + "'  class='foto-cart'>" +
                "<div>" + BEAN_PRODUCTS[numberId].name + "</div>" + "</div>" +
                "<div>" + BEAN_PRODUCTS[numberId].price + "</div>" +
                "<div>" +
                "<input type='button' value='-' id='product-minus-qty-id' class='product-minus-qty' , onclick='buttonPlus()'>" +
                "<input value='0' id='product-text-id' class='product-text'>" +
                "<input type='button' value='+' id='product-plus-qty-id' class='product-plus-qty' , onclick='buttonMinus()'>" +
                "</div>" +
                "<div>" + 200 + "</div>" +
                "</div>";
        }

    }
}