var saveInCart = localStorage.getItem('cartstorage')
var cartStorage;
if (saveInCart === null) {
    cartStorage = {}
}
else {
    cartStorage = JSON.parse(saveInCart);
}
updateCountInCart()
for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
    var products1 = document.getElementById("products-list-id");
    products1.innerHTML = products1.innerHTML + "<div>"
        + "<img src='" + BEAN_PRODUCTS[i].bigPhotoUrl + "' class='image'>"
        + "<div>" + BEAN_PRODUCTS[i].name + "</div>"
        + "<div>" + BEAN_PRODUCTS[i].price + "</div>"
        + "<button onClick='addToCart(" + BEAN_PRODUCTS[i].id + ")' class='button'>В корзину</button>"
        + "</div>"
}

function addToCart(id) {
    if (cartStorage[id] != undefined) {
        cartStorage[id]++;
    }
    else {
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