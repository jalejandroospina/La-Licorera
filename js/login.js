
// Iniciar Sesión

let user = document.getElementById("sesion");
let log = document.getElementById("iniciar");
let dialog = document.getElementById("login");
log.addEventListener("click", login);
function login()
{
    dialog.remove();
    user.innerText = "Bienvenido";
    
}

