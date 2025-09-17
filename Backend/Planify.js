import fs from "fs";

// SIGNUP 
    // Lee el json de usuarios
    let usuarios = fs.readFileSync("usuarios.json" , "UTF-8")
    // Creea una info a formato json
    let json = JSON.parse(usuarios);
// Se muestra en la terminal el json, poniendo [numero] y .nombre o etc se muestra otra cosa
console.log(json)
    // Lo que puede ingresar el usuario
    let nombre, mail, contra;
    let usuarionuevo = {"nombre":"Pepito", "mail":"mail", "password": "contra"};
// Mete lo que ingresa el usuario al json    
json.push(usuarionuevo);
    // Convierte objeto de js en cadena de json
    let nuevoJson = JSON.stringify(json, null, 2);
    fs.writeFileSync("usuarios.json", nuevoJson)


    // LOGIN
let usuarios_login = fs.readFileSync("usuarios.json" , "UTF-8")
let json_login = JSON.parse(usuarios_login);

for (let i = 0; i < json_login.length; i++){
    if (json_login[i].nombre == "LLuu" && json_login[i].mail == "lu@mail.com"){

    }
}




