const Comprador = require('../models/comprador.model');

let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res) {

    let comprador = new Comprador({
        nombre: req.body.nombre
    })

    comprador.save(function(err){
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.gmsg = "Guardado con Exito"
        res.json(response)
    })
}


