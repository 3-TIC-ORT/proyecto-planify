import fs from "fs";
import { obtenerUsuarioActivo } from "./usuarios.js";

function cargarEventos() {
  if (!fs.existsSync("backend/eventos.json")) fs.writeFileSync("backend/eventos.json", "[]");
  return JSON.parse(fs.readFileSync("backend/eventos.json", "UTF-8"));
}

function guardarEventos(eventos) {
  fs.writeFileSync("backend/eventos.json", JSON.stringify(eventos, null, 2));
}

export function guardarEvento(tipo, nombre, importancia, datos) {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return { exito: false, mensaje: "No hay usuario activo" };

  const eventos = cargarEventos();
  const nuevoEvento = { usuario, tipo, nombre, importancia, fechaCreacion: new Date().toISOString() };

  if (tipo === "reunion") {
    nuevoEvento.direccion = datos.direccion;
    nuevoEvento.dia = datos.dia;
    nuevoEvento.mes = datos.mes;
  } else if (tipo === "examen" || tipo === "entrega") {
    nuevoEvento.dia = datos.dia;
    nuevoEvento.mes = datos.mes;
  }

  eventos.push(nuevoEvento);
  guardarEventos(eventos);

  return { exito: true, mensaje: "Evento guardado" };
}

export function obtenerEventos() {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return [];
  const eventos = cargarEventos();
  return eventos.filter(e => e.usuario === usuario);
}
