
  // Leer parámetro "fecha"
  let url = new URLSearchParams(window.location.search);
  let fecha = url.get("fecha");
  let numero = url.get("numero")

  if (fecha) {
    contenedor.innerText = fecha + numero;
  }

 let tarea =  {
    examen : "tarea de Hardwar" ,
    pueba: "tarea de mate"
  }


  tareas.forEach( tarea => {
    
    const titulo = document.createElement("h2")
    titulo.textContent = examen
    
    tarjeta.appendChild(titulo)
    cuadrado-tareas.appendChild(tarjeta)
    });