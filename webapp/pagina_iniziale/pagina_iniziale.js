
function refreshTime(){

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;

}

setInterval(refreshTime, 1);

let load = document.getElementById("load");

load.addEventListener("click", (e) => {

    window.location = "webapp/carico/carico.html";

});

let unload = document.getElementById("unload");

unload.addEventListener("click", (e) => {

    window.location = "webapp/scarico/scarico.html";

});

let inventory = document.getElementById("inventory");

inventory.addEventListener("click", (e) => {

    window.location = "webapp/inventario/inventario.html";

});

let cashregister = document.getElementById("cashregister");

cashregister.addEventListener("click", (e) => {

    window.location = "webapp/cassa/cassa.html";

});

let payday = document.getElementById("payday");

payday.addEventListener("click", (e) => {

    window.location = "webapp/storico_giornata/storico_giornata.html";

});

let payday_history = document.getElementById("payday_history");

payday_history.addEventListener("click", (e) => {

    window.location = "webapp/storico_scontrini/storico_scontrini.html";

});

let bill_archive = document.getElementById("bill_archive");

bill_archive.addEventListener("click", (e) => {

    window.location = "webapp/archivio_scontrini/archivio_scontrini.html";

});

let reboot = document.getElementById("reboot");

reboot.addEventListener("click", (e) => {
    
    window.alert("Pc gestionale in riavvio, attendere 10 minuti");
    
});

let shutdown = document.getElementById("shutdown");

shutdown.addEventListener("click", (e) => {

    window.alert("Giornata conclusa, buona giornata");

});