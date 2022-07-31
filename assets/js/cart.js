(() =>{
    showProductList();
    renderTotalSum();

    subscribeOnClick();

    $('#myModal').modal('hide');
})();

function showProductList() {
    
    let items = getCart();

    if (items.length === 0) {
        document.getElementById("cartEmpty").style.removeProperty("display");
        document.getElementById("cartData").style.cssText = "display: none;";
    } 
    else {
        document.getElementById("cartData").style.removeProperty("display");
        document.getElementById("cartEmpty").style.cssText = "display: none;";
        let productsTable = document.getElementById("products-table");

        for (var i = 0; i < items.length; i++) {
            let product = findProductByCartItem(items[i]);
            let productSum = product.price * items[i].count;
            var productId = items[i].type + "_" + items[i].id;

            productsTable.innerHTML = productsTable.innerHTML +
                "<div class='products-coffee-cart'>" +
                "<div class='info-coffee-cart'>" +
                "<img src='" + "" + product.bigPhotoUrl + "'  class='foto-cart'>" +
                "<div class='cart-indent'>" + product.name + "</div>" + "</div>" +
                "<div class='cart-indent'>" + product.price + "грн"+"</div>" +
                "<div class='cart-indent'>" +
                "<input type='button' value='-' id='product-minus-qty-id' class='product-amount-button' , onclick='removeOneItemFromCartLocal(\"" + productId + "\")'>" +
                "<input value='" + items[i].count + "' id='product-text-id-" + productId + "' class='product-text'>" +
                "<input type='button' value='+' id='product-plus-qty-id' class='product-amount-button' , onclick='addOneItemToCartLocal(\"" + productId + "\")'>" +
                "</div>" +
                "<div id='product-sum-" + productId + "' class='cart-indent'>" + productSum + " грн" + "</div>" +
                "</div>";
        }
    }
}

function findProductByCartItem(cartItem){
    if(cartItem.type == "COFFEE")
        return COFFEE_PRODUCTS[cartItem.id];
    else
        return COFFEEMAKER_PRODUCTS[cartItem.id];    
}


function addOneItemToCartLocal(productId) {
    let amountButton = document.getElementById("product-text-id-" + productId);
    amountButton.value++;

    var payload = productId.split('_');
    var type = payload[0];
    var id =  parseInt(payload[1]);

    setCart(id, type, 1);
    
    let newSum = getProductPrice(type, id) * getCurrentCountProduct(type, id);
    let sumDiv = document.getElementById("product-sum-" + productId);
    sumDiv.innerText = newSum;

    renderTotalSum();
}

function removeOneItemFromCartLocal(productId) {
    debugger;
    let amountButton = document.getElementById("product-text-id-" + productId);
    amountButton.value--;

    var payload = productId.split('_');
    var type = payload[0];
    var id =  parseInt(payload[1]);

    if (amountButton.value > 0) {
        setCart(id, type, -1);

        let newSum = getProductPrice(type, id) * getCurrentCountProduct(type, id);
        let sumDiv = document.getElementById("product-sum-" + productId);
        sumDiv.innerText = newSum;
    
        renderTotalSum();
    }
    else if (amountButton.value == 0){
        var newItems = getCart().filter(function( obj ) {
            return obj.type != type || obj.id != id;
        })

        localStorage.setItem('cartstorage', JSON.stringify(newItems));
        location.reload();
    }
}

function renderTotalSum() {
    let sumToPay = document.getElementById("sumToPay");
    let cartItems = getCart();

    let totalSum = 0;
    if (cartItems.length !== 0) {
        for (var i = 0; i < cartItems.length; i++) { 
            let product = findProductByCartItem(cartItems[i]);
            let productSum = product.price * cartItems[i].count
            totalSum += productSum;
        }
    }
    sumToPay.innerHTML = totalSum + " грн";
}

function getProductPrice(type, id){
    if(type == "COFFEE")
        return COFFEE_PRODUCTS[id].price;
    else
        return COFFEEMAKER_PRODUCTS[id].price;
}

function getCurrentCountProduct(type, id){
    var items = getCart();
    for(var i = 0; i < items.length; i++){
        if(items[i].type == type && items[i].id == id)
            return items[i].count;
    }

    return 0;
}

//Change color
function subscribeOnClick(){
    document.getElementById('regions').onclick = () => { document.getElementById("regions").removeAttribute("style"); }
    document.getElementById('cities').onclick = () => { document.getElementById("cities").removeAttribute("style"); }
    document.getElementById('departaments').onclick = () => { document.getElementById("departaments").removeAttribute("style"); }
}

//

function clearPage(){
    localStorage.setItem('cartstorage', null);
    location.reload();
}