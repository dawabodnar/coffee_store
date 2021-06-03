let productList = ACCESSORY_PRODUCTS
let mainOrder = null;

renderList(productList);

function selectOrder(order) {
    mainOrder = order.value;
    renderList(getOrderedProductList(productList, mainOrder));
}

function renderList(productList) {
    var productsListHtml = document.getElementById("products-list-id");
    productsListHtml.innerHTML = "";
    for (var i = 0; i < productList.length; i++) {
        productsListHtml.innerHTML = productsListHtml.innerHTML + "<div class='makers-container'>" +
            "<div onclick='selectProduct(\"" + productList[i].id + "\")'>" +
            "<img src='" + productList[i].bigPhotoUrl + "' class='image'>" +
            "<div>" + productList[i].name + "</div>" +
            "<div>" + productList[i].price + "</div>" +
            "</div>" +
            "<button onClick='changeItemAmountInCart(\"" + productList[i].id + "\", 1" + ")' class='button'>В корзину</button>" +
            "</div>"
    }
}

function selectProduct(id) {
    var productType = "MAKERS";
    location.href = "../makers-details/makers-details.html?id=" + id + "&type=" + productType;
}