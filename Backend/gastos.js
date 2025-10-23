import fs from "fs";

const RUTA_GASTOS = "backend/gastos.json";

// Crea el archivo si no existe
if (!fs.existsSync(RUTA_GASTOS)) {
  fs.writeFileSync(RUTA_GASTOS, "[]");
}

// guarda gastos/ingresos
export function guardarGastos(nombre, ingresos, gastos) {
  const data = JSON.parse(fs.readFileSync(RUTA_GASTOS, "utf-8"));

  let usuario = data.find(u => u.nombre === nombre);

  if (usuario) {
    usuario.ingresos = ingresos;
    usuario.gastos = gastos;
  } else {
    data.push({ nombre, ingresos, gastos });
  }

  fs.writeFileSync(RUTA_GASTOS, JSON.stringify(data, null, 2));
}

// obtiene gastos del usuario
export function obtenerGastos(nombre) {
  const data = JSON.parse(fs.readFileSync(RUTA_GASTOS, "utf-8"));
  const usuario = data.find(u => u.nombre === nombre);
  return usuario || null;
}
