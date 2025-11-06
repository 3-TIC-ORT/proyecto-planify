const nombreInput = document.getElementById("nombre");
const select = document.getElementById("evento");
const direcion = document.getElementById("direcion");
const dia = document.getElementById("quedia");
const entregar = document.getElementById("diaentrega");
const reunion2 = document.getElementById("diareunion");
const mesInput = document.getElementById("mes");
const importancia = document.getElementById("importancia");
const guardarBtn = document.getElementById("guardarBtn");
const borrarUltimoBtn = document.getElementById("borrarUltimoBtn");
const listaEventos = document.getElementById("listaEventos");

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

let eventos = [];

[direcion, dia, entregar, reunion2, mesInput].forEach(input => {
  input.style.display = "none";
  input.disabled = true;
});

function validarDia(input, mes) {
  let valor = parseInt(input.value || input); 
  if (["enero","marzo","mayo","julio","agosto","octubre","diciembre"].includes(mes) && valor > 31) return false;
  if (["abril","junio","septiembre","noviembre"].includes(mes) && valor > 30) return false;
  if (mes === "febrero" && valor > 28) return false;
  return true;
}

select.addEventListener("change", function() {
  [direcion, dia, entregar, reunion2, mesInput].forEach(input => {
    input.style.display = "none";
    input.disabled = true;
  });

  if (select.value === "reunion") {
    direcion.style.display = "inline-block";
    direcion.disabled = false;
    reunion2.style.display = "inline-block";
    reunion2.disabled = false;
    mesInput.style.display = "inline-block";
    mesInput.disabled = false;
  } else if (select.value === "examen") {
    dia.style.display = "inline-block";
    dia.disabled = false;
    mesInput.style.display = "inline-block";
    mesInput.disabled = false;
  } else if (select.value === "entrega") {
    entregar.style.display = "inline-block";
    entregar.disabled = false;
    mesInput.style.display = "inline-block";
    mesInput.disabled = false;
  }
});

dia.addEventListener("input", () => {
  let mes = mesInput.value.trim().toLowerCase();
  if (!validarDia(dia, mes)) dia.value = "";
});
entregar.addEventListener("input", () => {
  let mes = mesInput.value.trim().toLowerCase();
  if (!validarDia(entregar, mes)) entregar.value = "";
});
reunion2.addEventListener("input", () => {
  let mes = mesInput.value.trim().toLowerCase();
  if (!validarDia(reunion2, mes)) reunion2.value = "";
});

function guardarEvento() {
  const nombre = nombreInput.value.trim();
  const categoria = select.value;
  const mes = mesInput.value.trim().toLowerCase();
  const nivel = importancia.value;

  if (!nombre) {
    alert("El evento no tiene nombre");
    return;
  }

  if (!categoria) {
    alert("Asignale una categoría");
    return;
  }

  if (!meses.includes(mes)) {
    alert("Fecha incorrecta");
    return;
  }

  let diaValor;
  if (categoria === "reunion") diaValor = parseInt(reunion2.value);
  else if (categoria === "examen") diaValor = parseInt(dia.value);
  else if (categoria === "entrega") diaValor = parseInt(entregar.value);

  if (!validarDia(diaValor, mes)) {
    alert("Fecha incorrecta");
    return;
  }

  if (categoria === "reunion" && !direcion.value.trim()) {
    alert("Debe ingresar dirección");
    return;
  }

  const evento = {
    nombre,
    categoria,
    nivel,
    dia: diaValor,
    mes,
    direccion: categoria === "reunion" ? direcion.value.trim() : null
  };

  eventos.push(evento);
  console.log(eventos);

  const listaEventos = document.getElementById("listaEventos");
  const h3 = document.createElement("h3");
  h3.textContent = `${evento.nombre} - ${evento.categoria} (${evento.mes} ${evento.dia})`;
  listaEventos.appendChild(h3);

  alert("Evento guardado correctamente!");
}

borrarUltimoBtn.addEventListener("click", () => {
  if (eventos.length === 0) {
    alert("No hay eventos para borrar");
    return;
  }

  eventos.pop();


  const ultimoElemento = listaEventos.lastElementChild;
  if (ultimoElemento) {
    ultimoElemento.remove();
  }

  console.log("Eventos después de borrar:", eventos);
});

guardarBtn.addEventListener("click", guardarEvento);


const botonmenu = document.querySelector(".menudesplegable");
const menulateral = document.querySelector(".menulateral");
botonmenu.addEventListener("click", () => {
  menulateral.classList.toggle("activo");
});

const Pantallaprincipal  = document.getElementById("paginaprincipal")
const gastos = document.getElementById("gastos")
const tareas = document.getElementById("tareas")
const cerrarsesion = document.getElementById("cerrarsesion")
const notas = document.getElementById("notas")

Pantallaprincipal.addEventListener("click", () => {
  window.location.href= "../pantalla-principal/panatallaprincipal.html"
});
cerrarsesion.addEventListener("click", () => {
  window.location.href ="../crear cuenta/crear-cuenta.html"
});

tareas.addEventListener("click", () => {
  window.location.href ="../eventos/eventos.html"
});

gastos.addEventListener("click", () => {
  window.location.href ="../Pantalla de gastos/Pantalla de gastos.html"
});

notas.addEventListener("click", () => {
  window.location.href ="../notas/notas.html"
});
window.history.pushState(null, "", window.location.href);
window.addEventListener("popstate", function () {
  window.history.pushState(null, "", window.location.href);
});