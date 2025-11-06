flatpickr("#fecha", {
  dateFormat: "Y-m-d", // formato de fecha
  defaultDate: "today", // comienza en hoy
  locale: "es", // idioma español
});

let valoresG=[]
let valoresI=[]
let fechas =[]
let chart; 

document.addEventListener("DOMContentLoaded", () => {
  postEvent('historial', { 
    gastos: valoresG, 
    ingresos: valoresI, 
    fecha: fechas, 
    usuario: localStorage["usuario"]
  }, (res) => {
    console.log("Historial enviado:", res);
  });
});

document.getElementById("btnGenerar").addEventListener("click", () => {
  let gasto = parseFloat(document.getElementById("Texto de gastos").value) || 0;
  let ingreso = parseFloat(document.getElementById("Texto de ingresos").value) || 0;
  let fecha = document.getElementById("fecha").value;

  
  
  if (isNaN(ingreso) || isNaN(gasto || !fecha )) {
    alert("Por favor, introduce valores numéricos válidos para ingresos, gastos y Fechas");
    return;
  }
  let promedio = (ingreso - gasto);
  document.getElementById("promedio").textContent = promedio+"$";
  
  valoresG.push(gasto)
  valoresI.push(ingreso)
  fechas.push(fecha)
  

  const contenedor = document.getElementById("contenedorDatos");
  const cuadro = document.createElement("div");
  cuadro.classList.add("cuadro-dato");


  cuadro.innerHTML = `
    <p class="resul">Resultado:<p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Ingreso:</strong> $${ingreso}</p>
    <p><strong>Gasto:</strong> $${gasto}</p>    <button class="btn-borrar">Borrar</button>
  `;
  cuadro.querySelector(".btn-borrar").addEventListener("click", () => {
    let index = fechas.indexOf(fecha);
    if (index !== -1) {
      fechas.splice(index, 1);
      valoresI.splice(index, 1);
      valoresG.splice(index, 1);
    }
    cuadro.remove();
  });



  contenedor.appendChild(cuadro);
  
  
  
  
  let ctx = document.getElementById("miGrafico").getContext("2d");


  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [""], 
      datasets: [
        {
          label: "Ingresos",
          data: [ingreso],
          backgroundColor: "#36A2EB", 
          borderColor: "#1E88E5",
          borderWidth: 2
        },
        {
          label: "Gastos",
          data: [gasto],
          backgroundColor: "#FF6384",
          borderColor: "#E53935",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})

document.getElementById("batGenerar").addEventListener ("click", () => { 
  let ese = document.getElementById("meGrafico").getContext("2d");

  if (chart) {
    chart.destroy();
  }


  chart = new Chart(ese, {
    type: "line", 
    data: {
      labels: fechas, 
      datasets: [
        {
          label: "Ingresos",
          data: valoresI, 
          borderColor: "#36A2EB",
          backgroundColor: "#36A2EB33",
          fill: false,
          tension: 0.3
        },
        {
          label: "Gastos",
          data: valoresG, 
          borderColor: "#FF6384",
          backgroundColor: "#FF638433",
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: { 
          title: { display: true, text: "Fechas" } 
        },
        y: { 
          beginAtZero: true,
          title: { display: true}
        }
      }
    }
  });
});


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


getEvent('getHistorial', (res) => {

});