
let valoresG=[]
let valoresI=[]
let fechas =[]
let chart; // variable global para guardar el gráfico

document.getElementById("btnGenerar").addEventListener("click", () => {
  // Obtener valores ingresados
  let gasto = parseFloat(document.getElementById("Texto de gastos").value) || 0;
  let ingreso = parseFloat(document.getElementById("Texto de ingresos").value) || 0;
  let fecha = (document.getElementById("Texto de días").value)
  // Contexto del canvas
  let ctx = document.getElementById("miGrafico").getContext("2d");

  // Si ya hay un gráfico, lo destruyo antes de crear otro
  if (chart) {
    chart.destroy();
  }

  // Crear gráfico nuevo
  chart = new Chart(ctx, {
    type: "bar", // podés cambiar a "line", "pie", etc.
    data: {
      labels: ["ingresos", "gastos"],
      datasets: [{
        label: "Valores ingresados",
        data: [ingreso, gasto],
        backgroundColor: ["#36A2EB", "#FF6384"], // colores
        borderColor: ["#1E88E5", "#E53935"],
        borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: { beginAtZero: true }
      }
  }
});
  if (isNaN(ingreso) || isNaN(gasto)) {
    alert("Por favor, introduce valores numéricos válidos para ingresos y gastos.");
    return;
    }
  let promedio = (ingreso - gasto);
  document.getElementById("promedio").textContent = "El balance es:" + promedio;

  valoresG.push(gasto)
  valoresI.push(ingreso)
  fechas.push(fecha)
});

document.getElementById("batGenerar").addEventListener ("click", () => { 

  // Contexto del canvas
  let ese = document.getElementById("meGrafico").getContext("2d");

  // Si ya hay un gráfico, lo destruyo antes de crear otro
  if (chart) {
    chart.destroy();
  }

  // Crear gráfico nuevo
  papa = new Chart(ese, {
    type: "line", 
    data: {
      labels: [fechas],
      datasets: [{
        data: [valoresI, valoresG],
        backgroundColor: ["#36A2EB", "#FF6384"], // colores
        borderColor: ["#1E88E5", "#E53935"],
        borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: { beginAtZero: true }
      }
  }
  })

});