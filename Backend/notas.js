import fs, { read, readFileSync } from "fs";
import { networkInterfaces } from "os";


export function guardarnota(data) {
  let { notas } = data;

  try {
  let notas = [];
  notas = fs.readFileSync('notas.json' , 'utf-8')
  notas = fs.writeFileSync('notas.json', JSON.stringify(usuarios, null, 2));
    notas.push(data)

  return {exito: true, mensaje: "Nota creada con exito"}

} 
catch(error) {
  console.error("Error al Guardar Nota:", Error);
  return {exito: false, mensaje: "Error al procesar el archivo"}
  }
}

export function borrarnota(){

try{
  data = fs.readFileSync('notas.json' , 'utf-8') 
  let notas = JSON.parse(data)

  if (notas.length > 0) {
    notas.pop();
    fs.writeFileSync('notas.json' , JSON.stringify(notas, null, 2));
    return {exito: true , mensaje: "Nota mas reciente eliminada con exito."};
  } else {
    return {exito: false , mensaje: "No hay notas para eliminar."}
  }
} catch(error) {
return {exito: false, mensaje: "Error al borrar la nota." , error: error.mensaje};
  }
}