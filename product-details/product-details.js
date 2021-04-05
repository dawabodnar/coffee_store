const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const productType = urlParams.get("type");

console.log(BEAN_PRODUCTS[productId])