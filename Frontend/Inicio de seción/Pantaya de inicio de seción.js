connect2Server(3000)

let form = document.getElementById('loginForm');
let message = document.getElementById('message');
let button = document.getElementById("Registrarme");

form.addEventListener('submit', function(Preventivo) {
  Preventivo.preventDefault(); 

 const nombre = document.getElementById('text').value;
  const password = document.getElementById('password').value;

  if (nombre === "" || password === "") {
    message.innerHTML = "<p class='error'>Por favor completa todos los campos.</p>";
    return;
  }
  if(nombre ===! "" || password ===! ""){
    postEvent("login", { nombre: nombre, contra: password }, (res) => {
      if (res && res.exito){
        localStorage["usuario"] = nombre;
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


