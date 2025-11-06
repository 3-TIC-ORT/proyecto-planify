import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { signup } from "./usuarios.js";

startServer();

// -------------------- POST Events --------------------
subscribePOSTEvent("signup", signup);

// -------------------- ARRANCAR SERVIDOR --------------------
startServer(3000, true);

