function getCart() {
    let saveInCart = localStorage.getItem('cartstorage');
    if (saveInCart === null || JSON.parse(saveInCart) === null) {
        return [];
    } else {
        return JSON.parse(saveInCart);
    }
}

function setCart(productId, typeProduct, count) {
    var currentCartProducts = getCart();
    var isSetProduct = false;

    for(var i = 0; i < currentCartProducts.length; i++){
        if(currentCartProducts[i].id == productId && currentCartProducts[i].type == typeProduct){
            currentCartProducts[i].count += count;
            isSetProduct = true;
            break;
        }
    }

    if(!isSetProduct){
        var cartObj = {};
        cartObj.id = productId;
        cartObj.type = typeProduct;
        cartObj.count = count;
        currentCartProducts.push(cartObj)
    }

    localStorage.setItem('cartstorage', JSON.stringify(currentCartProducts));
}

