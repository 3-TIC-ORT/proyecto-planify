import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { signup } from "./usuarios.js";


subscribePOSTEvent("signup", signup);

startServer(3000, true);

