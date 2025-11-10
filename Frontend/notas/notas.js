  const notas = document.getElementById("textarea")
  
  function guardarNota() {
      let texto = document.getElementById("texto").value;
      localStorage.setItem("notaGuardada", texto);
 
      alert(" Nota guardada");
      alert("Nota guardada");
      PostEvent('guardarnotas', { nota: notas }, (res) => {
        if (res && res.exito) {
            mensaje.textContent = "Nota Guardada"
            mensaje.className = "success"
        }
    })
    
        

    }

    function cargarNota() {
      let nota = localStorage.getItem("notaGuardada");
      if (nota) {
        document.getElementById("texto").value = nota;
      } else {

        alert(" No hay notas guardadas");
        alert("No hay notas guardadas");

      }
    }

    function borrarNota() {
      localStorage.removeItem("notaGuardada");
      document.getElementById("texto").value = "";
      alert(" Nota borrada");
    }

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
});window.history.pushState(null, "", window.location.href);
window.addEventListener("popstate", function () {
  window.history.pushState(null, "", window.location.href);
});




    
 