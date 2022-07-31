//скрипт який викликається на сторінках з продуктами (кави, або кавоварки)

const countProductOnPage = 12;
let productList;
let pagesList = [];
let countPage;;
let mainOrder = null;
let currentTypeProducts;

//init page
(() =>{
    initialProductsByPage();

    loadProductsByOrder();
    loadProductsByFilter();

    initFilters();

    setProductsToPages();
    createPagination();
    showProductsByCurrentPage();

    subscribeMouseEvent();
})();


// set in parameter productList list by page (coffee or coffeemaker list)
function initialProductsByPage(){
    if (location.href.indexOf("coffee-items") >= 0){
        currentTypeProducts = "COFFEE";
        productList = COFFEE_PRODUCTS;
    }
    else if (location.href.indexOf("coffeemaker-items") >= 0){
        currentTypeProducts = "COFFEEMAKER";
        productList = COFFEEMAKER_PRODUCTS;
    }
}

//start show filters
function initFilters(){
    if(currentTypeProducts == "COFFEE"){
        initCoffeeFilters();
    }
    else if(currentTypeProducts == "COFFEEMAKER"){
        initCoffeemakerFilters();
    }
}

function initCoffeeFilters() {
    renderFilter("brand", "filter-brand");
}

function initCoffeemakerFilters() {
    renderFilter("brand", "filter-brand");
    renderFilter("coffeeType", "filter-type");
}


function renderFilter(filterName, filterHtmlId) {
    let filterValues = getValuesByField(productList, filterName);
    let filterValuesKeys = Object.keys(filterValues);
    let filterHtml = document.getElementById(filterHtmlId);
    for (let i = 0; i < filterValuesKeys.length; i++) {
        filterHtml.innerHTML = filterHtml.innerHTML + "<div style='cursor:pointer' class='fil' onclick='selectFilter(\"" + filterName + "\", \"" + filterValuesKeys[i] + "\")'>" + filterValuesKeys[i] + " <span>(" + filterValues[filterValuesKeys[i]] + ")</span></div>";
    }
}

function getValuesByField(prodList, field) {
    let brands = {};
    for (var i = 0; i < prodList.length; i++) {
        let fieldValue = prodList[i].additionalInfo[field];
        brands[fieldValue] = brands[fieldValue] == undefined ? 1 : ++brands[fieldValue];
    }
    return brands;
}

//end show filters


//start load products by order
function loadProductsByOrder() {
    mainOrder = localStorage.getItem("sortOrder");;
    productList = getOrderedProductList(productList, mainOrder);

    if (mainOrder != null) {
        document.querySelector(".sorting").value = mainOrder;
    }
}

function getOrderedProductList(list, order) {
    if (order == "desc") {
        return list.sort((p1, p2) => p2.price - p1.price);
    } else if (order == "asc") {
        return list.sort((p1, p2) => p1.price - p2.price);
    } else {
        return list;
    }
}
//end load products by order


//start load products by filters
function loadProductsByFilter(){
    var allFilters = JSON.parse(localStorage.getItem("productFilter")); 
    if(allFilters == null) return;

    for(var i = 0; i < allFilters.length; i++){
        productList = getListFilteredBy(productList, allFilters[i].name, allFilters[i].value, mainOrder);
    }
}

function getListFilteredBy(prodList, fieldName, value, order) {
    let filteredList = [];
    for (var i = 0; i < prodList.length; i++) {
        if (prodList[i].additionalInfo[fieldName] == value) {
            filteredList.push(prodList[i]);
        }
    }
    if (order == "desc") {
        return filteredList.sort((p1, p2) => p2.price - p1.price);
    } else if (order == "asc") {
        return filteredList.sort((p1, p2) => p1.price - p2.price);
    } else {
        return filteredList;
    }
}

//end load products by filters


function setProductsToPages() {
    for (var i = 0, j = 0, c = -1; i < productList.length; i++) {
        if (i % countProductOnPage == 0) {
            c++;
            j = 0;
            pagesList[c] = [];
        }

        pagesList[c][j++] = productList[i];
    }

    countPage = Math.ceil(productList.length / countProductOnPage);
}


//start pagination page

