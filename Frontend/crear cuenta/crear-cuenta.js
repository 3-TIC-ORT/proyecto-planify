connect2Server();

const boton =  document.getElementById("iniciarsecionboton")

boton.addEventListener("click" ,()  =>  {
    window.location.href ="../Inicio de seción/Pantaya de inicio de seción.html"
})


document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let usuario = document.getElementById("usuario").value.trim();
    let contra = document.getElementById("contra").value;
    let confirmar = document.getElementById("confirmar").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || contra === "" || confirmar === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.className = "error";
        return;
    }

    if (contra !== confirmar) {
        mensaje.textContent = "La contraseña debe ser igual en los dos espacios";
        mensaje.className = "error";
        return;
    }

    
    postEvent('signup', { nombre: usuario, contra: contra, confirmar: contra }, (res) => {
        if (res && res.exito) {
            mensaje.textContent = "Cuentra crada con exito"
            mensaje.className = "success"
            setTimeout(() => {
                window.location.href ="Frontend/pantalla-principal/panatallaprincipal.html"
            })
        }
        else {
            mensaje.textContent = "Error al crear cuenta";
            mensaje.className = "error"
        }
    })

});

