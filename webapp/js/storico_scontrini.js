let btn = document.getElementById("home");

btn.addEventListener("click", (e) => {

    window.location = "/webapp/html/pagina_iniziale.html";

});


function refreshTime(){

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;

}

setInterval(refreshTime, 1);