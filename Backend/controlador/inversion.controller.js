const Inversion = require("../models/inversion.model");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res)
{
    let inversion = new Inversion({
       tipo_producto: req.body.tipo_producto,
       volumen: req.body.volumen,
       descripcion: req.body.descripcion,
       periodo_inversion: req.body.descripcion,
       modo_pago: req.body.modo_pago,
       banco: req.body.banco,
       valor_seguro: req.body.valor_seguro,
       contacto: req.body.contacto
    })
   inversion.save(function(err)
    {
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Guardado con Exito"
        res.json(response)
    })              
}

exports.find = function(req,res)
{
    Inversion.find(function(err,inversion){
        res.json(inversion)
    })
}

exports.findOne = function(req,res)
{
    Inversion.findOne({_id : req.params.id},function(err,inversion){
        res.json(inversion)
    })
}



exports.update = function(req,res)
{
    let inversion= {

        tipo_producto: req.body.tipo_producto,
        volumen: req.body.volumen,
        descripcion: req.body.descripcion,
        periodo_inversion: req.body.descripcion,
        modo_pago: req.body.modo_pago,
        banco: req.body.banco,
        valor_seguro: req.body.valor_seguro,
        contacto: req.body.contacto
    }

    Inversion.findByIdAndUpdate(req.params.id,{$set :inversion},
        function(err){
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Modificar"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Modificado con Exito"
        res.json(response)
           
    })

}    

exports.remove = function(req,res)

{
    Inversion.remove({_id : req.params.id},function(err){
        if(err)
        {
           console.error(err),
           response.exito = false,
           response.msg = "Error al intentar Eliminar"
           res.json(response)
           return;
        }
    
        response.exito = true,
        response.msg = "Eliminado con Exito"
        res.json(response)
               
    })
    
}