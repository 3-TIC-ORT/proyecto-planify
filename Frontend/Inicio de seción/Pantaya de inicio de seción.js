connect2Server(3000)

let form = document.getElementById('loginForm');
let message = document.getElementById('message');
let button = document.getElementById("Registrarme");

form.addEventListener('submit', function(Preventivo) {
  Preventivo.preventDefault(); 

  let Text = document.getElementById('text').value.trim();
  let password = document.getElementById('password').value.trim();

 
  if (Text === "" || password === "") {
    message.innerHTML = "<p class='error'>Por favor completa todos los campos.</p>";
  }


  else if (Text === nombre && password === contra) {
   
    setTimeout(() => {
      window.location.href = "../pantalla-principal/panatallaprincipal.html";
    }, 1000);
  } 

  else if (Text !== "" && password !== ""){
postEvent("login", {nombre: Text, contra: password});

  } 
});

 import function login (params){

  if (exito === true ){
     window.location.href = "../pantalla-principal/panatallaprincipal.html"
  }
  else if (exito === false){
  message.innerHTML ="<p class='error'> Contraseña y/o Usuario Incorrectos.</p>";
  }
}

button.addEventListener("click", () => {
  window.location.href = "../crear cuenta/crear-cuenta.html";
});


