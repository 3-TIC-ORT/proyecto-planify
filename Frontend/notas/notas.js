  function guardarNota() {
      let texto = document.getElementById("texto").value;
      localStorage.setItem("notaGuardada", texto);
<<<<<<< HEAD
      alert(" Nota guardada");
=======
      alert("Nota guardada");
>>>>>>> 2e50417f101e4e0e2229c3c27f5b9f372978af69
    }

    function cargarNota() {
      let nota = localStorage.getItem("notaGuardada");
      if (nota) {
        document.getElementById("texto").value = nota;
      } else {
<<<<<<< HEAD
        alert(" No hay notas guardadas");
=======
        alert("No hay notas guardadas");
>>>>>>> 2e50417f101e4e0e2229c3c27f5b9f372978af69
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
    
    
    const gastos = document.getElementById("gastos")
    const tareas = document.getElementById("tareas")
    const cerrarsesion = document.getElementById("cerrarsesion")
    const notas = document.getElementById("notas")
    
    cerrarsesion.addEventListener("click", () => {
      window.location.href ="C:\Users/50088774/Desktop/proyecto-planify/Frontend/crear cuenta/crear-cuenta.html"
    });
    
    tareas.addEventListener("click", () => {
      window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/eventos/eventos.html"
    });
    
    gastos.addEventListener("click", () => {
      window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/Pantalla de gastos/Pantalla de gastos.html"
    });
    
    notas.addEventListener("click", () => {
      window.location.href ="C:/Users/50088774/Desktop/proyecto-planify/Frontend/notas/notas.html"
    });
    
    
 