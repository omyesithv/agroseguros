const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const inversionistasSchema = new Schema ({

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
        max:30
    },

    password :
    {
        type: Number,
        require:true,
        max:30
    },

    rut: {
        type: String,
        require: true,
        max:30
    },

    estadofinan: {
        type: String,
        require: true,
        max:30
    }
});


module.exports = mongoose.model("inversinistas", inversionistaSchema);