import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { login, signup } from "./usuarios.js";


subscribePOSTEvent("signup", signup);
subscribePOSTEvent("login", login)

startServer(3000, true);

