showProductList();

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
    sentOrder.innerHTML = "Ваше замовлення прийнято.<br> Через декілька хвилин з вами звяжеться наш працівник.<br> Дякуємо Вам"
}

function showProductList() {
    let empty = document.getElementById("products-table")
    let saveInCart = localStorage.getItem('cartstorage')
    if (saveInCart === null) {
        empty.innerHTML = "Пусто"
    } else {
        let cartStorage = JSON.parse(saveInCart);
        let arrayId = Object.keys(cartStorage);
        for (var i = 0; i < arrayId.length; i++) {
            let productId = arrayId[i];
            let productSum = BEAN_PRODUCTS[productId].price * cartStorage[productId]
            let productsTable = document.getElementById("products-table");
            productsTable.innerHTML = productsTable.innerHTML +
                "<div class='products-coffee-cart'>" +
                "<div class='info-coffee-cart'>" +
                "<img src='" + "../" + BEAN_PRODUCTS[productId].bigPhotoUrl + "'  class='foto-cart'>" +
                "<div>" + BEAN_PRODUCTS[productId].name + "</div>" + "</div>" +
                "<div>" + BEAN_PRODUCTS[productId].price + "</div>" +
                "<div>" +
                "<input type='button' value='-' id='product-minus-qty-id' class='product-amount-button' , onclick='removeOneItemFromCartLocal(" + productId + ")'>" +
                "<input value='" + cartStorage[productId] + "' id='product-text-id-" + productId + "' class='product-text'>" +
                "<input type='button' value='+' id='product-plus-qty-id' class='product-amount-button' , onclick='addOneItemToCartLocal(" + productId + ")'>" +
                "</div>" +
                "<div id='product-sum-" + productId + "'>" + productSum + "</div>" +
                "</div>";
        }

    }
}

function addOneItemToCartLocal(id) {
    let amountButton = document.getElementById("product-text-id-" + id);
    amountButton.value++;
    changeItemAmountInCart(id, 1);

    let productList = getCartFromLC();
    let sumDiv = document.getElementById("product-sum-" + id);
    let newSum = BEAN_PRODUCTS[id].price * productList[id];
    sumDiv.innerText = newSum;
}

function removeOneItemFromCartLocal(id) {
    let amountButton = document.getElementById("product-text-id-" + id);

    if (amountButton.value > 0) {
        amountButton.value--;
        changeItemAmountInCart(id, -1);

        let productList = getCartFromLC();
        let sumDiv = document.getElementById("product-sum-" + id);
        let newSum = BEAN_PRODUCTS[id].price * productList[id];
        sumDiv.innerText = newSum;
    }
}