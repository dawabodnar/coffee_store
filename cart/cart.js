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
    // object.information = " Ім'я: " + nameCart.value + " Прізвище: " + surnameCart.value + " Номер: " + contactCart.value + " Дані відправки: " + infoCart.value;
    console.log(object)
    var sent = document.getElementById("send1");
    sent.innerHTML = "Ваше замовлення прийнято. Через декілька хвилин з вами звяжеться наш працівник. Дякуємо Вам"
}

function emptyCart() { // якщо корзина пустий то відображати слово пусто а якщо ні то наповнювати корзину списком
    let empty = document.getElementById("products-table")
    let saveInCart = localStorage.getItem('cartstorage')
    if (saveInCart === null) {
        empty.innerHTML = "Пусто"
    } else {
        let cartStorage = JSON.parse(saveInCart);
        console.log(Object.keys(cartStorage));
        console.log(cartStorage)
        console.log(saveInCart)
        for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
            var mas = Object.keys(cartStorage);
            var num = mas[i];
            var productsTable = document.getElementById("products-table");
            productsTable.innerHTML = productsTable.innerHTML +
                "<div class='Price'>" +
                "<div class='grid-name'>" +
                "<img src='" + BEAN_PRODUCTS[num].bigPhotoUrl + "' id='foto1' class='foto-cart'>" +
                "<div id='idBrand' class='text-name'>" + BEAN_PRODUCTS[num].name + "</div>" + "</div>" +
                "<div>" + BEAN_PRODUCTS[num].price + "</div>" +
                "<div>" + cartStorage[num] + "</div>" +
                "<div>" + 200 + "</div>";
            // console.log(num)
        }

    }


}