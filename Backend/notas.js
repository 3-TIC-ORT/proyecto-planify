import fs from 'fs';

export function guardarnota(data) {
  const { nota, nombreUsuario } = data;

  try {
    let notas = [];
    if (fs.existsSync("notas.json")) {
      const dataFile = fs.readFileSync("notas.json", "utf-8");
      notas = JSON.parse(dataFile);
    }

    const nuevaNota = {
      texto: nota
    };

    notas.push(nuevaNota);
    fs.writeFileSync("notas.json", JSON.stringify(notas, null, 2));

    return { exito: true, mensaje: "Nota guardada correctamente" };
  } catch (error) {
    console.error("Error al guardar nota:", error);
    return { exito: false, mensaje: "Error al guardar la nota" };
  }
}

export function cargarnota(data) {
  let { nombreUsuario } = data;

  try {
    if (!fs.existsSync('notas.json')) {
      return { exito: true, nota: [] };
    }

    let dataFile = fs.readFileSync('notas.json', 'utf-8');
    let nota = JSON.parse(dataFile);

    let notasUsuario = nota.filter(n => n.usuario === nombreUsuario);

    return { exito: true, nota: notasUsuario };

  } catch (error) {
    console.error("Error al cargar notas:", error);
    return { exito: false, mensaje: "Error al leer las notas" };
  }
}


export function borrarnota() {
  try {
    if (!fs.existsSync('notas.json')) {
      return { exito: false, mensaje: "No hay notas para eliminar." };
    }

    let data = fs.readFileSync('notas.json', 'utf-8');
    let nota = JSON.parse(data);

    if (nota.length > 0) {
      
      nota.pop(); 
      fs.writeFileSync('notas.json', JSON.stringify(nota, null, 2));
      return { exito: true, mensaje: "Nota más reciente eliminada con éxito." };
    } else {
      return { exito: false, mensaje: "No hay notas para eliminar." };
    }
  } catch (error) {
    console.error("Error al borrar nota:", error);
    return { exito: false, mensaje: "Error al borrar la nota.", error: error.message };
  }
}
