const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Se refiere a la oferta de un producto existente
const ProductoSquema = new Schema({

    producto:
    {
        type: String,
        require: true,
        max:40 
    },

    cantidad:
    {
        type: Number,
        require: true,
    },

    ubicacion: 
    {
         type: String,
         require: true,
         max:40

    },

    precio: 
    {
        type: Number,
        require: true,
        
    },

    agricultor: {
        type: String,
        require: true,
        max:40
    },
   
    
    telefono: {
        type: Number,
        require: true,
        max:40

    },



});

module.exports = mongoose.model('producto', ProductoSquema);