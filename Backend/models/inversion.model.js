const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InversioncionSquema = new Schema({

    tipo_producto: 
    {
        type: String,
        require: true,
        max: 30
    },

    volumen:
    {
        type: Number,
        require: true,
        max:50000000
    },

    descripcion: {
        type: String,
        require: true,
        max:100
    },

    periodo_inversion:
    {
        type: String,
        requiere: true,
        max:30
    },

    modo_pago: 
    {
        type: String,
        require: true,
        max:30
    },

    banco:
    {
        type: String,
        require:true,
        max:30


    },

    valor_seguro: 
    {
        type: Number,
        require: true,
        max:50000000

    }



});

module.exports = mongoose.model('inversion',InversioncionSquema);