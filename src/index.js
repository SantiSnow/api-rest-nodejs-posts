import express from "express";
import IndiceRutas from "./rutas/rutas";
import "./database/database";

//configuracion del server
const app = express();
app.set('port', process.env.PORT || 3000);


//rutas
app.use(IndiceRutas)


//inicio del servidor
app.listen(app.get('port'));
console.log("Servidor en el puerto", app.get('port'));

