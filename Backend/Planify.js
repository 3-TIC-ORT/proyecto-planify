import { subscribeGETEvent, subscribePOSTEvent, startServer } from "soquetic";
import { signup } from "./usuarios.js";

// -------------------- GET Events --------------------

// -------------------- POST Events --------------------
subscribePOSTEvent("signup", signup);

// -------------------- Start server --------------------
startServer(3000, true);
