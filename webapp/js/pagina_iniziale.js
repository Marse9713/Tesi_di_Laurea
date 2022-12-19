
function refreshTime(){

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;

}

setInterval(refreshTime, 1);

let load = document.getElementById("load");

load.addEventListener("click", (e) => {

    window.location = "./carico.html";

});

let unload = document.getElementById("unload");

unload.addEventListener("click", (e) => {

    window.location = "./scarico.html";

});

let inventory = document.getElementById("inventory");

inventory.addEventListener("click", (e) => {

    window.location = "./inventario.html";

});

let cashregister = document.getElementById("cashregister");

cashregister.addEventListener("click", (e) => {

    window.location = "./cassa.html";

});

let payday = document.getElementById("payday");

payday.addEventListener("click", (e) => {

    window.location = "./storico_giornata.html";

});

let payday_history = document.getElementById("payday_history");

payday_history.addEventListener("click", (e) => {

    window.location = "./storico_scontrini.html";

});

let bill_archive = document.getElementById("bill_archive");

bill_archive.addEventListener("click", (e) => {

<<<<<<< HEAD:webapp/js/pagina_iniziale.js
 window.open("https://drive.google.com/drive/u/2/folders/1YhMUQIwfYhqedEnk07EOPUugSzVsDIIn", '_blank') ;
=======
    window.location = "./archivio_scontrini.html";
>>>>>>> f7fbe2b5be32b57108ea668e025db23c7f9b4741:webapp/pagina_iniziale/pagina_iniziale.js

});

let reboot = document.getElementById("reboot");

reboot.addEventListener("click", (e) => {
    
    window.alert("Pc gestionale in riavvio, attendere 10 minuti");
    
});

let shutdown = document.getElementById("shutdown");

shutdown.addEventListener("click", (e) => {

    window.alert("Giornata conclusa, buona giornata");

});