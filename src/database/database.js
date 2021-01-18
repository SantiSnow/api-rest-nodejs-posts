import mongoose from 'mongoose';
import config from './../config';                 

//conexion a la base de datos
(async () =>{
    const db = await mongoose.connect(config.mongodburl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log("Conectado a la base de datos", db.connection.name);
})();
