
// Iniciar Sesión

let user = document.getElementById("sesion");
let log = document.getElementById("iniciar");
let dialog = document.getElementById("login");
log.addEventListener("click", login);
function login()
{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 800
      })
    dialog.remove();
    user.innerText = "Bienvenido";
    
}

