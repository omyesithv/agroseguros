const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const compradorSchema = new Schema({
    
    nombre: {
        type:String,
        require: true,
        max: 100

    },

    apellidos: {

        type: String,
        require: true,
        max:100

    },

    email: {
        type:String,
        require:true,
        max:100
    },

    password: {
        type:String,
        require:true,
        max:100
    },

    



})

module.exports = mongoose.model('comprador',compradorSchema);