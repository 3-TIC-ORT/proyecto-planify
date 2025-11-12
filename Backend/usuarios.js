import fs from "fs";
import path from "path";

export function signup(data) {
  console.log("hola back")

  let { nombre, contra } = data;

  try {
    let usuarios = [];

    const dataFile = fs.readFileSync('usuarios.json', 'utf-8');
    usuarios = JSON.parse(dataFile);
    
    usuarios.push( data );
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));

    return { exito: true, mensaje: "Registro exitoso" };
  } 
  catch (error) {
    console.error("Error al crear cuenta:", error);
    return { exito: false, mensaje: "Error al procesar el archivo" };
  }
}

  export function login(data){
  let { nombre, contra } = data
    try {
       let usuarios = [];

 const dataFile = fs.readFileSync('usuarios.json' , 'utf-8')
       usuarios = JSON.parse(dataFile);

       let usuarioencontrado = usuarios.find(
        (u) => u.nombre === nombre && u.contra === contra);

        if (usuarioencontrado) {
         return { exito: true, mensaje: "Inicio de sesion exitoso"} 
        } else {
        return { exito: false, mensaje: "Nombre o Contraseña no encontrados"}
      }
    }
    catch(error) {
      console.error("Error al iniciar sesion", error)
      return {exito: false , mensaje: "Error al procesar el archivo"}
    }
  }

  
