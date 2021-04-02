var saveInCart = localStorage.getItem('cartstorage')
var cartStorage;
if (saveInCart === null) {
    cartStorage = {}
} else {
    cartStorage = JSON.parse(saveInCart);
}
updateCountInCart()

function addToCart(id) {
    if (cartStorage[id] != undefined) {
        cartStorage[id]++;
    } else {
        cartStorage[id] = 1;
    }
    updateCountInCart()
    console.log(cartStorage)
    localStorage.setItem('cartstorage', JSON.stringify(cartStorage));
}

function updateCountInCart() {
    var number = document.getElementById("numberCart");
    var count = Object.keys(cartStorage).length;
    number.innerHTML = count;
}