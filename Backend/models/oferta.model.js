const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Se refiere a la oferta de un producto existente
const OfertaSquema = new Schema({

    producto:
    {
        type: String,
        require: true,
        max:30 
    },

    cantidad:
    {
        type: Number,
        require: true,
        max:30
    },

    ubicacion: 
    {
         type: String,
         require: true,
         max:30

    },

    precio: 
    {
        type: Number,
        require: true,
        max:30

    }



});

module.exports = mongoose.model('oferta', OfertaSquema);