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

import { crearEvento, mostrarEventos, editarEvento, eliminarEvento } from "./eventos.js";

usuarioActual = "mati"; // normalmente viene del login

crearEvento(
  usuarioActual,
  "Examen de Matemática",
  "examen",
  "muy importante",
  "Examen final del primer cuatrimestre"
);

crearEvento(
  usuarioActual,
  "Entrega TP de backend",
  "entrega",
  "poco importante",
  "Enviar el trabajo práctico al profesor antes del lunes"
);

mostrarEventos(usuarioActual);

editarEvento(
  usuarioActual,
  "Entrega TP de backend",
  "Entrega TP de backend 2",
  "entrega",
  "muy importante",
  "Corregir errores y reenviar antes del viernes"
);

eliminarEvento(usuarioActual, "Examen de Matemática");

mostrarEventos(usuarioActual);

import { crearEvento, mostrarEventos, editarEvento, eliminarEvento } from "./eventos.js";

usuarioActual = "mati"; // normalmente viene del login

crearEvento(
  usuarioActual,
  "Examen de Matemática",
  "examen",
  "muy importante",
  "Examen final del primer cuatrimestre"
);

crearEvento(
  usuarioActual,
  "Entrega TP de backend",
  "entrega",
  "poco importante",
  "Enviar el trabajo práctico al profesor antes del lunes"
);

mostrarEventos(usuarioActual);

editarEvento(
  usuarioActual,
  "Entrega TP de backend",
  "Entrega TP de backend 2",
  "entrega",
  "muy importante",
  "Corregir errores y reenviar antes del viernes"
);

eliminarEvento(usuarioActual, "Examen de Matemática");

mostrarEventos(usuarioActual);

