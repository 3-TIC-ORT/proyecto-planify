import fs from "fs";

const RUTA_GASTOS = "backend/gastos.json";

// Crea el archivo si no existe
if (!fs.existsSync(RUTA_GASTOS)) {
  fs.writeFileSync(RUTA_GASTOS, "[]");
}

// guarda un ingreso/gasto con fecha
export function guardarGastos(nombre, ingresos, gastos, fecha) {
  const data = JSON.parse(fs.readFileSync(RUTA_GASTOS, "utf-8"));

  let usuario = data.find(u => u.nombre === nombre);

  const movimiento = { ingresos, gastos, fecha };

  if (usuario) {
    // agrega el movimiento al historial del usuario
    if (!usuario.movimientos) usuario.movimientos = [];
    usuario.movimientos.push(movimiento);
  } else {
    data.push({ nombre, movimientos: [movimiento] });
  }

  fs.writeFileSync(RUTA_GASTOS, JSON.stringify(data, null, 2));
}

// obtiene todos los movimientos del usuario
export function obtenerGastos(nombre) {
  const data = JSON.parse(fs.readFileSync(RUTA_GASTOS, "utf-8"));
  const usuario = data.find(u => u.nombre === nombre);
  return usuario || null;
}

