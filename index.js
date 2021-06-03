let productList = BEAN_PRODUCTS
let mainOrder = null;

initFilters();
renderList(productList);

function initFilters() {
    renderFilter("brand", "filter-brand");
    renderFilter("composition", "filter-composition");
    renderFilter("coffeeType", "filter-coffeeType");
    renderFilter("caffeineContent", "filter-caffeineContent");
}

function renderFilter(filterName, filterHtmlId) {
    let filterValues = getValuesByField(filterName);
    let filterValuesKeys = Object.keys(filterValues);
    let filterHtml = document.getElementById(filterHtmlId);
    for(let i = 0; i < filterValuesKeys.length; i++) {
        filterHtml.innerHTML = filterHtml.innerHTML + "<div style='cursor:pointer' onclick='selectFilter(\"" + filterName + "\", \"" + filterValuesKeys[i] + "\")'>" + filterValuesKeys[i] + " <span>(" + filterValues[filterValuesKeys[i]] + ")</span></div>";
    }
}

function selectFilter(fieldName, value) {
    let newFilteredList = getListFilteredBy(fieldName, value, mainOrder);
    productList = newFilteredList;
    renderList(productList);
}

function selectOrder(order) {
    mainOrder = order.value;
    renderList(getOrderedProductList(productList, mainOrder));
}

function renderList(productList) {
    var productsListHtml = document.getElementById("products-list-id");
    productsListHtml.innerHTML = "";
    for (var i = 0; i < productList.length; i++) {
        productsListHtml.innerHTML = productsListHtml.innerHTML + "<div class='product-container'>" +
            "<div onclick='selectProduct(\"" + productList[i].id + "\")'>" +
            "<img src='" + productList[i].bigPhotoUrl + "' class='image'>" +
            "<div>" + productList[i].name + "</div>" +
            "<div>" + productList[i].price + "</div>" +
            "</div>" +
            "<button onClick='changeItemAmountInCart(\"" + productList[i].id + "\", 1" + ")' class='button'>В корзину</button>" +
            "</div>";
    }
}


function selectProduct(id) {
    const productType = "BEANS";
    location.href = "product-details/product-details.html?id=" + id + "&type=" + productType;
}