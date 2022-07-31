//todo send data
function sendMessage(){
    debugger;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var modalText = document.getElementById("text-modal-notification");
    if(name == "" || phone == "" || message == ""){
        modalText.innerText = "Заповніть будь ласка всі поля і спробуйте ще раз."
    }
    else {
//send()
    }

    var modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
}

function closeModal(){
    var modal = document.querySelector(".modal");
    modal.classList.add("hidden");
}