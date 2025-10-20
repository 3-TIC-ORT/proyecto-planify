
let fecha = url.get("fecha");
let numero = url.get("numero")

  let url = new URLSearchParams(window.location.search);

  if (fecha) {
    contenedor.innerText = fecha + numero;
  }

 let tareas =  {
    examen : "tarea de Hardwar" ,
    pueba: "tarea de mate"
  }
  let contenedor = document.getElementById("contenedor");  // Asegúrate de que este elemento existe
  let cuadradoTareas = document.getElementById("cuadrado-tareas");  // Asegúrate de que este elemento existe

  tareas.forEach( tarea => {
    const titulo = document.createElement("h2")
    titulo.textContent = examen
    
    tarjeta.appendChild(titulo)
    cuadrado-tarea.appendChild(tarjeta)
    });