renderTotalSum();
showProductList();

function send() {
    var nameCart = document.getElementById("name-cart").value;
    var surnameCart = document.getElementById("surname-cart").value;
    var contactCart = document.getElementById("contact-cart").value;
    var infoCart = document.getElementById("info-cart").value;
    var sentOrder = document.getElementById("sendOrder");
    let cart = getCartFromLC();
    
    if (Object.keys(cart).length === 0) {
        sentOrder.innerHTML = "Корзина пуста.";
    } else if (nameCart === "" || surnameCart === "" || contactCart === "" || infoCart === "") {
        sentOrder.innerHTML = "Заповніть всі необхідні поля.";
    } else {
        var object = {};
        object.name = nameCart;
        object.surname = surnameCart;
        object.contact = contactCart;
        object.info = infoCart;
        let saveInCart = localStorage.getItem('cartstorage')
        let cartStorage = JSON.parse(saveInCart);
        object.cart = cartStorage;
        console.log(object);
        sentOrder.innerHTML = "Ваше замовлення прийнято. Через декілька хвилин з вами звяжеться наш працівник. Дякуємо Вам!";
        cleanCartInLC();
        renderTotalSum();
        showProductList();
        updateHeaderCartFromLC(true);
    }
}

function showProductList() {
    let productsTable = document.getElementById("products-table");
    let cartFromLC = getCartFromLC();
    let cartKeys = Object.keys(cartFromLC)
    if (cartKeys.length === 0) {
        productsTable.innerHTML = "Пусто";
    } else {
        for (var i = 0; i < cartKeys.length; i++) {
            let productId = cartKeys[i];
            let product = findProductById(productId);
            let productSum = product.price * cartFromLC[productId];
            productsTable.innerHTML = productsTable.innerHTML +
                "<div class='products-coffee-cart'>" +
                "<div class='info-coffee-cart'>" +
                "<img src='" + "../" + product.bigPhotoUrl + "'  class='foto-cart'>" +
                "<div>" + product.name + "</div>" + "</div>" +
                "<div>" + product.price + "</div>" +
                "<div>" +
                "<input type='button' value='-' id='product-minus-qty-id' class='product-amount-button' , onclick='removeOneItemFromCartLocal(\"" + productId + "\")'>" +
                "<input value='" + cartFromLC[productId] + "' id='product-text-id-" + productId + "' class='product-text'>" +
                "<input type='button' value='+' id='product-plus-qty-id' class='product-amount-button' , onclick='addOneItemToCartLocal(\"" + productId + "\")'>" +
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
    let newSum = findProductById(id).price * productList[id];
    sumDiv.innerText = newSum;
    renderTotalSum();
}

function removeOneItemFromCartLocal(id) {
    let amountButton = document.getElementById("product-text-id-" + id);

    if (amountButton.value > 0) {
        amountButton.value--;
        changeItemAmountInCart(id, -1);

        let productList = getCartFromLC();
        let sumDiv = document.getElementById("product-sum-" + id);
        let newSum = findProductById(id).price * productList[id];
        sumDiv.innerText = newSum;
        renderTotalSum();
    }
}

function renderTotalSum() {
    let sumToPay = document.getElementById("sumToPay");
    let cartFromLC = getCartFromLC();
    let cartKeys = Object.keys(cartFromLC);
    let totalSum = 0;
    if (cartKeys.length !== 0) {
        for (var i = 0; i < cartKeys.length; i++) { 
            let productId = cartKeys[i];
            let product = findProductById(productId);
            let productSum = product.price * cartFromLC[productId]
            totalSum += productSum;
        }
    }
    sumToPay.innerHTML = totalSum;
}