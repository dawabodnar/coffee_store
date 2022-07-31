//скрипт для відправки повідомлень на сервер
let urlServer = "https://coffeedistrict.com.ua/api/";

function sendQuestionMsg(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if(!name || !phone || !message){
        showModalWindow("Всі поля не заповнені. Заповніть поля та спробуйте ще раз!");
        return;
    }

    var data = getQuestionRequest(name, phone, message);
    sendPost(urlServer + "question", data, (http) => {
        if(http.status == 200){
            showModalWindow("Запитання підтверджено. Відповідь прийде найближчим часом на телеграм або у вигляді дзвінка. Дякуємо.");
        } else {
            showModalWindow("Сталася помилка під час відправлення запитання. Будь ласка зв'яжіться з нашим адміністратором, дані в розділі Контакти. Дякуємо.");
        }
    });
}

function getQuestionRequest(name, phone, message){
    var data = {};
    data.name = name;
    data.phone = phone;
    data.message = message;

    return JSON.stringify(data);
}

function sendOrderMsg(){
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var region = document.getElementById("regions").value;
    var city = document.getElementById("cities").value;
    var departament = document.getElementById("departaments").value;

    if(!name || !lastName || !phone || !region || !city || !departament){
        showModalWindow("Всі поля не заповнені. Заповніть поля та спробуйте ще раз!");
        return;
    }

    var data = getOrderRequest(name, lastName, phone, region, city, departament);
    sendPost(urlServer + "order", data, (http) => {
        if(http.status == 200){
            showModalWindow("Замовлення підтверджено. Найближчим часом з вами зв'яжиться наш працівник. Дякуємо.");
        } else {
            showModalWindow("Сталася помилка під час замовлення. Будь ласка зв'яжіться з нашим адміністратором, дані в розділі Контакти. Дякуємо.");
        }
    });
}

function getProducts(){
    var items = document.querySelectorAll("#products-table>div");
    var products = [];
    for(var i = 0; i < items.length; i++){
        var elements = items[i].querySelectorAll(".cart-indent");

        var el = {};
        el.name = elements[0].textContent;
        el.price = elements[1].textContent;
        el.count = elements[2].querySelector(".product-text").value;

        products.push(el);
    }

    return products;
}

function getOrderRequest(name, lastName, phone, region, city, departament){
    var data = {};
    data.name = name;
    data.lastName = lastName;
    data.phone = phone;
    data.region = region;
    data.city = city;
    data.departament = departament;
    data.products = getProducts();

    return JSON.stringify(data);
}

function sendPost(url, data, callback){
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = () => {callback(http);}
    http.send(data);
}

function showModalWindow(t){
debugger;
    document.getElementById("modalText").innerText = t;
    $('#exampleModal').modal('toggle');
}

function closeModal(){
    var text = document.getElementById("modalText").innerText;
    if(text.indexOf("Замовлення підтверджено. Найближчим часом з вами зв'яжиться наш працівник. Дякуємо.") >= 0 ||
       text.indexOf("Запитання підтверджено. Відповідь прийде найближчим часом на телеграм або у вигляді дзвінка. Дякуємо.") >= 0){
        clearPage();
    }
}