import fs from "fs";
import { obtenerUsuarioActivo } from "./usuarios.js";

function cargarNotas() {
  if (!fs.existsSync("backend/notas.json")) fs.writeFileSync("backend/notas.json", "[]");
  return JSON.parse(fs.readFileSync("backend/notas.json", "UTF-8"));
}

function guardarNotas(notas) {
  fs.writeFileSync("backend/notas.json", JSON.stringify(notas, null, 2));
}

export function guardarNota(contenido) {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return { exito: false, mensaje: "No hay usuario activo" };

  const notas = cargarNotas();
  const nuevaNota = { usuario, contenido, fecha: new Date().toISOString() };
  notas.push(nuevaNota);
  guardarNotas(notas);

  return { exito: true, mensaje: "Nota guardada" };
}

export function obtenerNotas() {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return [];
  const notas = cargarNotas();
  return notas.filter(n => n.usuario === usuario);
}

export function borrarNota(indice) {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return { exito: false, mensaje: "No hay usuario activo" };

  const notas = cargarNotas();
  const notasUsuario = notas.filter(n => n.usuario === usuario);

  if (indice < 0 || indice >= notasUsuario.length) {
    return { exito: false, mensaje: "Índice inválido" };
  }

  // esto hace que se elimine la nota del usuario activo
  const notaAEliminar = notasUsuario[indice];
  const nuevasNotas = notas.filter(n => n !== notaAEliminar);

  guardarNotas(nuevasNotas);
  return { exito: true, mensaje: "Nota eliminada con éxito" };
}

