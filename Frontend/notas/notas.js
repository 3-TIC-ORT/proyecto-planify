  connect2Server()
  let nota = document.getElementById("textarea").value;

 
  
  let boton2 = document.getElementById("boton2")
  let boton = document.getElementById("boton")
  let boton3 = document.getElementById("boton3")
  
  function guardarNota() {
      const texto = document.getElementById("textarea").value
      localStorage.setItem("notaGuardada", texto)
 
      alert(" Nota guardada");
      
      postEvent('guardarnota', { "nota" : texto }, (res) => {
        if (res && res.exito) {

          localStorage.setItem("notaGuardada", texto);

            mensaje.textContent = "Nota Guardada"
            mensaje.className = "success"
      }
    })
  }

    function cargarNota() {
      const texto = document.getElementById("textarea").value

          
      const nota = localStorage.getItem("notaGuardada");

      const div = document.getElementById("guardardatos");
    
      if (nota) {
        div.textContent = nota;      
      } else {
        div.textContent = "No hay notas guardadas";
      }

      alert("nota cargada")
          
        }
    
        
  

    function borrarNota() {
      localStorage.removeItem("notaGuardada")
      const div = document.getElementById("guardardatos");
      alert(" Nota borrada")
      div.textContent =""
      
    }

    const botonmenu = document.querySelector(".menudesplegable")
    const menulateral = document.querySelector(".menulateral")
    botonmenu.addEventListener("click", () => {
      menulateral.classList.toggle("activo")
    });
    
    
    const Pantallaprincipal  = document.getElementById("paginaprincipal")
    const gastos = document.getElementById("gastos")
    const tareas = document.getElementById("tareas")
    const cerrarsesion = document.getElementById("cerrarsesion")
    const notass = document.getElementById("notas")
    
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
    
    notass.addEventListener("click", () => {
      window.location.href ="../notas/notas.html"
    });





boton2.addEventListener("click" , () =>{
  guardarNota()
})


boton.addEventListener("click" , () => {
  cargarNota()
})

boton3.addEventListener("click", () => {
  borrarNota()
})






    
 