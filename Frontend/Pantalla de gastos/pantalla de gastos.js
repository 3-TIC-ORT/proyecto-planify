

let chart; // variable global para guardar el gráfico

document.getElementById("btnGenerar").addEventListener("click", () => {
  // Obtener valores ingresados
  let n1 = parseFloat(document.getElementById("Texto de gastos").value) || 0;
  let n2 = parseFloat(document.getElementById("Texto de ingresos").value) || 0;

  // Contexto del canvas
  let ctx = document.getElementById("miGrafico").getContext("2d");

  // Si ya hay un gráfico, lo destruyo antes de crear otro
  if (chart) {
    chart.destroy();
  }

  // Crear gráfico nuevo
  chart = new Chart(ctx, {
    type: "pie", // podés cambiar a "line", "pie", etc.
    data: {
      labels: ["ingresos", "gastos"],
      datasets: [{
        label: "Valores ingresados",
        data: [n1, n2],
        backgroundColor: ["#36A2EB", "#FF6384"], // colores
        borderColor: ["#1E88E5", "#E53935"],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      
    }
  });
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, introduce valores numéricos válidos para ingresos y gastos.");
    return;
    }
  let promedio = (n1 + n2) / 2;
  document.getElementById("promedio").textContent = "El balance es:" + promedio;
});