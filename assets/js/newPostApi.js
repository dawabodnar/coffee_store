let key = "1602fea99125c8164071ba3292255476";
let url = "https://api.novaposhta.ua/v2.0/json/";

let npData = []; 
let currentCity = {};

(() => {
    setRegionNP();
})();

function setRegionNP(){
    var data = getRegionsNPRequest();
    sendPost(url, data, (http) => {
        if(http.status != 200) return; 

        var response = JSON.parse(http.responseText);
        if(!response.success) return;
        
        npData = response.data;
        var regions = [...new Set(npData.map(a => a.AreaDescription))];    

        document.getElementById("regions").innerHTML += getSelectedItems(regions);
    });
}

function getSelectedItems(list){
    var data = "";
    for(var i = 0; i < list.length; i++){
        data += "<option>" + list[i] + "</option>"
    }

    return data;
}

//selected change Events

function changeRegion(){
    clearCities();
    clearDepartments();

    var nameReg = document.getElementById("regions").value;
    var cities = [];
    npData.forEach(d => {
        if(d.AreaDescription === nameReg)
            cities.push(d.Description);
    })

    document.getElementById("cities").innerHTML += getSelectedItems(cities);
}

function changeCity(){
    clearDepartments();

    var nameCity = document.getElementById("cities").value;
    var data = getDepartmentsNPRequest(nameCity);

    sendPost(url, data, (http) => {
        debugger;
        if(http.status != 200) return; 

        var response = JSON.parse(http.responseText);
        if(!response.success) return;
        
        var departaments =  response.data.map(a => a.Description.split(':')[0].split('(')[0].replace("\"Нова Пошта\"", ""));    

        document.getElementById("departaments").innerHTML += getSelectedItems(departaments);
    });
}

function clearCities(){
    document.getElementById("cities").innerHTML = "<option style=\"display:none;\" selected>Виберіть населений пункт</option>";
    document.getElementById("cities").style.color = "#808080";
}

function clearDepartments(){
    document.getElementById("departaments").innerHTML = "<option style=\"display:none;\" selected>Виберіть відділення</option>";
    document.getElementById("departaments").style.color = "#808080";
}

//

//Request data
function getRegionsNPRequest(){
    var data = {};
    data.modelName = "Address";
    data.calledMethod = "getCities";
    data.apiKey = key;

    return JSON.stringify(data);
}

function getDepartmentsNPRequest(city){
    var data = {};
    data.modelName = "AddressGeneral";
    data.calledMethod = "getWarehouses";
    data.methodProperties = {};
    data.methodProperties.CityName = city;
    data.methodProperties.Language = "ua";
    data.apiKey = key;

    return JSON.stringify(data);
}

//
