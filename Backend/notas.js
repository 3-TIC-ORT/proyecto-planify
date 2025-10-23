import fs from "fs";

const RUTA_NOTAS = "backend/notas.json";

// Crea el archivo si no existe
if (!fs.existsSync(RUTA_NOTAS)) {
  fs.writeFileSync(RUTA_NOTAS, "[]");
}

// --- GUARDAR NOTA ---
export function guardarNota(nombreUsuario, titulo, contenido) {
  const notas = JSON.parse(fs.readFileSync(RUTA_NOTAS, "utf-8"));

  // Busca si ya hay notas del usuario
  let usuarioNotas = notas.find(n => n.nombre === nombreUsuario);

  if (!usuarioNotas) {
    usuarioNotas = { nombre: nombreUsuario, notas: [] };
    notas.push(usuarioNotas);
  }

  usuarioNotas.notas.push({ titulo, contenido });

  fs.writeFileSync(RUTA_NOTAS, JSON.stringify(notas, null, 2));
}

// --- OBTENER NOTAS ---
export function obtenerNotas(nombreUsuario) {
  const notas = JSON.parse(fs.readFileSync(RUTA_NOTAS, "utf-8"));
  const usuarioNotas = notas.find(n => n.nombre === nombreUsuario);
  return usuarioNotas ? usuarioNotas.notas : [];
}
