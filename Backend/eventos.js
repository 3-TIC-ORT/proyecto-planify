import fs from "fs";

export function guardarevento(data) {
  try {
    console.log("CATEGORIA RECIBIDA:", categoria);
console.log("CATEGORIA NORMALIZADA:", categoriaNorm);

    const { nombre, nivel, categoria, dia: diaValor, mes, direccion } = data;

    if (!nombre || typeof nombre !== "string") {
      return { exito: false, mensaje: "nombre invalido" };
    }

    // normalización (clave)
    const nivelNorm = nivel.toLowerCase().trim();
    const categoriaNorm = categoria.toLowerCase().trim();
    const mesNorm = typeof mes === "string" ? mes.toLowerCase().trim() : mes;

    // validar nivel
    const nivelesValidos = ["no importante", "poco importante", "muy importante"];
    if (!nivelesValidos.includes(nivelNorm)) {
      return { exito: false, mensaje: "nivel no valido" };
    }

    // validar categoria
    const categoriasValidas = ["reunion", "entrega", "examen"];
    if (!categoriasValidas.includes(categoriaNorm)) {
      return { exito: false, mensaje: `categoria no valida: "${categoriaNorm}"` };
    }

    // meses con días correctos
    const meses = {
      enero: 31,
      febrero: 28,
      marzo: 31,
      abril: 30,
      mayo: 31,
      junio: 30,
      julio: 31,
      agosto: 31,
      septiembre: 30,
      octubre: 31,
      noviembre: 30,
      diciembre: 31
    };

    if (!meses[mesNorm]) {
      return { exito: false, mensaje: `mes no valido: "${mesNorm}"` };
    }

    // validar día
    if (!diaValor || isNaN(diaValor) || diaValor < 1 || diaValor > meses[mesNorm]) {
      return { exito: false, mensaje: `el mes ${mesNorm} no tiene ${diaValor} dias` };
    }

    if (categoriaNorm !== "reunion" && direccion) {
      return { exito: false, mensaje: "solo reunion puede tener direccion" };
    }

    // leer archivo
    let eventos = [];
    if (fs.existsSync("eventos.json")) {
      const contenido = fs.readFileSync("eventos.json", "utf8");
      eventos = contenido ? JSON.parse(contenido) : [];
    }

    const nuevoEvento = {
      nombre,
      nivel: nivelNorm,
      categoria: categoriaNorm,
      dia: diaValor,
      mes: mesNorm,
      ...(categoriaNorm === "reunion" ? { direccion } : {})
    };

    eventos.push(nuevoEvento);
    fs.writeFileSync("eventos.json", JSON.stringify(eventos, null, 2));

    return { exito: true, mensaje: "evento guardado" };

  } catch (error) {
    console.error("error al guardar evento", error);
    return { exito: false, mensaje: "error al guardar el evento" };
  }
}
