for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
    var products1 = document.getElementById("products-list-id");
    products1.innerHTML = products1.innerHTML + "<div class='product-container'>" +
        "<div onclick='selectProduct(" + BEAN_PRODUCTS[i].id + ")'>" +
        "<img src='" + BEAN_PRODUCTS[i].bigPhotoUrl + "' class='image'>" +
        "<div>" + BEAN_PRODUCTS[i].name + "</div>" +
        "<div>" + BEAN_PRODUCTS[i].price + "</div>" +
        "</div>" +
        "<button onClick='changeItemAmountInCart(" + BEAN_PRODUCTS[i].id + ", 1" + ")' class='button'>В корзину</button>" +
        "</div>";

}

function selectProduct(id) {
    var productType = "BEANS";
    location.href = "product-details/product-details.html?id=" + id + "&type=" + productType;
}