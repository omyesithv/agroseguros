const mongoose = require('mongoose');

const host = "127.0.0.1";
const port = "27017";
const db = "agro";


//localhost
exports.mongoConnect = () => {
    const miconexionmongo = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(miconexionmongo);
    mongoose.Promise = global.Promise;
    const dbconexion = mongoose.connection;
    dbconexion.on("Error Conexion",console.error.bind
    (console,"Error al Conectar a Mongodb"));
}


