import fs from "fs";


export function guardarnota(data) {
  let { notas } = data;

  try {
  let notas = [];
  notas = fs.writeFileSync('notas.json', JSON.stringify(usuarios, null, 2));
    notas.push(data)

  return {exito: true, mensaje: "Nota creada con exito"}

} 
catch(Error) {
  console.error("Error al Guardar Nota:", Error);
  return {exito: false, mensaje: "Error al procesar el archivo"}
  }
}