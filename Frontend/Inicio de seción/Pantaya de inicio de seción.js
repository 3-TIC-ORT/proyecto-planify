connect2Server()

let form = document.getElementById('loginForm');
let message = document.getElementById('message');
let button = document.getElementById("Registrarme");

form.addEventListener('submit', function(Preventivo) {
  Preventivo.preventDefault(); 

 const nombre = document.getElementById('text').value;
  const contra = document.getElementById('password').value;

  if (nombre === "" || contra === "") {
    message.innerHTML = "<p class='error'>Por favor completa todos los campos.</p>";
    return;
  }
  if(nombre ===! "" || contra ===! ""){
    postEvent("login", { nombre: nombre, contra: contra }, (res) => {
      if (res && res.exito){
        setTimeout(() => {
          window.location.href = "../pantalla-principal/panatallaprincipal.html";
        }, 1000);
      }
      else{
        message.innerHTML = `<p class="error">${resultado.mensaje}</p>`;
      }
    })
  }
});


button.addEventListener("click", () => {
  window.location.href = "../crear cuenta/crear-cuenta.html";
});


