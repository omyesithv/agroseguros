const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Se refiere a la oferta de un producto existente
const ProductoSquema = new Schema({

    producto:
    {
        type: String,
        require: true,
        max:50 
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
    correo:
    {
        type: String,
        require: true ,
        max:20
    },
    


});

module.exports = mongoose.model('producto', ProductoSquema);