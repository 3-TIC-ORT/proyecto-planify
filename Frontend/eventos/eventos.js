const select = document.getElementById("evento");
const direcion = document.getElementById("direcion");
const dia = document.getElementById("quedia");
const entregar = document.getElementById("diaentrega");
const reunion2 = document.getElementById("diareunion");
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
if (meses.includes(mes)) 
// Ocultar todos los inputs al cargar la página
[direcion, dia, entregar, reunion2].forEach(input => {
  input.style.display = "none";
  input.disabled = true;
});

select.addEventListener("change", function() {
  // Primero ocultamos todo
  [direcion, dia, entregar, reunion2].forEach(input => {
    input.style.display = "none";
    input.disabled = true;
  });

  // Mostrar inputs según tipo de evento
  if (select.value === "reunion") {
    direcion.style.display = "inline-block";
    direcion.disabled = false;
    reunion2.style.display = "inline-block";
    reunion2.disabled = false;
  } else if (select.value === "examen") {
    dia.style.display = "inline-block";
    dia.disabled = false;
  } else if (select.value === "entrega") {
    entregar.style.display = "inline-block";
    entregar.disabled = false;
  }

  // Validar mes usando || y normalización
  let mes = mesInput.value.trim().toLowerCase();

if (meses.includes(mes)) {
  console.log("Mes válido:", mes);
} else if (mes !== "") {
  alert("Mes no válido");
}



});