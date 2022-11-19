const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const miinversionista = new Schema ({

    nombre :
    {
        type:String,
        require:true,
        max:30
    },

    apellido: {

        type: String,
        require:true,
        max:30
    },

    email :
    {
        type:String,
        require:true,
        max:20
    },

    password :
    {
        type: String,
        require:true,
        max:25
    },

    rut: {
        type: String,
        require: true,
        max:20
    },

    estadofinan: {
        type: String,
        require: true,
        max:20
    },
});


module.exports = mongoose.model('inversionista', miinversionista);