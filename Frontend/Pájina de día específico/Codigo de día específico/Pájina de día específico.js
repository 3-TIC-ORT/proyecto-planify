const url = new URLSearchParams(window.location.search);
const fecha = url.get("fecha");
const numero = url.get("numero");

 let tareas =  {
    examen : "tarea de Hardwar" ,
    pueba: "tarea de mate"
  }
const contenedor = document.getElementById("contenido");
const cuadradoTareas = document.getElementById("cuadrado-tareas");

if (fecha && numero) {
  contenedor.textContent = `Día: ${fecha}  Número: ${numero}`
}


  tareas.forEach( tarea => {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h2")
    titulo.textContent = tarea.examen
    
    tarjeta.appendChild(titulo)
    cuadradoTareas.appendChild(tarjeta)
    });