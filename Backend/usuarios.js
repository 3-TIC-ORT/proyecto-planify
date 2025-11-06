import fs from "fs";
import path from "path";

export function signup(data) {
  const { nombre, contra } = data;
  const filePath = path.join(__dirname, 'backend', 'usuarios.json'); 

  try {
    let usuarios = [];

    if (fs.existsSync(filePath)) {
      const dataFile = fs.readFileSync(filePath, 'utf-8');
      usuarios = JSON.parse(dataFile);
    } else {
      
      usuarios = [];
    }
    usuarios.push( data );
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));

    return { exito: true, mensaje: "Registro exitoso" };
  } 
  catch (error) {
    console.error("Error al crear cuenta:", error);
    return { exito: false, mensaje: "Error al procesar el archivo" };
  }
}
