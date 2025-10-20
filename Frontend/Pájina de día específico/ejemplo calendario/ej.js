  
  function irADia(dia, numero) {
    
  window.location.href = "../Codigo de día específico/Pájina de día específico.html?fecha=" + dia + "&numero=" + numero
 
}
  document.getElementById("lunes").addEventListener("click", () => irADia("lunes",1));
document.getElementById("martes").addEventListener("click", () => irADia("martes",2));
document.getElementById("miercoles").addEventListener("click", () => irADia("miercoles",3));
document.getElementById("jueves").addEventListener("click", () => irADia("jueves",4));
document.getElementById("viernes").addEventListener("click", () => irADia("viernes",5));
document.getElementById("sabado").addEventListener("click", () => irADia("sabado",6));
document.getElementById("domingo").addEventListener("click", () => irADia("domingo",7));
