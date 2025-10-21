import fs from "fs";


function leerEventos() {
  try {
    let data = fs.readFileSync("eventos.json", "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function guardarEventos(eventos) {
  fs.writeFileSync("eventos.json", JSON.stringify(eventos, null, 2));
}

export function crearEvento(usuario, nombre, tipo, importancia, descripcion) {
  let eventos = leerEventos();

  const nivelesValidos = ["no importante", "poco importante", "muy importante"];
  if (!nivelesValidos.includes(importancia.toLowerCase())) {
    console.log("⚠️ Importancia inválida. Usa: no importante, poco importante o muy importante.");
    return;
  }

  let nuevoEvento = {
    usuario,
    nombre,           
    tipo,             
    importancia,      
    descripcion,      
    fechaCreacion: new Date().toISOString()
  };

  eventos.push(nuevoEvento);
  guardarEventos(eventos);

  console.log(`Evento "${nombre}" agregado para ${usuario}.`);
}

export function mostrarEventos(usuario) {
  let eventos = leerEventos();
  let eventosUsuario = eventos.filter(e => e.usuario === usuario);

  if (eventosUsuario.length === 0) {
    console.log("No tienes eventos registrados.");
    return;
  }

  console.log(`Eventos de ${usuario}:`);
  eventosUsuario.forEach((e, i) => {
    console.log(`\n[${i + 1}] ${e.nombre} (${e.tipo})`);
    console.log(`   Importancia: ${e.importancia}`);
    console.log(`   Descripción: ${e.descripcion}`);
    console.log(`   Creado el: ${e.fechaCreacion}`);
  });
}

export function editarEvento(usuario, nombreViejo, nuevoNombre, nuevoTipo, nuevaImportancia, nuevaDescripcion) {
  let eventos = leerEventos();
  let evento = eventos.find(e => e.usuario === usuario && e.nombre === nombreViejo);

  if (!evento) {
    console.log("Evento no encontrado.");
    return;
  }

  evento.nombre = nuevoNombre;
  evento.tipo = nuevoTipo;
  evento.importancia = nuevaImportancia;
  evento.descripcion = nuevaDescripcion;

  guardarEventos(eventos);
  console.log(`Evento "${nombreViejo}" actualizado.`);
}

export function eliminarEvento(usuario, nombre) {
  let eventos = leerEventos();
  let nuevosEventos = eventos.filter(
    e => !(e.usuario === usuario && e.nombre === nombre)
  );

  guardarEventos(nuevosEventos);
  console.log(`Evento "${nombre}" eliminado.`);
}
