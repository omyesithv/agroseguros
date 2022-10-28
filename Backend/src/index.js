const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const agricultorpost = require("./routes/agricultorRouter");
const database = require("./config/database");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api',agricultorpost);

//Routers
app.get("/",(req, res) =>{
  res.send("Bienvenidos al Backend..");
});


//Conexion Mongodb
//database.mongoConnect();

// //localhost
mongoose.connect("mongodb://localhost/prueba", function (err, res) {
  if (err) {
    console.log("ERROR: al conectar Base de Datos. " + err);
  }

app.listen(port, () => console.log('Servidor corriendo en el puerto',port))

});
