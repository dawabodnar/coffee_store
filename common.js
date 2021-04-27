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
    console.log(Object.values(cartStorage), "кількість у хедері")
    let arrayAmount = Object.values(cartStorage)
    let total = 0;
    for (var i = 0; i < arrayAmount.length; i++) {
        total += arrayAmount[i];
        console.log(total)
        number.innerHTML = total;
    }
    // number.innerHTML = total;
}