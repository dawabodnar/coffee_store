//скрипт який викликається на всіх сторінках для обновлення статичних даних

(() => {
    updateStaticData();
    setHeaderColor();
})();

function setHeaderColor(){
    var allMenu = document.querySelectorAll(".main-menu>ul>li");
    if(location.href.indexOf("index") >= 0){
        allMenu[0].querySelector("a").style.color = "orange";
    }
    
    if(location.href.indexOf("delivery-payment") >= 0){
        allMenu[1].querySelector("a").style.color = "orange";
    }
    
    if(location.href.indexOf("contact") >= 0){
        allMenu[2].querySelector("a").style.color = "orange";
    }
    if(location.href.indexOf("cart") >= 0){
        allMenu[3].querySelector("div>a").style.color = "orange";
    }
}

function updateStaticData(){
    //якщо не сторінки з продуктами
    if(location.href.indexOf("-items") < 0){
        //номер сторінки пагінації встановлюємо 1
        localStorage.setItem("currentPagination", 1);
        
        //скидаємо фільтри і сортування
        localStorage.setItem("productFilter", null);
        localStorage.setItem("sortOrder", null);
    }
}