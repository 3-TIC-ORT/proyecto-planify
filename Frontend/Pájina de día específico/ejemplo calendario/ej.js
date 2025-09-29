  function irADia(dia) {
    
    window.location.href = "C:/Users/49980496/Downloads/proyecto-planify/Frontend/Pájina de día específico/Codigo de día específico/Pájina de día específico.html?fecha=" + dia;

  }
  document.getElementById("lunes").addEventListener("click", () => irADia("lunes"));
document.getElementById("martes").addEventListener("click", () => irADia("martes"));
document.getElementById("miercoles").addEventListener("click", () => irADia("miercoles"));
document.getElementById("jueves").addEventListener("click", () => irADia("jueves"));
document.getElementById("viernes").addEventListener("click", () => irADia("viernes"));
document.getElementById("sabado").addEventListener("click", () => irADia("sabado"));
document.getElementById("domingo").addEventListener("click", () => irADia("domingo"));
