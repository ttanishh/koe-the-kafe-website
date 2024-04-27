let popup=document.getElementById("popup-id");
let button=document.getElementById("btn")
let formcont=document.getElementsByClassName("form-container")[0];

function openPopup(){
    popup.classList.add("openpopup");
    button.style.display="none";
}

function closePopup(){
    popup.classList.remove("openpopup");
    button.style.display="block";
}

function clspopup(){
    formcont.style.display="none";
    button.style.display="block";
}