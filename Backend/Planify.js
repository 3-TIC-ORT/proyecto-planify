import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { signup, login, logout, obtenerUsuarioActivo } from "./usuarios.js";
import { guardarNota, obtenerNotas, borrarNota} from "./notas.js";
import { guardarEvento, obtenerEventos } from "./eventos.js";
import { guardarDatos, cargarDatos } from "./gastos.js";

// -------------------- GET Events --------------------
subscribeGETEvent("obtenerNotas", () => obtenerNotas());
const usuario = obtenerUsuarioActivo();
const data = JSON.parse(fs.readFileSync("Backend/notas.js" ,"utf-8"));
return data.filter(nota => nota.usuario === usuario)

subscribeGETEvent("obtenerEventos", () => obtenerEventos());
const usuario = obtenerUsuarioActivo();
const data = JSON.parse(fs.readFileSync("Backend/eventos.js" ,"utf-8"));
return data.filter(evento => evento.usuario === usuario)

subscribeGETEvent("obtenerGastos", () => obtenerGastos());
const usuario = obtenerUsuarioActivo();
const data = JSON.parse(fs.readFileSync("Backend/gastos.js" ,"utf-8"));
return data.filter(gasto => gasto.usuario === usuario)
subscribeGETEvent("usuarioActivo", () => obtenerUsuarioActivo());

// -------------------- POST Events --------------------
subscribePOSTEvent("signup", (data) => signup(data.nombre, data.contra));

subscribePOSTEvent("login", (data) => {;
    console.log(`El nombre es ${data.nombre}`)
    console.log(`La contraseña es ${data.contra}`)
});
subscribePOSTEvent("logout", () => logout());
subscribePOSTEvent("guardarNota", (data) => guardarNota(data.contenido));
subscribePOSTEvent("guardarEvento", (data) => guardarEvento(data.nombre, data.tipo, data.importancia, data.extra));
subscribePOSTEvent("guardarGasto", (data) => guardarGasto(data.tipo, data.monto, data.fecha));
subscribePOSTEvent("borrarNota", (data) => borrarNota(data.indice))

// -------------------- Start server --------------------
startServer(3000, true);
