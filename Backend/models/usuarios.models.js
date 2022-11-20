const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const miusuario = new Schema
({
    email:
    {
        type: String,
        require: true,
        max:30 
    },
    password:
    {
        type: String,
        require: true ,
        max:30
    },

    tipo_usuario:
    {
        type: String,
        require: true ,
        max:15
    },


});

module.exports = mongoose.model('usuario',miusuario);

