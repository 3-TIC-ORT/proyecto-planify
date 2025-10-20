import fs from "fs";

// SIGNUP 
    // Lee el json de usuarios
    let usuarios = fs.readFileSync ("usuarios.json" , "UTF-8")
    // Crea una info a formato json
    let json = JSON.parse(usuarios);
// Se muestra en la terminal el json, poniendo [numero] y .nombre o etc se muestra otra cosa
console.log(json)
    // Lo que puede ingresar el usuario
    let nombre, mail, contra;
    let usuarionuevo = {"nombre": "mati" , "mail": "123@gmail.com", "password": "123",} ;
// Mete lo que ingresa el usuario al json    
json.push(usuarionuevo);
    // Convierte objeto de js en cadena de json
    let nuevoJson = JSON.stringify(json, null, 2);
    fs.writeFileSync("usuarios.json", nuevoJson)


    // LOGIN
    // Lee el json y convierte objetos de js en cadena de json
    let usuarios_login = fs.readFileSync("usuarios.json" , "UTF-8")
    let json_login = JSON.parse(usuarios_login);
// Recorre el json
for (let i = 0; i < json_login.length; i++){
    // Busca la info de cada usuario en el json 
    if (json_login[i].nombre == nombre && json_login[i].mail == mail && json_login[i].password == contra){
            console.log("Encontramos tu perfil Lu")
    }
    else {
        console.log("usuario no encontrado")
    }
}

//NOTAS