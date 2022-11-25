const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Se refiere a la oferta de un producto existente
const ProductoSquema = new Schema({

    producto:
    {
        type: String,
        require: true,
        max:30000000 
    },

    cantidad:
    {
        type: Number,
        require: true,
        max:3000000
    },

    ubicacion: 
    {
         type: String,
         require: true,
         max:3000000

    },

    precio: 
    {
        type: Number,
        require: true,
        max:30000000

    },

    agricultor: {
        type: String,
        require: true,
        max:30000000
    },
   
    
    telefono: {
        type: Number,
        require: true,
        max:30000000

    }



});

module.exports = mongoose.model('producto', ProductoSquema);