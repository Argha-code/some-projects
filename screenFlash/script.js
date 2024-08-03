const display = document.querySelector("#main");
const change = document.getElementById("onOff");
display.addEventListener("dblclick",handleScreenFlash)

function handleScreenFlash(){

    display.classList.toggle("flashOff")
    if(change.innerHTML == "ON"){
        change.innerHTML = "OFF"
    }
    else{
        change.innerHTML = "ON"
    }
}