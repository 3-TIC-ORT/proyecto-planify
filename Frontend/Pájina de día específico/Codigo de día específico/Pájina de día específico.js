const cuadradoTareas = document.getElementById("cuadrado-tareas");

document.addEventListener("DOMContentLoaded", () => {
  const url = new URLSearchParams(window.location.search);
  const dia = url.get("dia");
  const mes = url.get("mes");
  const año = url.get("año");

  const contenedor = document.getElementById("contenido");

  if (dia && mes && año && contenedor) {
    contenedor.textContent = `${dia} / ${mes} / ${año}`;
  }

  getEvent("login", localStorage["usuario"], { dia, mes, año }, (res) => {
    if (res && res.notas && res.eventos) {
      const notas = res.notas;
      const eventos = res.eventos;

      notas.forEach(nota => {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h2");
        titulo.textContent = nota;

        tarjeta.appendChild(titulo);
        cuadradoTareas.appendChild(tarjeta);
      });


      eventos.forEach(evento => {
        let tarea = document.createElement("div");
        tarea.classList.add("tarea");

        const titulo = document.createElement("h2");
        titulo.textContent = evento;

        tarea.appendChild(titulo);
        cuadradoTareas.appendChild(tarea);
      });
    } else {
      alert("No se mandaron los datos correctamente");
    }
  });
});
