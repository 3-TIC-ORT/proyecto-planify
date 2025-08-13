let form = document.getElementById('loginForm');
let message = document.getElementById('message');

form.addEventListener('submit', function(Preventivo) {
  Preventivo.preventDefault(); 

  let Text = document.getElementById('text').value.trim();
  let password = document.getElementById('password').value.trim();

 
  if (Text === "" || password === "") {
    message.innerHTML = "<p class='error'>Por favor completa todos los campos.</p>";
  }


  else if (Text === "papastriglio" && password === "123456") {
    message.innerHTML = "<p class='success'>Inicio de sesión exitoso 🎉</p>";
  } else {
    message.innerHTML = "<p class='error'>Correo o contraseña incorrectos.</p>";
  }
});