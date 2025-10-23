import fs from "fs";

const RUTA_EVENTOS = "backend/eventos.json";

// Crea el archivo si no existe
if (!fs.existsSync(RUTA_EVENTOS)) {
  fs.writeFileSync(RUTA_EVENTOS, "[]");
}

// --- GUARDAR EVENTO ---
export function guardarEvento(nombreUsuario, nombreTarea, importancia, descripcion) {
  const eventos = JSON.parse(fs.readFileSync(RUTA_EVENTOS, "utf-8"));

  let usuarioEventos = eventos.find(e => e.nombre === nombreUsuario);

  if (!usuarioEventos) {
    usuarioEventos = { nombre: nombreUsuario, eventos: [] };
    eventos.push(usuarioEventos);
  }

  usuarioEventos.eventos.push({ nombreTarea, importancia, descripcion });

  fs.writeFileSync(RUTA_EVENTOS, JSON.stringify(eventos, null, 2));
}

// --- OBTENER EVENTOS ---
export function obtenerEventos(nombreUsuario) {
  const eventos = JSON.parse(fs.readFileSync(RUTA_EVENTOS, "utf-8"));
  const usuarioEventos = eventos.find(e => e.nombre === nombreUsuario);
  return usuarioEventos ? usuarioEventos.eventos : [];
}
