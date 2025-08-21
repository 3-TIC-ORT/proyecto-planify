document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value;
    let confirmar = document.getElementById("confirmar").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || password === "" || confirmar === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.className = "error";
        return;
    }

    if (password !== confirmar) {
        mensaje.textContent = "Las contraseñas no coinciden";
        mensaje.className = "error";
        return;
    }

    mensaje.textContent = "Cuenta creada con éxito ✅";
    mensaje.className = "success";

    setTimeout(() => {
        window.location.href = "file:///C:/Users/50088774/Desktop/proyecto-planify/Frontend/pantalla-principal/panatalla-principal.html";
    }, 1000);
});