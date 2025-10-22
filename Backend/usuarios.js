import fs from "fs";

// --- Función para registrar usuario ---
function signup(nombre, mail, contra) {
  // Lee el JSON de usuarios (si no existe, crea uno vacío)
  let json = [];
  if (fs.existsSync("usuarios.json")) {
    let usuarios = fs.readFileSync("usuarios.json", "UTF-8");
    json = JSON.parse(usuarios);
  }

  // Verifica si el nombre de usuario ya existe
  let usuarioExistente = json.find(u => u.nombre === nombre);

  if (usuarioExistente) {
    console.log("❌ Error: ese nombre de usuario ya existe. Elija otro.");
    return; // Sale de la función
  }

  // Crea el nuevo usuario
  let usuarionuevo = { nombre, mail, password: contra };

  // Agrega y guarda
  json.push(usuarionuevo);
  let nuevoJson = JSON.stringify(json, null, 2);
  fs.writeFileSync("usuarios.json", nuevoJson);

  console.log("✅ Usuario registrado con éxito:", nombre);
}


// --- Función para iniciar sesión ---
function login(nombre, mail, contra) {
  // Lee el JSON
  if (!fs.existsSync("usuarios.json")) {
    console.log("No hay usuarios registrados.");
    return;
  }

  let usuarios_login = fs.readFileSync("usuarios.json", "UTF-8");
  let json_login = JSON.parse(usuarios_login);

  // Busca coincidencia
  let usuarioEncontrado = json_login.find(
    u => u.nombre === nombre && u.mail === mail && u.password === contra
  );

  if (usuarioEncontrado) {
    console.log("Bienvenido,", usuarioEncontrado.nombre);
  } else {
    console.log("Usuario o contraseña incorrectos.");
  }
}
