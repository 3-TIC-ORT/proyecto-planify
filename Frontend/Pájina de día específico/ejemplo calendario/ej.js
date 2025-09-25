  function irADia(dia) {
    window.location.href = "dia.html?fecha=" + dia;
  }
  document.getElementById("lunes").addEventListener("click", () => irADia("lunes"));
document.getElementById("btn-martes").addEventListener("click", () => irADia("martes"));
document.getElementById("btn-miercoles").addEventListener("click", () => irADia("miercoles"));
document.getElementById("btn-jueves").addEventListener("click", () => irADia("jueves"));
document.getElementById("btn-viernes").addEventListener("click", () => irADia("viernes"));
document.getElementById("btn-sabado").addEventListener("click", () => irADia("sabado"));
document.getElementById("btn-domingo").addEventListener("click", () => irADia("domingo"));
