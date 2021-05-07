updateHeaderCartFromLC(false);

function getCartFromLC() {
    let saveInCart = localStorage.getItem('cartstorage');
    if (saveInCart === null) {
        return {};
    } else {
        return JSON.parse(saveInCart);
    }
}

function setCartInLC(cart) {
    localStorage.setItem('cartstorage', JSON.stringify(cart));
}

function updateHeaderCartFromLC(withAnimation) {
    let cart = getCartFromLC();
    let headerCartNumber = document.getElementById("numberCart");
    let cartAmounts = Object.values(cart)
    let total = 0;
    for (var i = 0; i < cartAmounts.length; i++) {
        total = total + cartAmounts[i];
    }
    headerCartNumber.innerHTML = total;
    if (withAnimation) {
        document.querySelector('.number-cart').classList.add('animated');
        setTimeout(() => document.querySelector('.number-cart').classList.remove('animated'), 300);
    }
}

function changeItemAmountInCart(id, amount) {
    let cart = getCartFromLC();
    if (cart[id] != undefined) {
        cart[id] = cart[id] + amount;
    } else {
        cart[id] = amount;
    }
    setCartInLC(cart);
    updateHeaderCartFromLC(true);
}

function addOneItemToCart(id) {
    let plus = document.getElementById("product-plus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value++;
    changeItemAmountInCart(id, 1);
}

function removeOneItemFromCart(id) {
    let minus = document.getElementById("product-minus-qty-id");
    let amountButton = document.getElementById("product-text-id");
    amountButton.value--;
    changeItemAmountInCart(id, -1);
}