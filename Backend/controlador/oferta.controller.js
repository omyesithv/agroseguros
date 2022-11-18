const Oferta = require("../models/oferta.model");

let response = {
    msg: "",
    exito:false
}


exports.create = function(req,res) {
    let oferta = new Oferta({

        producto: req.body.producto,
        cantidad: req.body.cantidad,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio
    })
    
    oferta.save(function(err){
        if(error) {
            console.log(err),
            response.exito = false,
            response.msg = "Error al guardar la financiación"
            res.json(response)
            return;
    
        }
    
        response.exito = true,
        response.msg = "La financiaciónse guardó correctamente"
        res.json(response)
    })
    
}