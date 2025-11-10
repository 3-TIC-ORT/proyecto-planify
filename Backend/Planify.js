import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { login, signup } from "./usuarios.js";
import { guardarnota } from "./notas.js";


subscribePOSTEvent("signup", signup);
subscribePOSTEvent("login", login);
subscribePOSTEvent("guardarnota,", guardarnota);


startServer(3000, true);

