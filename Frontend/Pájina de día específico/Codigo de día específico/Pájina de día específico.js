
  // Leer parámetro "fecha"
  let url = new URLSearchParams(window.location.search);
  let fecha = url.get("fecha");
  let numero = url.get("numero")
  let tarea = [
    examen, Tarea, reunion,
  ]
  let info = document.querySelector('examen');
  
  let contenedor = document.getElementById("contenido");
  if (fecha) {
    contenedor.innerText = fecha + numero;
  }

function crearcuadradoexamen(info){
  a = document.createElement('div');
  a.id = parametro.id || `cuadrado-dinamico-${Date.now()}`; // Un ID único
  a.classList.add('cuadrado'); // Añadir la clase CSS
}
