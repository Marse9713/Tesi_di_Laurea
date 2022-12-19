let btn = document.getElementById("login");

btn.addEventListener("click", (e) => {

    window.alert("Login effettuato");
<<<<<<< HEAD:webapp/js/index.js
    window.location = "/webapp/html/pagina_iniziale.html";
=======
    window.location = "html/pagina_iniziale.html";
>>>>>>> f7fbe2b5be32b57108ea668e025db23c7f9b4741:webapp/login/index.js

});


function refreshTime(){

    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;

}

setInterval(refreshTime, 1);