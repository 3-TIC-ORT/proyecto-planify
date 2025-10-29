import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { signup, login, logout, obtenerUsuarioActivo } from "./usuarios.js";
import { guardarNota, obtenerNotas } from "./notas.js";
import { guardarEvento, obtenerEventos } from "./eventos.js";
import { guardarGasto, obtenerGastos } from "./gastos.js";

// -------------------- GET Events --------------------
subscribeGETEvent("obtenerNotas", () => obtenerNotas());
subscribeGETEvent("obtenerEventos", () => obtenerEventos());
subscribeGETEvent("obtenerGastos", () => obtenerGastos());
subscribeGETEvent("usuarioActivo", () => obtenerUsuarioActivo());

// -------------------- POST Events --------------------
subscribePOSTEvent("signup", (data) => signup(data.nombre, data.contra));
subscribePOSTEvent("login", (data) => login(data.nombre, data.contra));
subscribePOSTEvent("logout", () => logout());
subscribePOSTEvent("guardarNota", (data) => guardarNota(data.contenido));
subscribePOSTEvent("guardarEvento", (data) => guardarEvento(data.nombre, data.tipo, data.importancia, data.extra));
subscribePOSTEvent("guardarGasto", (data) => guardarGasto(data.tipo, data.monto, data.fecha));

// -------------------- Start server --------------------
startServer(3000, true);
