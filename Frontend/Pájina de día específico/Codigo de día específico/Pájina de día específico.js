
  // Leer parámetro "fecha"
  let url = new URLSearchParams(window.location.search);
  let fecha = url.get("fecha");
  let numero = url.get("numero")
  
  let contenedor = document.getElementById("contenido");
  if (fecha) {
    contenedor.innerText = fecha + numero;

  }
