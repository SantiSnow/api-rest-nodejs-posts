import express from "express";
import morgan from "morgan";
import IndiceRutas from "./rutas/rutas";
import "./database/database";

//configuracion del server
const app = express();
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//rutas
app.use(IndiceRutas)


//inicio del servidor
app.listen(app.get('port'));
console.log("Servidor en el puerto", app.get('port'));

