
var arrayCart ={};

// var products = document.getElementById("products-list-id");
// products.innerHTML = "<div>" 
//     + "<img src='https://nakavu.com.ua/wp-content/uploads/barista-amato-250g-zerno-1.jpg' class='image'>" 
//     + "<div>" + BEAN_PRODUCTS[0].name + "</div>" 
//     + "<div>" + BEAN_PRODUCTS[0].price + "</div>" 
//     + "<button class='button'>В корзину</button>"
// + "</div>"

for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
    var products1 = document.getElementById("products-list-id");
    products1.innerHTML = products1.innerHTML + "<div>"
        + "<img src='" + BEAN_PRODUCTS[i].bigPhotoUrl + "' class='image'>"
        + "<div>" + BEAN_PRODUCTS[i].name + "</div>"
        + "<div>" + BEAN_PRODUCTS[i].price + "</div>"
        + "<button onClick='addToCart(" + BEAN_PRODUCTS[i].id + ")' class='button'>В корзину</button>"
        + "</div>"

}

// Потрібно зберігати ід кожного продукта в масив щоб потім їх можна було відобразити в корзині
function addToCart(id) {
    //console.log(id);
    
    if (arrayCart[id] != undefined) {
        arrayCart[id]++;
    }
    else {
        arrayCart[id] = 1;
    }
    //console.log(arrayCart);
  var number = document.getElementById("numberCart");
  var count=Object.keys(arrayCart).length;
 number.innerHTML = count ;
 //console.log(number);
   
}