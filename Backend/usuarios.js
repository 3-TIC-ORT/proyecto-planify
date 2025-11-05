import fs from "fs";

export function signup(data) {
  const { nombre, contra } = data;
  const filePath = path.join(__dirname, 'backend', 'usuarios.json'); // Mejor usar path para rutas

  try {
    let usuarios = [];

    // Verificar si el archivo JSON existe
    if (fs.existsSync(filePath)) {
      // Si el archivo existe, lo leemos
      const dataFile = fs.readFileSync(filePath, 'utf-8');
      usuarios = JSON.parse(dataFile);
    } else {
      // Si el archivo no existe, lo creamos
      usuarios = [];
    }

    // Agregar el nuevo usuario
    usuarios.push({ nombre, contra });

    // Escribir el array de usuarios de nuevo al archivo en formato JSON
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));

    return { exito: true, mensaje: "Registro exitoso" };
  } catch (error) {
    console.error("Error al crear cuenta:", error);
    return { exito: false, mensaje: "Error al procesar el archivo" };
  }
}
