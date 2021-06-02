function findProductById(id) {
    if (id.includes(COFFEE_TYPE)) {
         return findProduct(BEAN_PRODUCTS, id);
    } else if (id.includes(ACCESSORY_TYPE)) {
        return findProduct(ACCESSORY_PRODUCTS, id);
    }
    return null;
}

function findProduct(productList, id) {
    for (var i = 0; i < id.length; i++) {
        if(productList[i].id == id){
            return productList[i]

        }
       
        
    }
}

function getValuesByField(field) {
    let brands = {};
    for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
        let fieldValue = BEAN_PRODUCTS[i].additionalInfo[field];
        brands[fieldValue] = brands[fieldValue] == undefined ? 1 : ++brands[fieldValue];
    }
    return brands;
}

function getListFilteredBy(fieldName, value, order) {
    let filteredList = [];
    for (var i = 0; i < BEAN_PRODUCTS.length; i++) {
        if(BEAN_PRODUCTS[i].additionalInfo[fieldName] == value) {
            filteredList.push(BEAN_PRODUCTS[i]);
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

function getOrderedProductList(list, order) {
    if (order == "desc") {
        return list.sort((p1, p2) => p2.price - p1.price);
    } else if (order == "asc") {
        return list.sort((p1, p2) => p1.price - p2.price);
    } else {
        return list;
    }
}