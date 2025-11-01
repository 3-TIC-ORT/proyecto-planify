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

  // Enviamos los datos al backend
  postEvent("login", { nombre: nombre, contra: password }, (resultado) => {
    if (resultado.exito === true) {
      // Redirige después de 1 segundo
      setTimeout(() => {
        window.location.href = "../pantalla-principal/panatallaprincipal.html";
      }, 1000);
    } else {
      message.innerHTML = `<p class="error">${resultado.mensaje}</p>`;
    }
  });
});


button.addEventListener("click", () => {
  window.location.href = "../crear cuenta/crear-cuenta.html";
});


