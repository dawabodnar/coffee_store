function findProductById(id) {
    if (id.includes(COFFEE_TYPE)) {
        // return findProduct(BEAN_PRODUCTS, id);
        return BEAN_PRODUCTS[0]; // видалити
    } else if (id.includes(ACCESSORY_TYPE)) {
        // return findProduct(ACCESSORY_PRODUCTS, id);
        return ACCESSORY_PRODUCTS[0]; // видалити
    }
    return null;
}

function findProduct(productList, id) {
    for (var i = 0; i < id.length; i++) {}
}


/*
Буде визначений список полів по яким будемо фільтрувати.

Одна функція яка проходить по списку і по конкретному полі і дістає всі можливі варіанти.

Функції які повертають ці можливі варіанти.

Функції які повертають відсортований список.
*/