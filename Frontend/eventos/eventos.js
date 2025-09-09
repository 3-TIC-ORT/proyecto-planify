const select = document.getElementById("evento");
const direcion = document.getElementById("direcion");
const dia = document.getElementById("quedia");
const entregar = document.getElementById("diaentrega");
const reunion2 = document.getElementById("diareunion");
const mesInput = document.getElementById("mes");

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

// Ocultar todos los inputs al cargar la página
[direcion, dia, entregar, reunion2, mesInput].forEach(input => {
  input.style.display = "none";
  input.disabled = true;
});

// Función para validar días según el mes
function validarDia(input, mes) {
  let valor = parseInt(input.value);

  if (["enero","marzo","mayo","julio","agosto","octubre","diciembre"].includes(mes) && valor > 31) {
    alert("Ese mes solo tiene 31 días");
    input.value = "";
  }

  if (["abril","junio","septiembre","noviembre"].includes(mes) && valor > 30) {
    alert("Ese mes solo tiene 30 días");
    input.value = "";
  }

  if (mes === "febrero" && valor > 28) {
    alert("Febrero solo tiene 28 días");
    input.value = "";
  }
}

select.addEventListener("change", function() {
  // Primero ocultamos todo
  [direcion, dia, entregar, reunion2, mesInput].forEach(input => {
    input.style.display = "none";
    input.disabled = true;
  });

  // Mostrar inputs según tipo de evento
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

  // Validar mes
  let mes = mesInput.value.trim().toLowerCase();

  if (meses.includes(mes)) {
    console.log("Mes válido:", mes);
  } else if (mes !== "") {
    alert("Mes no válido");
  }
});

// Enganchar validación de días a cada input
dia.addEventListener("input", () => validarDia(dia, mesInput.value.trim().toLowerCase()));
entregar.addEventListener("input", () => validarDia(entregar, mesInput.value.trim().toLowerCase()));
reunion2.addEventListener("input", () => validarDia(reunion2, mesInput.value.trim().toLowerCase()));