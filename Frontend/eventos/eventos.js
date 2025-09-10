const nombreInput = document.getElementById("nombre");
const select = document.getElementById("evento");
const direcion = document.getElementById("direcion");
const dia = document.getElementById("quedia");
const entregar = document.getElementById("diaentrega");
const reunion2 = document.getElementById("diareunion");
const mesInput = document.getElementById("mes");
const importancia = document.getElementById("importancia");
const guardarBtn = document.getElementById("guardarBtn");

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

// Array para guardar los eventos
let eventos = [];

// Ocultar inputs al cargar
[direcion, dia, entregar, reunion2, mesInput].forEach(input => {
  input.style.display = "none";
  input.disabled = true;
});

// Función para validar días según mes
function validarDia(input, mes) {
  let valor = parseInt(input.value);
  if (["enero","marzo","mayo","julio","agosto","octubre","diciembre"].includes(mes) && valor > 31) return false;
  if (["abril","junio","septiembre","noviembre"].includes(mes) && valor > 30) return false;
  if (mes === "febrero" && valor > 28) return false;
  return true;
}

// Mostrar inputs según tipo de evento
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

// Validar día al escribir
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

// Función para guardar evento
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

  if (!validarDia({value: diaValor}, mes)) {
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
  alert("Evento guardado correctamente!");
  console.log(eventos);
}

// Enganchar botón guardar
guardarBtn.addEventListener("click", guardarEvento);