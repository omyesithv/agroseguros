const Inversion = require("../models/inversion.model");

let response = {
    msg: "",
    exito:false
}

exports.create = function(req,res) {
let inversion = new Inversion({
    tipo_producto: req.body.tipo_producto,
    volumen: req.body.volumen,
    descripcion: req.body.descripcion,
    periodo_inversion: req.body.periodo_inversion,
    modo_pago: req.body.modo_pago,
    banco: req.body.banco,
    valor_seguro: req.body.valor_seguro

})

inversion.save(function(err){
    if(err) {
        console.log(err),
        response.exito = false,
        response.msg = "Error al guardar la inversión"
        res.json(response)
        return;

    }

    response.exito = true,
    response.msg = "La inversión se guardó correctamente"
    res.json(response)
})

}

exports.find = function(req,res){
    Inversion.find(function(err,inversion){
        res.json(inversion)

    })
}