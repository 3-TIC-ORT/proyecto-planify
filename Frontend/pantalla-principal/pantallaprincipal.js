const calendario = document.querySelector(".calendario"),
      fecha = document.querySelector(".fecha"),
      contenedorDias = document.querySelector(".dias"),
      anterior = document.querySelector(".anterior"),
      proximo = document.querySelector(".proximo");

let hoy = new Date()
let mes = hoy.getMonth()
let año = hoy.getFullYear()

const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

let feriados = [
  "01-01", 
  "03-03", 
  "04-03", 
  "24-03", 
  "02-04",
  "17-04", 
  "18-04", 
  "01-05", 
  "02-05", 
  "25-05", 
  "16-06", 
  "20-06", 
  "09-07", 
  "15-08", 
  "17-08", 
  "12-10",
  "20-11", 
  "08-12",
  "25-12"  
]

// 🔹 Marca los feriados en el calendario
function marcarFeriados() {
  document.querySelectorAll(".dia").forEach(dia => {
    if (!dia.classList.contains("anterior-mes") && !dia.classList.contains("siguiente-mes")) {
      let diaNumero = parseInt(dia.textContent.trim())
      let mesNumero = mes + 1
      let diaFormateado = String(diaNumero).padStart(2, "0")
      let mesFormateado = String(mesNumero).padStart(2, "0")
      let diames = `${diaFormateado}-${mesFormateado}`

      if (feriados.includes(diames)) {
        dia.classList.add("feriado")
      }
    }
  })
}

function generarCalendario() {
  const primerDia = new Date(año, mes, 1)
  const ultimoDia = new Date(año, mes + 1, 0)
  const primerDiaSemana = primerDia.getDay()
  const ultimoDiaMes = ultimoDia.getDate()
  const ultimoDiaMesAnterior = new Date(año, mes, 0).getDate()

  let diasHTML = ""
  const offset = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1

  for (let x = offset; x > 0; x--) {
    diasHTML += `<div class="dia anterior-mes">${ultimoDiaMesAnterior - x + 1}</div>`
  }

  for (let i = 1; i <= ultimoDiaMes; i++) {
    const esHoy = i === hoy.getDate() && mes === hoy.getMonth() && año === hoy.getFullYear()
    diasHTML += `<div class="dia${esHoy ? " hoy" : ""}">${i}</div>`
  }

  const totalCeldas = offset + ultimoDiaMes
  const celdasSiguientes = 7 - (totalCeldas % 7)
  if (celdasSiguientes < 7) {
    for (let j = 1; j <= celdasSiguientes; j++) {
      diasHTML += `<div class="dia siguiente-mes">${j}</div>`
    }
  }

  contenedorDias.innerHTML = diasHTML;
  fecha.textContent = `${meses[mes]} ${año}`

  marcarFeriados()
}

function mesAnterior() {
  mes--
  if (mes < 0) {
    mes = 11
    año--
  }
  generarCalendario()
}

function mesSiguiente() {
  mes++
  if (mes > 11) {
    mes = 0
    año++
  }
  generarCalendario()
}

anterior.addEventListener("click", mesAnterior)
proximo.addEventListener("click", mesSiguiente)

generarCalendario()


const botonmenu = document.querySelector(".menudeplegable")
const menulateral = document.querySelector(".menulateral")
botonmenu.addEventListener("click", () => {
  menulateral.classList.toggle("activo")
})


const Pantallaprincipal  = document.getElementById("paginaprincipal")
const gastos = document.getElementById("gastos")
const tareas = document.getElementById("tareas")
const cerrarsesion = document.getElementById("cerrarsesion")
const notas = document.getElementById("notas")

Pantallaprincipal.addEventListener("click", () => {
  window.location.href= "C:\Users/50088774/Desktop/proyecto-planify/Frontend/pantalla-principal/panatallaprincipal.html"
})
cerrarsesion.addEventListener("click", () => {
  window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/crear cuenta/crear-cuenta.html"
})

tareas.addEventListener("click", () => {
  window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/eventos/eventos.html"
})

gastos.addEventListener("click", () => {
  window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/Pantalla de gastos/Pantalla de gastos.html"
})

notas.addEventListener("click", () => {
  window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/notas/notas.html"
})



contenedorDias.addEventListener("click", (e) => {
  if (e.target.classList.contains("dia")) {
    const diaSeleccionado = e.target.textContent.trim()
    const mesSeleccionado = mes + 1
    const añoSeleccionado = año

   window.location.href = `../Pájina de día específico/Codigo de día específico/Pájina de día específico.html?dia=${diaSeleccionado}&mes=${mesSeleccionado}&año=${añoSeleccionado}`;
  }
})



