import fs from "fs";

function cargarUsuarios() {
  return JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));
}

// SIGNUP
export function signup(nombre, mail, password) {
  let usuarios = cargarUsuarios();

  // validar si ya existe
  if (usuarios.find(u => u.mail === mail)) {
    return { success: false, message: "El mail ya está registrado" };
  }

  const nuevo = { nombre, mail, password };
  usuarios.push(nuevo);
  guardarUsuarios(usuarios);

  return { success: true, message: "Usuario creado con éxito", usuario: nuevo };
}

// LOGIN
export function login(mail, password) {
  let usuarios = cargarUsuarios();
  const user = usuarios.find(u => u.mail === mail && u.password === password);

  if (!user) {
    return { success: false, message: "Usuario o contraseña incorrectos" };
  }

  return { success: true, message: "Login exitoso", usuario: user };
}
