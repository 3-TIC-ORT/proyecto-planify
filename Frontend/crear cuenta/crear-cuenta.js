const { postEvent } = window.soquetic;

const boton =  document.getElementById("iniciarsecionboton")

boton.addEventListener("click" ,()  =>  {
    window.location.href ="Frontend/Inicio de seción/Pantaya de inicio de seción.html"
})


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
        mensaje.textContent = "La contraseña debe ser igual en los dos espacios";
        mensaje.className = "error";
        return;
    }

    
    postEvent('signup', { nombre: usuario, contra: password }, (res) => {
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

