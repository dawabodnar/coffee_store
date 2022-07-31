//скрипт який викликається на сторінках з продуктом (кава, або кавоварка)
let product;
let currentTypeProducts;

(() => {
    setTypeProduct();
    setProduct();
    showData();
    loadCountItemFromCart();
    subscribeMouseEvent();
})();

function setTypeProduct(){
    if (location.href.indexOf("coffeemaker") >= 0){
        currentTypeProducts = "COFFEEMAKER";
    }
    else if (location.href.indexOf("coffee") >= 0){
        currentTypeProducts = "COFFEE";
    }
}

//start set product by id
function setProduct(){
    var urlParams = new URLSearchParams(window.location.search);
    var productId = Number.parseInt(urlParams.get("id"));
    product = findProductById(productId);
}

function findProductById(id) {
    if (currentTypeProducts == "COFFEE") {
        return findProduct(COFFEE_PRODUCTS, id);
    } else if (currentTypeProducts == "COFFEEMAKER") {
        return findProduct(COFFEEMAKER_PRODUCTS, id);
    }
}

function findProduct(productList, id) {
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].id == id) {
            return productList[i]
        }
    }
}
//end set product by id


function showData(){
    debugger;
    var nameTag = document.getElementById("name")
    nameTag.innerText = product.name;
    
    var fotoTag = document.getElementById("foto");
    fotoTag.setAttribute("src", "" + product.bigPhotoUrl);

    var priceTag = document.getElementById("price");
    priceTag.innerText = product.price + priceTag.innerText;

    var brandTag = document.getElementById("brandId")
    brandTag.innerText = product.additionalInfo.brand;

    if (location.href.indexOf("coffee.") >= 0) {
        var weightTag = document.getElementById("weightId")
        weightTag.innerText = product.additionalInfo.weight;
    
        var consistTag = document.getElementById("consistId")
        consistTag.innerText = product.additionalInfo.consist;
    
        var fryingTag = document.getElementById("fryingId")
        fryingTag.innerText = product.additionalInfo.frying;
    
        var tasteTag = document.getElementById("tasteId")
        tasteTag.innerText = product.additionalInfo.taste;
    
        var aromatizationTag = document.getElementById("aromatizationId")
        aromatizationTag.innerText = product.additionalInfo.aromatization;
    }
    else {
        var coffeeTypeTag = document.getElementById("coffeeTypeId")
        coffeeTypeTag.innerText = product.additionalInfo.coffeeType;
    }

    var description = document.getElementById("descriptionId")
    description.innerHTML = product.description;
}



function addToCarts() {
    plusOneItemButton();
    addAnime();
}

function plusOneItemButton() {
    let amountButton = document.getElementById("product-text-id");
    amountButton.value++;

    setCart(product.id, currentTypeProducts, 1);
}

function minusOneItemButton(id) {
    let amountButton = document.getElementById("product-text-id");
    let countProduct = Number.parseInt(amountButton.value);

    if (countProduct == 0) return;
    
    amountButton.value--;
    setCart(product.id, currentTypeProducts, -1);
}

function loadCountItemFromCart(){
    var currentCartProducts = getCart();

    var countItem = 0;
    for(var i = 0; i < currentCartProducts.length; i++){
        if(currentCartProducts[i].id == product.id && currentCartProducts[i].type == currentTypeProducts)
            countItem = currentCartProducts[i].count;
    }

    document.getElementById("product-text-id").value = countItem;
}



function addAnime(){
    debugger;
    var cart = $('.shopping-cart');
    var imgtodrag = $("#foto");
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
    var buttons = document.querySelectorAll(".product-button");
    buttons.forEach(b => {
        b.addEventListener('mouseover', (event) => {
            event.target.style.background = '#A8A8A8';
        });
        b.addEventListener('mouseout', (event) => {
            event.target.style.background = '#EFEFEF';
        });
    });
}