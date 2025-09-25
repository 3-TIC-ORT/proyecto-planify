let datos = {
    "2025-09-22": "Examen de Matemática",
    "2025-09-25": "Reunión con el profesor",
    "2025-10-01": "Entrega de proyecto"
  };
  
  // Leer parámetro "fecha"
  let url = new URLSearchParams(window.location.search);
  let fecha = url.get("fecha");
  
  // Mostrar información
  let contenedor = document.getElementById("contenido");
  if (fecha && datos[fecha]) {
    contenedor.innerText = "Eventos del " + fecha + ": " + datos[fecha];
  } else {
    contenedor.innerText = "No hay información para esta fecha.";
  }