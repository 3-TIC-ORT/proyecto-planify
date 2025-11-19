connect2Server()

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
if( dia && mes && año){
  getEvent("", localStorage["usuario"], { dia, mes, año }, (res) => {
   //* no hay función del backend
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
}
})

const botonmenu = document.querySelector(".menudesplegable");
const menulateral = document.querySelector(".menulateral");
botonmenu.addEventListener("click", () => {
  menulateral.classList.toggle("activo");
});


const Pantallaprincipal = document.getElementById("paginaprincipal")
const gastos = document.getElementById("gastos")
const tareas = document.getElementById("tareas")
const cerrarsesion = document.getElementById("cerrarsesion")
const notas = document.getElementById("notas")

Pantallaprincipal.addEventListener("click", () => {
  window.location.href = "../../pantalla-principal/panatallaprincipal.html"
});
cerrarsesion.addEventListener("click", () => {
  window.location.href = "../../crear cuenta/crear-cuenta.html"
});

tareas.addEventListener("click", () => {
  window.location.href = "../../eventos/eventos.html"
});

gastos.addEventListener("click", () => {
  window.location.href = "../../Pantalla de gastos/Pantalla de gastos.html"
});

notas.addEventListener("click", () => {
  window.location.href = "../../notas/notas.html"
});
