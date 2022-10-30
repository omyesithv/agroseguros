const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const miagricultor = new Schema
({
    nombres:
    {
        type: String,
        require: true,
        max:40 
    },
    apellidos:
    {
        type: String,
        require: true ,
        max:40
    },
    correo:
    {
        type: String,
        require: true ,
        max:20
    },
    cedula:
    {
        type: String,
        require: true ,
        max:15
    },
    contraseña:
    {
        type: String,
        require: true ,
        max:20
    },
    matriculai:
    {
        type: String,
        require: true ,
        max:15
    },
    agremiacion:
    {
        type: String,
        require: true ,
        max:20
    },
    rut:
    {
        type: String,
        require: true ,
        max:20
    },
        
    
});

module.exports = mongoose.model('agricultor',miagricultor);
