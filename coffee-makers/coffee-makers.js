for (var i = 0; i < ACCESSORY_PRODUCTS.length; i++) {
    var coffeeMakers = document.getElementById("coffee-makers-id");
    coffeeMakers.innerHTML = coffeeMakers.innerHTML + "<div class='makers-container'>" +
        "<div onclick='selectProduct(\"" + ACCESSORY_PRODUCTS[i].id + "\")'>" +
        "<img src='" + ACCESSORY_PRODUCTS[i].bigPhotoUrl + "' class='image'>" +
        "<div>" + ACCESSORY_PRODUCTS[i].name + "</div>" +
        "<div>" + ACCESSORY_PRODUCTS[i].price + "</div>" +
        "</div>" +
        "<button onClick='changeItemAmountInCart(" + ACCESSORY_PRODUCTS[i].id + ", 1" + ")' class='button'>В корзину</button>" +
        "</div>"

}

function selectProduct(id) {
    var productType = "MAKERS";
    location.href = "../makers-details/makers-details.html?id=" + id + "&type=" + productType;
}