  function guardarNota() {
      let texto = document.getElementById("texto").value;
      localStorage.setItem("notaGuardada", texto);
      alert("✅ Nota guardada");
    }

    function cargarNota() {
      let nota = localStorage.getItem("notaGuardada");
      if (nota) {
        document.getElementById("texto").value = nota;
      } else {
        alert("⚠️ No hay notas guardadas");
      }
    }

    function borrarNota() {
      localStorage.removeItem("notaGuardada");
      document.getElementById("texto").value = "";
      alert("🗑️ Nota borrada");
    }
 