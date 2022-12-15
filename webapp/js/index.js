let btn = document.getElementById("login");

btn.addEventListener("click", (e) => {

    window.alert("Login effettuato");
    window.location = "/html/pagina_iniziale.html";

});


function refreshTime(){

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;

}

setInterval(refreshTime, 1);