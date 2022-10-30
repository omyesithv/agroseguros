const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const miusuario = new Schema
({
    usuario:
    {
        type: String,
        require: true,
        max:30 
    },
    password:
    {
        type: String,
        require: true ,
        max:128
    },

});

module.exports = mongoose.model('usuarios',miusuario);

