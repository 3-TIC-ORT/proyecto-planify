import fs, { read, readFileSync } from "fs";

let usuarioActivo = null; // guarda el usuario que inició sesión

function cargarUsuarios() {
  if (!fs.existsSync("backend/usuarios.json")) {
    fs.writeFileSync("backend/usuarios.json", "[]");
  }
  return JSON.parse(fs.readFileSync("backend/usuarios.json", "UTF-8"));
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync("backend/usuarios.json", JSON.stringify(usuarios, null, 2));
}

export function signup(nombre, contra) {
  const usuarios = cargarUsuarios();
  const existe = usuarios.find(u => u.nombre === nombre);
  if (existe) return { exito: false, mensaje: "El nombre de usuario ya existe" };

  usuarios.push({ nombre, password: contra });
  guardarUsuarios(usuarios);
  return { exito: true, mensaje: "Usuario registrado con éxito" };
}

export function login(nombre, contra) {
  const usuarios = cargarUsuarios();
  const usuario = usuarios.find(u => u.nombre === nombre && u.password === contra);
  if (!usuario) return { exito: false, mensaje: "Usuario o contraseña incorrectos" };

  usuarioActivo = nombre; // guarda el usuario actual
  return { exito: true, mensaje: "Inicio de sesión exitoso", usuario: nombre };
  
}

export function obtenerUsuarioActivo() {
  return usuarioActivo;
}

export function logout() {
  usuarioActivo = null;
}

readFileSync("usuarios.json", "utf-8")