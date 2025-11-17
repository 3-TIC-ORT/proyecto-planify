import fs from "fs";

export function guardarevento() {

  try {
    
   const { nombre, nivel, categoria, dia: diaValor, mes, direccion } = data;

   if (!nombre || typeof nombre != "string") {
    return { exito: false, mensaje: "Nombre invalido"};
   }

   const niveleventos = ["No importante" , "Poco importante" , "Muy importante"];
   if (!niveleventos.includes(nivel)) {
    return { exito: false , mensaje: "Importancia no valida"};
   }
   const categoriaeventos = ["Reunion" , "Entrega" , "Examen"];
   if (!categoriaeventos.includes(categoria)) {
    return {exito: false, mensaje: "Categoria no valida"}
   }
   if (!mes || isNaN(mes) || mes < 1 || mes > 12) {
    return {exito: false, mensaje: "Mes no valido"}
   }
   if (!diaValor || isNaN(diaValor) || diaValor < 1 || diaValor > 31) {
    return {exito: false, mensaje: "Mes no valido"}
   }

   const diapormes = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
   };
   if (diaValor > diapormes[mes]) {
    return{ exito: false, mensaje: `el mes ${mes} no tiene ${diaValor} días`};
   }

   if (categoria !== "Reunion" && direccion) {
    return {exito: false, mensaje: "Solo reunion puede tener direccion"};
   }

   let evento = [];
   if (fs.existsSync("eventos.json")) {
    const contenido = fs.readFileSync("eventos.json", "utf8");
    evento = contenido ? JSON.parse(contenido) :  [];
   }
   
   const nuevoEvento = {
    nombre,
    nivel,
    categoria,
    dia: diaValor,
    mes,
    ...(tipo === "Reunion" ? { direccion } : {})
  };

  evento.push(nuevoEvento);
  fs.writeFileSync("eventos.json" , JSON.stringify(evento, null, 2));

  return {exito: true , mensaje: "Evento guardado"}

  } catch(error) {
    console.error("Error al guardar evento" , error)
    return {exito: false , mensaje: "Error al guardar el evento"}
  }
}
