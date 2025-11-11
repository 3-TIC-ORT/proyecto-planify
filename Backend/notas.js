import fs from "fs";


export function guardarnota(data) {
  let { nota } = data;

  try {
  let nota = [];
  nota = fs.readFileSync('notas.json' , 'utf-8')
  nota = fs.writeFileSync('notas.json', JSON.stringify(usuarios, null, 2));
    nota.push(data)

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
  let nota = JSON.parse(data)

  if (nota.length > 0) {
    nota.pop();
    fs.writeFileSync('notas.json' , JSON.stringify(nota, null, 2));
    return {exito: true , mensaje: "Nota mas reciente eliminada con exito."};
  } else {
    return {exito: false , mensaje: "No hay notas para eliminar."}
  }
} catch(error) {
return {exito: false, mensaje: "Error al borrar la nota." , error: error.mensaje};
  }
}