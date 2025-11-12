import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { login, signup } from "./usuarios.js";
import { borrarnota, guardarnota } from "./notas.js";


subscribePOSTEvent("signup", signup);
subscribePOSTEvent("login", login);
subscribePOSTEvent("guardarnota", guardarnota);
subscribePOSTEvent("borrarnota" , borrarnota);


startServer(3000, true);

