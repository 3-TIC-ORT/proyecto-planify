import fs from 'fs';

export function guardarnota(data) {
  try {
    
    let notas = [];
    if (fs.existsSync('notas.json')) {
      const contenido = fs.readFileSync('notas.json', 'utf-8');
      notas = JSON.parse(contenido);
    }

       notas.push(data.nota);

       fs.writeFileSync('notas.json', JSON.stringify(notas, null, 2));

    return { exito: true, mensaje: "Nota creada con éxito" };
  } catch (error) {
    console.error("Error al guardar nota:", error);
    return { exito: false, mensaje: "Error al procesar el archivo" };
  }
}

export function borrarnota() {
  try {
    if (!fs.existsSync('notas.json')) {
      return { exito: false, mensaje: "No hay notas para eliminar." };
    }

    const data = fs.readFileSync('notas.json', 'utf-8');
    let notas = JSON.parse(data);

    if (notas.length > 0) {
      
      notas.pop(); 
      fs.writeFileSync('notas.json', JSON.stringify(notas, null, 2));
      return { exito: true, mensaje: "Nota más reciente eliminada con éxito." };
    } else {
      return { exito: false, mensaje: "No hay notas para eliminar." };
    }
  } catch (error) {
    console.error("Error al borrar nota:", error);
    return { exito: false, mensaje: "Error al borrar la nota.", error: error.message };
  }
}
