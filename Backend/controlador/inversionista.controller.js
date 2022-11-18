const Inversionista = require("../models/inversionistas.model");

let response = {
    msg: "",
    exito:false
}

exports.create = function(req,res) {
let inversionista = new Inversionista({

    nombre: req.nody.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    rut: req.body.rut,
    estadofinan: req.body.estadofinan


})

inversionista.save(function(err){
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