function createPagination() {
    var paginationHTML = document.getElementById("pagination");
    var currentPage = parseInt(localStorage.getItem("currentPagination"));
    var htmlText = "<ul><li><a  onClick='goToPrevPage()'>Попередня</a></li>";

    var start = 1,
        end = countPage;

    if(countPage > 5){
        if (currentPage < 4) {
            end = 5;
        }
        else if ((countPage - currentPage) < 3) {
            start = (countPage - 4);
        }
        else {
            start = currentPage - 2,
            end = currentPage + 2;
        }
    }

    for (var i = start; i <= end; i++) {
        htmlText += getTextByNumberPage(i, currentPage);
    }

    htmlText += "<li><a onClick='goToNextPage()'>Наступна</a></li></ul>";
    paginationHTML.innerHTML = htmlText;
}

function getTextByNumberPage(currentNumber, currentPage){
    return currentNumber == currentPage ?
        "<li><a class='current-pagination'>" + currentNumber + "</a></li>" :
        "<li><a onClick='goToNumber(this)'>" + currentNumber + "</a></li>";
}

function goToPrevPage() {
    var currentPage = localStorage.getItem("currentPagination");
    if (currentPage < 2) return;
    var newVal = parseInt(currentPage) - 1;
    localStorage.setItem("currentPagination", newVal);
    location.reload();
}

function goToNextPage() {
    var currentPage = localStorage.getItem("currentPagination");
    if (currentPage == countPage) return;
    var newVal = parseInt(currentPage) + 1;
    localStorage.setItem("currentPagination", newVal);
    location.reload();
}

function goToNumber(el) {
    localStorage.setItem("currentPagination", parseInt(el.innerText));
    location.reload();
}

//end pagination page

function showProductsByCurrentPage() {
    var currentPage = parseInt(localStorage.getItem("currentPagination"));
    renderList(pagesList[currentPage - 1]);
}

function renderList(productList) {
    var productsListHtml = document.getElementById("products-list-id");//lg-4 col-md-6
    productsListHtml.innerHTML = "";
    for (var i = 0; i < productList.length; i++) {
        productsListHtml.innerHTML = productsListHtml.innerHTML + "<div class='col-sm-4 text-center strawberry'>" +
            "<div onclick='selectProduct(\"" + productList[i].id + "\")'>" +
            "<div class='img" + productList[i].id + "'><img src='" + productList[i].bigPhotoUrl + "' class='image'></div>" +
            "<div class='name-product'>" + productList[i].name + "</div>" +
            "<div class='price-product'>" + productList[i].price + "грн"+"</div>" +
            "</div>" +
            "<button onClick='changeItemAmountInCart(" + productList[i].id + ")' class='button'> <i class='fas fa-shopping-cart'></i>  В корзину</button>" +
            "</div>";
    }
}


function selectOrder(order) {
    localStorage.setItem("sortOrder", order.value);
    location.reload();
}

function selectFilter(fieldName, value) {
    var allFilters = JSON.parse(localStorage.getItem("productFilter"));
    
    if(allFilters == null){
        allFilters = [];
    }

    var indexCurrentFilter = -1;
    allFilters.find((val, index) => {
        if(val.name == fieldName){
            indexCurrentFilter = index;
            return;
        }
    });
    
    if(indexCurrentFilter == -1){
        var filter = {};
        filter.name = fieldName;
        filter.value = value;
        allFilters.push(filter);
    }
    else {
        allFilters[indexCurrentFilter] = value;
    }

    localStorage.setItem("productFilter", JSON.stringify(allFilters));
    location.reload();
}


function selectProduct(id) {
    if(currentTypeProducts == "COFFEE"){
        location.href = "coffee.html?id=" + id;
    }
    else if(currentTypeProducts == "COFFEEMAKER"){
        location.href = "coffeemaker.html?id=" + id;
    }
}

function cleanFilters(){
    localStorage.setItem("productFilter", null);
    location.reload();
}


function changeItemAmountInCart(productId){ 
   setCart(productId, currentTypeProducts, 1);

   addAnime(".img" + productId);
}

function addAnime(nameClass){
    var cart = $('.shopping-cart');
    var imgtodrag = $(nameClass).find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');
            
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);
 
        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
}

function subscribeMouseEvent(){
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(b => {
        b.addEventListener('mouseover', (event) => {
            event.target.style.background = '#A8A8A8';
        });
        b.addEventListener('mouseout', (event) => {
            event.target.style.background = '#EFEFEF';
        });
    });
}