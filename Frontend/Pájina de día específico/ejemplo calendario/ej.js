document.getElementById("día").addEventListener("click", () => {
    let fecha = document.getElementById("lunes").value;
    if (fecha) {
      // Redirige con la fecha como parámetro
      window.location.href = "dia.html?fecha=" + fecha;
    }
  });