import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { login, signup } from "./usuarios.js";
import {guardarnota, borrarnota, cargarnota } from "./notas.js"
import { guardarevento } from "./eventos.js"



subscribePOSTEvent("signup", signup);
subscribePOSTEvent("login", login);
subscribePOSTEvent("guardarnota", guardarnota);
subscribePOSTEvent("borrarnota" , borrarnota);
subscribeGETEvent("cargarnota" , cargarnota);
subscribePOSTEvent("guardarevento", guardarevento);


startServer(3000, true);

