import { crearNota, mostrarNotas, editarNota, eliminarNota } from "./notas.js";

// Suponiendo que ya tenés el usuario logueado:
let usuarioActual = "mati"; // Esto normalmente vendría del login

// Crear algunas notas
crearNota(usuarioActual, "Comprar pan", "Ir a la panadería después del trabajo");
crearNota(usuarioActual, "Estudiar", "Repasar Node.js y Express");

// Mostrar notas del usuario
mostrarNotas(usuarioActual);

// Editar una nota
editarNota(usuarioActual, "Comprar pan", "Comprar pan y leche", "Ir al super a las 18hs");

// Eliminar una nota
eliminarNota(usuarioActual, "Estudiar");

// Mostrar de nuevo
mostrarNotas(usuarioActual);
