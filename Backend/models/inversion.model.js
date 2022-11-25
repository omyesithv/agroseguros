const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InversionSquema = new Schema({

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
       
    },

    descripcion: {
        type: String,
        require: true,
        max:60
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
        max:50
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
        
    },
    
    contacto:
    {
        type: Number,
        require: true,
        


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