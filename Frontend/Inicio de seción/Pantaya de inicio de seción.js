let form = document.getElementById('loginForm');
let message = document.getElementById('message');

form.addEventListener('submit', function(Preventivo) {
  Preventivo.preventDefault(); // Evita el envío del formulario

  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();

  // Validación básica
  if (email === "" || password === "") {
    message.innerHTML = "<p class='error'>Por favor completa todos los campos.</p>";
    return;
  }

  // Simulación de autenticación
  else if (email === "usuario@ejemplo.com" && password === "123456") {
    message.innerHTML = "<p class='success'>Inicio de sesión exitoso 🎉</p>";
  } else {
    message.innerHTML = "<p class='error'>Correo o contraseña incorrectos.</p>";
  }
});