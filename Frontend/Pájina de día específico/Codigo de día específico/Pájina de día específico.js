
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
});


getElement("login", { dia,mes,año},(res)=>{
if(res&&res.notas &&res.eventos){
notas = res.notas
eventos = res.eventos
}
else{
  alert("no se mandop los datos correctamente")
}
})

let tareas = [
  { titulo: "examen", descripcion: "tarea de Hardwar" },
  { titulo: "pueba", descripcion: "tarea de mate" }
];

tareas.forEach(tarea => {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h2");
  titulo.textContent = `${tarea.titulo}: ${tarea.descripcion}`;

  tarjeta.appendChild(titulo);
  cuadradoTareas.appendChild(tarjeta);
});




