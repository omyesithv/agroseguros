const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InversionSquema = new Schema({

    tipo_producto: 
    {
        type: String,
        require: true,
        max: 3000
    },

    volumen:
    {
        type: Number,
        require: true,
        max:300000000
    },

    descripcion: {
        type: String,
        require: true,
        max:100000
    },

    periodo_inversion:
    {
        type: String,
        requiere: true,
        max:30000
    },

    modo_pago: 
    {
        type: String,
        require: true,
        max:30000
    },

    banco:
    {
        type: String,
        require:true,
        max:30000


    },

    valor_seguro: 
    {
        type: Number,
        require: true,
        max:3000000

    },
    
    contacto:
    {
        type: Number,
        require: true,
        max:3000000



    }



});

module.exports = mongoose.model("inversion", InversionSquema);


// {
//     "tipo_producto":"Caña de Azucar",
//     "volumen":500000,
//     "descripcion":"Se nececita recursos para comprar abono",
//     "periodo_inversion":"6 meses",
//     "modo_pago":"Efectivo",
//     "banco":"BBVA",
//     "valor_seguro":50000,
//     "contacto":3216204043
//   }