import fs from "fs";
import { obtenerUsuarioActivo } from "./usuarios.js";


export function cargarDatos() {
  if (!fs.existsSync("backend/gastos.json")) fs.writeFileSync("backend/gastoss.json", "[]");
  return JSON.parse(fs.readFileSync("backend/gastos.json", "UTF-8"));
}

export function guardarDatos(datos) {
  fs.writeFileSync("backend/gastos.json", JSON.stringify(datos, null, 2));
}

export function guardarMovimiento(tipo, nombre, monto, fecha) {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return { exito: false, mensaje: "No hay usuario activo" };

  const datos = cargarDatos();
  const nuevoMovimiento = { usuario, tipo, nombre, monto, fecha };
  datos.push(nuevoMovimiento);
  guardarDatos(datos);

  return { exito: true, mensaje: "Movimiento guardado" };
}

export function obtenerMovimientos() {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) return [];
  const datos = cargarDatos();
  return datos.filter(d => d.usuario === usuario);
}
